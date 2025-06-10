// // /* global use, db */
// // // MongoDB Playground
// // // To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// // // Make sure you are connected to enable completions and to be able to run a playground.
// // // Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// // // The result of the last command run in a playground is shown on the results panel.
// // // By default the first 20 documents will be returned with a cursor.
// // // Use 'console.log()' to print to the debug output.
// // // For more documentation on playgrounds please refer to
// // // https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// // Select the database to use.
// use('EcommNext');

// // Insert a few book documents into the Products collection.
// db.getCollection('Products').insertMany([
//   {
//     Id: "1",
//     Name: "Mac Frieda's Kitchen Secrets",
//     Description: "Delicious traditional recipes from Mac Frieda’s southern kitchen",
//     ImageLink: "/Images/MacFriedaCookbook.jpeg",
//     Price: 39
//   },
//   {
//     Id: "2",
//     Name: "The Alchemist",
//     Description: "A philosophical story by Paulo Coelho about following your dreams",
//     ImageLink: "/Images/Alchemist.jpeg",
//     Price: 15
//   },
//   {
//     Id: "3",
//     Name: "Atomic Habits",
//     Description: "Tiny Changes, Remarkable Results by James Clear",
//     ImageLink: "/Images/AtomicHabits.jpeg",
//     Price: 22
//   },
//   {
//     Id: "4",
//     Name: "Becoming",
//     Description: "Memoir of Michelle Obama, former First Lady of the United States",
//     ImageLink: "/Images/Becoming.jpeg",
//     Price: 25
//   },
//   {
//     Id: "5",
//     Name: "The Power of Now",
//     Description: "Spiritual guide to personal growth by Eckhart Tolle",
//     ImageLink: "/Images/PowerOfNow.jpeg",
//     Price: 18
//   },
//   {
//     Id: "6",
//     Name: "Deep Work",
//     Description: "Rules for focused success in a distracted world by Cal Newport",
//     ImageLink: "/Images/DeepWork.jpeg",
//     Price: 20
//   },
//   {
//     Id: "7",
//     Name: "Educated",
//     Description: "A memoir by Tara Westover about growing up off the grid",
//     ImageLink: "/Images/Educated.jpeg",
//     Price: 19
//   },
//   {
//     Id: "8",
//     Name: "The Subtle Art of Not Giving a F*ck",
//     Description: "A counterintuitive approach to living a good life by Mark Manson",
//     ImageLink: "/Images/SubtleArt.jpeg",
//     Price: 21
//   },
//   {
//     Id: "9",
//     Name: "Rich Dad Poor Dad",
//     Description: "What the rich teach their kids about money by Robert Kiyosaki",
//     ImageLink: "/Images/RichDad.jpeg",
//     Price: 17
//   },
//   {
//     Id: "10",
//     Name: "Can't Hurt Me",
//     Description: "Master your mind and defy the odds by David Goggins",
//     ImageLink: "/Images/CantHurtMe.jpeg",
//     Price: 23
//   },
//   {
//     Id: "11",
//     Name: "Grit",
//     Description: "The power of passion and perseverance by Angela Duckworth",
//     ImageLink: "/Images/Grit.jpeg",
//     Price: 16
//   },
//   {
//     Id: "12",
//     Name: "Start With Why",
//     Description: "How great leaders inspire action by Simon Sinek",
//     ImageLink: "/Images/StartWithWhy.jpeg",
//     Price: 24
//   },
//   {
//     Id: "13",
//     Name: "Think Like a Monk",
//     Description: "Train your mind for peace and purpose by Jay Shetty",
//     ImageLink: "/Images/ThinkLikeAMonk.jpeg",
//     Price: 20
//   },
//   {
//     Id: "14",
//     Name: "Zero to One",
//     Description: "Notes on startups, or how to build the future by Peter Thiel",
//     ImageLink: "/Images/ZeroToOne.jpeg",
//     Price: 19
//   },
//   {
//     Id: "15",
//     Name: "Hooked",
//     Description: "How to build habit-forming products by Nir Eyal",
//     ImageLink: "/Images/Hooked.jpeg",
//     Price: 18
//   },
//   {
//     Id: "16",
//     Name: "The Lean Startup",
//     Description: "How today's entrepreneurs use continuous innovation by Eric Ries",
//     ImageLink: "/Images/LeanStartup.jpeg",
//     Price: 22
//   },
//   {
//     Id: "17",
//     Name: "Ikigai",
//     Description: "The Japanese secret to a long and happy life",
//     ImageLink: "/Images/Ikigai.jpeg",
//     Price: 14
//   },
//   {
//     Id: "18",
//     Name: "Sapiens",
//     Description: "A brief history of humankind by Yuval Noah Harari",
//     ImageLink: "/Images/Sapiens.jpeg",
//     Price: 27
//   },
//   {
//     Id: "19",
//     Name: "Man's Search for Meaning",
//     Description: "Classic work on finding purpose by Viktor E. Frankl",
//     ImageLink: "/Images/MansSearch.jpeg",
//     Price: 15
//   },
//   {
//     Id: "20",
//     Name: "The 5 AM Club",
//     Description: "Own your morning. Elevate your life. By Robin Sharma",
//     ImageLink: "/Images/5AMClub.jpeg",
//     Price: 20
//   }
// ]);


// // // Print a message to the output window.
// // console.log(db.getCollection('Products').find({}));

