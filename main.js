const name1 = "Jack";
const name2 = "Jill";
let input = `${name1} matches ${name2}`;
let formatedInput = input.toLowerCase().replace(/ /g, "");

// check if the string contains only alphas
function validInput(input) {
  const anyAlphaCharactersRegEx = /^[a-z]+$/i;

  return anyAlphaCharactersRegEx.test(input);
}

// recursive function
function transformToLettersCounts(input, numbers) {
  if (input.length === 0) {
    return numbers;
  }

  const firstLetter = input[0];
  const numberOfOccurrences = input.split(firstLetter).length - 1;

  numbers.push(numberOfOccurrences);

  const transformedInput = input.split(firstLetter).join("");

  return transformToLettersCounts(transformedInput, numbers);
}

//recursive function
function reduceCountsToTwoDigits(numbers) {
  if (numbers.length === 2) {
    return numbers;
  }

  let reducedNumbers = "";

  for (let counter = 0; counter <= (numbers.length - 1) / 2; counter++) {
    const backCounter = numbers.length - 1 - counter;

    if (counter === backCounter) {
      reducedNumbers = `${reducedNumbers}${numbers[counter]}`;
    } else {
      const sum = numbers[counter] + numbers[backCounter];

      reducedNumbers = `${reducedNumbers}${sum}`;
    }
  }

  return reduceCountsToTwoDigits(
    reducedNumbers.split("").map((n) => Number(n))
  );
}

if (name1.length === 0 || name2.length === 0) {
  console.log("Empty input:", input);

}

if (!validInput(formatedInput)) {
  console.log("Invalid input:", input);

}

const lettersCounts = transformToLettersCounts(formatedInput, []);
const reducedLettersCounts = reduceCountsToTwoDigits(lettersCounts);
const percentage = Number(
  `${reducedLettersCounts[0]}${reducedLettersCounts[1]}`
);

console.log(
  `${name1} matches ${name2} ${percentage}%${
    percentage > 80 ? ", good match" : ""
  }`
);