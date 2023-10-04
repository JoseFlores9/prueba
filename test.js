import { getImageMatrix, minValue } from "./flores-jose.js";

const testMinValue = () => {
  const testValues = [
    [1, 3, 1],
    [5,7,5,9,7],
    [1,9,3,1,7,4,6,6,7]
  ]

  testValues.map(value => {
    console.log(`${value} ==> ${minValue(value)}\n`)
  })
}

const testGetImageMatrix = async () => {
  const testImgPaths = [
    "./testImages/3x3.png",
    "./testImages/4x4.png",
    "./testImages/10x10.png"
  ]
  for (const imgPath of testImgPaths) {
    const matrix = await getImageMatrix(imgPath)
    console.log(`image = "${imgPath}"\n\n${JSON.stringify(matrix)}\n\n`)
  }
}

testMinValue()
testGetImageMatrix()