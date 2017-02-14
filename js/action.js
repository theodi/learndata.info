$( document ).ready(function() {
    processListeners();
});

var filter_on = false;
function processListeners() {
	$("div.hexagon").click(
		function() {
			current = $(this).parent().css("opacity");
			if (current == 1 && filter_on) {
				$('.hex2').css("opacity",1);
				$('.course_filter').css("display","block");
				filter_on = false;
			} else {
				$('.hex2').css("opacity",0.25);
				$(this).parent().css("opacity",1);
				$('.course_filter').css("display","none");
			
				courses_all = this.className
				courses = courses_all.split(' ');
				for (i = 0; i < courses.length; i++) { 
    				$('#'+courses[i]).css("display","block");
				}
				
				filter_on = true;
			}
    	}
	);
	$("div.key_hex").hover(
		function() {
			var names = this.className;
			var type = names.split(' ')[2];
   			$('.hex2').css("opacity",0.25);
   			$('.'+type).parent().css("opacity",1);
    	}, function() {
      		$('.hex2').css("opacity",1);
	  	}
	);
	$("div.course_filter").hover(
		function() {
			if (!filter_on) {
				var id = this.id;
   				$('.hex2').css("opacity",0.25);
   				$('.'+id).parent().css("opacity",1);
   			}
    	}, function() {
    		if (!filter_on) {
      			$('.hex2').css("opacity",1);
      		}
	  	}
	);
}
