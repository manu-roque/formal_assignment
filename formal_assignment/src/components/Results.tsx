import React from 'react';
import '../style/Results.css';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import UpgradeIcon from '@mui/icons-material/Upgrade';

const Results: React.FC = () => {
    const blue = '#4d6df8';
    const purple = '#2d17ca';
    const black = '#495361';
    const tools = '#7079e5';

    const dataArray = [
        {
            section: 'data',
            icon: 'folder',
            title: 'Catalog',
            description: 'description'
        },
        {
            section: 'data',
            icon: 'eye',
            title: 'Observability',
            description: 'description'
        },
        {
            section: 'data',
            icon: 'tree',
            title: 'Lineage',
            description: 'description'
        },
        {
            section: 'data',
            icon: 'arrows',
            title: 'ETL',
            description: 'description'
        },
        {
            section: 'security',
            icon: 'folder',
            title: 'Access',
            description: 'description'
        },
        {
            section: 'security',
            icon: 'folder',
            title: 'Logs',
            description: 'description'
        },
        {
            section: 'security',
            icon: 'folder',
            title: 'Discovery',
            description: 'description'
        },
        {
            section: 'security',
            icon: 'folder',
            title: 'Policies',
            description: 'description'
        },
        {
            section: 'security',
            icon: 'folder',
            title: 'Compliance',
            description: 'description'
        },
        {
            section: 'store',
            icon: 'folder',
            title: 'AWS',
            description: 'description'
        },
        {
            section: 'store',
            icon: 'folder',
            title: 'Datadog',
            description: 'description'
        },
        {
            section: 'store',
            icon: 'folder',
            title: 'Compliance',
            description: 'description'
        },

    ]



    const Section = (section: string, color: string) => {
        const filteredData = dataArray.filter(item => item["section"] === section);

        return (
            <>
            {filteredData.map((item, index) => (
                <div className="content">
                    <div style={{ width: '300px', display: 'flex'}}>
                        <div className="icon-square" style={{ backgroundColor: color}}>
                            <FolderOpenOutlinedIcon
                            sx={{fontSize: '20px', color: 'white'}}
                            />
                        </div>
                        <div className="result-title">{item.title}</div>
                        <div className="result-description">{item.description}</div>
                    </div>
                    <div className='side-button'>
                        ⌥
                        <UpgradeIcon sx={{color: 'grey'}} />
                        {item.title[0]}
                    </div>
                </div>
            ))}
            </>
        )
    }

    return (
        <div className="results">
            <div className="section">
                <div className="section-title">DATA</div>
                {Section('data', blue)}
                <br/>
                <div className="section-title">SECURITY</div>
                {Section('security', purple)}
                <br/>
                <div className="section-title">STORE</div>
                {Section('store', black)}
            </div>
        </div>     
    )
}

export default Results;