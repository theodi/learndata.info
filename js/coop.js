$( document ).ready(function() {
    addCourses();
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

function addCourses() {
	renderCourse('Executives','courses_box_1','explorer','exec');
	renderCourse('Enterprise data owner','courses_box_1','practitioner','ddo');
	renderCourse('Data owners','courses_box_1','practitioner','do');
 	renderCourse('Data steward','courses_box_1','practitioner','ds'); 
    renderCourse('Technical data custodian','courses_box_1','practitioner','dc');  
  	renderCourse('Data user','courses_box_1','strategist','du');
  	renderCourse('Data analysts','courses_box_1','strategist','da');
  	renderCourse('Data scientists','courses_box_1','strategist','dsci');
    renderCourse('Data innovators','courses_box_1','pioneer','di'); 


    renderCourse('Executives','courses_box_2','explorer','exec');
	renderCourse('Enterprise data owner','courses_box_2','practitioner','ddo');
	renderCourse('Data owners','courses_box_2','practitioner','do');
 	renderCourse('Data stewards','courses_box_2','practitioner','ds'); 
    renderCourse('Techical data custodian','courses_box_2','practitioner','dc');  
  	renderCourse('Data user','courses_box_2','strategist','du');
  	renderCourse('Data analysts','courses_box_2','strategist','da');
  	renderCourse('Data scientists','courses_box_2','strategist','dsci');
    renderCourse('Data innovators','courses_box_2','pioneer','di'); 
}

function renderCourse(title,element,framework,id) {
    block =  '<div class="'+framework+' price_rating_area course_filter course_skills" id="'+id+'">';
    block += '   <div class="price">';
    block += '      <span class="course_title">'+title+'</span>';
    block += '   </div>';
    block += '</div>';
    $("#"+element).append(block);
}
