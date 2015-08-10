var code = require('../main.js');

  describe("Letter Grade", function() {
    it("returns letter grade equivalent", function() {
      expect(code.letterGrader(95)).toEqual('A');
      expect(code.letterGrader(85)).toEqual('B');
      expect(code.letterGrader(75)).toEqual('C');
      expect(code.letterGrader(65)).toEqual('D');
      expect(code.letterGrader(45)).toEqual('F');
    })
  })

  describe("Average", function() {
    it("returns average of array", function() {
      expect(code.averageScore([90,95,87, 60])).toEqual(83);
    });
  });

  describe("Median", function() {
    it("returns median of array", function() {
      expect(code.medianScore([52,80,82,86,94])).toEqual(82)
      expect(code.medianScore([52,80,82,84,89,91])).toEqual(83)
    })
  })

  describe("Mode", function() {
    it("returns the mode of array", function() {
      expect(code.modeScore([82,92,75,91,92,89,95,100,86])).toEqual(92);
    })
  })