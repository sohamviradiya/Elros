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
      projects: Script.ProjectRegistry.projects.concat([Script.ProjectRegistry.currentProject]),
      currentProject: Script.ProjectRegistry.currentProject,
      projectCount: 1
    };
  }

  addProject = (title) => {
    let project = new Script.Project(title, this.state.projectCount);
    this.setState({
      projects: this.state.projects.concat(project),
      projectCount: this.state.projectCount + 1
    })
  }

  removeProject = (id) => {
    this.setState({
      projects: this.state.projects.filter((project) => (project.id != id)),
      projectCount: this.state.projectCount - 1
    });
  }

  setProject = (id) => {
    this.setState({
      currentProject: this.state.projects.find((project) => (project.id == id))
    });
  }
  render() {

    return (
      <div>
        <Header />
        <div className="container-fluid text-center">
          <div className="row">
            <SideBar projectList={this.state.projects} add={this.addProject} remove={this.removeProject} set={this.setProject} />
            <Project project={this.state.currentProject} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default App;
