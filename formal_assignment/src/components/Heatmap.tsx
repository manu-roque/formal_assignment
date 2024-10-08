import React, { useEffect, useState } from 'react';
import '../style/Heatmap.css';

interface DayData {
    date: string;
    level: number;
}

const generateRandomHeatmapData = (): DayData[] => {
    const data: DayData[] = [];
    for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (47 - i));
        const level = Math.floor(Math.random() * 5);
        data.push({
            date: date.toISOString().split('T')[0],
            level: level,
        });
    }
    return data;
};

const Heatmap: React.FC = () => {
    const [heatmapData, setHeatmapData] = useState<DayData[]>([]);

    useEffect(() => {
        const data = generateRandomHeatmapData();
        setHeatmapData(data);
    }, []);
    

    return (
        <div className="heatmap-calendar"
        >
            {heatmapData.map((day, index) => (
                <div
                    key={index}
                    className="heatmap-day"
                    data-level={day.level}
                    title={`${day.date}: Level ${day.level}`}
                ></div>
            ))}
        </div>
    )
}

export default Heatmap;
