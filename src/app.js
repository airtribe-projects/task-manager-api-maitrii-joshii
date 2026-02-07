const express = require('express');
const app = express();
const port = 3000;
const tasksRouter = require('./routers/taskRouter');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/tasks", tasksRouter);
app.use(errorHandler);

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});


module.exports = app;