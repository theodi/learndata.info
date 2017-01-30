currentHash = "";
savedCourses = {};
function checkHash() {
    var hash = window.location.hash.substr(1);  
    if (hash != currentHash) {
        renderSingleCourse(savedCourses);
    }
}

$( document ).ready(function() {
    $('#courses').removeClass('hidden');
    var courses, instances;
    $.getJSON( "https://odi-courses-data.herokuapp.com/courses.php", function( data ) {
                courses = data.results;
                renderSingleCourse(courses);
    })
    .error(function() {
        console.log('failed');
        $.getJSON( "http://contentapi.theodi.org/with_tag.json?type=course", function( data ) {
            courses = data.results;
            renderSingleCourse(courses);
        });
    });
    window.setInterval(checkHash, 100);
});

function renderSingleCourse(courses) {
    savedCourses = courses;
    var hash = window.location.hash.substr(1);
    currentHash = hash;
    for (r=0;r<courses.length;r++) {
        course = courses[r];
        coursename = course["slug"];
        if (coursename == hash) {
            outputSingleCourse(course);
        }
    }
}

function outputSingleCourse(course) {
    course["extra"] = getExtraData(coursename);
    $('.course-title').html(course["title"]);
    description = course["details"]["description"];
    description = description.replace('<script src="//static.theodi.org/assets/training-blocks.js"></script>','');
    description = description.replace('getInstances();','');
    $('.courses_description_content').html(description);
    $('#course-duration').html(course["details"]["length"]);
    $('#course-price').html(course["extra"]["price"]);
    if (course["extra"]["materials"]) {
        $('#course-resources').attr('href',course["extra"]["materials"]);
        $('#course-resources').click(function() {
            window.open(course["extra"]["materials"],"_blank",'','');
        });
        $('#course-resources').parent().parent().show();
    } else {
        $('#course-resources').parent().parent().hide();
    }

}