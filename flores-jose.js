
/**
 * Para la primera pregunta se toman en cuenta los siguientes supuestos
 * - es un arreglo de numeros enteros positivos
 */
/**
 * @param {Array<Number>} Arreglo de números enteros
 * @returns {Number} Número entero
 */
export const minValue = (numArray) => {
  //Se eliminan los valores duplicados
  const arrayWithoutDuplicates = numArray.filter((item, index) => numArray.indexOf(item) === index)
  let sum = 0

  //Se ordena el arreglo de manera descendente
  arrayWithoutDuplicates.sort().reverse()

  arrayWithoutDuplicates.map((value, index) => {
    sum = sum + value * 10 ** index
  })

  return sum
}

/**
 * Se asume que las imagenes vienen siempre en formato jpeg o png
 * Se utilizó la libreria jimp debido a que dió los mejores resultados, aunque tiene el problema de que
 * es pesada debido a la gran cantidad de funcionalidades de tratamiento de imagenes que contiene
 */

import Jimp from "jimp"
/**
 * @param {String} Ruta de o url de la imagen
 * @returns {Promise<Array<Array<String>>>}
 */
export const getImageMatrix = async (imagePath) => {
  //Se carga la imagen
  const image = await Jimp.read(imagePath)
  const {width, height} = image.bitmap
  const matrix = []

  //Se descartan las imagenes que no cumplen con el requisito de tamanio
  if (width > 100 || height > 100) {
    console.log("The image exceeds the maximum size of 100x100 pixels")

    return []
  }

  //Se recorren los pixeles y se analiza el color
  for (let i = 0; i < width; i++) {
    const row = []

    for (let j = 0; j < height; j++){
      const {r, g, b} = Jimp.intToRGBA(image.getPixelColor(j, i))

      if (r > 245 && g > 245 && b > 245){
        row.push("W")
      }
      else if (r < 10 && g < 10 && b < 10) {
        row.push("B")
      }
      else row.push("O")
    }
    matrix.push(row)
  }

  return matrix
}
