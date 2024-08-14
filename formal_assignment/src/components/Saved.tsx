import React from 'react'
import Card from './Card';
import '../style/Saved.css'



const Saved: React.FC = () => {
    return (
            <div className="saved-container">
                <div className="title-text">Saved</div>
                <div className="saved-card-container">
                    <Card 
                        title="Access" 
                        type="access" 
                        topText="Access over 30 days" 
                        bottomText="Total Views 3,000"
                    />
                    <Card 
                        title="Ovservability" 
                        type="observe" 
                        topText="Queries in database" 
                        bottomText="Jan 2 9:19:00"
                    />
                    <Card 
                        title="Sidecars" 
                        type="sidecars" 
                        topText="Queries in database" 
                        bottomText="Jan 2 9:19:00"
                    />
                    <Card 
                        title="Logs" 
                        type="logs" 
                        topText="Logs/Time" 
                        bottomText="Jan 2 9:19:00" 
                    />
                </div>
            </div>
    );
}

export default Saved