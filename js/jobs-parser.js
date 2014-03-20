$(function() {
  $('[data-jobs]').each(function(index) {
    var category = $(this).data('jobs');
    var container = $(this);

    if (window.jobs) {
      showJobs(container, category);
    }
    else {
      $.get('http://newton.newtonsoftware.com/career/CareerAtomFeed.action?clientId=8a42a12b3e686c7c013e6be2c20e7384', function (data) {
        window.jobs = data;
        $('[data-jobs-loader]').hide();
        showJobs(container, category);
      });
    }
  });
});

function showJobs(container, category) {
  switch(category) {
    case "central":
      displayCentralJobs(container);
      break;
    case "campus":
      displayCampusJobs(container);
      break;
    case "future":
      displayFutureJobs(container);
      break;
    case "internship":
      displayInternships(container);
      break;
  }
}

function displayCentralJobs(container) {
  $(window.jobs).find("entry").has("newton\\:department:contains(Central Office)").each(function(index) {
    container.append(jobTemplate($(this)));
  });
}

function displayInternships(container) {
  $(window.jobs).find("entry").has("newton\\:location:contains(Internships)").each(function(index) {
    container.append(jobTemplate($(this)));
  });
}

function displayFutureJobs(container) {
  container.append("<li class='job-title'><h6>Future Locations</h6></li>");

  $(window.jobs).find("entry").has("newton\\:location:contains(Future Locations)").each(function(index) {
    container.append(jobTemplate($(this)));
  });
}

function displayCampusJobs(container) {
  var campuses = [];

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

  campuses.forEach(function(campus) {
    container.append(campusTemplate(campus));

    campus.jobs.forEach(function(job) {
      container.append(jobTemplate(job));
    });
  });
}

function jobTemplate(entry) {
  return $('<li></li>').append($("<a></a>").attr("href", entry.find("link").attr("href")).text(entry.find("title").text()));
}

function campusTemplate(campus) {
  return $("<li class='job-title'></li>").html('<h6>' + campus.name + '</h6>');
}

function compare(a,b) {
  if (a.name < b.name)
     return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}
