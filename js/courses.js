function getInstances(courses) {
        var instances;
        console.log("In here");
        $.getJSON( "https://odi-courses-data.herokuapp.com/query.php", function( data ) {
             instances = data.results;
             $("#courses").html("");
             console.log(courses);
             console.log(instances);
             processCoursesFlat(courses,instances);
        })
        .error(function() {
                $.getJSON( "http://contentapi.theodi.org/with_tag.json?type=course_instance", function( data ) {
                        console.log("error");
                        instances = data.results;
                        $("#courses").html("");
                        processCoursesFlat(courses,instances);
                });
        });
}


$( document ).ready(function() {
    $('#courses').removeClass('hidden');
    var courses, instances;
    $.getJSON( "https://odi-courses-data.herokuapp.com/courses.php", function( data ) {
                courses = data.results;
                instances = getInstances(courses);

        })
        .error(function() {
                console.log('failed');
                $.getJSON( "http://contentapi.theodi.org/with_tag.json?type=course", function( data ) {
                        courses = data.results;
                        instances = getInstances(courses);
                });
        });
});

var done = [];

$.ajaxSetup ({
    // Disable caching of AJAX responses
    cache: false
});

function processCoursesFlat(courses,instances) {
    courses = reOrderCourses(courses);
    for (r=0;r<courses.length;r++) {
        course = courses[r];
        coursename = course["slug"];
        if (!done[coursename]) {
            processCourse(course,instances);
            done[coursename] = true;
        }
    }
}

function processCourses(courses,instances) {
    occurs = [];
    var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    instances.sort(function(a,b) {
        return new Date(a.details["date"]) - new Date(b.details["date"]);
    });
    for (p=0;p<instances.length;p++) {
        instance = instances[p];
        coursename = instance.details["course"];
        if (!done[coursename]) {
            for (q=0;q<courses.length;q++) {
                course = courses[q];
                if (course["slug"] == coursename) {
                    done[coursename] = true;
                    processCourse(course,instances);
                }   
            }
        }
    }
    for (r=0;r<courses.length;r++) {
        course = courses[r];
        coursename = course["slug"];
        if (!done[coursename]) {
            processCourse(course,instances);
            done[coursename] = true;
        }
    }
}


function processCourse(course,instances) {
    block = '';
    title = course["title"];
    link = course["web_url"];
    subtitle = course.details["excerpt"];
    coursename = course["slug"];
    if (subtitle.length > 140) {

        subtitle = subtitle.substring(0,140);
        subtitle = subtitle.substring(0,subtitle.lastIndexOf(' '));
        subtitle = subtitle + "...<a style='color: #333; text-decoration: underline; font-size: 0.9em;' href='" + link + "'>read more</a>";
    } 
    duration = course.details["length"];
    key = course["slug"];
    price = course["extra"]["price"];
    level = course["extra"]["level"];
    framework = course["extra"]["framework"];
    image = course["details"]["description"];
    if (image.indexOf('src="') > 0) {
        image = image.substring(image.indexOf('src="')+5,image.length);
        image = image.substring(0,image.indexOf('"'));
    } else {
        image = "../img/course-img/odi_course_default.jpg";
    }
    occurs = getCourseInstances(instances,key);
    block += '    <div class="col-xs-12">';
    block += '        <div class="single_courses course-list">';
    block += '            <div class="single_courses_thumb">';
    block += '                 <img src="'+image+'" alt="">';
    block += '                    <div class="hover_overlay">';
    block += '                        <div class="links">';
    block += '                            <a class="magnific-popup" href="'+image+'" onerror="this.src=\'../img/course-img/softwareengineer.jpg\'"><i class="fa fa-search" aria-hidden="true"></i></a>';
    block += '                        </div>';
    block += '                    </div>';
    block += '                </div>';
    block += '                <!-- Single Courses Image Area End -->';
    block += '                <div class="single_courses_desc">';
    block += '                    <!-- Single Courses Title Area End -->';
    block += '                    <div class="title">';
    block += '                        <a href="view-course.html#'+coursename+'"><h5>'+title+'</h5></a>';
    block += '                        <p>'+subtitle+'</p>';
    block += '                        <p><i class="fa fa-user" aria-hidden="true"></i> '+level+'</p>';
    block += '                    </div>';
    block += '                    <!-- Single Courses Blog Title Area End -->';
    block += '                    <div class="'+framework+' price_rating_area">';
    block += '                        <div class="price">';
    block += '                            <span>'+price+'</span>';
    block += '                        </div>';
    block += '                        <div class="seat">';
    block += renderInstances(occurs,title);
    //block += '                            <i class="fa fa-users" aria-hidden="true"><span>16</span></i>';
    block += '                        </div>';
    block += '                    </div>';
    block += '                </div>';
    block += '            </div>';
    block += '        </div>';
    $("#odicourses").append(block);
}

function getCourseInstances(instances,key) {
    occurs = [];
    var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    instances.sort(function(a,b) {
        return new Date(a.details["date"]) - new Date(b.details["date"]);
    });
    for (j=0;j<instances.length;j++) {
        instance = instances[j];
        if (instance.details["course"] == key) {
            ins = [];
            ins["date"] = instance.details["date"];
            ins["price"] = instance.details["price"];
            ins["location"] = instance.details["location"];
            ticketsAvailable = "true";
            if (instance.details["ticketsAvailable"]) {
                ticketsAvailable = instance.details["ticketsAvailable"];
            }
            if (instance.details["location"]) {
                if (instance.details["location"].indexOf('London') > 0 || instance.details["location"].indexOf('65 Clifton Street') > 0) {
                    ins["location"] = "London";
                } else {
                    parts = instance.details["location"].split(",");
                    ins["location"] = parts[parts.length - 2].trim();
                }
            }
            ins["url"] = instance.details["url"];
            now = new Date();
            run = new Date(ins["date"]);
            day = run.getDate();
      month = run.getMonth();
            suffix = "th";
            if (day == 1 || day == 21 || day == 31) {
                suffix = "st";
            } 
            if (day == 2 || day == 22) {
                suffix = "nd";
            }
            if (day == 3 || day == 23) {
                suffix = "rd";
            }
            ins["displayDate"] = day + suffix + " " + monthNames[month];
            ins["shortDate"] = (day < 10 ? '0' : '') + day + (month < 9 ? '0' : '') + (month+1) + run.getFullYear()
            // Removed the ticket availability check
            if (run > now) {
                occurs.push(ins);
            }
        }
    }
    return occurs;
}

function renderInstances(occurs,title) {
    var running = "";
    if (typeof occurs[0] == 'undefined') {
        return '<a class="courseButton btn btn-primary" href="mailto:training@theodi.org?subject=Interest in ' + title + ' course" style="border: 1px solid #333;">Register interest</a>';
    }
    ocr = occurs[0];
    return ocr["displayDate"] + ' ('+ocr["location"] + ')&nbsp;<a href="'+ocr["url"]+'" class="courseButton bookButton btn btn-primary" style="border: 1px solid #333;" onclick="onBookButton(\''+title+'\',\''+ocr["shortDate"]+'\')">Book</a>';
}
