const pool = require('../services/db');

// READ ITEMS IN USER INVENTORY (GET) /inventory/:user_id
module.exports.getUserInventory = (data, callback) => {
    const SQL_STATEMENT = `
        SELECT user_id, items.item_id, item_name
        FROM Inventory
        INNER JOIN items ON inventory.item_id = items.item_id
        WHERE user_id = ?
    `;
    const VALUES = [data.user_id];

    pool.query(SQL_STATEMENT, VALUES, callback);
};
