const readlineSync = require('readline-sync');

let animals = [];
let fees = [];

function addAnimal(name, fee) {
    if (!name || name.trim() === "" || isNaN(fee) || fee < 0) {
        throw new Error("Invalid animal name or adoption fee!");
    }

    animals.push(name);
    fees.push(fee);
}

function getAdoptionFee(animalName) {
    let index = animals.indexOf(animalName);

    if (index === -1) {
        throw new Error("Animal not found in records!");
    }

    return fees[index];
}

console.log("Welcome to the Pet Shelter System");

while (true) {
    let action = readlineSync.question("Choose an action: 'add', 'fee', or 'exit': ").toLowerCase();

    if (action === "exit") {
        console.log("Goodbye!");
        break;
    }

    try {
        if (action === "add") {
            let animal = readlineSync.question("Enter the animal's name: ");
            let fee = Number(readlineSync.question("Enter the adoption fee: "));

            addAnimal(animal, fee);
            console.log(`${animal} added with a fee of $${fee}.`);

        } else if (action === "fee") {
            let animal = readlineSync.question("Enter the animal's name to find its adoption fee: ");
            let fee = getAdoptionFee(animal);

            console.log(`${animal}'s adoption fee is $${fee}.`);

        } else {
            console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
        }
    } catch (error) {
        console.log("Error:", error.message);
    }
}
