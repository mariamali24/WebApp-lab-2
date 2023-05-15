const db = require("./db_connection");

const create_recipes_table_sql = `
CREATE TABLE recipes (
    recipe_id INT NOT NULL AUTO_INCREMENT,
    recipe_name VARCHAR(45) NULL,
    cusine VARCHAR(45) NULL,
    prep_time TIME NULL,
    meal_typ VARCHAR(45) NULL,
    PRIMARY KEY (recipe_id));`

db.execute(create_recipes_table_sql);
db.end();