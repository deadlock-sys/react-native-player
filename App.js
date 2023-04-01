import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MusicPlayerHome from './components/MusicPlayerHome';
import MusicPlayerAlbum from './components/MusicPlayerAlbum';
import MusicPlayerFavorites from './components/MusicPlayerFavorites';
import MusicPlayerSettings from './components/MusicPlayerSettings';
import MusicPlayerProfile from './components/MusicPlayerProfile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MusicPlayerHome />
        </Route>
        <Route path="/album/:albumId">
          <MusicPlayerAlbum />
        </Route>
        <Route path="/favorites">
          <MusicPlayerFavorites />
        </Route>
        <Route path="/settings">
          <MusicPlayerSettings />
        </Route>
        <Route path="/profile">
          <MusicPlayerProfile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
