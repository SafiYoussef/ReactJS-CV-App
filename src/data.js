var data = {
  header: {
    firstName: "Youssef",
    lastName: "SAFI",
    dateofB: "19 février 1995",
    placeofB: "Sidi Slimane, Maroc",
    email: "youssef.safi.95@gmail.com",
    phone: "(+212) 07 70 98 29 00",
    address: "DR JBIRET LOUED BP 529, SIDI SLIMANE, MAROC, 14 200.",
    permis: "Permis de conduire - B",
    github: "SafiYoussef",
    avatar: "./img/picture2.png"
  },
  sections: [
    {
      id: "s1",
      type: "skills",
      title: "COMPÉTENCES",
      content: [
        {
          label: "Java",
          score: 70
        },
        {
          label: "EDI/EAI",
          score: 60
        },
        {
          label: "React",
          score: 90
        },
        {
          label: "Angular",
          score: 80
        },
        {
          label: "Symfony 4",
          score: 80
        },
        {
          label: "Laravel",
          score: 65
        },
        {
          label: "API Platform",
          score: 80
        },
        {
          label: "Linux",
          score: 70
        },
        {
          label: "Forensics",
          score: 51
        },
        {
          label: "Docker",
          score: 85
        },
        {
          label: "kubernetes",
          score: 65
        }
      ]
    },
    {
      id: "s2",
      type: "edu",
      title: "ÉDUCATION",
      content: [
        {
          degree: "Master",
          deration: "2016-2018",
          description: "Master en Sécurité des Systèmes d'Information",
          at: "École Nationale des Sciences Aappliquées - Kénitra"
        },
        {
          degree: "Licence Professionnelle",
          deration: "2015-2016",
          description:
            "L.P en Systèmes d'Information et Génie Logiciel",
          at: "Faculté des Sciences Dhar El Mahraz - Fès"
        },
        {
          degree: "Diplôme Universitaire de Technologie",
          deration: "2013-2015",
          description: "D.U.T en Administration des Systèmes de Réseaux",
          at: "Ecole Supérieure de Technologie - Safi"
        },
        {
          degree: "BACCALAURÉAT",
          deration: "2013",
          description: "BACCALAURÉAT en Sciences Mathématiques (option A)",
          at: "Lycée Amir My Abdallah - Sidi Slimane"
        }
      ]
    },
    {
      id: "s3",
      title: "EXPÉRIENCES PROFESSIONNELLES",
      type: "exp",
      content: [
        {
          title: "20-01-2020",
          description: "Auto Entrepreneur / Développeur Full Stack - à distance"
        },
        {
          title: "07-01-2019 à 13-01-2020",
          description: "Ingénieur Logiciel chez OPSVOX - Casablanca"
        },
        {
          title: "18-03-2018 à 18-05-2018",
          description: "Stage en Sécurité chez ILEM GROUP - Casablanca"
        },
        {
          title: "18-09-2016 à 25-07-2018",
          description: "Développeur Web Freelance chez HCH Professionals - à distance"
        },
        {
          title: "20-04-2016 à 20-06-2016",
          description: "Stage de fin d'études chez HOW - Rabat"
        },
        {
          title: "20-04-2015 à 13-06-2015",
          description: "Stage de fin d'études chez CompInfo - Kénitra"
        },
        {
          title: "01-07-2014 à 30-09-2014",
          description: "Stage d'Initiation chez Certifia - Rabat"
        }
      ]
    },
    {
      id: "s4",
      type: "proj",
      title: "PROJETS",
      content: [
        {
          title: "R&D - Déploiement automatique des solutions Open Source dans un cluster K8S",
          description: "Symfony 4, API Platform, React, Kong, Keycloak, Docker, K8S"
        },
        {
          title: "Automatisation des rapports de sécurité",
          description: "Laravel 5, WAF Log files, Linux Bash Scripting"
        },
        {
          title: "Application Mobile de traitement d'image",
          description: "Android, OpenCV"
        },
        {
          title:
            "Création d'une plateforme pédagogique",
          description:
            "Bootstrap, JSF, Spring DI, PrettyFaces, BigBlueButton, Hibernate"
        },
        {
          title:
            "Création d'un portail pour le Conseil Scientifique Local de Sidi Slimane",
          description: "Bootstrap, Wordpress"
        },
        {
          title:
            "Développement d'un portail pour la Direction du Ministère de la Culture de Kénitra",
          description: "PHP, Bootstrap, Ajax"
        },
        {
          title: "Création de site Web pour l'école supérieure de technologie de Safi",
          description: "PHP, Bootstrap, Ajax"
        }
      ]
    },
    {
      id: "s5",
      title: "CAPACITÉ LINGUISTIQUE",
      type: "lang",
      content: [
        {
          lang: "Français",
          level: 3
        },
        {
          lang: "Anglais",
          level: 4
        }
      ]
    },
    {
      id: "s6",
      type: "hob",
      title: "LOISIRS",
      content: [
        {
          imgUrl: "./img/it-security.png",
          title: "Sécurité"
        },
        {
          imgUrl: "./img/music.png",
          title: "Musique"
        },
        {
          imgUrl: "./img/web-p.png",
          title: "Programmation"
        },
        {
          imgUrl: "./img/travel.png",
          title: "Voyages"
        }
      ]
    }
  ]
};

module.exports = data;
