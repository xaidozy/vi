let dm = 'vi.k.vu';
let NAME = $nameVar();
window.open('https://' + dm + NAME.target, '_self');

function $nameVar() {
	let o = {
		current: '',
		domain: '',
		target: '',
		host: '',
		path: '',
		search: '',
		archor: '',
		standardJump: false,
	};
	let current = window.location.href;
	o.current = current;
	let index = current.indexOf(
		'/',
		current.indexOf(':') + 3,
	);
	o.domain = current.substring(0, index);
	o.target = current.substring(index);
	o.host = o.domain.substring(o.domain.indexOf(':') + 3);
	let hash = window.location.hash;
	o.standardJump = hash.startsWith('#/');
	if (o.standardJump) {
		o.target = hash.substring(1);
		$setPathTarget(o.target);
	}

	let xx = window.location.pathname;
	xx = xx.startsWith('/') ? xx.substring(1) : xx;
	if (xx.endsWith('.html'))
		xx = xx.substring(0, xx.length - 5);
	if (xx.endsWith('.htm'))
		xx = xx.substring(0, xx.length - 4);
	o.path = xx;

	let x = window.location.search;
	o.search =
		!x.startsWith('?') || x.length < 2
			? ''
			: x.substring(1);

	return o;
}
