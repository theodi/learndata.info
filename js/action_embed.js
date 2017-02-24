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
				$('.course_filter').css("display","inline-block");
				filter_on = false;
			} else {
				$('.hex2').css("opacity",0.25);
				$(this).parent().css("opacity",1);
				$('.course_filter').css("display","none");
			
				courses_all = this.className
				courses = courses_all.split(' ');
				for (i = 0; i < courses.length; i++) { 
    				$('#'+courses[i]).css("display","inline-block");
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
	$("li.course_filter").hover(
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
	renderCourse('Open Data in a day','classroom','all_courses','explorer','odd');
	renderCourse('Practical data management','classroom','all_courses','practitioner','odm');
	renderCourse('Open data publication','classroom','all_courses','practitioner','odpub');
 	renderCourse('Visualising open data','classroom','all_courses','practitioner','odv'); 
    renderCourse('Open data science','classroom','all_courses','practitioner','ods');  
  	renderCourse('Building success in open data','classroom','all_courses','strategist','bs');
  	renderCourse('Managing risk in open data','classroom','all_courses','strategist','mr');
  	renderCourse('Business innovation workshop','classroom','all_courses','strategist','biw');
    renderCourse('Practical leadership in open data','classroom','all_courses','pioneer','plod'); 
    renderCourse('Data driven decisions','classroom','all_courses','pioneer','odpol');
	
	renderCourse('1. What is open data?','essentials','all_courses','explorer','mod1');
	renderCourse('2. Unlocking value from open data','essentials','all_courses','explorer','mod2');
	renderCourse('3. Open data. Agent of change.','essentials','all_courses','strategist','mod3');
	renderCourse('4. Why do we need to license?','essentials','all_courses','explorer','mod4');
	renderCourse('5. What makes quality open data?','essentials','all_courses','practitioner','mod5');
	renderCourse('6. Measureing success for open data','essentials','all_courses','strategist','mod6');
	renderCourse('7. Why should we worry about sustainability?','essentials','all_courses','explorer','mod7');
	renderCourse('8. Geting to grips with platforms','essentials','all_courses','practitioner','mod8');
	renderCourse('9. Choosing the right format for open data','essentials','all_courses','practitioner','mod9');
	renderCourse('10. How useful is my data?','essentials','all_courses','strategist','mod10');
	renderCourse('11. How to clean your data','essentials','all_courses','practitioner','mod11');
	renderCourse('12. Finding hidden data on the web','essentials','all_courses','practitioner','mod12');
	renderCourse('13. Linking up the web of data','essentials','all_courses','practitioner','mod13');
}

function renderCourse(title,type,element,framework,id) {
	if (type=='classroom') {
		maintype = 'courses';
	} else {
		maintype = 'eLearning';
	}
	block = '<li class="home-module course_filter" class="'+framework+'" id="'+id+'" style="display: inline-block;">';
	block += '<div class="module module-light module-highlight-1 module-colour-5 ">';
	block += '<a href="#" target="_top">';
	block += '<div class="text">';
	block += '<h1 class="module-heading">'+title+'</h1>';
	block += '<p class="category">'+maintype+'</p>';
	block += '</div>';
	block += '</a>';
	block += '</div>'
	block += '</li>'
	$("#"+element).append(block);

}