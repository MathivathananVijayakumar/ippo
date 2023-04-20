const minimumStepsToMakePasswordStrong = require("../password_checker.js");
describe("minimumStepsToMakePasswordStrong", () => {
    it("returns 5 for input 'a'", () => {
      expect(minimumStepsToMakePasswordStrong("a")).toBe(5);
    });
  
    it("returns 3 for input 'aA1'", () => {
      expect(minimumStepsToMakePasswordStrong("aA1")).toBe(3);
    });
  
    it("returns 5 for input '1337C0d3'", () => {
      expect(minimumStepsToMakePasswordStrong("1337C0d3")).toBe(0);
    });
  
    it("returns 0 for input 'StrongPassword123'", () => {
      expect(minimumStepsToMakePasswordStrong("StrongPassword123")).toBe(0);
    });
  
    it("returns 1 for input 'aaaaa1'", () => {
      expect(minimumStepsToMakePasswordStrong("aaaaa1")).toBe(2);
    });
  
    it("returns 1 for input 'A1bbbbbb'", () => {
      expect(minimumStepsToMakePasswordStrong("A1bbbbbb")).toBe(1);
    });
  
    it("returns 1 for input '1Bcccccc'", () => {
      expect(minimumStepsToMakePasswordStrong("1Bcccccc")).toBe(1);
    });
  
    it("returns 1 for input 'AAbbbbb1'", () => {
      expect(minimumStepsToMakePasswordStrong("AAbbbbb1")).toBe(1);
    });
  
    it("returns 2 for input 'aaaaaab1'", () => {
      expect(minimumStepsToMakePasswordStrong("aaaaaab1")).toBe(2);
    });
  
    it("returns 2 for input '1BBBBBB'", () => {
      expect(minimumStepsToMakePasswordStrong("1BBBBBB")).toBe(2);
    });
  
    it("returns 2 for input '1Cc'", () => {
      expect(minimumStepsToMakePasswordStrong("1Cc")).toBe(3);
    });
  });
  