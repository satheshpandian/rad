var faker = require('faker');

var database = { claims: []};

for (var i = 1; i<= 1; i++) {
  database.claims.push({
    amount: faker.random.number(),
    prize: "Free Spins",
    game: "Gemix",
    countdown: 25
  });
}

console.log(JSON.stringify(database));