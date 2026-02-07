const taskRepo = require('../repositories/taskRepository');
const NotFoundError = require('../errors/notFoundError');
const { convertStringToBool } = require('../utils/stringUtils');

class TaskService {

    retrieveTasks = async(completed = undefined, priority = undefined) => {
        let filters = []
        if(completed) {
            filters.push(
                {
                    key: 'completed',
                    value: convertStringToBool(completed)
                }
            );
        }
        if (priority) {
            filters.push(
                {
                    key: 'priority',
                    value: priority
                }
            )
        }
        const tasks = await taskRepo.getAll(filters);
        return tasks;
    }

    retrieveTask = async(id) => {
        const task = await taskRepo.getById(Number(id));
        if(!task) {
            throw new NotFoundError('Task');
        }
        return task;
    }

    createTask = async(title, description, completed, priority) => {
        const task = await taskRepo.create(
            { 
                title: title, 
                description: description, 
                completed: completed, 
                priority: priority,
                createdAt: new Date()
            }
        );
        return task;
    }

    updateTask = async(id, title, description, completed) => {
        const task = await taskRepo.update(Number(id), { title: title, description: description, completed: completed });
        return task;
    }

    deleteTask = async(id) => {
        return await taskRepo.delete(Number(id));
    }
}


module.exports = new TaskService();