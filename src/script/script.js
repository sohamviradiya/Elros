class Task {
     constructor(title, description, dueDate, priority, id) {
          this.title = title;
          this.description = description;
          this.dueDate = new Date(...dueDate.split('-').map((x) => (Number(x))));
          this.dueDate.setMonth(this.dueDate.getMonth() - 1);
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
          this.currentTask = new Task('sample task', 'with description','2022-05-01',0);
          this.id = id;
          this.taskCount = 0;
          this.addTask();
     }

     addTask = () => {
          this.tasks.push(this.currentTask);
          this.taskCount++;
     }

     removeTask = (id) => {
          this.tasks = this.tasks.filter((task) => (task.id != id));
     }
     
};

const ProjectRegistry = (() => {
     let projects = [];
     let projectCount = 0;
     let currentProject = new Project('Sample', projectCount);
     return {
          projects,
          currentProject,
          projectCount
     }
})();

export {
     Project,
     Task,
     ProjectRegistry
}