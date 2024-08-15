import React from 'react';
import Main from './Main';
import Search from './components/Search';
import Recent from './components/Recent'
import Saved from './components/Saved';

const App: React.FC = () => {
  return (
    <Main>
      <Search />
      <Recent />
      <Saved />
    </Main>
  );
}

export default App;
