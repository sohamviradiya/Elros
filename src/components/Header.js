import { Component } from 'react';
class Headers extends Component {
     constructor(props) {
          super(props);
     }
     render() {
          return (
               <div className='bg-success fixed-top p-2'>
                    <div className="container d-flex flex-row justify-content-between align-items-center">
                         <h1 className='text-bg-success'> Elros To-Do List App</h1>
                         <ul className="nav ">
                              <li className="nav-item">
                                   <a className="nav-link text-bg-success active" aria-current="page" href="https://github.com/sohamviradiya/elros">Source Code</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link text-bg-success" href="https://www.theodinproject.com/lessons/node-path-javascript-todo-list">The Odin Project</a>
                              </li>
                              <li className="nav-item">
                              <a className="nav-link text-bg-success" href="https://reactjs.org/">React</a>
                              </li>
                              <li className="nav-item">
                              <a className="nav-link text-bg-success" href="https://getbootstrap.com/">Bootstrap</a>
                              </li>
                         </ul>
                    </div>
               </div>
          )
     }
}

export default Headers;