function calculateFibonacci(number) {
  if (number <= 1) {
    return number;
  }
  return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
}

// invoking this function in a child process -> procees.on
process.on("message", ({ number }) => {
  const result = calculateFibonacci(number);
  process.send(result);
});
