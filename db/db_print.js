const db = require("./db_connection");

const select_recipes_sql = "SELECT * FROM recipes";

db.execute(select_recipes_sql, 
    (error, results) => {
        if (error) 
            throw error;

        console.log("Table 'recipes' contents:")
        console.log(results);
    }
);

db.end();