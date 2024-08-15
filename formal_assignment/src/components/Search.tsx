import React, { useState } from 'react';
import Tabs from './Tabs';
import Results from './Results';
import '../style/Search.css';
import ImportExportIcon from '@mui/icons-material/ImportExport';

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
                    <>
                        <div className="overlay" onClick={handleBlur}/>
                        <div className="modal">
                            <div className="question-list-container">
                                <div className="question">How many times user X has made Y?</div>
                                <div className="question">How many times user X has made Y?</div>
                                <div className="question">How many times user X has made Y?</div>
                                <div className="question">How many times user X has made Y?</div>
                                <div className="question">How many times user X has made Y?</div>
                                <div className="question">How many times user X has made Y?</div>
                                <div className="question">How many times user X has made Y?</div>
                            </div>
                            <div className="tabs-container">
                                <Tabs />
                            </div>
                            <div className="results-container">
                                <Results />
                            </div>
                            <div className="bottom-modal-container">
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '5px',
                                    fontWeight: 'bold',
                                    color: 'grey'
                                    }}>
                                    <div className='move'>
                                        <ImportExportIcon sx={{color: 'gray'}} />
                                    </div>
                                    Move
                                </div>
                            <div className="open-close-container">
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '5px',
                                    fontWeight: 'bold',
                                    color: 'grey'
                                }}>
                                    <div className="open">
                                            <ImportExportIcon sx={{color: 'gray'}} />
                                    </div>
                                    Open
                                </div>
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '5px',
                                    fontWeight: 'bold',
                                    color: 'grey'
                                }}>
                                    <div className="close" onClick={handleBlur}>
                                        <ImportExportIcon sx={{color: 'gray'}} />
                                    </div>
                                    Close
                                </div>
                                </div>
                                </div>
                            </div>
                    </>

                )} 
            </div>
        </div>
    );
};

export default Search;