import React from 'react';
import Main from './Main';
import Search from './components/Search';
import Recent from './components/Recent'
import Saved from './components/Saved';

const App: React.FC = () => {
  return (
    <Main>
      {/* make the card into a component so it can be reused around with props and all */}
      <Search />
      <Recent />
      <Saved />
    </Main>
  );
}

export default App;
