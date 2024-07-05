import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StatusClientView from '../../../StatusClientView/StatusClientView';
import {getRandomImage} from '../../../../utils/imageUtils';
import { useLoading } from '../../../../context/LoadingContext ';
import Spinner from '../../../Spinner/Spinner';
import Error from '../../../Error/Error ';
import './viewClient.css'

function capitalize(str) {
  // Convert the string to lowercase first and then capitalize each word
  return str.toLowerCase().replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}
const ViewClient = () => {

  const {clientId} = useParams();
  const [client, setClient] = useState(null);
  const {isLoading, setIsLoading} = useLoading();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClient = async () => {
      setIsLoading(true);
      try{
          console.log("Fetching client");
          const response = await axios.get(`http://localhost:8080/api/clients/${clientId}`);
          if(response.status === 200){
              setClient(response.data);
              console.log(response.data);
          }else{
              console.error('Failed to fetch client', response.statusText);
          }
      }catch(error){
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          const errorMessage = error.response.data?.errorResponse?.errorMessage || 'Unknown error';
          console.error('Error response data:', error.response.data);
          console.error('Error response status:', error.response.status);
          console.error('Error response headers:', error.response.headers);
          setError(`Error: ${errorMessage}`);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Error request:', error.request);
          setError('Error: No response received from server');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error message:', error.message);
          setError(`Error: ${error.message}`);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchClient();
    console.log("Client retrived: " + client);
  }, []); // Run once on component mount

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Error message={error}/>;
  }


  return (
    <div className="containerCenterY viewClients">
      {client ? (
      <div className="card">
        <div className="card-header">
          <div className="header-box">
            <div className="avatar">
              <img src={getRandomImage(client.gender)} alt="Client Avatar" />
            </div>
            <div className="header-info">
              <div className="name">{client.firstName}</div>
              <div className="next-date"><span className="material-icons-sharp">calendar_month</span> Next date on {client.membershipNextDate}</div>
            </div>
          </div>
          <StatusClientView status={client.status}/>
        </div>

        <div className="card-content">
          <div className="content-row">
            <div className="content-section">
              <p>Personal Information</p>
              <div className="content-item">
                <div className="label">First Name:</div>
                <div className="detailValue">{client.firstName}</div>
              </div>
              <div className="content-item">
                <div className="label">Last Name:</div>
                <div className="detailValue">{client.lastName}</div>
              </div>

              <div className="content-item">
                <div className="label">Age:</div>
                <div className="detailValue">{client.age}</div>
              </div>
              <div className="content-item">
                <div className="label">Gender:</div>
                <div className="detailValue">{capitalize(client.gender)}</div>
              </div>

              <div className="content-item">
                <div className="label">Birthday:</div>
                <div className="detailValue">{client.birthday}</div>
              </div>
            </div>

            <div className="content-section">
              <p>Membership Details</p>
              <div className="content-item">
                <div className="label">Membership Type:</div>
                <div className="detailValue">{capitalize(client.membershipType)}</div>
              </div>
              <div className="content-item">
                <div className="label">Member since:</div>
                <div className="detailValue">{client.membershipSinceDate}</div>
              </div>
              <div className="content-item">
                <div className="label">Membership Next Date:</div>
                <div className="detailValue">{client.membershipNextDate}</div>
              </div>
            </div>
          </div>      
          

          {/* OPTIONAL */}
          <div className="content-row">
            <div className="content-section">              
              <p>Contact Information</p>
              <div className="content-item">
                <div className="label">Email:</div>
                <div className="detailValue">{client.email ? client.email : 'NA'}</div>
              </div>
              <div className="content-item">
                <div className="label">Phone:</div>
                <div className="detailValue">{client.phone}</div>
              </div>
              
            </div>

            <div className="content-section">
              <p></p>
              <div className="content-item">
                <div className="label">Emergency Contact</div>
                <div className="detailValue">{client.emergencyContact ? client.emergencyContact: 'NA'}</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
       ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}

export default ViewClient;
