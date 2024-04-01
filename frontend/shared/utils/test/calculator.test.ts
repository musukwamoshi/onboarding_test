import { addNumbers } from "../calculator";


test('adding two numbers should return two numbers', () => {
    expect(addNumbers(2, 1)).toBe(3);
});
