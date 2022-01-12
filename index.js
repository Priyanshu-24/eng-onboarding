const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fibonacci_sequence(number) {
  if (Number.isInteger(number) && number > 0) {
    let n1 = 0,
      n2 = 1,
      next_term,
      fibonacci_array = [];

    for (let i = 1; i <= number; i++) {
      fibonacci_array.push(n1);
      next_term = n1 + n2;
      n1 = n2;
      n2 = next_term;
    }

    return fibonacci_array;
  } 
  
  else return "Only integer values greater than 0 are allowed.";
}

readline.question("Enter the number of terms: ", (number) => {
  const no_of_terms = Number(number);
  const ans = fibonacci_sequence(no_of_terms);
  console.log(ans);
  readline.close();
});

module.exports = fibonacci_sequence;
