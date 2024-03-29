const data = {

  personalia: {
    name: 'Matthijs Rijken',
    title: 'Msc.',
    jobTitle: 'Frontend Developer',
    summary: '',
    city: 'Maarssen',
    linkedinUrl: 'https://linkedin.com/in/mrijken'
  },

  experience: [ {
    title: 'Frontend Developer',
    place: 'CODEZILLA',
    startDate: '01-01-2022',
    endDate: null,
    description: 'Voor en met klanten van CODEZILLA bouw ik aan frontend applicaties waarbij kwaliteit, gebruiksvriendelijkheid en toegankelijkheid hoog in het vaandel staan.',
    extra: [{
      title: 'EPEX Spot',
      startDate: '14-11-2022',
      endDate: null,
      description: 'Voor EPEX Spot bouw ik een nieuwe applicatie voor handelaars en market operators op de Europese energiemarkt.'
    }, {
      title: 'SDB Groep',
      startDate: '01-03-2022',
      endDate: '31-10-2022',
      description: 'Voor de SDB Groep werkte ik aan de Planning applicatie, waarmee zorginstellingen hun (capaciteits)planning en roostering kunnen vergemakkelijken.'
    }]
  }, {
    title: 'Frontend Developer',
    place: 'Medicore (Tenzinger)',
    startDate: '01-06-2016',
    endDate: '31-12-2021',
    description: 'Als frontend developer werkte ik aan de Medicore producten, zoals ons EPD, zorgverlenerportaal en patiëntportaal. Deze applicaties maken de zorg makkelijker, efficiënter en beter te begrijpen voor zorgverleners en patiënten. Ook heb ik meegewerkt aan de transitie naar een microservice-based ecosysteem, waarbij we gebruik maken van micro-frontends. Per 1 januari 2021 is Medicore onderdeel van Tenzinger',
    extra: [{
      title: 'Ondernemingsraad Medicore/Tenzinger',
      startDate: '01-07-2017',
      endDate: '01-06-2021'
    }]
  }, {
    title: 'Frontend Developer',
    place: 'Rockstars IT',
    startDate: '01-06-2016',
    endDate: '01-06-2017',
    description: 'Mijn eerste jaar bij Medicore was via Rockstars IT, waar ik een programma heb gevolgd op het gebied van persoonlijke ontwikkeling/zelfmanagement.'
  }, {
    title: 'Web consultant',
    place: 'CCS B.V.',
    startDate: '14-11-2014',
    endDate: '31-05-2016',
    description: 'Web consultancy omvatte het implementeren en configureren van Connect, een frontoffice-applicatie die verzekeraars, tussenpersonen en consumenten hun verzekeringen en schademeldingen online laat beheren. Ook heb ik tooling ontwikkeld om klantspecificaties automatisch te vertalen naar interactieve formulieren in Connect.'
  }, {
    title: 'Studentassistent',
    place: 'Universiteit Utrecht',
    startDate: '01-02-2013',
    endDate: '30-04-2013',
    description: 'Voor het bachelorvak Game-ontwerp ben ik studentassistent geweest. Mijn werkzaamheden waren het nakijken van tentamens, beoordelen van opdrachten en vragen van studenten beantwoorden.'
  } ],

  education: [ {
    title: 'MSc. Human Centered Multimedia',
    place: 'Universiteit van Amsterdam',
    startDate: '01-09-2013',
    endDate: '31-07-2014',
    note: 'cum laude',
    description: 'HCM richt zich op hoe mensen technologie zien en gebruiken, en hoe ze erdoor worden beïnvloed. Focusgebieden zijn onder andere het ontwerpen van interactieve systemen, (visueel) zoeken en kennismanagement',
    extra: [{
      title: 'MSc. Thesis',
      place: 'ZEEF',
      startDate: '01-04-2014',
      endDate: '31-07-2014',
      description: 'Ik heb mijn Master thesis bij ZEEF geschreven. Mijn onderzoek richtte zich op het combineren van van zoekalgoritmes en content curation, en de toegevoegde waarde hiervan voor eindgebruikers.'
    }]
  }, {
    title: 'BSc. Informatiekunde',
    place: 'Universiteit Utrecht',
    startDate: '01-09-2009',
    endDate: '28-02-2013',
    description: 'Informatiekunde is de link tussen de wetenschap, IT, het bedrijfsleven en mensen. Mijn focus tijdens mijn studie lag op cognitie, user experience engineering, gebruiksvriendelijke systemen ontwerpen en het softwareontwikkelproces'
  }, {
    title: 'VWO N&G (oude stijl)',
    place: 'Pallas Athene College, Ede',
    startDate: '01-09-2004',
    endDate: '31-07-2009',
    description: 'Ik heb het VWO in vijf jaar afgerond, een optie die mijn school in 2004 voor het eerst aanbood.'
  } ],

  skills: {
    programmingLanguages: {
      name: 'Programmeertalen',
      items: [{
        name: 'Javascript',
        rating: 5
      }, {
        name: '(S)CSS',
        rating: 4
      }, {
        name: 'HTML',
        rating: 4
      }, {
        name: 'Python',
        rating: 2
      }, {
        name: 'PHP',
        rating: 2
      }]
    },
    frameworks: {
      name: 'Frameworks',
      items: [{
        name: 'React',
        rating: 5
      }, {
        name: 'Backbone',
        rating: 5
      }, {
        name: 'Marionette',
        rating: 5
      }, {
        name: 'Typescript',
        rating: 3
      }, {
        name: 'Material UI',
        rating: 3
      }, {
        name: 'Symfony',
        rating: 1
      }]
    },
    languages: {
      name: 'Talen',
      items: [{
        name: 'Nederlands',
        rating: 7
      }, {
        name: 'Engels',
        rating: 6
      }]
    }
  },

  skills2: {
    technical: [ 'Javascript', 'React', 'Backbone', 'Marionette', '(S)CSS' ],
    languages: [ 'Nederlands', 'Engels' ],
    work: [ 'Scrum', 'Kanban' ],
    personal: [ 'Communicatief', 'Gedreven', 'Betrouwbaar' ]
  }

};

// ResumeItem
//{
//  title: '',
//  place: '',
//  startDate: '',
//  endDate: '',
//  description: ''
//}

export default data;
