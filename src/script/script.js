class Task {
     constructor(title, description, dueDate, priority, id) {
          this.title = title;
          this.description = description;
          this.dueDate = new Date(...dueDate.split('-').map((x) => (Number(x))));
          this.setDate = new Date();
          this.priority = Number(priority);
          this.id = id;
     }
     shade = () => {
          if (this.priority == 0)
               return 'info';
          else if (this.priority == 1)
               return 'primary';
          else if (this.priority == 2)
               return 'success';
          else if (this.priority == 3)
               return 'warning';
          else
               return 'failure';
     }
};

class Project {

     constructor(title, id) {
          this.title = title;
          this.tasks = [];
          this.currentTask = new Task('sample task', 'with description','2022-08-07',0);
          this.id = id;
          this.taskCount = 0;
     }

     addTask = () => {
          this.tasks.push(this.currentTask);
          console.log(this.currentTask);
          this.taskCount++;
     }

     removeTask = (id) => {
          this.tasks = this.tasks.filter((task) => (task.id != id));
     }
};

const ProjectRegistry = (() => {
     const projects = [];
     ;let projectCount = 0;
     let currentProject = new Project('sample project', projectCount);
     const addProject = () => {
          projects.push(currentProject);
          projectCount++;
     }

     const removeProject = (id) => {
          projects = projects.filter((project) => (project.id != id));
     }
     return {
          addProject,
          projects,
          currentProject,
          removeProject,
          projectCount
     }
})();

export {
     Project,
     Task,
     ProjectRegistry
}