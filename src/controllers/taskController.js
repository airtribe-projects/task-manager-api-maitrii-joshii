const taskService = require('../services/taskService');

const retrieveTasks = async(req, res, next) => {
    try {
        const { completed } = req.query;
        const tasks = await taskService.retrieveTasks(completed);
        return res.status(200).json(tasks);
    } catch(error) {
        next(error);
    }
};

const retrieveTasksByPriority = async(req, res, next) => {
    try {
        const { level } = req.params;
        const tasks = await taskService.retrieveTasks(null, level);
        return res.status(200).json(tasks);
    } catch(error) {
        next(error);
    }
};


const retrieveTask = async(req, res, next) => {
    try {
        const task = await taskService.retrieveTask(req.params.id);
        return res.status(200).json(task);
    } catch(error) {
        next(error);
    }
};

const createTask = async(req, res, next) => {
    try {
        const {
            title,
            description,
            completed,
            priority
        } = req.body;
        const task = await taskService.createTask(title, description, completed, priority);
        return res.status(201).json({ data: task });
    } catch(error) {
        next(error);
    }
};

const updateTask = async(req, res, next) => {
    try {
        const {
            title,
            description,
            completed
        } = req.body;
        await taskService.retrieveTask(req.params.id);
        await taskService.updateTask(req.params.id, title, description, completed);
        return res.status(200).send();
    } catch(error) {
        next(error);
    }
};

const deleteTask = async(req, res, next) => {
    try {
        await taskService.retrieveTask(req.params.id);
        await taskService.deleteTask(req.params.id);
        return res.status(200).send();
    } catch(error) {
        next(error);
    }
};


module.exports = { retrieveTasks, retrieveTasksByPriority, retrieveTask, createTask, updateTask, deleteTask };
