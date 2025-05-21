// /* global use, db */
// // MongoDB Playground
// // To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// // Make sure you are connected to enable completions and to be able to run a playground.
// // Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// // The result of the last command run in a playground is shown on the results panel.
// // By default the first 20 documents will be returned with a cursor.
// // Use 'console.log()' to print to the debug output.
// // For more documentation on playgrounds please refer to
// // https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// // Select the database to use.
// use('EcommNext');

// // Insert a few documents into the sales collection.
// db.getCollection('Products').insertMany([
//   {
//     Id: "1",
//     Name: "Apple iPhone 15 Pro",
//     Description: "6.1-inch display, A17 Pro chip, 128GB storage, Titanium body",
//     ImageLink: "/Images/Iphone.jpeg",
//     Price: 999,
//   },
//   {
//     Id: "2",
//     Name: "Samsung Galaxy S24 Ultra",
//     Description: "6.8-inch AMOLED, Snapdragon 8 Gen 3, 256GB storage",
//     ImageLink: "/Images/Samsung.jpeg",
//     Price: 1199,
//   },
//   {
//     Id: "3",
//     Name: "Sony WH-1000XM5 Headphones",
//     Description: "Wireless noise-canceling headphones with up to 30 hours battery life",
//     ImageLink: "/Images/headphones.jpeg",
//     Price: 399,
//   },
//   {
//     Id: "4",
//     Name: "Apple iPad Air (M2)",
//     Description: "10.9-inch Liquid Retina display, Apple M2 chip, Wi-Fi 6",
//     ImageLink: "/Images/Ipad.jpeg",
//     Price: 599,
//   },
//   {
//     Id: "5",
//     Name: "Dell XPS 15 Laptop",
//     Description: "Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch 4K display",
//     ImageLink: "/images/Dell.jpeg",
//     Price: 1799,
//   }
// ]);


// // Print a message to the output window.
// console.log(db.getCollection('Products').find({}));

