import React, { useState, ReactNode } from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarChart, BarPlot } from '@mui/x-charts/BarChart';
import Heatmap from './Heatmap';

import '../style/Card.css';

interface CardProps {
    title: string;
    type: string;
    topText: string;
    bottomText: string;
}
const Card: React.FC<CardProps> = ({title, type, topText, bottomText}: CardProps) => {

    const uData = [8000, 3000, 2000, 2780, 1890, 2390, 3490, 200, 2000, 3000, 2100, 200, 5000, 400];
    const xLabels = [
        'Page A',
        'Page B',
        'Page C',
        'Page D',
        'Page E',
        'Page F',
        'Page G',
        'Page H',
        'Page I',
        'Page J',
        'Page K',
        'Page L',
        'Page M',
        'Page N'
      ];

    const cardData = (type: string) => {
        if (type === 'logs') {
            return (
                <ChartContainer
                    width={400}
                    height={120}
                    margin={{left: 10, right: 10, top: 0, bottom: 0}}
                    series={[{color: '#7D9FFD', data: uData, label: 'uv', type: 'bar', id: 'uvId'}]}
                    xAxis={[{ 
                        scaleType: 'band', 
                        data: xLabels,
                    }]}
                > 
                    <BarPlot />
                </ChartContainer>
            )
        } else if (type === 'access') {
            return (
                <>
                    <Heatmap />
                </>
            )
        } else if (type === 'observe') {
            return (
                <div className="grey-container-squares">
                    <div className="grey-square">
                        <div style={{fontWeight: 'bold', position: 'relative', top: '15px'}}>Total queries</div>
                        <h1>78,513</h1>
                    </div>
                    <div className="grey-square">
                        <div style={{fontWeight: 'bold', position: 'relative', top: '15px'}}>Weekly trend</div>
                        <h1>250%</h1>
                    </div>
                </div>
            )
        } else if (type === 'sidecars') {
            return (
                <div className="grey-container-squares">
                    <div className="grey-square">
                        <div style={{fontWeight: 'bold', position: 'relative', top: '15px'}}>Total queries</div>
                        <h1>78,513</h1>
                    </div>
                    <div className="grey-square">
                        <div style={{fontWeight: 'bold', position: 'relative', top: '15px'}}>Weekly trend</div>
                        <h1>250%</h1>
                    </div>
                </div>
            )
        }
    }

    return (
            <div className="logs-container">
                <div className="logs-text">
                    <div>
                        <div className="title-text small">{title}</div>
                        <div style={{color: 'grey', fontSize: '12px'}}>Updated 15 minutes ago</div>
                    </div>
                    <div style={{ position: 'relative', color: 'grey', fontSize: '12px', bottom: '20px'}}>12 New Logs Since Update</div>
                </div>
                <div className="logs-graph">
                    <div style={{marginBottom: '0px',  fontWeight: 'bold', fontSize:"12px", marginTop: '20px', marginLeft: '10px'}} >{topText}</div>
                    {cardData(type)}
                    <div style={{fontWeight: 'bold', color: 'grey', fontSize:"12px", marginTop: '10px', marginLeft: '10px'}}>{bottomText}</div>
                </div>
            </div>
    )
}

export default Card;