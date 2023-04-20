function minimumAbsoluteDifference(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length / 2;
    let sum1 = 0;
    let sum2 = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (i < n) {
        sum1 += nums[i];
      } else {
        sum2 += nums[i];
      }
    }
    console.log( Math.abs(sum1 - sum2))
    return Math.abs(sum1 - sum2);
  }

  module.exports = minimumAbsoluteDifference;