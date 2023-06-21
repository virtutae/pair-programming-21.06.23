const calculateAverages = require("./calculateAverages");



test("calculateAverages correctly returns postive and negative averages", () => {
    expect(calculateAverages([10, -100, 20, -200, -3])).toBe({ averageOfPositives: 15, averageOfNegatives: -101 });
})

test("calculateAverages  returns null when no averages are possible", () => {
    expect(calculateAverages([-100, -200, -3])).toBe({ averageOfPositives: null, averageOfNegatives: -101 });
    expect(calculateAverages([100, 200, 3])).toBe({ averageOfPositives: 101, averageOfNegatives:null});
})

test("calculateAverages that ignores 0s", () => {
    expect(calculateAverages([10, 0, -100, 20, -200, -3, 0])).toBe({ averageOfPositives: 15, averageOfNegatives: -101 });
    expect(calculateAverages([0,0,0])).toBe({ averageOfPositives: null, averageOfNegatives: null });
})







