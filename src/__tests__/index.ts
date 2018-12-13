import countIslands from "../";

function dump(image: number[][]) {
  const output = image.map(row => row.map(v => (v === 0 ? "≈" : "█")).join("")).join("\n");
  console.log(output);
}

describe("KataCountIslands", () => {
  it("should return zero when there are no islands", function() {
    var image = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    dump(image);
    expect(countIslands(image)).toBe(0);
  });

  it("should find single island", function() {
    var image = [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]];
    dump(image);
    expect(countIslands(image)).toBe(1);
  });

  it("should handle example case", function() {
    var image = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    dump(image);
    expect(countIslands(image)).toBe(2);
  });
});
