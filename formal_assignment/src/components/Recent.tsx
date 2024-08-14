import React from 'react'
import Card from './Card';
import '../style/Recent.css'

const Recent: React.FC = () => {
    return (
        <div className="recent-container">
            <div className="title-text">Recent</div>
            <Card 
                title="logs" 
                type="logs" 
                topText="Logs/Time" 
                bottomText="Jan 2 9:19:00"
                                    
            />
        </div>
    )
}

export default Recent