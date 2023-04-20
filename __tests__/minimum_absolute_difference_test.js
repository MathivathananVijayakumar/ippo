const minimumAbsoluteDifference = require("../minimum_absolute_difference.js");
 // Unit Tests
 describe("minimumAbsoluteDifference", () => {
    it("returns 2 for input [3,9,7,3]", () => {
      expect(minimumAbsoluteDifference([3,9,7,3])).toBe(10);
    });
  
    it("returns 0 for input [-36,36]", () => {
      expect(minimumAbsoluteDifference([-36,36])).toBe(72);
    });
  
    it("returns 0 for input [2,-1,0,4,-2,9]", () => {
      expect(minimumAbsoluteDifference([2,-1,0,4,-2,9])).toBe(18);
    });
  
    it("returns 5 for input [5,5,-5,-5,5]", () => {
      expect(minimumAbsoluteDifference([5,5,-5,-5,5])).toBe(15);
    });
  
    it("returns 0 for input [1,2,3,4,5,6]", () => {
      expect(minimumAbsoluteDifference([1,2,3,4,5,6])).toBe(9);
    });
  });
  