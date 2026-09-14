import {
  EducationItem,
  LeadershipRole,
  ExperienceItem,
  VolunteerInitiative,
  CertificateItem,
  GalleryPhoto,
  AwardItem,
} from '../types';

export const personalInfo = {
  fullName: 'Abdul Qudoos Khalid',
  arabicCalligraphyTitle: 'عبد القدوس خالد',
  academicTitle: 'MBBS Candidate (Year II) & Media Strategist',
  college: 'Al-Aleem Medical College, Gulab Devi Educational Complex',
  affiliatingUniversity: 'University of Health Sciences (UHS), Lahore',
  location: 'Shahdara, Lahore, Punjab, Pakistan',
  phone: '0308-4086493',
  internationalPhone: '+92 308 4086493',
  email: 'khalidabdulqudoos@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/khalidabdulqudoos/',
  instagramUrl: 'https://www.instagram.com/abdulqudooskhalid/',
  batchInstagramNote: 'Official Instagram Curator for MBBS Batch 29, Al-Aleem Medical College',
  objective:
    'A dedicated 2nd-year MBBS candidate at Al-Aleem Medical College, uniting rigorous pre-clinical medical training with evidence-based public health principles, clinical research literacy (NIH IPPCR), and high-impact visual media strategy. Combining leadership in student media, medical outreach, and digital healthcare communication to bridge medical science and empathetic patient care.',
  latinMotto: 'VERITAS IN SCIENTIA • COMPASSIO IN CURA',
  mottoTranslation: 'Truth in Science • Compassion in Care',
  stats: [
    { label: 'MBBS Standing', value: '2nd Year', detail: 'Al-Aleem Medical College' },
    { label: 'MDCAT UHS Score', value: '186 / 200', detail: 'Top National Percentile' },
    { label: 'Verified CME & Certifications', value: '11+', detail: 'Stanford, NIH, WHO & Google' },
    { label: 'Non-Profit Value Impact', value: '$1,544', detail: 'Catchafire Global Community' },
  ],
};

export const educationList: EducationItem[] = [
  {
    id: 'aamc-mbbs',
    institution: 'Al-Aleem Medical College, Lahore',
    degree: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
    year: '2024 – Present',
    honors: 'Current Standing: 2nd Year MBBS Candidate',
    location: 'Gulab Devi Educational Complex, Ferozepur Road, Lahore',
    highlights: [
      'Comprehensive curriculum encompassing Gross Anatomy, Histology, Medical Physiology, Biochemistry, and Early Clinical Exposure.',
      'Active leadership in collegiate governance: Media Head of Sports Society and Photography Head of Student Association of Mental Health Society (SAMHS).',
      'Curator of official visual communications and social media archives for MBBS Batch 29.',
    ],
  },
  {
    id: 'uhs-mdcat',
    institution: 'University of Health Sciences (UHS), Lahore',
    degree: 'Medical & Dental College Admission Test (MDCAT)',
    year: '2024',
    score: '186 / 200 (~93.0%)',
    honors: 'High Merit Distinction',
    location: 'Lahore, Pakistan',
    highlights: [
      'Secured 186 out of 200 in the highly competitive standardized provincial medical admissions examination administered by UHS.',
      'Demonstrated academic mastery across Advanced Biology, Chemistry, Physics, and English Logical Reasoning.',
    ],
  },
  {
    id: 'pgc-fsc',
    institution: 'Punjab Group of Colleges, Shahdara Campus',
    degree: 'Faculty of Science (FSc Pre-Medical)',
    year: '2021 – 2023',
    score: '1016 / 1100',
    honors: 'Student of the Year (2023)',
    location: 'Shahdara, Lahore',
    highlights: [
      'Awarded the prestigious "Student of the Year" trophy in 2023 in recognition of exemplary academic and co-curricular leadership.',
      'Served as Vice President of the Student Function Management Society (2022–2023), directing institutional symposia and ceremonies.',
    ],
  },
  {
    id: 'wwbhss-matric',
    institution: 'Worker Welfare Boys Higher Secondary School, Rana Town',
    degree: 'Secondary School Certificate (Matriculation in Science)',
    year: '2019 – 2021',
    score: '1098 / 1100 (99.8%)',
    honors: '1st Position — PGC Scholarship Test 2021',
    location: 'Rana Town, Lahore',
    highlights: [
      'Clinched 1st Position in the PGC Scholarship Talent Hunt Examination (2021) among thousands of regional aspirants.',
      'Near-perfect matriculation academic record in Core Sciences and Mathematics.',
    ],
  },
];

export const leadershipRoles: LeadershipRole[] = [
  {
    id: 'sports-media-head',
    title: 'Media Head, Sports Society',
    organization: 'Al-Aleem Medical College',
    year: '2025',
    category: 'media',
    description:
      'Directing visual branding, photography crews, social campaigns, and live documentation for collegiate athletics, inter-college tournaments, and sports week festivals.',
    badge: 'Media Directorate',
  },
  {
    id: 'samhs-photo-head',
    title: 'Photography Head, Student Association of Mental Health Society (SAMHS)',
    organization: 'Al-Aleem Medical College',
    year: '2026',
    category: 'medical',
    description:
      'Spearheading visual awareness campaigns destigmatizing psychiatric wellbeing in medical education and orchestrating documentary coverage for community outreach programs.',
    badge: 'Mental Health Advocacy',
  },
  {
    id: 'pgc-vp-functions',
    title: 'Vice President, Student Function Management Society',
    organization: 'Punjab Group of Colleges, Shahdara',
    year: '2022 – 2023',
    category: 'management',
    description:
      'Managed stage protocol, guest reception, technical setups, and executive logistics for large-scale college convocations, annual functions, and academic competitions.',
    badge: 'Executive Governance',
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    id: 'exp-medical-gateway',
    role: 'Student Ambassador',
    organization: 'Medical Gateway',
    period: 'Present',
    responsibilities: [
      'Serving as an academic liaison connecting pre-medical students with certified mentorship, study frameworks, and clinical career pathways.',
      'Guiding students on MDCAT preparation strategies, time allocation, and transitioning successfully into the MBBS rigors.',
    ],
  },
  {
    id: 'exp-premed-pk',
    role: 'Campus Ambassador',
    organization: 'PremedPK',
    period: 'Nov 2024 – Present',
    recognition: 'Awarded "Speaker of the Month" (February 2025)',
    responsibilities: [
      'Recognized as Speaker of the Month (Feb 2025) for high-impact educational webinars delivered to aspiring medical matriculates across Pakistan.',
      'Assisted in regional educational marketing, engaging parents and students on transparent college admissions and high-yield study resources.',
    ],
  },
];

export const volunteerInitiatives: VolunteerInitiative[] = [
  {
    id: 'vol-funclub-hospitals',
    role: 'Event Volunteer, FunClub Society',
    organization: 'Al-Aleem Medical College',
    period: '2025 – 2026',
    category: 'hospital',
    description: [
      'Mobilized hospital-based community outreach visits at The Children\'s Hospital, Lahore and Gulab Devi Hospital.',
      'Engaged pediatric inpatients and families through compassionate support, recreational healing activities, and hygiene awareness.',
    ],
  },
  {
    id: 'vol-samhs-orphanage',
    role: 'Volunteer, Student Mental Health Association',
    organization: 'Al-Aleem Medical College',
    period: '2026',
    category: 'mental-health',
    description: [
      'Curated and led an educational excursion for orphanage children to the "Joy of Science" interactive science center.',
      'Fostered cognitive curiosity, psychological encouragement, and positive mentorship through hands-on STEM demonstrations and interactive games.',
    ],
  },
  {
    id: 'vol-alkhidmat',
    role: 'Volunteer',
    organization: 'Alkhidmat Foundation Pakistan',
    period: '2020 – Present',
    category: 'community',
    description: [
      'Active frontline responder in the Alkhidmat 2026 Flood Relief emergency campaigns and community medical camps.',
      'Supported the Bano Qabil youth IT scholarship initiative and assisted in food ration logistics during COVID-19 relief operations.',
      'Coordinated youth volunteers, medical camp triage logistics, and patient registry facilitation.',
    ],
  },
  {
    id: 'vol-catchafire',
    role: 'Volunteer Consultant',
    organization: 'Catchafire.org',
    period: '2024 – Present',
    impactMetrics: '$1,544 Total Economic Impact Generated',
    category: 'global',
    description: [
      'Delivered pro-bono digital and creative consultation valued at $1,544 to international non-profit organizations.',
      'Assisted humanitarian entities primarily in the housing, homelessness prevention, and community advocacy sectors.',
    ],
  },
];

export const certificatesList: CertificateItem[] = [
  {
    id: 'cert-nih-ippcr',
    title: 'Introduction to the Principles and Practice of Clinical Research (IPPCR)',
    issuer: 'National Institutes of Health (NIH), Office of Clinical Research Education and Collaboration Outreach',
    date: '2025 – 2026',
    category: 'clinical',
    credentialSummary:
      'Rigorous foundational training in clinical trial design, biostatistics, human subjects ethical protections, study protocols, FDA regulations, and epidemiological methodologies.',
    skillsAcquired: ['Clinical Study Design', 'Biostatistics', 'IRB Ethics', 'Epidemiology', 'Protocol Writing'],
    verificationType: 'NIH Outreach',
  },
  {
    id: 'cert-stanford-htn',
    title: 'Hypertension in Primary Care – Improving Control and Reducing Risk',
    issuer: 'Stanford Center for Continuing Medical Education',
    date: 'Aug 2026',
    category: 'clinical',
    credits: '1.00 AMA PRA Category 1 Credit™',
    credentialSummary:
      'Comprehensive clinical evidence on updated blood pressure measurement standards, pharmacological management according to ACC/AHA guidelines, target organ damage prevention, and individualized therapeutic titration.',
    skillsAcquired: ['AHA/ACC Protocols', 'Cardiovascular Risk Stratification', 'Pharmacotherapy', 'Primary Care'],
    verificationType: 'Verified Continuing Medical Education',
  },
  {
    id: 'cert-stanford-migraine',
    title: 'An Evidence-Based Approach to Diagnosis & Management of Migraines in Adults',
    issuer: 'Stanford Center for Continuing Medical Education',
    date: 'Aug 2026',
    category: 'clinical',
    credits: '1.00 AMA PRA Category 1 Credit™',
    credentialSummary:
      'Detailed clinical framework for differential diagnosis between secondary vs. primary headaches, acute abortive therapies (triptans, CGRP antagonists), preventive regimens, and lifestyle triggers in general neurology.',
    skillsAcquired: ['Neurological Examination', 'CGRP Antagonists', 'Differential Diagnosis', 'Pain Management'],
    verificationType: 'Verified Continuing Medical Education',
  },
  {
    id: 'cert-who-hearts',
    title: 'HEARTS of NCD: Integrated Approach to Management of Noncommunicable Diseases',
    issuer: 'World Health Organization (WHO)',
    date: 'Official Certification',
    category: 'public-health',
    credentialSummary:
      'Systematic primary healthcare protocols covering cardiovascular risk assessment, hypertension & diabetes clinical decision pathways, team-based care models, and essential medicine access.',
    skillsAcquired: ['Primary Healthcare Integration', 'Cardiovascular Screening', 'WHO HEARTS Package', 'Chronic Care'],
    verificationType: 'WHO Official',
  },
  {
    id: 'cert-who-ai-ethics',
    title: 'Ethics and Governance of Artificial Intelligence for Health',
    issuer: 'World Health Organization (WHO)',
    date: 'Official Certification',
    category: 'public-health',
    credentialSummary:
      'Global WHO framework examining algorithmic accountability, patient data privacy, algorithmic bias mitigation, and human oversight in clinical diagnostic AI tools.',
    skillsAcquired: ['Health AI Governance', 'Data Bioethics', 'Algorithmic Fairness', 'Digital Health Policy'],
    verificationType: 'WHO Official',
  },
  {
    id: 'cert-who-ncd-interventions',
    title: 'Interventions for Noncommunicable Diseases in Primary Health Care',
    issuer: 'World Health Organization (WHO)',
    date: 'Official Certification',
    category: 'public-health',
    credentialSummary:
      'Implementation strategies for cost-effective interventions tackling hypertension, diabetes, chronic respiratory diseases, and lifestyle modifications in resource-limited settings.',
    skillsAcquired: ['Preventive Medicine', 'NCD Surveillance', 'Community Health Screening', 'Health Promotion'],
    verificationType: 'WHO Official',
  },
  {
    id: 'cert-medical-coding',
    title: 'Introduction to Medical Coding (i2MC)',
    issuer: 'Absolute Medical Coding Solutions',
    date: 'Aug 2026',
    category: 'coding',
    credits: '40 Credit Hours Completed',
    credentialSummary:
      'In-depth 40-hour curriculum covering ICD-10-CM diagnostic classification, CPT coding standards, medical terminology, HCPCS Level II fundamentals, and healthcare reimbursement documentation.',
    skillsAcquired: ['ICD-10-CM Diagnostic Coding', 'CPT Nomenclature', 'Healthcare Reimbursement', 'Medical Terminology'],
    verificationType: 'Professional Specialization',
  },
  {
    id: 'cert-google-data',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    date: 'Dec 2025',
    category: 'tech-data',
    credentialSummary:
      'End-to-end data analytics workflow including data cleaning, spreadsheet modeling, SQL database querying, R programming, and Tableau visualization applied to decision making.',
    skillsAcquired: ['Data Visualization', 'SQL Analysis', 'Spreadsheets & Statistics', 'R Programming', 'Data Ethics'],
    verificationType: 'Professional Specialization',
  },
  {
    id: 'cert-google-pm',
    title: 'Google Project Management Professional Certificate',
    issuer: 'Google',
    date: 'Jan 2026',
    category: 'tech-data',
    credentialSummary:
      'Traditional waterfall and Agile project management methodologies, risk mitigation registers, stakeholder communication, project charter creation, and quality assurance.',
    skillsAcquired: ['Agile & Scrum', 'Project Chartering', 'Risk Management', 'Stakeholder Engagement', 'Procurement'],
    verificationType: 'Professional Specialization',
  },
  {
    id: 'cert-google-ai',
    title: 'Google AI Essentials Specialization',
    issuer: 'Google',
    date: 'Dec 2025',
    category: 'tech-data',
    credentialSummary:
      'Foundational generative AI mechanisms, effective workplace application of Large Language Models, prompt crafting, and responsible AI implementation standards.',
    skillsAcquired: ['Generative AI Concepts', 'Productivity Workflows', 'Responsible AI Practices', 'Workflow Optimization'],
    verificationType: 'Professional Specialization',
  },
  {
    id: 'cert-google-prompt',
    title: 'Google Prompting Essentials Specialization',
    issuer: 'Google',
    date: 'Feb 2026',
    category: 'tech-data',
    credentialSummary:
      'Advanced prompt engineering techniques: few-shot chain-of-thought, persona structuring, output constraint framing, and fine-tuning prompt chains for academic research synthesis.',
    skillsAcquired: ['Few-Shot Prompting', 'Chain-of-Thought', 'Instruction Structuring', 'Context Engineering'],
    verificationType: 'Professional Specialization',
  },
];

export const awardsList: AwardItem[] = [
  {
    id: 'award-student-year',
    title: 'Student of the Year (2023)',
    issuer: 'Punjab Group of Colleges, Shahdara Campus',
    year: '2023',
    significance: 'Conferred for unparalleled academic distinction and student society leadership.',
  },
  {
    id: 'award-scholarship-1st',
    title: '1st Position — PGC Scholarship Test (Talent Hunt)',
    issuer: 'Punjab Group of Colleges',
    year: '2021',
    significance: 'Ranked #1 among thousands of matriculates competing for premier pre-medical academic scholarships.',
  },
  {
    id: 'award-speaker-month',
    title: 'Speaker of the Month (February 2025)',
    issuer: 'PremedPK Nationwide Educational Network',
    year: '2025',
    significance: 'Awarded for leading interactive public orientations on MDCAT strategies and medical school readiness.',
  },
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: 'Clinical Rotations & Ward Rounds',
    category: 'clinical-outreach',
    description: 'Documenting the patient encounter at Gulab Devi Educational Complex, balancing empathy with objective diagnostic inquiry.',
    location: 'Gulab Devi Hospital, Lahore',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape',
  },
  {
    id: 'photo-2',
    title: 'Batch 29 Campus Chronicle',
    category: 'campus-life',
    description: 'Curated editorial coverage for the official MBBS Batch 29 visual archive, capturing lecture halls, labs, and collaborative study groups.',
    location: 'Al-Aleem Medical College',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape',
  },
  {
    id: 'photo-3',
    title: 'Pediatric Hospital Outreach',
    category: 'clinical-outreach',
    description: 'Bringing therapeutic joy and psychosocial support to young patients during FunClub Society hospital visits.',
    location: "The Children's Hospital, Lahore",
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'portrait',
  },
  {
    id: 'photo-4',
    title: 'Joy of Science Orphanage Expedition',
    category: 'events',
    description: 'Guiding underprivileged youth through cognitive wonders and hands-on scientific discovery under the SAMHS outreach banner.',
    location: 'Joy of Science Centre, Lahore',
    year: '2026',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape',
  },
  {
    id: 'photo-5',
    title: 'Medical Camp Triage & Community Health',
    category: 'clinical-outreach',
    description: 'Frontline assistance in patient intake, blood pressure monitoring, and health education during Alkhidmat emergency relief programs.',
    location: 'Lahore Relief Camps',
    year: '2024–2026',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape',
  },
  {
    id: 'photo-6',
    title: 'Athletic Spirit: Sports Society Championship',
    category: 'events',
    description: 'High-speed sports photography capturing the passion and camaraderie of future physicians on the pitch.',
    location: 'Al-Aleem Sports Grounds',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'portrait',
  },
];

export const skillCategories = [
  {
    category: 'Medical & Clinical Foundations',
    iconClass: 'fa-solid fa-stethoscope',
    skills: [
      'Pre-Clinical Anatomy & Physiology',
      'Hypertension Protocols (ACC/AHA)',
      'Clinical Research Methodology (NIH IPPCR)',
      'WHO HEARTS NCD Management',
      'Medical Coding (ICD-10-CM & CPT)',
      'Pediatric & Inpatient Outreach',
    ],
  },
  {
    category: 'Media Production & Visual Storytelling',
    iconClass: 'fa-solid fa-camera-retro',
    skills: [
      'Editorial & Portrait Photography',
      'Batch 29 Visual Archiving',
      'Canva & Graphic Design',
      'Event Media Coordination',
      'Medical Science Communication',
      'Social Strategy & Digital Campaigns',
    ],
  },
  {
    category: 'Data Analytics & Modern Tech',
    iconClass: 'fa-solid fa-chart-line',
    skills: [
      'Google Data Analytics (SQL, R, Tableau)',
      'Google Project Management (Agile/Scrum)',
      'AI Essentials & Prompt Engineering',
      'WHO AI Health Governance & Ethics',
      'Biostatistics & Research Data Cleaning',
    ],
  },
  {
    category: 'Leadership, Advocacy & Languages',
    iconClass: 'fa-solid fa-hands-holding-child',
    skills: [
      'Public Speaking & Mentorship',
      'Mental Health De-stigmatization (SAMHS)',
      'Humanitarian Disaster Relief (Alkhidmat)',
      'Non-profit Consultation (Catchafire)',
      'Urdu (Native)',
      'English (Academic / Fluent)',
      'Punjabi (Native)',
    ],
  },
];
