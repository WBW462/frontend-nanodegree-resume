//First JSON (Biography) here:
var bio = {
	"name" : "Bill Whitlow",
	"role" : "Web Developer",
//Contact infomation here:
	"contacts" : {
		"mobile" : "407-748-2934",
		"email" : "nwhitlow@bellsouth.net",
		"linkedin" : "https://www.linkedin.com",
		"github" : "WBW462",
		"twitter" : "@WBW462",
		"location" : "Orlando, Florida"
},
	"welcomeMessage" : "Welcome, please check out my resume.",
	"skills" : ["Programming", "CompTIA A+ Certified", "JS", "Top Secret Clearance (Inactive)", "Detail Oriented"],
	"biopic" : "images/rsz_img_2319.png",

	"display" : function(){
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

//Top and bottom contact infomation shown here:
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts, #footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts, #footerContacts").append(formattedEmail);
var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
$("#topContacts, #footerContacts").append(formattedLinkedin);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts, #footerContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts, #footerContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts, #footerContacts").append(formattedLocation);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBiopic);

//Breaking out skills here:
	    if(bio.skills.length > 0) {
	        $("#header").append(HTMLskillsStart);
	        var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	        $("#skills").append(formattedSkills);
	        formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	        $("#skills").append(formattedSkills);
	        formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	        $("#skills").append(formattedSkills);
	        formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	        $("#skills").append(formattedSkills);
	        formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
	        $("#skills").append(formattedSkills);
		}
	}
};
bio.display();

//Second JSON (Education) here:
var work = {
	"jobs": [
		{
		"employer": "AT&T",
		"title": "Network Operations Manager",
		"location": "Orlando, Florida, United States",
		"dates": "2000-2015",
		"description": "Coordinate movement of work forces to respond to constantly fluctuating installation and repair needs."
		},

		{
		"employer": "BellSouth Telecommunications, Inc.",
		"title": "Services Technician",
		"location": "Sanford, Florida, United States",
		"dates": "1998-2000",
		"description": "Provided face to face services to the public."
		},

		{
		"employer": "Crystals International, Inc.",
		"title": "Production Scheduling/Inventory Manager",
		"location": "Plant City, Florida, United States",
		"dates": "1997-1998",
		"description": "Manufactured quality food products."
		},

		{
		"employer": "MCI WorldCom",
		"title": "Microsoft Network Help Desk Technician",
		"location": "Pinellas Park, Florida, United States",
		"dates": "1996-1997",
		"description": "Helped folks with billing issues and accessing the web."
		},

		{
		"employer": "Trans World Moving System",
		"title": "Sales Manager/Moving Consultant",
		"location": "Anchorage, Alaska, United States",
		"dates": "1995-1996",
		"description": "Provided moving solutions to military and commercial interests."
		},

		{
		"employer": "United States Air Force",
		"title": "Quality Assurance Weapons Standardization Section Noncommissioned Officer in Charge/Manager",
		"location": "Elmendorf Air Force Base, Alaska, United States",
		"dates": "1986-1995",
		"description": "Ensured fighter aircrafts weapons and systems worked when required and not earlier."
		},

		{
		"employer": "United States Air Force",
		"title": "Aircraft Weapons Loading Team Chief ",
		"location": "Naval Air Station Keflavik, Iceland",
		"dates": "1985-1986",
		"description": "Kept an eye on the Soviets under the northern lights."
		}
	],
}
work.display = function() {
for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
//Combined employer and job title information on same line:
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerPlusTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerPlusTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();

//Third JSON (Work) here:
projects.display = function() {
	var projects = {
		"projects": [
			{
			"title": "Project 1, Portfolio",
			"dates": 2015,
			"description": "Responsive website, built to display images, descriptions and links to each of the portfolio projects throughout the Front-End Web Developer Nanodegree course.",
			"images": ["images/rsz_1pictures_057_2.png" /*picture of rollercoaster*/, "images/rsz_budweiser_creatures_005.png" /*picture of budweiser creatures*/]
			},

			{
			"title": "Project 2, Online Resume",
			"dates": 2015,
			"description": "Clean code written to apply knowledge of variables, objects, JSON, functions and control flow to successfully solve challenges.",
			"images": ["images/rsz_1img_1961.png" /*picture of avocados*/, "images/rsz_capture.png" /*picture of website*/]
			}
		],
	}
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectsTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectsTitle);
		var formattedProjectsDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectsDates);
		var formattedProjectsDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectsDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedProjectsImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedProjectsImages);
			}
		}
	}
};
projects.display();

//Fourth JSOn (Projects) here:
var education = {
	"schools": [
		{
		"name": "Valencia Community College",
		"location": "Orlando, Florida, United States",
		"degree": "BS",
		"majors": ["Information Technology"],
		"dates": "2009",
		"url": "http://valenciacollege.edu/"
		},

		{
		"name": "Community College of The Air Force",
		"location": "Maxwell Air Force Base, Alabama, United States",
		"degree": "AAS",
		"majors": ["Aircraft Armament Systems Technology"],
		"dates": "2000",
		"url": "http://www.au.af.mil/au/barnes/ccaf/index.asp"
		}
	],

	"onlineCourses": [
		{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"date": "2015",
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
		},

		{
		"title": "Front-End Web Developer",
		"school": "Udacity",
		"date": "2015",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	],
}
education.display = function(){
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
//Combined school names and degree on same line:		
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNamePlusDegree = formattedName + formattedDegree;
		var formattedURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
		$(".education-entry:last").append(formattedNamePlusDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajors);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
	}

	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {		
	$("#education").append(HTMLschoolStart);	

//Combined online school and title on same line:
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineTitlePluseSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineTitlePluseSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineUrl);
	}
};
education.display();

//Activate the Internationalize button
function inName(name) {
	name = $("#name").text();
	name = name.trim().split(" ");
	console.log(name);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name[0] +" "+name[1];

}

$("#main").prepend(internationalizeButton);

// Insert GOOGLE MAP
$("#mapDiv").append(googleMap);