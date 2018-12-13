export default function countIslands(image: number[][]): number {
  const visited = image.map(row => row.map(_ => false));
  let numberOfIslands = 0;
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      const v = image[i][j];
      if (!visited[i][j]) {
        const val = visitAll(image, visited, i, j);
        if (val > 0) {
          numberOfIslands += 1;
        }
      }
    }
  }
  return numberOfIslands;
}

function visitAll(image: number[][], visited: boolean[][], i: number, j: number): number {
  if (!image[i][j] || visited[i][j]) {
    return 0;
  }

  visited[i][j] = true;
  const adjacentCoordinates = getAdjacents(i, j, image.length - 1, image[i].length - 1);

  return (
    1 +
    adjacentCoordinates.reduce((acc, [_i, _j]) => {
      const subIslandSize = visitAll(image, visited, _i, _j);
      return acc || subIslandSize;
    }, 0)
  );
}

function getAdjacents(i: number, j: number, iMax: number, jMax: number): [number, number][] {
  return [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1]
  ].filter(([_i, _j]) => inBounds(_i, _j, iMax, jMax)) as [number, number][];
}

function inBounds(i: number, j: number, iMax: number, jMax: number): boolean {
  return i >= 0 && i <= iMax && j >= 0 && j <= jMax;
}
