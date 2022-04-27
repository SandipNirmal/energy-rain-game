export const delay = async (time: number): Promise<void> => {
	return new Promise((res) => {
		setTimeout(() => {
			res();
		}, time);
	});
};

export const GOLDEN_RATIO = 1.618;