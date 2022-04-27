export type ENERGY_ITEM = {
	color: string;
	points: number;
	speed: number;
};

export const EnergyItems = {
	green: {
		color: 'radial-gradient(circle at 65% 15%, white 1px, #A3E635 3%, #15803D 60%, #A3E635 100%)',
		points: 30,
		speed: 0.2
	},
	blue: {
		color: 'radial-gradient(circle at 65% 15%, white 1px, #C4B5FD 3%, #9333EA 60%, #C4B5FD 100%)',
		points: 20,
		speed: 0.18
	},
	red: {
		color: 'radial-gradient(circle at 65% 15%, white 1px, #FDBA74 3%, #EA580C 60%, #FDBA74 100%)',
		points: 10,
		speed: 0.16
	},
	gray: {
		color: 'gray',
		points: -10,
		speed: 0.3
	}
};

export const colors = ['green', 'red', 'blue'];

export const APP_STATES = {
	INIT: 'Init',
	STARTED: 'Started',
	GAME_OVER: 'Game Over'
};
