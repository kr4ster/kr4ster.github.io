(function() {
	$(document).ready(function() {
		$.get('http://census.soe.com/get/ps2/world_event?type=METAGAME')
		.success(function() {
			return;
		});
	});
})();