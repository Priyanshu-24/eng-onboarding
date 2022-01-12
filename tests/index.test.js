const fibonacci_sequence = require("../index");

describe("Based on input values", () => {
  test("Zero as an input", () => {
    expect(fibonacci_sequence(0)).toBe(
      "Only integer values greater than 0 are allowed."
    );
  });

  test("Infinity as an input", () => {
    expect(fibonacci_sequence(Infinity)).toEqual(
      "Only integer values greater than 0 are allowed."
    );
  });

  test("Negative integer as an input", () => {
    expect(fibonacci_sequence(-5)).toBe(
      "Only integer values greater than 0 are allowed."
    );
  });

  test("Decimal value as an input", () => {
    expect(fibonacci_sequence(8.3)).toBe(
      "Only integer values greater than 0 are allowed."
    );
  });

  test("Irrational number as an input", () => {
    expect(fibonacci_sequence(Math.PI)).toBe(
      "Only integer values greater than 0 are allowed."
    );
  });

  test("String as an input", () => {
    expect(fibonacci_sequence("hello")).toEqual(
      "Only integer values greater than 0 are allowed."
    );
  });
});

describe("Based on output values", () => {
  test("Output when input is 1", () => {
    expect(fibonacci_sequence(1)).toEqual([0]);
  });

  test("Output when input is 5", () => {
    expect(fibonacci_sequence(5)).toEqual([0, 1, 1, 2, 3]);
  });
});
