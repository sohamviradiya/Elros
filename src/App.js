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
        data: Script.ProjectRegistry
      };
    }
    render() {
      const { projects,currentProject,addProject,removeProject} = this.state.data; 
      return (
        <div>
          <Header />
          <SideBar projectList={projects} current={currentProject} add={addProject} remove={removeProject}/>
          <div>App</div>
          <Project />
          <Footer />
        </div>
      );
    }
  };

export default App;
