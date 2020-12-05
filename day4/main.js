import { input } from "./input.js";

const formattedInput = input.split("\n\n");
let allFormattedPassports = [];

formattedInput.forEach((inputLine) => {
  const formattedPassport = inputLine.replace(/\n/g, " ").split(" ");
  allFormattedPassports.push(formattedPassport);
});

console.log(allFormattedPassports);

// _____ THIS IS THE ANSWER FOR PART ONE OF THE FIRST DAY: _____
// let validPassports = 0;
// allFormattedPassports.forEach((passport) => {
//   // if all fields are present, passport is always valid
//   if (passport.length === 8) {
//     validPassports++;
//   } else {
//     // if the only missing field is CID, the passport is still valid.
//     if (passport.length === 7) {
//       let hasCID = false;

//       // check if CID is in the passport
//       passport.forEach((passportLine) => {
//         if (passportLine.substring(0, 3) === "cid") {
//           hasCID = true;
//         }
//       });

//       // if CID is in the passport, this means some other field is missing, making the passport unvalid
//       if (!hasCID) {
//         validPassports++;
//       }
//     }
//   }
// });
// _____________________________________________________________

let validPassports = 0;
allFormattedPassports.forEach((passport) => {
  let allRequiredFields = false;

  if (passport.length === 8) {
    allRequiredFields = true;
  } else {
    // if the only missing field is CID, the passport has all required fields.
    if (passport.length === 7) {
      let hasCID = false;

      // check if CID is in the passport
      passport.forEach((passportLine) => {
        if (passportLine.substring(0, 3) === "cid") {
          hasCID = true;
        }
      });

      if (!hasCID) {
        allRequiredFields = true;
      }
    }
  }

  // only execute validation if all required fields are present
  if (allRequiredFields) {
    // Work on this puzzle here
  }
});

console.log("amount of valid passports: ", validPassports);
