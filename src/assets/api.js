
const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = s * a % m) / m;
};

const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) result.push(i + ":00");
      if (random() < 0.5) result.push(i + ":30");
    }

    resolve(result);
  });
};

const submitAPI = (formData) => {
  // Implement your submitAPI logic here
  // You can return true for this example
  return true;
};

export { fetchAPI, submitAPI };
