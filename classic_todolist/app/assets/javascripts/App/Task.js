App.Task = function(attributes) {
  this.setAttributes(attributes);
};

App.Task.all = function(){
  return App.request('get', '/items').then(function(tasks){
    return tasks.map(function(attributes){
      return new App.Task(attributes);
    });
  });
};


App.Task.prototype.setAttributes = function(attributes) {
  $.extend(this, attributes)
  return this;
};

App.Task.prototype.attributes = function () {
  return {
    id:          this.id,
    description: this.description,
    completed:   this.completed,
    created_at:  this.created_at,
    updated_at:  this.updated_at,
  };
};

// App.Task.create = function(attributes) {
//   var params = {task: attributes};
//   return App.request('post', '/tasks', params).then(function(attributes) {
//     return new App.Task(attributes);
//   });
// };


// App.Task.all().then(function(tasks){ console.log(tasks); });
