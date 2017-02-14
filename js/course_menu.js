$( document ).ready(function() {
    $('#courses').removeClass('hidden');
    var courses, instances;
    $.getJSON( "https://odi-courses-data.herokuapp.com/courses.php", function( data ) {
                courses = data.results;
                renderMenu(courses);

        })
        .error(function() {
                console.log('failed');
                $.getJSON( "http://contentapi.theodi.org/with_tag.json?type=course", function( data ) {
                        courses = data.results;
                        renderMenu(courses);
                });
        });
});

function renderMenu(courses) {
    var done = [];
    var list = '';
    courses = reOrderCourses(courses);
    for (r=0;r<courses.length;r++) {
        course = courses[r];
        coursename = course["slug"];
        title = course["title"];
        if (!done[coursename]) {
            list += '<li><a href="/courses/view-course.html#'+coursename+'">'+title+'</a></li>';
            done[coursename] = true;
        }
    }
    $(".courses_list_menu").append(list);
}