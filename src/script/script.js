class Task {
     constructor(title, description, dueDate, priority) {
          this.title = title;
          this.description = description;
          this.dueDate = new Date(...dueDate.split('-').map((x) => (Number(x))));
          this.dueDate.setMonth(this.dueDate.getMonth() - 1);
          this.setDate = new Date();
          this.priority = Number(priority);
          this.id = 0;
          this.count++;
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
               return 'danger';
     };
};

class Project {

     constructor(title, id) {
          this.title = title;
          this.tasks = [];
          this.currentTask = new Task('Destroy Everything', 'Leave Nothing ','2022-10-01',3);
          this.id = id;
          this.taskCount = 0;
          this.addTask(this.currentTask);
     }

     addTask = (task) => {
          if (this.tasks.find((t) => (t.title == task.title)) != undefined) {
               alert('task already exists');
               return this;
          }
          this.taskCount++;
          task.id = this.taskCount;
          this.tasks.push(task);
          return this;
     }

     removeTask = (id) => {
          this.tasks = this.tasks.filter((task) => (task.id != id));
          this.taskCount--;
          return this;
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