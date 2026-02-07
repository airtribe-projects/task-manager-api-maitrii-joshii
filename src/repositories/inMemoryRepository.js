class InMemoryRepository {
    constructor() {
        this.storage = new Map();
        this.currentId = 1;
    }

    // Create a new entity
    create(entity) {
        entity.id = this.currentId;
        this.storage.set(this.currentId, entity);
        this.currentId++;
        return entity;
    }

    // Retrieve entity by ID
    getById(id) {
        return this.storage.get(id);
    }

    // Retrieve all entities
    getAll(filters = undefined) {
        let result = Array.from(this.storage.values());
        if(filters && filters.length > 0) {
            result = result.filter((obj) => {
                return filters.reduce((isSelected, filter) => {
                    return (obj[filter['key']] == filter['value']) && isSelected;
                }, true);
            });
        }
        result.sort((task1, task2) => new Date(task2.createdAt) - new Date(task1.createdAt));
        return result
    }

    // Update an existing entity
    update(id, updatedData) {
        const existing = this.storage.get(id);
        if(!existing) {
            return null;
        }

        const updated = { ...existing, ...updatedData, id };
        this.storage.set(id, updated);
        return updated;
    }

    // Delete an entity by ID
    delete(id) {
        return this.storage.delete(id);
    }
}


module.exports = InMemoryRepository;