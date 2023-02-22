$(document).ready(function() {
	$(window).scroll(function() {
		$(window).scrollTop() >= 30 ? $(".top_bar").css({
			top: 0
		}) : $(".top_bar").css({
			top: 30
		})
	})
});
