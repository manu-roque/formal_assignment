import React, { useState } from 'react';
import '../style/Search.css';

const Search: React.FC = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleFocus = () => {
        setShowModal(true)
        setIsFocused(true)
    };

    const handleBlur = () => {
        setIsFocused(false)
        setShowModal(false)
    }
    const handleOpen = () => {
        setShowModal(!showModal)
    }

    return (
        <div>
            <div className="search-bar-container" onClick={handleFocus}>
                <input 
                    type="text"
                    className={`search-bar ${isFocused ? 'focused' : ''}`}
                    placeholder="Search for Anything"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            <div className="modal-container" onMouseDown={(e) => e.preventDefault()}>
                {showModal && (
                        <div className="modal">
                        </div>
                )}
            </div>
        </div>
    );
};

export default Search;