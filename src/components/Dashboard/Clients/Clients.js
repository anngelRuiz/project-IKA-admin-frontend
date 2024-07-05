import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './clients.css';
import axios from 'axios';
import {getRandomImage} from '../../../utils/imageUtils';
import ClientNotFound from './ClientNotFound/ClientNotFound';
import FilterPopup from '../../filterPopup/filterPopup';
import StatusClient from '../../StatusClient/StatusClient';

const Clients = () => {

    const [clients, setClients] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredClients, setFilteredClients] = useState(clients);
    const [showClearButton, setShowClearButton] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const [selectedStatusFilters, setSelectedStatusFilters] = useState([]);

    const navigate = useNavigate ();

    const fetchClients = async () => {
        try{
            const response = await axios.get('http://localhost:8080/api/clients');
            if(response.status === 200){
                setClients(response.data);
                setFilteredClients(response.data);
                // console.log(response.data);
            }else{
                console.error('Failed to fetch clients', response.statusText);
            }
        }catch(error){
            console.error('Error during fetch Clients: ', error);
        }
    };

    const handleClickClient = (id) => {
        navigate(`/clients/${id}`);
    }
    
    const handleSearch = (e) => {
        e.preventDefault();
        const searchVal = e.target.value;
        setSearchInput(searchVal);

        const filteredClients = searchVal ? clients.filter((client) => client.firstName.toLowerCase().includes(searchVal.toLowerCase())): clients;

        setFilteredClients(filteredClients);
        setShowClearButton(searchVal.trim() !== '');
    };
    
    const clearInput = () => {
        setSearchInput('');
        setFilteredClients(clients);
        setShowClearButton(false);
    };

    const handleFilterPopup = () =>{
        setIsFilterOpen(!isFilterOpen);
    };

    // Fetch clients (called once)
    useEffect(() => {
        fetchClients();
    }, []); // Called once on mount

    useEffect(() => {
        
        console.log('Filter status selected:' + selectedStatusFilters);
        if (selectedStatusFilters.length > 0) {
            const filtered = clients.filter(client => selectedStatusFilters.includes(client.status));


            setFilteredClients(filtered);
            console.log('filtered Clients by status: ' + selectedStatusFilters + ' lenght: ' + filtered);
        } else {
            setFilteredClients(clients);
        }

        //fetchClients();
        console.log('Current state2: ' + isFilterOpen);
    }, [selectedStatusFilters]);

    return(
        <div className="containerCenterY clientsView">
                    <div className="containerClients">
                        <h2 className="clientsTitle">Climbers</h2>
                        <div className='clientsHeader'>
                            <div className='optionsHeader'>
                                <div className="searchBox">
                                    <span className="material-icons-sharp">search</span>
                                    <input className="seachInput" ype="text" placeholder="Search climber" value={searchInput} onChange={handleSearch}/>
                                    <button className={`clearInputButton ${showClearButton ? 'show' : ''}`} type="reset" aria-label="Clear search" title="Clear seach" onClick={clearInput}>x</button>
                                </div>

                                <div className='filterBox'>
                                    <button className="filter" onClick={handleFilterPopup}><span className="material-icons-sharp">tune</span></button>                                    
                                </div>
                                
                            </div>

                            <Link className="button md addBtn" to="/addClient"><span className="material-icons-sharp">add</span></Link>

                        </div>

                        <FilterPopup 
                            isFilterOpen={isFilterOpen} 
                            setIsFilterOpen={setIsFilterOpen} 
                            selectedStatusFilters={selectedStatusFilters}
                            setSelectedStatusFilters={setSelectedStatusFilters} 
                        />

                        {filteredClients.length == 0 && searchInput.trim() !== ''? (<ClientNotFound/>) : (
                        <table cellspacing="0">
                            <thead>
                                <tr>
                                    {/* <th>ID Cient</th> */}
                                    <th>Photo</th>
                                    {/* <th>Client</th> */}
                                    {/* <th>First Name</th>  */}
                                    {/* <th>Last Name</th> */}
                                    <th>Full name</th>
                                    <th>Next Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredClients.map((client) => (
                                        <tr key={client.id} onClick={() => handleClickClient(client.id)}>
                                            <td className="client-photo">
                                                <img src={getRandomImage(client.gender)} alt="Client Avatar" />
                                            </td>
                                            {/* <td>{client.firstName}</td> */}
                                            {/* <td>{client.lastName}</td> */}
                                            <td>{client.fullName}</td>
                                            <td>{client.membershipNextDate}</td>
                                            <td>
                                                <StatusClient status={client.status}></StatusClient>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        )}
                    </div>
                </div>
    );
};

export default Clients;