const pool = require('../services/db');

// CREATE (POST) /TaskProgress
module.exports.createNewTaskProgress = (data, callback) => {
    const SQL_STATEMENT = `
        INSERT INTO TaskProgress (user_id, task_id, completion_date, notes)
        VALUES (?, ?, ?, ?)
    `;
    const VALUES = [data.user_id, data.task_id, data.completion_date, data.notes];

    pool.query(SQL_STATEMENT, VALUES, callback);
};



// READ BY ID (GET) /Taskprogress/:id
module.exports.getProgressById = (data, callback) => {
    const SQL_STATEMENT = `
        SELECT * FROM taskProgress
        WHERE progress_id=?
    `;
    const VALUES = [data.progress_id];

    pool.query(SQL_STATEMENT, VALUES, callback);
};



// UPDATE BY ID (PUT) /Taskprogress/:id
module.exports.updateProgressById = (data, callback) => {
    const SQL_STATEMENT = `
        UPDATE TaskProgress
        SET notes = ? WHERE progress_id = ?;
        
        SELECT * FROM taskProgress
        WHERE progress_id = ?;
        `;

    const VALUES = [data.notes, data.id, data.id];

    pool.query(SQL_STATEMENT, VALUES, callback);
};



// DELETE BY ID (DELETE) /Taskprogress/:id
module.exports.deleteProgressById = (data, callback) => {
    const SQL_STATEMENT = `
        DELETE FROM TaskProgress
        WHERE progress_id = ?
    `;
    const VALUES = [data.progress_id];

    pool.query(SQL_STATEMENT, VALUES, callback);
};

