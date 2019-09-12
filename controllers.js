var Task = require('./models')

var controllers = {

    //work
    getalltasks: function getalltasks(req, res) {
        Task.find()
        // .then ((data) => res.json(data) // [X] this will return array in json , which is treated as an object
        .then ((data) => res.json({alltasks:data})) //this will return object in json (which fit the json format)
        .catch(err => res.json(err))
        
    },

    //work 
    gettask: function gettask(req,res){
        Task.find({_id:req.params.id})
        .then ((data) => res.json(data))
        .catch(err => res.json(err))
    },

    //work
    addtask: function addtask(req, res){
        Task.create(req.body)
        .then ((data) => res.json(data))
        .catch(err => res.json(err))
    },

    updatetask:function updatetask(req, res){
        // Task.updateOne({ _id: req.body.id},[
        //     {$set: {title: req.body.title}},
        //     {$set: {description: req.body.description}},
        //     {$set: {completed:req.body.completed}},
        //     {$set: {updatedAt: Date.now}}
        // ])
        Task.findByIdAndUpdate(req.params.id, req.body)
        .then ( (data) => res.json(data))
        .catch(err => res.json(err))    
    },

    //delete but not redirecting to /tasks
    deletetask: function deletetask(req,res){
        Task.findByIdAndDelete({ _id:req.params.id})
        // .then (res.redirect('/tasks'))
        .then ((data) => res.json(data))
        .catch(err => res.json(err)) 
    }

}

module.exports = controllers;