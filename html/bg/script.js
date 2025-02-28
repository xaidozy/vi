window.onload = function () {
	Particles.init({
		selector: '.background',
	});
};
var particles = Particles.init({
	selector: '.background',
	color: ['#ff5555', '#55ff55'],
	connectParticles: true,
	sizeVariations: 6,
	speed: 0.4,
	minDistance: 120,
	maxParticles: (function () {
		return Math.floor((window.innerWidth * window.innerHeight) / 9600);
	})(),
	responsive: [
		/* {
			breakpoint: 0,
			options: {
				color: ['#faebd7', '#03dac6', '#ff0266'],
				maxParticles: 43,
				connectParticles: false,
			},
		}, */
	],
});
