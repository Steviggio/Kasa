import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom'

import './App.css';

import Banner from './Banner'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <section>

            </section>
            <nav>
              <ul>
                <li><Link to='./Banner'>Banner</Link></li>

              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path='./Banner' element={<Banner/>} />
            </Routes>
          </main>
        </div>
      </Router >
    );
  }
}

export default App;