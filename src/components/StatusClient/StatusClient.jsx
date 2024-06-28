import './statusClient.css';

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
        case 'INACTIVE':
            statusClass = 'pending';//notify
            statusIcon = 'warning'
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
            </div>
        </div>
    );
}

export default StatusClient;