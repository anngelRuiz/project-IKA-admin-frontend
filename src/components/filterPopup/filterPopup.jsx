import './filterPopup.css';
import { useEffect, useRef } from 'react';


const FilterPopup = ({isFilterOpen, setIsFilterOpen, selectedStatusFilters, setSelectedStatusFilters }) =>{
    const boxRef = useRef(null);

    const handleClickOutside = (event) => {
        if (boxRef.current && !boxRef.current.contains(event.target)) {
            setIsFilterOpen(false);
        }
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedStatusFilters([...selectedStatusFilters, value]);
        } else {
            setSelectedStatusFilters(selectedStatusFilters.filter(status => status !== value));
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return(
        <div className={`filterPopupBox ${isFilterOpen ? 'open' : ''}`} ref={boxRef}>
            
            <div className="filterHeader">
                <span className="material-icons-sharp">filter_list</span><p>Filters</p>
            </div>

            <div className="filterBody">
                <div className='filter'>
                    <p>Status</p>

                    <div className='filterOptions'>
                        <div class="checkbox-group">
                            <input type="checkbox" id="active" name="status" value="ACTIVE" 
                                checked={selectedStatusFilters.includes("ACTIVE")}
                                onChange={handleCheckboxChange} 
                            />
                            <label for="active" class="active">ACTIVE</label>
                        </div>

                        <div class="checkbox-group">
                            <input type="checkbox" id="pay" name="status" value="PAY" 
                                checked={selectedStatusFilters.includes("PAY")}
                                onChange={handleCheckboxChange} 
                            />
                            <label for="pay" class="pay">PAY</label>
                        </div>

                        <div class="checkbox-group">
                            <input type="checkbox" id="inactive" name="status" value="INACTIVE" 
                                checked={selectedStatusFilters.includes("INACTIVE")}
                                onChange={handleCheckboxChange} 
                            />
                            <label for="inactive" class="inactive">INACTIVE</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterPopup;