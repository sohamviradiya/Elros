import '../style/style.css';
import React from 'react';
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectInput: ''
    };
  }

  projectCard = (project) => {
    return (
      <div className="btn-group my-2" role="group" key={project.id}>
        <button type="button" className="btn btn-info fs-6 w-75" onClick={() => { this.props.set(project.id) }}>{project.title}</button>
        <button type="button" className="btn btn-danger" onClick={() => { this.props.remove(project.id) }}>X</button>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      projectInput: e.target.value
    });
  };

  render() {
    const { projectInput } = this.state;
    const { projectList } = this.props;
    return (
      <div className="col bg-dark text-bg-dark min-vh-100 p-4 " style={{maxWidth: '20vw'}}>
        <div className="d-flex flex-column justify-content-between py-2">{projectList.map((project) => (this.projectCard(project)))}</div>
        <div className="input-group mt-3 border-3 border-primary border-top py-3">
          <input type="text" className="form-control" id="project-input" onChange={this.handleChange} value={projectInput} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
          <button className="btn btn-success" type="button" onClick={() => { this.props.add(this.state.projectInput) }}>+</button>
        </div>
      </div>
    );
  }
};

export default SideBar;