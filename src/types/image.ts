export type Pixel = [number, number, number, number];
export type Image = Pixel[][];

export interface IsolatedPixel {
	x: number;
	y: number;
	color: Pixel;
}
