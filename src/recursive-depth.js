module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 0, deepArr = []) {
       depth++;
       deepArr.push(depth);
       arr.forEach(tempArr => {
           if (Array.isArray(tempArr))
           {
               this.calculateDepth(tempArr, depth, deepArr)
           }
       });
       return Math.max.apply(null, deepArr);
    }
};