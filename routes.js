var controllers = require("./controllers")

module.exports = function(app){
    app.get('/tasks', controllers.getalltasks)
    app.get('/tasks/:id', controllers.gettask)
    app.post('/tasks', controllers.addtask)
    app.put('/tasks/:id', controllers.updatetask)
    app.delete('/tasks/:id', controllers.deletetask)
}

