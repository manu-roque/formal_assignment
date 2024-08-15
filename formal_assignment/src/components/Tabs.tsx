import React from 'react';
import '../style/Tabs.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const Tabs: React.FC = () => {
    const colors = ['#495361', '#4d6df8', '#2d17ca', '#495361', '#4d6df8', '#495361'];
    const defaultColor = 'white';

    const [divColors, setDivColors] = React.useState<string[]>(Array(6).fill(defaultColor));
    const [hover, setHover] = React.useState<number | null>(null);

    const handleClick = (index: number) => {
        const newColors = divColors.map((color, i) =>
            i === index ? colors[index] : defaultColor
        );


        setDivColors(newColors);
    };

    const handleMouseEnter = (index: number) => {
        setHover(index);
    };

    const handleMouseLeave = () => {
        setHover(null);
    };

    const getDivStyle = (index: number) => ({
        color: divColors[index] !== defaultColor ? 'white' : 'black',
        backgroundColor: hover === index && divColors[index] === defaultColor 
            ? 'lightgray' 
            : divColors[index],
    });

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <div className="container">
                <div className="tab-button" key={0} 
                    style={getDivStyle(0)} 
                    onClick={() => handleClick(0)}
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                >
                    All
                </div>
                <div className="tab-button" key={1} 
                    style={getDivStyle(1)} 
                    onClick={() => handleClick(1)}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                >
                    <StorageOutlinedIcon sx={{fontSize: 20}} />
                    &nbsp;Data    
                </div>
                <div className="tab-button" key={2} 
                    style={getDivStyle(2)} 
                    onClick={() => handleClick(2)}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                >
                    <LockOutlinedIcon sx={{fontSize: 15}}/>&nbsp;&nbsp;Security
                </div>
                <div className="tab-button" key={3} 
                    style={getDivStyle(3)} 
                    onClick={() => handleClick(3)}
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                >
                    <ExtensionOutlinedIcon sx={{fontSize: 20}} />&nbsp;Store
                </div>
                <div className="tab-button" key={4} 
                    style={getDivStyle(4)} 
                    onClick={() => handleClick(4)}
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={handleMouseLeave}
                >
                    <ConstructionOutlinedIcon sx={{fontSize: 20}}/>
                    &nbsp;Tools
                </div>
                <div className="tab-button" key={5} 
                    style={getDivStyle(5)} 
                    onClick={() => handleClick(5)}
                    onMouseEnter={() => handleMouseEnter(5)}
                    onMouseLeave={handleMouseLeave}
                >
                    <SettingsOutlinedIcon sx={{fontSize: 20}}/>
                    &nbsp;Settings
                </div>
            </div>
            <div className="tab-button" style={{ marginRight: '20px'}}>
                <SwapHorizIcon sx={{fontSize: 20}} />&nbsp;Tabs
            </div>
        </div>
    )
}

export default Tabs;
