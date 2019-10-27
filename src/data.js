var data = {
  header: {
    firstName: "Youssef",
    lastName: "SAFI",
    dateofB: "Feb 19th, 1995",
    placeofB: "Sidi Slimane, Morocco",
    email: "youssef.safi.95@gmail.com",
    phone: "(+212) 07 70 98 29 00",
    address: "DR JBIRET LOUED BP 529, SIDI SLIMANE, MOROCCO, 14 200.",
    permis: "Driving Licence - B",
    github: "SafiYoussef",
    avatar: "./img/picture.png"
  },
  sections: [
    {
      id: "s1",
      type: "skills",
      title: "SKILLS",
      content: [
        {
          label: "Symfony 4",
          score: 80
        },
        {
          label: "API Platform",
          score: 70
        },
        {
          label: "Laravel",
          score: 65
        },
        {
          label: "Java",
          score: 60
        },
        {
          label: "Bootstap 4",
          score: 85
        },
        {
          label: "ReactJS",
          score: 80
        },
        {
          label: "Linux",
          score: 65
        },
        {
          label: "Forensics",
          score: 75
        },
        {
          label: "Docker",
          score: 55
        },
        {
          label: "kubernetes",
          score: 55
        }
      ]
    },
    {
      id: "s2",
      type: "edu",
      title: "EDUCATION",
      content: [
        {
          degree: "Master",
          deration: "2016-2018",
          description: "Master Degree in Security of Information Systems",
          at: "National School of Applied Sciences - Kénitra"
        },
        {
          degree: "Bachelor",
          deration: "2015-2016",
          description:
            "Bachelor Degree in Information Systems and Software Engineering",
          at: "Faculty of Sciences Dhar El Mahraz - Fez"
        },
        {
          degree: "University Degree of Technology",
          deration: "2013-2015",
          description: "U.D.T Degree in Administration of Network Systems",
          at: "Superior School of Technology - Safi"
        },
        {
          degree: "High School",
          deration: "2015-2016",
          description: "High School Degree in Mathematical Sciences (option A)",
          at: "Amir My Abdallah High School - Sidi Slimane"
        }
      ]
    },
    {
      id: "s3",
      title: "PROFESSIONAL EXPERIENCES",
      type: "exp",
      content: [
        {
          title: "From 07-01-2019",
          description: "Software Engineer at OPSVOX - Casablanca"
        },
        {
          title: "18-03-2018 to 18-05-2018 (2 Months)",
          description: "Internship in Security at ILEM GROUP - Casablanca"
        },
        {
          title: "20-02-2018 to 20-08-2018 (6 Months)",
          description:
            "Internship of Initiation to Scientific Research at ENSA - Kénitra"
        },
        {
          title: "18-09-2016 to 25-07-2018 (1 Y. & 11 M.)",
          description: "Freelance Web Developer at HCH Professionals - Online"
        },
        {
          title: "20-04-2016 to 20-06-2016 (2 Months)",
          description: "End-of-Study Internship at HOW - Rabat"
        },
        {
          title: "20-04-2015 to 13-06-2015 (2 Months)",
          description: "End-of-Study Internship at CompInfo - Kénitra"
        },
        {
          title: "01-07-2014 to 30-09-2014 (2 Months)",
          description: "Introductory Internship at Certifia - Rabat"
        }
      ]
    },
    {
      id: "s4",
      type: "proj",
      title: "PROJECTS",
      content: [
        {
          title: "R&D - Auto Deployment of Open Source Solutions in K8S Cluster",
          description: "Symfony 4, API Platform, React, Kong, Keycloak, Docker, K8S"
        },
        {
          title: "Automation of Security Reports",
          description: "Laravel 5, WAF Log files, Linux Bash Scripting"
        },
        {
          title: "Image Processing App",
          description: "Android, OpenCV"
        },
        {
          title:
            "Creation of an Education Platform",
          description:
            "Bootstrap, JSF, Spring DI, PrettyFaces, BigBlueButton, Hibernate"
        },
        {
          title:
            "Creation of a portal for the Scientific Local Council of Sidi Slimane",
          description: "Bootstrap, Wordpress"
        },
        {
          title:
            "Developing a portal for Kénitra's Directorate of the Ministry of Culture",
          description: "PHP, Bootstrap, Ajax"
        },
        {
          title: "Website Creation for Safi's Superior School of Technology",
          description: "PHP, Bootstrap, Ajax"
        }
      ]
    },
    {
      id: "s5",
      title: "LANGUAGES ABILITY",
      type: "lang",
      content: [
        {
          lang: "Arabic",
          level: 5
        },
        {
          lang: "French",
          level: 3
        },
        {
          lang: "English",
          level: 4
        }
      ]
    },
    {
      id: "s6",
      type: "hob",
      title: "HOBBIES",
      content: [
        {
          imgUrl: "./img/it-security.png",
          title: "IT Security"
        },
        {
          imgUrl: "./img/music.png",
          title: "Music"
        },
        {
          imgUrl: "./img/web-p.png",
          title: "Programing"
        },
        {
          imgUrl: "./img/travel.png",
          title: "Traveling"
        }
      ]
    }
  ]
};

module.exports = data;
