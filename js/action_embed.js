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
	renderCourse('Open data in a day','classroom','all_courses','explorer','odd','http://theodi.org/courses/open-data-day');
	renderCourse('Practical data management','classroom','all_courses','practitioner','odm','#');
	renderCourse('Open data publication','classroom','all_courses','practitioner','odpub','http://theodi.org/courses/finding-and-preparing-data-workshop');
 	renderCourse('Visualising open data','classroom','all_courses','practitioner','odv','http://theodi.org/courses/visualising-data-workshop'); 
    renderCourse('Open data science','classroom','all_courses','practitioner','ods','http://theodi.org/courses/open-data-science');  
  	renderCourse('Building success in open data','classroom','all_courses','strategist','bs','#');
  	renderCourse('Managing risk in open data','classroom','all_courses','strategist','mr','http://theodi.org/courses/managing-risk-with-open-data');
  	renderCourse('Business innovation workshop','classroom','all_courses','strategist','biw','http://theodi.org/courses/business-innovation-workshop');
    renderCourse('Practical leadership in open data','classroom','all_courses','pioneer','plod','http://theodi.org/courses/practical-leadership-in-open-data'); 
    renderCourse('Data driven decisions','classroom','all_courses','pioneer','odpol','#');

    addEssentials('all_courses');
}

function renderCourse(title,type,element,framework,id,link) {
	if (type=='classroom') {
		maintype = 'courses';
	} else {
		maintype = 'eLearning';
	}
	block = '<li class="home-module course_filter" class="'+framework+'" id="'+id+'" style="display: inline-block;">';
	block += '<div class="module module-light module-highlight-1 module-colour-5 ">';
	block += '<a href="'+link+'" target="_top">';
	block += '<div class="text">';
	block += '<h1 class="module-heading">'+title+'</h1>';
	block += '<p class="category">'+maintype+'</p>';
	block += '</div>';
	block += '</a>';
	block += '</div>'
	block += '</li>'
	$("#"+element).append(block);

}

function addEssentials(element){
  $( document ).ready(function() {
    $.getJSON( "../data/essentials.json", function( data ) {
        for(i=0;i<data.length;i++) {
        	number = i+1;
        	course = data[i];
        	title = number + ": " + course.title;
        	renderCourse(title,"essentials",element,"",course._id,"https://www.europeandataportal.eu/elearning/en/" + course._id);
        }
    });
  });
}