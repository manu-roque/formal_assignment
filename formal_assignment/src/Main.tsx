import React, { ReactNode } from 'react';
import './style/Main.css';

interface MainProps {
    children: ReactNode;
}

const Main: React.FC<MainProps> = ({children}) => {
    return (
        <div className="main">
            {children}
        </div>
    );
}

export default Main