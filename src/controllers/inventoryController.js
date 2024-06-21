const inventoryModel = require("../models/inventoryModel.js");

// READ ITEMS IN USER INVENTORY (GET) /inventory/:user_id
module.exports.getUserInventory = (req, res, next) => {
    const data = {
        user_id: req.params.user_id
    };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error getUserInventory:", error);
            res.status(500).json(error);
        } else {
            if (results.length === 0) {
                res.status(404).json({
                    error: "Inventory not found for the user"
                });
            } else {
                res.status(200).json(results);
            }
        }
    };

    inventoryModel.getUserInventory(data, callback);
};
