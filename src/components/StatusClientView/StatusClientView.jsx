import './statusClientView.css';

const StatusClientView = ({status}) => {
    let statusClass = '';
    let statusIcon = '';

    switch(status){
        case 'ACTIVE':
            statusClass = 'active';
            statusIcon = 'check'
            break;
        case 'PAY':
            statusClass = 'pay';
            statusIcon = 'payments'
            break;
        case 'EXPIRING':
            statusClass = 'expiring';
            statusIcon = 'warning'
            break;
        case 'INACTIVE':
            statusClass = 'inactive';
            statusIcon = 'person_off';
            break;        
        default:
            statusClass = 'unkown';
            statusIcon = 'no_accounts'
            break;
    }

    return (
        <div className={`status ${statusClass}`}>
            <span className="material-icons-sharp">{statusIcon}</span>
            <span>{status}</span>
        </div>
    );
}

export default StatusClientView;