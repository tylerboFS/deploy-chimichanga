const { client, createChimi } = require("./index");

async function dropTables() {
  try {
    console.log("Starting to drop tables...");

    // have to make sure to drop in correct order
    await client.query(`
      DROP TABLE IF EXISTS chimichangas;
    `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function createTables() {
  try {
    console.log("Starting to build tables...");

    await client.query(`
      CREATE TABLE chimichangas (
        id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL,
        price INTEGER
      );

    `);
    console.log("Finished building tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}

async function createInitialChimis() {
  try {
    console.log("Starting to create chimis...");

    await createChimi({ 
      name: 'California', 
      price: 10
    });

    await createChimi({ 
      name: 'Deadpool', 
      price: 13
    });

    await createChimi({ 
      name: 'El Charro', 
      price: 14
    });
   
    
    console.log("Finished creating chimis!");
  } catch (error) {
    console.error("Error creating chimis!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createInitialChimis();
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
}

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());
