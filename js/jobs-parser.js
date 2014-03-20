$(function() {
  $('[data-jobs]').each(function(index) {
    var category = $(this).data('jobs');

    $.get('http://newton.newtonsoftware.com/career/CareerAtomFeed.action?clientId=8a42a12b3e686c7c013e6be2c20e7384', function (data) {
      window.jobs = data;
      $('.jobs-container').html("");  
      switch(category) {
        case "central":
          displayCentralJobs();
          break;
        case "campus":
          displayCampusJobs();
          break;
        case "internship":
          displayInternships();
          break;
      }
    });
  });
});

function displayCentralJobs() {
  $(window.jobs).find("entry").has("newton\\:department:contains(Central Office)").each(function(index) {
    $('.jobs-container').append(jobTemplate($(this)));
  });
}

function displayInternships() {
  $(window.jobs).find("entry").has("newton\\:location:contains(Internships)").each(function(index) {
    $('.jobs-container').append(jobTemplate($(this)));
  });
}

function jobTemplate(entry) {
  return $("<li></li>").append($("<a></a>").attr("href", entry.find("link").attr("href")).text(entry.find("title").text()));
}

function displayCampusJobs() {
  campuses = [];

  //add campuses
  $(window.jobs).find("entry").has("newton\\:department:contains(Campus)").each(function(index) {
    var entry = $(this);
    var campus_name = entry.find("newton\\:department").text();
    
    if($.grep(campuses, function(e){ return e.name == campus_name; }).length == 0) {
      campuses.push({name: campus_name, jobs: []});
    }

    $.grep(campuses, function(e){ return e.name == campus_name; })[0].jobs.push(entry);    
  });

  //sort campuses because they might not be coming in alphabetical order
  campuses.sort(compare);

  //put future locations at the top
  $(window.jobs).find("entry").has("newton\\:location:contains(Future Locations)").each(function(index) {
    var entry = $(this);
    var campus_name = "Future Locations"
    
    if($.grep(campuses, function(e){ return e.name == campus_name; }).length == 0) {
      campuses.unshift({name: campus_name, jobs: []});
    }

    $.grep(campuses, function(e){ return e.name == campus_name; })[0].jobs.push(entry);
  });
  
  campuses.forEach(function(campus) {
    $('.jobs-container').append(campusTemplate(campus));

    campus.jobs.forEach(function(job) {
      campusHTML.after(jobTemplate(job));
    });
  });
}

function campusTemplate(campus) {
  return campusHTML = $("<li></li>").text(campus.name);
}

function compare(a,b) {
  if (a.name < b.name)
     return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}