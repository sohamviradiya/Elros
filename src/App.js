import './style/style.css';
import React from 'react';
import Project from './components/Project';
import * as Script from './script/script';
import Header from './components/Header';
import Footer from './components/Footer';
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        current_project: null,
        projects: []
      };
    }
    render() {
      return (
        <div>
          <Header/>
          <div>App</div>
          <Project />
          <Footer />
        </div>
      );
    }
  };

export default App;
