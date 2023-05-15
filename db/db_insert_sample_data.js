const db = require("./db_connection");

/**** Delete *CONTENTS OF* existing tables (but not dropping tables themselves) ****/

const delete_recipes_table_sql = "DELETE FROM recipes;"

db.execute(delete_recipes_table_sql);

const add_data_sql = `INSERT into recipes(recipe_name, cusine, prep_time,
    meal_typ) VALUES(?, ?, ?, ?)`

const recipe_1 = ["Fudgy Brownies", "American", "1:00:00", "Dessert"];
const recipe_2 = ["Chicken Penne Pasta", "Italian", "1:30:00", "Dinner"];
const recipe_3 = ["Aloo Paratha", "Indian", "0:30:00", "Breakfast"];
const recipe_4 = ["Korean Fried Chicken", "Korean", "2:00:00", "Lunch"];

const recipes = [recipe_1, recipe_2, recipe_3, recipe_4];

for (let i=0;i<recipes.length;i++) {
    let recipe = recipes[i];
    db.execute(add_data_sql, recipe);
}

db.end();