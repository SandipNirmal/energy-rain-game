import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/SandipNirmal/energy-rain-game.git',
		user: {
			name: 'Sandip Nirmal', 
			email: 'sandipnirmal@icloud.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
