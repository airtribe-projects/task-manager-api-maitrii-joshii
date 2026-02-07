const express = require('express');
const router = express.Router();
const { retrieveTasks, retrieveTasksByPriority, retrieveTask, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const { taskSchema } = require('../schemas/taskSchema');
const { validateRequest } = require('../middlewares/validateRequest');

router.get("", retrieveTasks);
router.get("/priority/:level", retrieveTasksByPriority);
router.get("/:id", retrieveTask);
router.post("", validateRequest(taskSchema), createTask);
router.put("/:id", validateRequest(taskSchema), updateTask);
router.delete("/:id", deleteTask);


module.exports = router;
