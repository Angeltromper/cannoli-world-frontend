
import React, {useState} from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { FaCaretDown } from "react-icons/fa"
import './Dropdown.css';
const Dropdown = ({ item }) => {
    const [isOpen, setIsOpen] = useState (false);
    const [selectedItem, setSelectedItem] = useState (null);

    const handleMouseEnter = () => {
        setIsOpen (true);
    };

    const handleMouseLeave = () => {
        setIsOpen (false);
    };

    const handleOptionClick = (option) => {
        setSelectedItem (option);
        setIsOpen (false);
        console.log (`Selected option: ${ option }`);
    };

    return (
        <div className="dropdown-container"
             onMouseEnter={ handleMouseEnter }
             onMouseLeave={ handleMouseLeave }
        >

            <button className="dropdown-button">
                {selectedItem || 'Select'}&nbsp; &nbsp;<FontAwesomeIcon icon={FaCaretDown} />
            </button>
            { isOpen && (
                <ul className="dropdown-list">
                    { item.map ((item) => (
                        <li key={ item } onClick={ () => handleOptionClick (item) }>
                            { item }
                        </li>
                    )) }
                </ul>
            ) }
        </div>
    );
};

export default Dropdown;


