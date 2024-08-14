import React from 'react';
import '../style/Tabs.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';

const Tabs: React.FC = () => {
    return (
        <div className="container">
            <div className="tab-button" id="all">All</div>
            <div className="tab-button">
                <StorageOutlinedIcon sx={{fontSize: 20}} />
                &nbsp;Data    
            </div>
            <div className="tab-button" id="security">
                <LockOutlinedIcon sx={{fontSize: 15}}/>&nbsp;&nbsp;Security
            </div>
            <div className="tab-button" id="store">
                <ExtensionOutlinedIcon sx={{fontSize: 20}} />&nbsp;Store
            </div>
            <div className="tab-button" id="tools">
                <ConstructionOutlinedIcon sx={{fontSize: 20}}/>
                &nbsp;Tools
            </div>
            <div className="tab-button" id="settings">
                <SettingsOutlinedIcon sx={{fontSize: 20}}/>
                &nbsp;Settings
            </div>
        </div>
    )
}

export default Tabs;
