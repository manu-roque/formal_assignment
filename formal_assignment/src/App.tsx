import React from 'react';
import Main from './Main';
import Search from './components/Search';
import Recent from './components/Recent'

const App: React.FC = () => {
  return (
    <Main>
      <Search />
      <Recent />
    </Main>
  );
}

export default App;
