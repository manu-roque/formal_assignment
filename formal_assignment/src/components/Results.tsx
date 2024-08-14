import React, { useEffect } from 'react';
import '../style/Results.css';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';

const Results: React.FC = () => {
    const [color, setColor] = React.useState('lightskyblue');


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
            title: 'ETL',
            description: 'description'
        },
        {
            section: 'security',
            icon: 'folder',
            title: 'ETL',
            description: 'description'
        },
        {
            section: 'security',
            icon: 'folder',
            title: 'ETL',
            description: 'description'
        },
        {
            section: 'security',
            icon: 'folder',
            title: 'ETL',
            description: 'description'
        },
    ]



    const Section = (section: string) => {

        const filteredData = dataArray.filter(item => item["section"] === section);
    


        return (
            <>
            {filteredData.map((item, index) => (
                <div className="content">
                    <div style={{ width: '300px', display: 'flex'}}>
                        <div className="icon-square">
                            
                            <FolderOpenOutlinedIcon
                            sx={{fontSize: '20px', color: 'white'}}
                            />
                        </div>
                        <div className="result-title">{item.title}</div>
                        <div className="result-description">{item.description}</div>
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
                {Section('data')}
                <br/>
                <div className="section-title">SECURITY</div>
                {Section('security')}
            </div>
        </div>     
    )
}

export default Results;