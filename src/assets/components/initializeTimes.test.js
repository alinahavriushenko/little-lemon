import initializeTimes from './initializeTimes';

describe('initializeTimes', () => {
  it('should return an array of times', () => {
    const times = initializeTimes();
expect(Array.isArray(times)).toBe(true);
  });
});
