$( document ).ready(function() {
    item = {};
    item.image = "http://bd7a65e2cb448908f934-86a50c88e47af9e1fb58ce0672b5a500.r32.cf3.rackcdn.com/uploads/assets/bd/4d/53bd4d36d0d46207ff00003a/20131202_december_banner.jpg";
    item.title = "Open data in a day";
    item.date = "2017-05-09T08:30:00Z";
    item.desc = "New to open data? Get started with this one-day interactive course run by our experts.<br/>You will learn how to discover, use and describe the benefits of open data, and how they impact your organisation.";
    item.price = "TBC";
    renderIreItem(item,"calendar");

    item = {};
    item.image = "http://bd7a65e2cb448908f934-86a50c88e47af9e1fb58ce0672b5a500.r32.cf3.rackcdn.com/uploads/assets/ac/27/58ac2744f362be08a800000a/30494056154_fc2b9b6faa_k.jpg";
    item.title = "Getting started with Ireland’s open data technical framework";
    item.date = "2017-05-10T08:30:00Z";
    item.desc = "Discover Ireland's open data technical framework and learn how to implement it within your own open data projects. This highly practical course will give participants hands-on experience in publishing open data according to the framework.";
    item.price = "TBC";
    renderIreItem(item,"calendar");

    item = {};
    item.image = "http://bd7a65e2cb448908f934-86a50c88e47af9e1fb58ce0672b5a500.r32.cf3.rackcdn.com/uploads/assets/ac/1e/58ac1e3af362be08a8000008/CQOlNJMWoAEDT7U.jpg";
    item.title = "Getting started with data anonymisation";
    item.date = "2017-05-11T08:30:00Z";
    item.desc = "Protecting priacy is of critical importance to any data worker. This course introduces the core topics of data privacy as well as a tool to help classify different types of data. By the end of the course participants will also be aware of the regulations that affect data privacy and be able to apply them to their own data.";
    item.price = "TBC";
    renderIreItem(item,"calendar");

    item = {};
    item.image = "http://bd7a65e2cb448908f934-86a50c88e47af9e1fb58ce0672b5a500.r32.cf3.rackcdn.com/uploads/assets/ac/21/58ac21fa1f986a086a000007/8207490946_27b14b91cc_b.jpg";
    item.title = "Getting started with data analytics and visualisation";
    item.date = "2017-05-12T08:30:00Z";
    item.desc = "The course will offers a highly practical introduction in data analysis and visualisation. By the end of the course participants will have structured, cleaned, analysed and visualised a dataset.";
    item.price = "TBC";
    renderIreItem(item,"calendar");
});

function renderIreItem(item,location) {
    datetime = new Date(item.date);
    course = "test";
    image = item.image;
    desc = item.desc;
    price = item.price;
    url = "#";
    html = '<div class="col-md-4 col-xs-12">';
         html += '<div class="single_courses">';
            html += '<div class="single_courses_thumb">';
                html += '<img class="img_'+course+'" src="'+image+'" alt="" style="height: 200px;">';
                html += '<div class="hover_overlay">';
                    html += '<div class="links">';
                        html += '<a class="magnific-popup imglink_'+course+'" href="'+image+'"><i class="fa fa-search" aria-hidden="true"></i></a>';
                    html += '</div>';
                html += '</div>';
            html += '</div>';
            html += '<div class="single_courses_desc">';
                html += '<div class="title">';
                    html += '<a href="'+item.web_url+'" target="_blank"><h5>' + item.title + '</h5></a>';
                    html += '<div class="date_time">';
                        html += '<div class="date">';
                            html += '<p><span class="icon-calendar"></span>&nbsp;'+datetime.format('dS mmmm yyyy')+'</p>';
                        html += '</div>';
                        html += '<div class="time">';
                            html += '<p><span class="icon-clock"></span>&nbsp;'+datetime.format('HH:MM')+'</p>';
                        html += '</div>';
                    html += '</div>';
                    html += '<p class="desc_'+course+'">'+desc+'</p>';
                html += '</div>';
                html += '<div class="price_rating_area">';
                    html += '<div class="price">';
                        html += '<span>£'+price+'</span>';
                    html += '</div>';
                    html += '<div class="seat">';
                        html += '<a href="'+url+'" class="courseButton bookButton btn btn-primary" style="border: 1px solid #333; position: relative; bottom: 10px;">Book</a>';
                        //html += '<i class="fa fa-users" aria-hidden="true"><span>50</span></i>';
                    html += '</div>';
                html += '</div>';
            html += '</div>';
        html += '</div>';
    html += '</div>';
    $("#" + location).append(html);
}