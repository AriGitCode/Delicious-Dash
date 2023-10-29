const db = require('./db');
const MenuItem = require('./menuModel');



// async function populateDatabase() {
//     try {
//         await db.connect();
//         const menuItems = [
//             {
//                 name: 'Burger',
//                 description: 'Delicious burger with all the fixings',
//                 price: 10.99,
//                 category: 'Main Course',
//             },
//             {
//                 name: 'Caesar Salad',
//                 description: 'Fresh salad with Caesar dressing',
//                 price: 7.99,
//                 category: 'Appetizer',
//             },
//             // Add more menu items here
//         ];
//         await MenuItem.insertMany(menuItems);
//         console.log('Menu items inserted into the database');
//     } catch (error) {
//         console.error('Error populating the database:', error);
//     } finally {
//         db.close();
//     }
// }
// populateDatabase();

