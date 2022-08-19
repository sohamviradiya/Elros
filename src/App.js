import "./style/style.css";
import React from "react";
import Project from "./components/Project";
import * as Script from "./script/script";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
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
  };

  removeProject = (id) => {
    this.setState({
      projects: this.state.projects.filter((project) => (project.id != id)),
      projectCount: this.state.projectCount - 1
    });
  };

  setProject = (id) => {
    this.setState({
      currentProject: this.state.projects.find((project) => (project.id == id))
    });
  };

  addTask = (project_id, task) => {
    this.setState({
      projects: this.state.projects.map((project) => ((project.id!=project_id)?(project):(project.addTask(task))))
    });
    console.log(this.state.projects);
  };

  removeTask = (project_id, task_id) => {
    this.setState({
      projects: this.state.projects.map((project) => ((project.id!=project_id)?(project):(project.removeTask(task_id))))
    });
    console.log(this.state.projects);
  };

  render() {

    return (
      <div className="container-fluid bg-dark">
        <Header />
        <div className="container-fluid text-center" style={{marginTop: "4rem"}}>
          <div className="row">
            <SideBar projectList={this.state.projects} add={this.addProject} remove={this.removeProject} set={this.setProject} />
            <Project project={this.state.currentProject} addTask={this.addTask} removeTask={this.removeTask} />
          </div>
        </div>
      </div>
    );
  }
};

export default App;
