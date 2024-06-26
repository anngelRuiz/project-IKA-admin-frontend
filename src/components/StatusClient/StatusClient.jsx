import './statusClient.css';
import Tooltip from '../Tooltip/Tooltip ';

const StatusClient = ({status}) => {
    let statusClass = '';
    let statusIcon = '';

    switch(status){
        case 'ACTIVE':
            statusClass = 'active';
            statusIcon = 'check'
            break;
        case 'PAY':
            statusClass = 'pay';
            statusIcon = 'close'
            break;
        case 'EXPIRING':
            statusClass = 'expiring';
            statusIcon = 'warning'
            break;
        case 'INACTIVE':
            statusClass = 'inactive';
            statusIcon = 'person_off'
            break;       
        default:
            statusClass = 'unkown';
            statusIcon = 'no_accounts'
            break;
    }

    return (
        <div className="statusBox">
            <div className={`status ${statusClass}`}>
                <span className="material-icons-sharp">{statusIcon}</span>
                <Tooltip statusText={status}/>
            </div>
        </div>
    );
}

export default StatusClient;