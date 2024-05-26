import Reaect, {useState, useEffect} from 'react';
import './clients.css';
import clientWomanImg from '../../../images/users-profile/client-woman.png';
import clientManImg from '../../../images/users-profile/client-man.png';
import axios from 'axios';
import ClientNotFound from './ClientNotFound/ClientNotFound';
import AddClient from './AddClient/AddClient';

const Clients = () => {

    const [showAddClient, setShowAddClient] = useState(false);
    const [clients, setClients] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredClients, setFilteredClients] = useState(clients);
    const [showClearButton, setShowClearButton] = useState(false);

    useEffect(() => {
        const fetchClients = async () => {
            try{
                const response = await axios.get('http://localhost:8080/clients/');
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

    const toggleAddClient = () => {
        console.log("showAddClient");
        setShowAddClient(!showAddClient);
    };
    
    const clearInput = () => {
        setSearchInput('');
        setFilteredClients(clients);
        setShowClearButton(false);
    };

    return(
        <>
            {showAddClient ? (
                <AddClient onCancel={toggleAddClient}/>
            ) : (
                <div className="recent-orders">
                        <h2 className="clientsTitle">Climbers</h2>
                        <div className='clientsHeader'>
                            <div className="searchBox">
                                <span className="material-icons-sharp">search</span>
                                <input className="seachInput" ype="text" placeholder="Search climber" value={searchInput} onChange={handleSearch}/>
                                <button className={`clearInputButton ${showClearButton ? 'show' : ''}`} type="reset" aria-label="Clear search" title="Clear seach" onClick={clearInput}>x</button>
                            </div>
                            
                            <button className="add" aria-label="Add Button" title="Add Client" onClick={toggleAddClient}><span className="material-icons-sharp">add</span></button>
                        </div>
                        {filteredClients.length == 0 && searchInput.trim() !== ''? (<ClientNotFound/>) : (
                        <table>
                            <thead>
                                <tr>
                                    {/* <th>ID Cient</th> */}
                                    <th className="hidePhoto">Photo</th>
                                    <th>Client</th>                            
                                    <th className="hideField">Date</th>
                                    <th>Status</th>
                                    {/* <th></th>  */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredClients.map((client) => (
                                        <tr key={client.id}>
                                            <td className="client-photo hidePhoto">
                                                <img src={client.gender === 'M' ? clientManImg: clientWomanImg}/>
                                            </td>
                                            <td>{client.firstName}</td>
                                            <td className="hideField">{client.membershipExpiryDate}</td>
                                            <td><div className="statusBox"><div className={`status ${client.membershipValid ? 'good': 'pay'}`}>{client.membershipValid ? <span className="material-icons-sharp">check</span>: <span className="material-icons-sharp">close</span>}</div></div></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        )}
                </div>
            )}
        </>
    );
};

export default Clients;