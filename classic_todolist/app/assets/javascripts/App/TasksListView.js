App.TasksListView = function() {
  this.node = $('<div>').addClass('task-list');
  this.tasks = null;
  this.refresh();
};

App.TasksListView.TaskTemplate = $('[data-template="task"]').text();
console.info('App.TasksListView.TaskTemplate', App.TasksListView.TaskTemplate);
App.TasksListView.NewTaskFormTemplate = $('[data-template="new-task-form"]').text();

App.TasksListView.prototype.refresh = function() {
  var view = this;
  App.Task.all().then(function(tasks) {

    view.tasks = tasks
    view.render();
  });
};

App.TasksListView.prototype.render = function() {

  this.node.html('');
  // this.node.append(this.renderNewTaskForm())

  if (this.tasks) {
    if (this.tasks.length === 0) {
      this.node.text('No Tasks');
    } else {
      var nodes = this.tasks.map(this.renderTask.bind(this));
      console.info('htmlfirst', nodes);
      this.node.append(nodes);
    }
  } else {
    this.node.text('Loading...')
  };
  $('body').append(this.node);
};

App.TasksListView.prototype.renderTask = function(task){
  var view = this;
  var domNode = $.tmpl(App.TasksListView.TaskTemplate, task);

  domNode.find('.task-remove-link').on('click', function(event){
    event.preventDefault();
    task.remove().then(function(){
      view.refresh();
    });
  });

  return domNode;
};


