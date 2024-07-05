import { Link } from 'react-router-dom';
import pageUnderConstructionImg from "../../images/page-under-contruction.svg";
import './underConstruction.css'

const UnderConstruction = () => {
    return (
        <div className='containerCenter underConstructionView'>            
            <img src={pageUnderConstructionImg} alt="Under Construction"/>
            {/* <p>This page is under construction</p> */}
            <p>Sorry for the dust! This page is under construction. 🛠️ Check back soon!✨</p>


            <Link className="button lg primaryG m2" to="/clients">Back to Home Page</Link>
        </div>
    );
}

export default UnderConstruction;