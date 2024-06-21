const model = require("../models/taskProgressModel.js");

// ENDPOINT: CREATE TaskProgress
module.exports.createTaskProgress = (req, res, next) => {
    const optionalNotes = req.body.notes ||null;
    const data = {
        user_id: req.body.user_id,
        task_id: req.body.task_id,
        completion_date: req.body.completion_date,
        notes: optionalNotes
    };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error createTaskProgress:", error);
            res.status(500).json(error);
        } else if (results) {
            res.status(201).json({
                progress_id: results.insertId,
                user_id: req.body.user_id,
                task_id: req.body.task_id,
                completion_date: req.body.completion_date,
                notes: optionalNotes
            });
        }
    }

    model.createNewTaskProgress(data, callback);
};


// ENDPOINT: READ TaskProgress
module.exports.readTaskProgressById = (req, res, next) => {
    const data = {
        progress_id: req.params.id
    }

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error getTaskProgress:", error);
            res.status(500).json(error);
        } else {
            if (results.length === 0) {
                res.status(404).json({
                    error: "Progress not found"
                });
            } else {
                res.status(200).json(results[0]);
            }
        }
    }

    model.getProgressById(data, callback);
};

// ENDPOINT: UPDATE TaskProgress
module.exports.updateTaskProgressById = (req, res, next) => {
    const data = {
        notes: req.body.notes,
        id: req.params.id
    }


    const callback = (error, results, fields) => {
        console.log(results)
        if (error) {
            console.error("Error updateTaskProgress:", error);
            res.status(500).json(error);
        } else if (results[0].affectedRows == 0) {
            res.status(404).json({
                error: "Progress not found"
            });
        } else {
            res.status(200).json(results[1][0]);

        }
    }

    model.updateProgressById(data, callback);
};


// ENDPOINT: DELETE TaskProgress
module.exports.deleteTaskProgressById = (req, res, next) => {
    const data = {
        progress_id: req.params.id
    }

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error deleteTaskProgress:", error);
            res.status(500).json(error);
        } else {
            if (results.affectedRows === 0) {
                res.status(404).json({
                    error: "Progress not found"
                });
            } else {
                res.status(204).send();
            }
        }
    }

    model.deleteProgressById(data, callback);
};
