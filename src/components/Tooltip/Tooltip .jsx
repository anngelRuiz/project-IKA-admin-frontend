import './tooltip.css';

const Tooltip = ({statusText}) => {
    return (
        <span class="tooltiptext">{statusText}</span>
    );
}

export default Tooltip;