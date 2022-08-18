import '../style/style.css';
import React from 'react';
import * as Script from '../script/script';
import ProjectForm from './ProjectForm'

class SideBar extends React.Component{
  constructor(props) {
    super(props);
    console.log(props);
  }
     render() {
      return (
        <div>
          <div>SideBar</div>
          <ProjectForm/>
        </div>
      );
    }
};

export default SideBar;