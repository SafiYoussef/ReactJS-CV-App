import React, { Component } from "react";
import Section from "./CV/section";
import Header from "./CV/header";

var data = {
  header: {
    firstName: "Youssef",
    lastName: "SAFI",
    dateofB: "19th-Feb-2018",
    placeofB: "Sidi Slimane",
    email: "youssef.safi.95@gmail.com",
    phone: "(+212) 07 70 98 29 00",
    address: "DR JBIRET LOUED BP 529, SIDI SLIMANE, MOROCCO, 14 200.",
    permis: "Driving Licence - B",
    github: "SafiYoussef",
    avatar: "./img/user.png"
  },
  sections: [
    {
      id: "s1",
      type: "skills",
      title: "SKILLS",
      content: [
        {
          label: "Laravel 5",
          score: 80
        },
        {
          label: "Bootstap v4",
          score: 70
        },
        {
          label: "Forensics",
          score: 75
        },
        {
          label: "ReactJS",
          score: 50
        },
        {
          label: "Java, C, C++",
          score: 60
        },
        {
          label: "Android",
          score: 80
        },
        {
          label: "Linux/Unix",
          score: 65
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
          description:
            "2nd year Student Researcher in Security of Information Systems",
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
          title: "18-03-2018 to 18-05-2018 (2 Months)",
          description: "Internship in Security at ILEM GROUP - Casablanca"
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
          title: "Automation of Security Reports",
          description: "Laravel 5, WAF Log files, Linux Bash Scripting"
        },
        {
          title:
            "Creation of an education platform and integration of BigBlueButton",
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
            "Seeting up a portal for Kénitra's Directorate of the Ministry of Culture",
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

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header {...data.header} />
          {data.sections.map(section => (
            <Section key={section.id} {...section} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
