import React, { useState } from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarChart, BarPlot } from '@mui/x-charts/BarChart';
import '../style/Recent.css';

const Recent: React.FC = () => {
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

    const minVal = Math.min(...uData);
    const maxVal = Math.max(...uData);

    const barColors = uData.map((val) => {
        if (val === minVal) {
          return "red";
        } else if (val === maxVal) {
          return "green";
        } else {
          return null; // non-max and non-min values take default color of series
        }
      });


    return (
        <div className="recent-container">
            <div className="title-text">Recent</div>
            <div className="logs-container">
                <div className="logs-text">
                    <div>
                        <div className="title-text small">Logs</div>
                        <div>Updated 15 mins ago</div>
                    </div>
                    <div>12 new logs</div>
                </div>
                <div className="logs-graph">
                    <div style={{marginBottom: '0px',fontWeight: 'bold', fontSize:"12px", marginTop: '20px', marginLeft: '10px'}} >Logs/time</div>
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
                    <div style={{fontWeight: 'bold', fontSize:"12px", marginTop: '10px', marginLeft: '10px'}}>Jan 2, 09:18:00</div>
                </div>
            </div>
        </div>
    )
}

export default Recent;