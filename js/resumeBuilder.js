
 var bio = {
    "name": "Mehdi Ben Daali",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+216 21 495 045",
        "email": "bendaalimehdi@gmail.com",
        "facebook": "https://www.facebook.com/mehdi.bendaali",
        "location": "El May Djerba, Tunisia"
    },
    "welcomeMsg": "Welcome to my first page!",
    "skills": [
        "JavaScript",
        "HTML",
        "CSS"
    ],
    "bioPic": "image/mehdi.png"
};
bio.display = function (){
    var headerName = HTMLheaderName.replace('%data%', this.name);
	var headerRole = HTMLheaderRole.replace('%data%', this.role);
    var bioPic = HTMLbioPic.replace('%data%', this.bioPic);
    var welcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMsg);
	
	
	$('#header').prepend(headerName);
    $('#header').prepend(headerRole);
    $('#header').append(bioPic);
    $('#header').append(welcomeMsg);
	$('#header').append(HTMLskillsStart);
	
	for (var i=0; i<bio.skills.length ; i++){
		var skill = HTMLskills.replace('%data%', this.skills[i]);
		$('#skills').append(skill);
	};
	
	/*for (var i=0; i<bio.contacts.length ; i++){
		var contactGeneric = HTMLcontactGeneric.replace('%data%', this.contacts[i]);
		$('topContacts').append(contactGeneric);
		$('#footerContacts').append(contactGeneric);*/
		for (var contact in this.contacts){
        var data = this.contacts[contact];
        var contactGeneric = HTMLcontactGeneric.replace('%contact%', contact);
        contactGeneric = contactGeneric.replace('%data%', data);
        $('#topContacts').append(contactGeneric);
        $('#footerContacts').append(contactGeneric);
	};
};
var education = {
    "schools": [
        {
            "name": "El May",
            "location": "El May, Djerba",
            "degree": "High School Diploma",
            "majors": [
                "Technical Science"
            ],
            "dates": 2011,
            "url": "#"
        },
        {
            "name": "Faculty of sciences of Monastir",
            "location": "El Monastir, Tunisia",
            "degree": "Bachelor",
            "majors": [
                "Electornique electotecnics and automatic"
            ],
            "dates": 2015,
            "url": "http://www.fsm.rnu.tn"
        }
    ],
    "onlineCourses": [
        {
            "title": "javascript basics",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com"
        }
    ]
};
education.display = function (){
	for (var i=0; i<education.schools.length ; i++){
		var school = this.schools[i];
        $("#education").append(HTMLschoolStart);
		
		var schoolName = HTMLschoolName.replace("%data%", school.name);
        var schoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var schoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var schoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
	
		$(".education-entry:last").append(schoolName);
		$(".education-entry:last").append(schoolDegree);
		$(".education-entry:last").append(schoolDates);
		$(".education-entry:last").append(schoolLocation);
		$(".education-entry:last").append(schoolMajor);
	};
		 
	$("#education").append(HTMLonlineClasses);
	for (var i=0; i<education.onlineCourses.length ; i++){
		var onlineCourse = education.onlineCourses[i];
		
		
		var onlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
		var onlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
		var onlineDate = HTMLonlineDates.replace("%data%", onlineCourse.dates);
		var onlineURL =  HTMLonlineURL.replace("%data%", onlineCourse.url);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(onlineTitle);	
		$(".education-entry:last").append(onlineSchool);	
		$(".education-entry:last").append(onlineDate);	
		$(".education-entry:last").append(onlineURL );
	};
			
};
			
		bio.display();
		education.display();
		
	$("#mapDiv").append(googleMap);
	
			
		

	