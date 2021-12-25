import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Header from './components/header';
import Settings from './components/settings';
import Statistics from './components/statistics';
import './scss/global.scss';
import getColors from './helpers/getColors';

function render() {
  getColors()

  ReactDOM.render(
    <HashRouter>
      <Header />
      <Routes>    
        <Route path='/' element={<Dashboard />}/>
        <Route path='' element={<Dashboard />}/>
        <Route path='statistics' element={<Statistics />}/>
        <Route path='settings' element={<Settings />}/>
      </Routes>
    </HashRouter>,
  document.body);
}

render();
