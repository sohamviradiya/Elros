import '../style/style.css';
import React from 'react';
import Task from './Task';
import * as Script from './script/script';

class Project extends React.Component {
     constructor(props) {
          super(props);
     }
     render() {
          return (
               <div>
                    <div>Project</div>
                    <Task/>
          </div>

          );
     }
};

export default Project;