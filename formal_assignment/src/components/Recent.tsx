import React from 'react'
import Card from './Card';
import '../style/Recent.css'

const Recent: React.FC = () => {
    return (
        <div className="recent-container">
            <div className="title-text">Recent</div>
            <Card title="logs" type="logs" />
        </div>
    )
}

export default Recent