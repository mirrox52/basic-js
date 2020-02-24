const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let parseActivity = parseFloat(sampleActivity);
  if ((!isNaN(parseActivity)) && (parseActivity > 0) && (parseActivity < MODERN_ACTIVITY) && (typeof sampleActivity === 'string') && (sampleActivity != null)) 
  {
    return Math.ceil(Math.log(MODERN_ACTIVITY / parseActivity) / (0.693 / HALF_LIFE_PERIOD));
  }
  else
  {
    return false;
  }
};
