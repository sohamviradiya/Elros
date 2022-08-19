import "../style/style.css";
import React from "react";
import { Task } from "../script/script";
class Project extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               taskinput: new Task("", "", "2022-08-20", "2022-12-31", 0)
          };
     }
     taskCard = (task) => {
          return (
               <div className={`card text-bg-${task.shade()} mb-3`} style={{ maxWidth: "15rem" }} key={task.id}>
                    <div className="card-header d-flex flex-row p-2 justify-content-between align-items-center">
                         <label htmlFor={`${task.id} remove`}>{this.props.project.title}</label>
                         <button className="btn btn-danger" id={`${task.id} remove`} onClick={(e) => {this.removeTask(e,task.id)}}> remove</button>
                    </div>
                    <div className="card-body">
                         <h5 className="card-title">{task.title}</h5>
                         <div className="card-text">
                              <p>{task.description}</p>
                              <div>Due Date: {task.dueDate.toString().slice(0, 15)}</div>
                              <div>Set Date: {task.setDate.toString().slice(0, 15)}</div>
                         </div>
                    </div>
               </div>
          );
     }

     addTask = (e) => {
          e.preventDefault();
          this.props.addTask(this.props.project.id, this.state.taskinput);
     };

     removeTask = (e, id) => {
          e.preventDefault();
          this.props.removeTask(this.props.project.id, id);
     };

     render() {
          const { tasks, title } = this.props.project;
          return (
               <div className="col bg-primary ms-5 p-3">
                    <h1 className="container-fluid  p-2 text-bg-primary">{title}</h1>
                    <div className="container">
                         {tasks.map((task) => (this.taskCard(task)))}

                         <form className="w-50 bg-dark p-2 rounded-2" style={{ maxWidth: "15rem" }}>

                              <div className="input-group mb-3">
                                   <span className="input-group-text" id="task-title">Title:</span>
                                   <input type="text" className="form-control" placeholder="Enter Task Title" onChange={(e) => { this.setState({ taskinput: { ...this.state.taskinput, title: e.target.value } }) }} aria-label="Username" aria-describedby="task-title"></input>
                              </div>
                              <div className="input-group mb-3">
                                   <span className="input-group-text">Description:</span>
                                   <textarea className="form-control" onChange={(e) => { this.setState({ taskinput: { ...this.state.taskinput, description: e.target.value } }) }}></textarea>
                              </div>
                              <div className="input-group mb-3">
                                   <span className="input-group-text" htmlFor="priority">Set Priority:</span>
                                   <select className="form-select form-select-sm" defaultValue={0} onChange={(e) => { this.setState({ taskinput: { ...this.state.taskinput, priority: e.target.value } }) }}>
                                        <option value={0}>0</option>
                                        <option value={1}> 1 </option>
                                        <option value={2}> 2 </option>
                                        <option value={3}> 3 </option>
                                        <option value={4}> 4 </option>
                                   </select>
                              </div>
                              <div className="input-group">
                                   <label className="mb-1 text-bg-dark" htmlFor="due-date=">Set Due Date:</label>
                                   <input type="date" id="due-date" onChange={(e) => { this.setState({ taskinput: { ...this.state.taskinput, dueDate: new Date(...(e.target.value).split('-').map((x) => (Number(x)))) } }) }}></input>
                                   <button className="btn btn-primary" onClick={this.addTask}>Add</button>
                              </div>
                         </form>
                    </div>
               </div>
          );
     }
};

export default Project;