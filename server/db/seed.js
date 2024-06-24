const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


async function createInitialChimis() {
  try {
    console.log("Starting to create chimis...");

    await prisma.chimichangas.create({data: {name: 'California', price: 22}});
    await prisma.chimichangas.create({data: {name: 'Charro', price: 33}});
    await prisma.chimichangas.create({data: {name: 'Diablo', price: 44}});

 
    
    console.log("Finished creating chimis!");
  } catch (error) {
    console.error("Error creating chimis!");
    throw error;
  }
}

async function rebuildDB() {
  try {

    await createInitialChimis();
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
}

rebuildDB();
