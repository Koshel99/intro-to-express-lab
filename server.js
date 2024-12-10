// Be Polite, Greet the User

const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

app.get('/greet/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Hello there, ${username}!`);
});

// Rolling the Dice

app.get('/roll/:number', (req, res) => {
    const number = req.params.number;
    if (isNaN(number)) {
        return res.send('You must specify a valid number!');
    }
    res.send(`Your Roll is a ${number}!`);
});

// I Want THAT One!

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index >= collectibles.length) {
        return res.send('This item is not yet in stock. Check back soon!');
    }
    const item = collectibles[index];
    res.send(`So, you want the ${item.name}? For ${item.price},it can be yours!`);
});

// Using Query Parameters (going to finish tomorrow)

// app.get('/shoes', (req, res) => {
//     res.send(`min price items, ${req.query.name}! I hear you are ${req.query.age} years old!`);
// });

// const shoes = [
//     { name: "Birkenstocks", price: 50, type: "sandal" },
//     { name: "Air Jordans", price: 500, type: "sneaker" },
//     { name: "Air Mahomeses", price: 501, type: "sneaker" },
//     { name: "Utility Boots", price: 20, type: "boot" },
//     { name: "Velcro Sandals", price: 15, type: "sandal" },
//     { name: "Jet Boots", price: 1000, type: "boot" },
//     { name: "Fifty-Inch Heels", price: 175, type: "heel" }
// ];


