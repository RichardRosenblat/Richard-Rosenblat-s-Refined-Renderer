/**
 * A pixel in an image.
 * A pixel is represented as an array of 4 numbers from 0 to 255:
 * [red, green, blue, alpha(transparency)].
*/
export type Pixel = [number, number, number, number];

/**
 * A matrix of pixels representing an image.
 * The first index is the row, the second index is the column.
 * The pixel is represented as an array of 4 numbers: [r, g, b, a].
*/
export type ImageMatrix = Pixel[][];