import '../style/style.css';
import React from 'react';
import Task from './Task';
import * as Script from '../script/script';
import TaskForm from './TaskForm'
class Project extends React.Component {
     constructor(props) {
          super(props);
     }
     render() {
          return (
               <div className="col-8">
                    <div>Project</div>
                    <Task />
                    <TaskForm />
               </div>
          );
     }
};

export default Project;