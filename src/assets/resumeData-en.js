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
    description: 'I build frontend applications for and with CODEZILLA\'s clients, focusing on quality, user-friendliness and accessibility.',
    extra: [{
      title: 'SDB Groep',
      startDate: '01-03-2022',
      endDate: '31-10-2022',
      description: 'For SDB Groep I\'ve worked on the Planning application, that care providers can use to automate their (capacity) planning and rostering.'
    }, {
      title: 'EPEX spot',
      startDate: '14-11-2022',
      endDate: null,
      description: 'For EPEX Spot I\'m building a new application for traders and market operators on the European power exchange'
    }]
  }, {
    title: 'Frontend Developer',
    place: 'Medicore (Tenzinger)',
    startDate: '01-06-2016',
    endDate: '31-12-2021',
    description: 'As a frontend developer I worked on the Medicore products, e.g. the care provider portal, electronic patient record and patient portal. These applications aim to make Dutch healthcare easier, more accessible and more efficient for care providers and patients. As of January 1st, 2021, Medicore is part of Tenzinger.',
    extra: [{
      title: 'Works Council Medicore/Tenzinger',
      startDate: '01-07-2017',
      endDate: '01-06-2021'
    }]
  }, {
    title: 'Web consultant',
    place: 'CCS B.V.',
    startDate: '14-11-2014',
    endDate: '31-05-2016',
    description: 'Web consultancy was the implementation and configuration of Connect, a frontoffice application enabling insurers, intermediaries and consumers to file and manage their policies and claims online.'
  }, {
    title: 'Student assistant',
    place: 'Utrecht University',
    startDate: '01-02-2013',
    endDate: '30-04-2013',
    description: 'I was a student assistant for the BSc.-level course \'Game Design\'. Work included grading exams and assignments, and answering questions from students.'
  } ],

  education: [ {
    title: 'MSc. Human Centered Multimedia',
    place: 'University of Amsterdam',
    startDate: '01-09-2013',
    endDate: '31-07-2014',
    note: 'cum laude',
    description: 'HCM focuses on how people perceive and use technology, and how they are affected by it. Focus areas are interactive systems design, (visual) search and knowledge management.',
    extra: [{
      title: 'MSc. Thesis',
      place: 'ZEEF',
      startDate: '01-04-2014',
      endDate: '31-07-2014',
      description: 'I wrote my MSc. thesis at ZEEF. My research focused on combining content curation with search algorithms, and the added value of this for end users.'
    }]
  }, {
    title: 'BSc. Information Science',
    place: 'Utrecht University',
    startDate: '01-09-2009',
    endDate: '28-02-2013',
    description: 'Information Science links science, IT and people. During my studies I focused on cognition, UX engineering, designing user-friendly software and software development methodologies'
  }, {
    title: 'Pre-university education',
    place: 'Pallas Athene College, Ede',
    startDate: '01-09-2004',
    endDate: '31-07-2009',
    description: 'I finished pre-university education in five years rather than six, an option my school offered as a pilot in 2004'
  } ],

  skills: {
    programmingLanguages: {
      name: 'Programming languages',
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
      name: 'Languages',
      items: [{
        name: 'Dutch',
        rating: 7
      }, {
        name: 'English',
        rating: 6
      }]
    }
  },

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
