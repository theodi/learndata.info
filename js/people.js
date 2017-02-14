function getPeople(type,destination) {
        console.log("In here");
        $.getJSON( "../team/training_team.json", function( data ) {
            people = data[type];
            for (r=0;r<people.length;r++) {
                person = people[r];
                getPersonData(person,destination);
            }
        })
        .error(function() {
            console.log("error");
        });
}

function getPersonData(person,destination) {
    console.log(person);
     $.getJSON( "http://contentapi.theodi.org/"+person["name"]+".json")
            .done(function(data) {
                        name = data.title;
                        console.log(name);
                        role = person.specialism;
                        if (!person.specialism) role = data.details.role;
                        image_src="//static.theodi.org/assets/training/avatar.gif";
                        if (data.details.image) image_src = data.details.image.versions.square;
                        outputPerson(destination,name,role,image_src);
            })
            .fail(function() {
                        console.log('fail');
                        image_src="//static.theodi.org/assets/training/avatar.gif";
                        name = person.name.replace("-"," ");
                        name = name.capitalize();
                        console.log(name);
                        role = person.specialism;
                        outputPerson(destination,name,role,image_src);
            });
}

function outputPerson(destination,name,role,image_src) {
    block = '';
    block += '                <div class="col-xs-12 col-sm-3">';
    block += '                    <div class="single_teacher_profile">';
    block += '                        <div class="teacher_thumb">';
    block += '                            <img src="'+image_src+'" alt="">';             
    block += '                        </div>';
    block += '                        <div class="single_teacher_details_info">';
    block += '                            <h5>'+name+'</h5>';
    block += '                            <p>'+role+'</p>';
    block += '                        </div>';
    block += '                    </div>';
    block += '                </div>';
    $('#'+destination).append(block);
}