// import faker.js 
const { faker } = require('@faker-js/faker');
// make connection to our mongodb client so when run seed.js it need to make connection to db to read the data to db
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

// declaring main function to host all logic that will create the fake data
async function main() {
    const uri = `mongodb+srv://wissam:richy1234@cluster0.6xvvg5e.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const productsCollection = client.db("food-delivery-app").collection("products");
        const categoriesCollection = client.db("food-delivery-app").collection("categories");

        // creating our categories

        let categories = ['breakfast', 'lunch', 'dinner', 'drinks'].map((category) => { return { name: category } });
        await categoriesCollection.insertMany(categories);

        let imageUrls = [
            'https://images.pexels.com/photos/15913452/pexels-photo-15913452/free-photo-of-poke-bowl-with-salmon.jpeg?auto=compress&cs=tinysrgb&w=1600',

            // need to insert images path here
        ]
// for products we will use faker to send info
// faker.commerce is ready fake schema pulled from fakerjs.dev website
// for categories and to be randomly picked, i am using lodash lib 
// _.sample is built in belong lodash lib to pick random category and image
        let products = [];
        for (let i = 0; i < 10; i+=1) {
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                desciption: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: _.sample(categories),
                imageUrl: _.sample(imageUrls)
            };
            products.push(newProduct);
        }
        await productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();