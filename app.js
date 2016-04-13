(function() {
	var metagame_event_list = {
		1 : 'Capture Intar within the time limit',
		2 : 'Capture Esamir within the time limit',
		3 : 'Capture Amerish within the time limit',
		4 : 'Capture Hossin within the time limit'
	};

	$(document).ready(function() {
		var alert = null;

		$.get('http://census.soe.com/get/ps2/world_event?type=METAGAME')
		.success(function(data, status, jqxhr) {
			$.each(data.world_event_list, function() {
				if (this.metagame_event_state === '135' && this.world_id === '17') {
					if (!alert || this.timestamp > alert.timestamp) {
						alert = this;
					}
				}
			});

			if (alert) {
				var ends = new Date(alert.timestamp * 1000 + (1000 * 60 * 90));
				if (new Date().getTime() < ends.getTime()) {
					$('.jq-description').text(metagame_event_list[alert.metagame_event_id]);

					$('.jq-timer')
						.countdown(ends)
						.on('update.countdown', function(event) {
							$(this).text(event.strftime('%H:%M:%S'));
						})
						.on('finish.countdown', function(event) {
							$('.jq-countdown').fadeOut();
						});

					$('.jq-countdown').fadeIn();
				}
			}
		});
	});
})();

1460421862840
1460413651000