import brain from "brain.js";

export function OperatorXOR(input) {
  const net = new brain.NeuralNetwork();
  net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] },
  ]);

  const arrayResults = [];
  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    arrayResults.push(`${element}: ${parseFloat(net.run(element)).toFixed(0)}`);
  }
  return arrayResults;
}
