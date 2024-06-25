import { Link } from 'react-router-dom';
import pageNotFoundImg from "../../images/page_not_found.svg";
import './notFound.css'

const NotFound = () => {
    return (
        <div className='containerCenter notFoundView'>            
            <img src={pageNotFoundImg} alt="404 Page Not Found"/>
            <p>Whoops, we couldn't find the page you are looking for</p>

            <Link className="button lg primaryG m2" to="/clients">Back to Home Page</Link>
        </div>
    );
}

export default NotFound;