import './style/style.css';
import React from 'react';
import Project from './components/Project';
import * as Script from './script/script';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        script: Script.ProjectRegistry
      };
    }
    render() {
      return (
        <div>
          <Header />
          
          <div>App</div>
          <Project />
          <Footer />
        </div>
      );
    }
  };

export default App;
