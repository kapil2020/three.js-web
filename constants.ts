import { Publication, Project, ExperienceItem, SkillCategory, Award, LeadershipItem, EducationItem, Referee } from './types';

export const EDUCATION: EducationItem[] = [
  {
    id: 'phd',
    degree: 'PhD in Infrastructure Design & Management',
    institution: 'Indian Institute of Technology Kharagpur',
    location: 'West Bengal, India',
    year: '2022–Present',
    thesis: 'Focus: Travel Behaviour, Mobility, and Air Quality',
    advisor: 'Prof. Arkopal Goswami',
    icon: 'fa-graduation-cap'
  },
  {
    id: 'mtech',
    degree: 'M.Tech in Transportation Engineering',
    institution: 'Indian Institute of Technology Roorkee',
    location: 'Uttarakhand, India',
    year: '2019–2021',
    thesis: 'Commuter Exposure to Air Pollution',
    advisor: 'Prof. Amit Agarwal',
    icon: 'fa-university'
  },
  {
    id: 'btech',
    degree: 'B.Tech in Civil Engineering (Honors)',
    institution: 'Rajasthan Technical University',
    location: 'Kota, India',
    year: '2015–2019',
    gpa: 'Top 5% of class',
    icon: 'fa-book'
  }
];

export const PUBLICATIONS: Publication[] = [
  // Journals
  { id:'trr-2026-segment', type:'Journal', year:2026, venue:'Transportation Research Record (TRR)', title:'Not all travellers think alike: Segmenting travel behaviour under air pollution exposure using a hybrid latent class and discrete choice approach', authors:'Meena, K. K., A.K. Goswami', status: 'In 2nd Review', tags:['Choice Modelling','Latent Class'] },
  { id:'trr-2025-drum', type:'Journal', year:2025, venue:'Transportation Research Record', title:'Dynamic Route Planning for Urban Green Mobility: Development of a Web Application Offering Sustainable Route Options to Commuters', authors:'Meena, K. K., A.K. Singh, A.K. Goswami', doi:'https://doi.org/10.1177/03611981251331011', html:'https://doi.org/10.1177/03611981251331011', tags:['Routing','AQI','Web App'], status: 'Published May 2025' },
  { id:'ijst-2025-bike', type:'Journal', year:2025, venue:'International Journal of Sustainable Transportation', title:'Modeling bicycle choice behavior and its potential health impact: Case of first/last mile access to suburban rail', authors:'B. S. Manoj, Meena, K. K., H. Panchal, G. Sharma, A.K. Goswami', doi:'https://www.tandfonline.com/doi/full/10.1080/15568318.2025.2572818', html:'https://www.tandfonline.com/doi/full/10.1080/15568318.2025.2572818', tags:['Cycling','Health'], status: 'Published Oct 2025' },
  { id:'stl-2025-tod', type:'Journal', year:2025, venue:'Sustainable Transport and Livability', title:'A prioritization framework to identify key attributes of transit-oriented development (TOD) using multi-criteria decision-making (MCDM) approach: an Indian context', authors:'B. S. Manoj, Meena, K. K., A.K. Goswami', doi:'https://doi.org/10.1080/29941849.2025.2516475', tags:['MCDM','TOD'], status: 'Published Jul 2025' },
  { id:'tranpol-2024', type:'Journal', year:2024, venue:'Transport Policy', title:'A review of air pollution exposure impacts on travel behaviour and way forward', authors:'Meena, K. K., A.K. Goswami', doi:'https://doi.org/10.1016/j.tranpol.2024.05.024', tags:['Review','Policy'], status: 'Published Aug 2024' },
  { id:'daj-2024', type:'Journal', year:2024, venue:'Decision Analytics Journal', title:'A machine learning approach for unraveling the influence of air quality awareness on travel behavior', authors:'Meena, K. K., D. Bairwa, A. Agarwal', doi:'https://doi.org/10.1016/j.dajour.2024.100459', tags:['ML','Behavior'], status: 'Published Jun 2024' },
  { id:'jth-2023', type:'Journal', year:2023, venue:'Journal of Transport & Health', title:'Perception of Commuters Towards Air Quality in Delhi', authors:'Meena, K. K., V. Singh, A. Agarwal', doi:'https://doi.org/10.1016/j.jth.2023.101643', tags:['Perception','Health'], status: 'Published Jun 2023' },
  { id:'uclim-2021', type:'Journal', year:2021, venue:'Urban Climate', title:'Travellers’ exposure to air pollution: A systematic review and future directions', authors:'V. Singh, Meena, K. K., A. Agarwal', doi:'https://doi.org/10.1016/j.uclim.2021.100901', tags:['Review','Exposure'], status: 'Published Jul 2021' },

  // Conferences
  { id:'trb-2026', type:'Conference', year:2026, venue:'TRB Annual Meeting 2026', title:'Not all travellers think alike: Segmenting travel behaviour under air pollution exposure using a hybrid latent class and discrete choice approach', authors:'Meena, K. K., A.K. Goswami', tags:['TRB','Accepted'] },
  { id:'trb-2026-walkability', type:'Conference', year:2026, venue:'TRB Annual Meeting 2026', title:'Developing an integrated walkability score using image-based feature extraction and user preferences', authors:'A. Singh, Meena, K. K., G. Sharma, A.K. Goswami, S. Mishra', tags:['TRB','Submitted'] },
  { id:'comsnets-2026', type:'Conference', year:2026, venue:'COMSNETS 2026', title:'A Hybrid Geostatistical and Deep Learning Framework for Urban Pollutant Concentration Prediction from Sparse Data', authors:'C. Gupta, A. Amitabh, Meena, K. K., A.K. Goswami', tags:['Deep Learning','Pollution'] },
  { id:'ctrg-2025', type:'Conference', year:2025, venue:'7th CTRG (SVNIT Surat)', title:'Dynamic route planning for urban green mobility', authors:'Meena, K. K., A.K. Singh, A.K. Goswami', tags:['Routing'] },
  { id:'easts-2025', type:'Conference', year:2025, venue:'EASTS 2025', title:'Assessing the air pollution exposure to school children in different modes of transport while commuting to school: A case of Kharagpur, India', authors:'A. Sumbhate, Meena, K. K., A.K. Goswami', tags:['School','Exposure', 'Accepted'] },
  { id:'wsstl-2025', type:'Conference', year:2025, venue:'WSSTL 2025 (IISc Bengaluru)', title:'A prioritization framework to identify key attributes of transit-oriented development (TOD)', authors:'B.S. Manoj, Meena, K. K., A.K. Goswami', tags:['TOD'] },
  { id:'tipce-2025', type:'Conference', year:2025, venue:'TIPCE, IIT Roorkee', title:'Accessibility assessment of urban public transit to key facilities through spatial analysis', authors:'R. Kodukulla, Meena, K. K., G. Sharma, A.K. Goswami', tags:['Accessibility', 'Accepted'] },
  { id:'energies-2025', type:'Conference', year:2025, venue:'Energies, AEEE India', title:'Air pollution exposure among Kolkata’s auto-rickshaw drivers: PM variability, health risks, and predictive modeling', authors:'S. Dasgupta, Meena, K. K., D. Majumdar, A.K. Goswami', tags:['Exposure','Auto-rickshaw', 'Accepted'] },
  { id:'uaa-2024-1', type:'Conference', year:2024, venue:'UAA 2024', title:'Impact of air pollution on informed decision-making for choice of a travel mode', authors:'Meena, K. K., R. Taneja, A. Agarwal', tags:['Decision Making', 'IEEE'] },
  { id:'iatbr-2024', type:'Conference', year:2024, venue:'IATBR 2024 (Vienna)', title:'Assessing the willingness to bicycle for the first mile to the Mumbai suburban rail', authors:'B.S. Manoj, Meena, K. K., et al.', tags:['Cycling','Mumbai'] },
  
  // Patents & Media
  { id:'patent-2025', type:'Patent', year:2025, venue:'In Process', title:'Personalized dynamic route planning system for sustainable urban mobility', authors:'Meena, K. K. and Arkopal Kishore Goswami', tags:['Patent'] },
  { id:'hindu-2025', type:'Media', year:2025, venue:'The Hindu', title:"IIT-KGP app helps commuters pick ‘greener’ routes on the road", authors:'Ashmita Gupta', html:'https://www.thehindu.com/sci-tech/energy-and-environment/iit-kgp-app-helps-commuters-pick-greener-routes-on-the-road/article69644558.ece', tags:['Feature','DRUM'] },
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'DRUM Web App', description: 'Dynamic Route Planning for Urban Mobility. A web tool offering sustainable, pollution-aware route options. Featured in The Hindu (2025).', link: 'https://leap-routing-iitkgp.vercel.app/', github: 'https://github.com/orgs/clean-route/repositories', icon: 'fa-globe', tags: ['React', 'Leaflet', 'APIs'] },
  { id: '2', title: 'TUTEM (ADB-Funded)', description: 'Technologies for Urban Transit to Enhance Mobility. Focusing on first/last-mile connectivity and safety for vulnerable road users at IIT Kharagpur.', link: 'https://www.tutem.org/home', icon: 'fa-city', tags: ['Research', 'ADB'] },
  { id: '3', title: 'Air Quality Dashboard', description: 'Interactive Streamlit application visualizing AQI data across major Indian cities using real-time API integration.', github: 'https://github.com/kapil2020/india-air-quality-dashboard', icon: 'fa-cloud', tags: ['Streamlit', 'Python'] },
  { id: '4', title: 'PM2.5 Forecasting', description: 'Machine Learning model for predicting next-day PM2.5 concentrations.', github: 'https://kapil2020.github.io/global-PM-2.5-next-day-forecasting/', icon: 'fa-chart-line', stars: 3, tags: ['ML', 'Python'] },
  { id: '5', title: 'MaaS Demand Study', description: 'Led a demand forecasting study for Mobility-as-a-Service in India using discrete choice experiments.', icon: 'fa-car', tags: ['Choice Modeling', 'Survey'] },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'wri',
    role: 'Research Consultant (Intern)',
    company: 'World Resources Institute (WRI) India',
    location: 'Remote',
    duration: 'Nov 2021 – Mar 2022',
    description: 'Developed policy recommendations for reducing commuter exposure in Tier-2 cities.',
    advisor: 'Aparna Vijaykumar, Program Manager - Electric Mobility',
    items: [
      'Conducted comparative analysis of inhaled pollution dose for commuters inside electric vs. ICE vehicles.',
      'Developed policy recommendations for reducing commuter exposure.'
    ],
    icon: 'fa-building',
    colorClass: 'bg-primary-600'
  },
  {
    id: 'ta',
    role: 'Teaching Assistant',
    company: 'IIT Kharagpur & IIT Roorkee',
    location: 'India',
    duration: '2019–2023',
    description: 'Mentored junior students in lab sessions and software workshops (VISSIM, QGIS).',
    items: [
      'Engineering Drawing (CE13001)',
      'Multimodal Urban Transport (NPTEL)',
      'Intersection Design (CEN 662)'
    ],
    icon: 'fa-chalkboard-teacher',
    colorClass: 'bg-green-600'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming & Web',
    icon: 'fa-code',
    skills: ['Python (Pandas, Scikit-learn)', 'R', 'JavaScript', 'ReactJS', 'Streamlit']
  },
  {
    title: 'Data Analysis & GIS',
    icon: 'fa-chart-pie',
    skills: ['Tableau', 'QGIS', 'SPSS', 'NLOGIT', 'Biogeme', 'MiniTab']
  },
  {
    title: 'Databases & Tools',
    icon: 'fa-database',
    skills: ['MySQL', 'MongoDB', 'LaTeX', 'JabRef', 'Git/GitHub']
  }
];

export const AWARDS: Award[] = [
  { id: '1', title: 'Best Presentation Award', issuer: 'Research Scholar Day, IIT Kharagpur', icon: 'fa-trophy' },
  { id: '2', title: 'Best Poster Presentation', issuer: 'Cyber-Physical System Summit (CyPhySS 2023)', icon: 'fa-file-image' },
  { id: '3', title: 'Travel Grant', issuer: 'University of Leeds (Research Exchange)', icon: 'fa-plane' },
  { id: '4', title: 'GATE Qualified', issuer: 'Rank 559, Civil Engineering (2019)', icon: 'fa-certificate' },
  { id: '5', title: 'MHRD Fellowship', issuer: 'For PhD Research', icon: 'fa-graduation-cap' },
  { id: '6', title: 'Winner (Regional)', issuer: 'National Children Science Congress (DST)', icon: 'fa-medal' }
];

export const LEADERSHIP: LeadershipItem[] = [
  { id: '1', role: 'Technical Session Chair', organization: 'EASTS Conference 2025', type: 'Chair' },
  { id: '2', role: 'Overall Coordinator', organization: 'IBSR Conference 2023 & 2024, IIT Kharagpur', type: 'Coordinator' },
  { id: '3', role: 'Reviewer', organization: 'Transport Policy, Transp. Research Part A & D, RTBM, TRR', type: 'Reviewer' },
  { id: '4', role: 'Memberships', organization: 'ASCE T&DI, TRG India, WCTR Society, IATBR', type: 'Membership' }
];

export const REFEREES: Referee[] = [
  {
    id: '1',
    name: 'Prof. Arkopal Kishore Goswami',
    title: 'Associate Professor, Infrastructure Design',
    institution: 'IIT Kharagpur',
    email: 'akgoswami@infra.iitkgp.ac.in',
    relationship: 'PhD Advisor'
  },
  {
    id: '2',
    name: 'Prof. Manoranjan Parida',
    title: 'Director',
    institution: 'CSIR-Central Road Research Institute (CRRI)',
    email: 'm.parida@ce.iitr.ac.in',
  },
  {
    id: '3',
    name: 'Prof. Amit Agarwal',
    title: 'Associate Professor, Civil Engineering',
    institution: 'IIT Roorkee',
    email: 'amitfce@iitr.ac.in',
    relationship: 'M.Tech Advisor'
  },
  {
    id: '4',
    name: 'Mr. Pawan Mulukutla',
    title: 'Director – Integrated Transport',
    institution: 'World Resources Institute (WRI), India',
    email: 'Pawan.mulukutla@wri.org',
  }
];