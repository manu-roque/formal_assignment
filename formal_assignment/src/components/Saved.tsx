import React from 'react'
import Card from './Card';
import '../style/Saved.css'
import Carousel from './Carousel'



const Saved: React.FC = () => {
    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);



    return (
            <div className="saved-container">
                <div className="title-text">Saved</div>
                        <div className="saved-card-container">
                            <Carousel>
                                <Card title="Access" type="logs" />
                                <Card title="Access" type="logs" />
                                <Card title="Access" type="logs" />
                                <Card title="Access" type="logs" />
                            </Carousel>
                        </div>
            </div>
    );
}

export default Saved