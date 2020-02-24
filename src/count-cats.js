module.exports = function countCats(matrix) {
  matrix = matrix.flat();
  const catEyes = '^^';
  let numOfCatEyes = 0;
  for (let i = 0; i < matrix.length; i++)
  {
    if (matrix[i] === catEyes)
    {
      numOfCatEyes++;
    }
  }
  return numOfCatEyes;
};
