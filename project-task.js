/*
===========================================
Pet Shelter Exception Handling Assignment
===========================================

Scenario:
You’ve been hired to help a local pet shelter digitize its animal adoption records.

The program should:
- Allow users to enter an animal type and adoption fee.
- Add the animal and fee to a list.
- Retrieve the adoption fee for a specific animal when requested.

Problems to Solve:
1. What happens if the user provides a negative adoption fee?
2. What happens if the user leaves the name blank?
3. What happens if the user tries to find the fee for an animal that has not been added?
4. What happens if the program throws an exception?
5. Add try/catch blocks so the program does not crash.
*/

// Install first if needed:
// npm install readline-sync

const readlineSync = require("readline-sync");

let animals = [];
let fees = [];

/*
===========================================
Task 1: Add Animal With Validation
===========================================
*/

function addAnimal(name, fee) {
  // Variation/attempt:
  // if (!name || fee < 0) {
  //   throw new Error("Invalid animal name or adoption fee!");
  // }

  if (!name || name.trim() === "") {
    throw new Error("Invalid animal name!");
  }

  if (isNaN(fee)) {
    throw new Error("Adoption fee must be a number!");
  }

  if (fee < 0) {
    throw new Error("Adoption fee cannot be negative!");
  }

  animals.push(name);
  fees.push(fee);
}

/*
===========================================
Task 2: Retrieve Adoption Fee
===========================================
*/

function getAdoptionFee(animalName) {
  let index = animals.indexOf(animalName);

  // Variation/attempt:
  // if (!animalName) {
  //   throw new Error("Please enter an animal name.");
  // }

  if (index === -1) {
    throw new Error("Animal not found in records!");
  }

  return fees[index];
}

/*
===========================================
Task 3: Main Program With try/catch
===========================================
*/

console.log("Welcome to the Pet Shelter System");

while (true) {
  try {
    let action = readlineSync
      .question("Choose an action: 'add', 'fee', or 'exit': ")
      .toLowerCase();

    if (action === "exit") {
      console.log("Goodbye!");
      break;
    }

    if (action === "add") {
      let animal = readlineSync.question("Enter the animal's name: ");
      let fee = Number(readlineSync.question("Enter the adoption fee: "));

      addAnimal(animal, fee);

      console.log(`${animal} added with a fee of $${fee}.`);
    } else if (action === "fee") {
      let animal = readlineSync.question(
        "Enter the animal's name to find its adoption fee: "
      );

      console.log(`${animal}'s adoption fee is $${getAdoptionFee(animal)}.`);
    } else {
      console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    console.log("The program did not crash. Please try again.");
  }
}

/*
===========================================
Task 4: Test Cases / Manual Testing
===========================================

Valid animal:
add
Dog
100

Blank animal name:
add

50

Negative fee:
add
Cat
-25

Non-number fee:
add
Bird
abc

Animal not found:
fee
Horse

Exit program:
exit
*/

/*
===========================================
Extra Practice / Alternate Ideas
===========================================

// Another possible addAnimal validation:

function addAnimal(name, fee) {
  if (!name || fee < 0) {
    throw new Error("Invalid animal name or adoption fee!");
  }

  animals.push(name);
  fees.push(fee);
}

// Another possible catch block:

catch (err) {
  console.error(err);
}

// Another possible fee lookup:

function getAdoptionFee(animalName) {
  let index = animals.indexOf(animalName);

  if (index === -1) {
    throw new Error("Animal not found in records!");
  }

  return fees[index];
}
*/