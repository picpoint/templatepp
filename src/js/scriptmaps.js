var map;

DG.then(function () {
	map = DG.map('map', {
		center: [45.04, 41.96],
		zoom: 16
	});
	DG.marker([45.04, 41.96]).addTo(map);
});