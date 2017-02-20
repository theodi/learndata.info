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
	renderCourse('Open Data in a day','courses_box_1','explorer','odd');
	renderCourse('Practical data management','courses_box_1','practitioner','odm');
	renderCourse('Open data publication','courses_box_1','practitioner','odpub');
 	renderCourse('Visualising open data','courses_box_1','practitioner','odv'); 
    renderCourse('Open data science','courses_box_1','practitioner','ods');  
  	renderCourse('Building success in open data','courses_box_1','strategist','bs');
  	renderCourse('Managing risk in open data','courses_box_1','strategist','mr');
  	renderCourse('Business innovation workshop','courses_box_1','strategist','biw');
    renderCourse('Practical leadership in open data','courses_box_1','pioneer','plod'); 
    renderCourse('Data driven decisions','courses_box_1','pioneer','odpol');

    renderCourse('Open Data in a day','courses_box_2','explorer','odd');
	renderCourse('Practical data management','courses_box_2','practitioner','odm');
	renderCourse('Open data publication','courses_box_2','practitioner','odpub');
 	renderCourse('Visualising open data','courses_box_2','practitioner','odv'); 
    renderCourse('Open data science','courses_box_2','practitioner','ods');  
  	renderCourse('Building success in open data','courses_box_2','strategist','bs');
  	renderCourse('Managing risk in open data','courses_box_2','strategist','mr');
  	renderCourse('Business innovation workshop','courses_box_2','strategist','biw');
    renderCourse('Practical leadership in open data','courses_box_2','pioneer','plod'); 
    renderCourse('Data driven decisions','courses_box_2','pioneer','odpol');
	
	renderCourse('What is open data?','elearning_box','explorer','mod1');
	renderCourse('Unlocking value from open data','elearning_box','explorer','mod2');
	renderCourse('Open data. Agent of change.','elearning_box','strategist','mod3');
	renderCourse('Why do we need to license?','elearning_box','explorer','mod4');
	renderCourse('What makes quality open data?','elearning_box','practitioner','mod5');
	renderCourse('Measureing success for open data','elearning_box','strategist','mod6');
	renderCourse('Why should we worry about sustainability?','elearning_box','explorer','mod7');
	renderCourse('Geting to grips with platforms','elearning_box','practitioner','mod8');
	renderCourse('Choosing the right format for open data','elearning_box','practitioner','mod9');
	renderCourse('How useful is my data?','elearning_box','strategist','mod10');
	renderCourse('How to clean your data','elearning_box','practitioner','mod11');
	renderCourse('Finding hidden data on the web','elearning_box','practitioner','mod12');
	renderCourse('Linking up the web of data','elearning_box','practitioner','mod13');

}

function renderCourse(title,element,framework,id) {
    block =  '<div class="'+framework+' price_rating_area course_filter" style="padding: 5px 5px 2px; margin-bottom: 6px;" id="'+id+'">';
    block += '   <div class="price">';
    block += '      <span style="font-size: 16px; font-weight: 500;">'+title+'</span>';
    block += '   </div>';
    block += '</div>';
    $("#"+element).append(block);
}