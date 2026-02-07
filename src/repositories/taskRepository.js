const InMemoryRepository = require('./inMemoryRepository');

class TaskRepository extends InMemoryRepository {
    constructor () {
        super();
    }
}

module.exports = new TaskRepository();