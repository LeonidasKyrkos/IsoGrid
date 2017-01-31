export const animations = {
	spin: (square) => {
		square.transform = square.transform || [1, 0, 0, 1, 0, 0];

		square.transform[2] += 0.001;
	}
}