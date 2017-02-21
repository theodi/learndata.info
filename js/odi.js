function getPosition(coursename) {
    switch (coursename) {
        case "open-data-day":
            return 0;
        case "finding-and-preparing-data-workshop":
            return 1;
        case "visualising-data-workshop":
            return 2;
        case "open-data-in-practice-3days":
            return 3;
        case "open-data-science":
            return 4;
        case "business-innovation-workshop":
            return 5;
        case "managing-risk-with-open-data":
            return 6;
        case "practical-leadership-in-open-data":
            return 7;
        case "train-the-trainer":
            return 8;
        return -1;
    }
}
function getExtraData(coursename) {
    data = {};
    data.framework = "explorer";
    data.price = "From £199";
    data.level = "Intermediate";
    switch (coursename) {
        case "open-data-day":
            data.framework = "explorer";
            data.level = "Introductory";
            data.materials = "http://training.theodi.org/InADay"
            break;
        case "finding-and-preparing-data-workshop":
            data.framework = "practitioner";
            data.price = "From £149";
            data.level = "Introductory";
            break;
        case "visualising-data-workshop":
            data.framework = "practitioner";
            data.price = "From £149";
            break;
        case "open-data-in-practice-3days":
            data.framework = "practitioner";
            data.price = "From £699";
            data.materials = "http://training.theodi.org/InPractice"
            break;
        case "open-data-science":
            data.framework = "practitioner";
            data.price = "From £199";
            data.materials = "http://training.theodi.org/ods"
            break;
        case "open-data-strategy":
            data.framework = "strategist";
            data.price = "From £149";
            break;
        case "business-innovation-workshop":
            data.framework = "strategist";
            data.price = "From £149";
            break;
        case "managing-risk-with-open-data":
            data.framework = "strategist";
            data.price = "From £149";
            break;
        case "practical-leadership-in-open-data":
            data.framework = "strategist";
            data.price = "From £149";
            break;
        case "train-the-trainer":
            data.framework = "other";
            data.price = "From £1400";
            data.level = "Advanced";
        return data;
    }
    return data;
}

function reOrderCourses(courses) {
    var output = [];
    for (r=0;r<courses.length;r++) {
        course = courses[r];
        coursename = course["slug"];
        course["extra"] = getExtraData(coursename);
        position = getPosition(coursename);
        if (position < 0) {} else {
            output[getPosition(coursename)] = course;
        }
    }
    return output;
}