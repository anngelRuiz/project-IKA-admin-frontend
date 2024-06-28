import Reaect, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './clients.css';
import clientWomanImg from '../../../images/users-profile/client-woman.png';
import clientManImg from '../../../images/users-profile/client-man.png';
import axios from 'axios';
import ClientNotFound from './ClientNotFound/ClientNotFound';
import StatusClient from '../../StatusClient/StatusClient';

const Clients = () => {

    const [clients, setClients] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredClients, setFilteredClients] = useState(clients);
    const [showClearButton, setShowClearButton] = useState(false);

    const fetchClients = async () => {
        try{
            console.log("Fetching");
            const response = await axios.get('http://localhost:8080/api/clients');
            if(response.status === 200){
                setClients(response.data);
                setFilteredClients(response.data);
                console.log(response.data);
            }else{
                console.error('Failed to fetch clients', response.statusText);
            }
        }catch(error){
            console.error('Error during fetch Clients: ', error);
        }
    };

    useEffect(() => {
        fetchClients();
    }, []); // Run once on component mount
    
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

    return(
        <div className="containerCenterY clientsView">
                    <div className="containerClients">
                        <h2 className="clientsTitle">Climbers</h2>
                        <div className='clientsHeader'>
                            <div className="searchBox">
                                <span className="material-icons-sharp">search</span>
                                <input className="seachInput" ype="text" placeholder="Search climber" value={searchInput} onChange={handleSearch}/>
                                <button className={`clearInputButton ${showClearButton ? 'show' : ''}`} type="reset" aria-label="Clear search" title="Clear seach" onClick={clearInput}>x</button>
                            </div>
                            <Link className="button md addBtn" to="/addClient"><span className="material-icons-sharp">add</span></Link>
                        </div>
                        {filteredClients.length == 0 && searchInput.trim() !== ''? (<ClientNotFound/>) : (
                        <table cellspacing="0">
                            <thead>
                                <tr>
                                    {/* <th>ID Cient</th> */}
                                    <th>Photo</th>
                                    <th>Client</th>                            
                                    <th>Date</th>
                                    <th>Status</th>
                                    {/* <th></th>  */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredClients.map((client) => (
                                        <tr key={client.id}>
                                            <td className="client-photo">
                                                <img src={client.gender === 'Male' ? clientManImg: clientWomanImg}/>
                                            </td>
                                            <td>{client.firstName}</td>
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