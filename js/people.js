function getPeople(type,destination) {
        console.log("In here");
        $.getJSON( "team/training_team.json", function( data ) {
            people = data[type];
            for (r=0;r<people.length;r++) {
                person = people[r];
                outputPerson(person,destination);
            }
        })
        .error(function() {
            console.log("error");
        });
}

function outputPerson(person,destination) {
    block = '';
    block += '                <div class="col-xs-12 col-sm-3">';
    block += '                    <div class="single_teacher_profile">';
    block += '                        <div class="teacher_thumb">';
    block += '                            <img src="img/teacher-img/team-member-1.jpg" alt="">';             
    block += '                        </div>';
    block += '                        <div class="single_teacher_details_info">';
    block += '                            <h5>'+person["name"]+'</h5>';
    block += '                            <p>'+person["specialism"]+'</p>';
    block += '                        </div>';
    block += '                    </div>';
    block += '                </div>';
    $('#'+destination).append(block);
}