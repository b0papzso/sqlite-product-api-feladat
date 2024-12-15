import sqlite3 from "sqlite3"

const db = new sqlite3.Database("./database.sqlite")

const initializeDB = async () =>{
    //await dbRun("DROP TABLE PRODUCTS")
    await dbRun("CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, picture TEXT , price REAL)")
    /*const products = [
        {name: "tej", description: "tehén tőgyéből származó magas hőmérsékleten módosított folyadék", picture: "https://static.groby.hu/media/07b/71b/conv/groby-magyar-esl-friss-tej-egy-liter-hosszan-friss-full.jpg", price: "500"},
        {name: "banán", description: "banán", picture: "https://static.groby.hu/media/07b/71b/conv/groby-magyar-esl-friss-tej-egy-liter-hosszan-friss-full.jpg", price: "500"},
        {name: "Gyűrűk ura könyv", description: "Egy könyv a gyűrűk urairól", picture: "https://static.groby.hu/media/07b/71b/conv/groby-magyar-esl-friss-tej-egy-liter-hosszan-friss-full.jpg", price: "500"}
    ];

    for (const product of products)
    {
        await dbRun("INSERT INTO products(name, description, picture, price) VALUES (?,?,?,?)", [product.name, product.description, product.picture, product.price])
    }*/
};

function dbQuery(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function dbRun(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
}

export { db, dbQuery, dbRun, initializeDB };