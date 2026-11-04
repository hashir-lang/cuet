import type { Draft, MediaSlot, Program } from './types';

/**
 * All 17 programs listed in the Faculty Infrastructure Report (v8).
 *
 * The descriptive text (overview, objectives, outcomes, career areas) is DRAFT copy
 * written for editorial review. It describes the discipline in general terms and makes
 * no claim about the official curriculum.
 *
 * Everything under `official` must be supplied by the University. It is null for now,
 * so the website shows a "to be confirmed" panel instead of inventing details.
 */

const draft = <T,>(value: T): Draft<T> => ({ status: 'draft', value });

const unconfirmed: Program['official'] = {
  duration: null,
  totalCreditHours: null,
  curriculum: null,
  eligibility: null,
  accreditation: null,
  fees: null,
};

type ProgramInput = Omit<Program, 'official' | 'overview' | 'introduction' | 'objectives' | 'learningOutcomes' | 'careerAreas' | 'level' | 'media'> & {
  overview: string;
  introduction: string[];
  objectives: string[];
  learningOutcomes: string[];
  careerAreas: string[];
  media: Omit<MediaSlot, 'src'>;
};

const program = (p: ProgramInput): Program => ({
  ...p,
  level: 'Undergraduate',
  overview: draft(p.overview),
  introduction: draft(p.introduction),
  objectives: draft(p.objectives),
  learningOutcomes: draft(p.learningOutcomes),
  careerAreas: draft(p.careerAreas),
  official: unconfirmed,
  media: { src: null, ...p.media },
});

export const programs: Program[] = [
  program({
    slug: 'bba',
    name: 'Bachelor of Business Administration',
    shortName: 'BBA',
    facultySlug: 'management-science',
    tagline: 'A broad foundation in how organisations are run, financed and grown.',
    overview:
      'The BBA introduces the core functions of business, including accounting, finance, marketing, operations and people management, and develops the analytical and communication skills needed to lead within organisations.',
    introduction: [
      'Business administration is the study of how organisations turn resources into value. Students explore how firms compete, how they are financed and how managers make decisions under uncertainty.',
      'The program is intended for students who want a versatile qualification that opens doors to careers in the private sector, public institutions, non-profits or their own ventures.',
    ],
    objectives: [
      'Build a working knowledge of the main business disciplines.',
      'Develop quantitative and analytical skills for business decision-making.',
      'Strengthen written and spoken communication for professional settings.',
      'Encourage ethical and socially responsible management practice.',
    ],
    learningOutcomes: [
      'Interpret financial statements and basic management accounts.',
      'Analyse markets, customers and competitors to support a business plan.',
      'Apply core management concepts to organisational problems.',
      'Work effectively in teams and present recommendations persuasively.',
    ],
    careerAreas: ['Banking and financial services', 'Marketing and sales', 'Human resources', 'Operations and supply chain', 'Entrepreneurship'],
    featured: false,
    seoKeywords: ['BBA Lahore', 'Bachelor of Business Administration Lahore', 'business degree Lahore'],
    media: { alt: 'Illustration representing business administration', plate: 'management' },
  }),
  program({
    slug: 'bs-computer-science',
    name: 'BS Computer Science',
    shortName: 'BSCS',
    facultySlug: 'computer-science',
    tagline: 'The theory of computation and the craft of building software.',
    overview:
      'BS Computer Science develops a strong grounding in programming, algorithms, data structures and computing systems, together with the mathematical thinking that underpins them.',
    introduction: [
      'Computer science studies what can be computed and how to compute it well. Students learn to design efficient algorithms, write clear and correct programs and understand how computers, networks and databases work.',
      'The program suits students who enjoy problem-solving and mathematics and who want to work at the forefront of technology.',
    ],
    objectives: [
      'Provide a rigorous foundation in programming and computational thinking.',
      'Develop understanding of algorithms, data structures and complexity.',
      'Introduce computer systems, networks, databases and security.',
      'Prepare students for professional practice and further study.',
    ],
    learningOutcomes: [
      'Design, implement and test programs in more than one language.',
      'Select and analyse appropriate algorithms and data structures.',
      'Explain how operating systems, networks and databases function.',
      'Apply professional, ethical and legal principles to computing work.',
    ],
    careerAreas: ['Software development', 'Data and analytics', 'Systems and network administration', 'Information security', 'Research and further study'],
    featured: true,
    seoKeywords: ['BS Computer Science Lahore', 'BSCS Lahore', 'computer science degree Pakistan'],
    media: { alt: 'Illustration representing computer science', plate: 'computing' },
  }),
  program({
    slug: 'bs-software-engineering',
    name: 'BS Software Engineering',
    shortName: 'BS SE',
    facultySlug: 'computer-science',
    tagline: 'Engineering discipline for software that people depend on.',
    overview:
      'BS Software Engineering focuses on the methods used to specify, design, build, test and maintain large software systems, working in teams and to professional standards.',
    introduction: [
      'Software engineering applies engineering discipline to software. Beyond writing code, students learn how requirements are gathered, how systems are designed and how quality is assured over a product’s life.',
      'The program is suited to students who want to build and manage real software products and who enjoy collaborative, project-based work.',
    ],
    objectives: [
      'Develop strong programming and software design skills.',
      'Teach systematic methods for requirements, design, testing and maintenance.',
      'Build experience of team-based software projects.',
      'Promote professional responsibility and quality in software practice.',
    ],
    learningOutcomes: [
      'Elicit and document software requirements.',
      'Produce software designs using recognised models and patterns.',
      'Plan and carry out testing and quality assurance activities.',
      'Contribute effectively to a software project team.',
    ],
    careerAreas: ['Software engineering', 'Quality assurance and testing', 'Product and project management', 'DevOps and cloud', 'Technology consulting'],
    featured: true,
    seoKeywords: ['BS Software Engineering Lahore', 'software engineering degree Lahore'],
    media: { alt: 'Illustration representing software engineering', swap: true, plate: 'computing' },
  }),
  program({
    slug: 'bs-education',
    name: 'BS Education',
    shortName: 'BS Education',
    facultySlug: 'social-science',
    tagline: 'Teaching as a profession, grounded in how people learn.',
    overview:
      'BS Education prepares students to plan, deliver and evaluate teaching, combining educational theory with practical classroom experience.',
    introduction: [
      'Good teachers change lives. This program explores how learning happens, how curricula are designed and how teachers can support every learner.',
      'It is intended for students who want to teach, or to work in education management, training and policy.',
    ],
    objectives: [
      'Introduce the foundations of education, psychology and pedagogy.',
      'Develop practical skills in lesson planning, delivery and assessment.',
      'Promote inclusive approaches that support diverse learners.',
      'Encourage reflective, research-informed professional practice.',
    ],
    learningOutcomes: [
      'Plan coherent lessons with clear learning objectives.',
      'Use a range of teaching and assessment methods appropriately.',
      'Apply principles of child development and learning theory.',
      'Reflect critically on teaching practice and improve it.',
    ],
    careerAreas: ['School teaching', 'Education management', 'Curriculum development', 'Corporate training', 'Education policy and research'],
    featured: true,
    seoKeywords: ['BS Education Lahore', 'education degree Lahore', 'teaching degree Pakistan'],
    media: { alt: 'Illustration representing education', plate: 'education' },
  }),
  program({
    slug: 'bs-english',
    name: 'BS English',
    shortName: 'BS English',
    facultySlug: 'arts-humanities',
    tagline: 'Literature, language and the power of the written word.',
    overview:
      'BS English develops close reading, critical analysis and confident writing through the study of English literature and linguistics.',
    introduction: [
      'English is studied here both as a body of literature and as a language. Students read widely, from canonical works to contemporary and South Asian writing, and examine how language works.',
      'The program suits students who love reading and writing and who want careers where communication is central.',
    ],
    objectives: [
      'Develop knowledge of major literary periods, genres and authors.',
      'Introduce the structure and use of the English language.',
      'Strengthen critical thinking and argument.',
      'Build excellent academic and professional writing skills.',
    ],
    learningOutcomes: [
      'Analyse literary texts in their historical and cultural contexts.',
      'Describe key features of English phonology, grammar and discourse.',
      'Write clear, well-structured and well-evidenced essays.',
      'Present ideas confidently in speech and writing.',
    ],
    careerAreas: ['Teaching', 'Publishing and editing', 'Journalism and media', 'Communications and public relations', 'Civil service'],
    featured: false,
    seoKeywords: ['BS English Lahore', 'English literature degree Lahore'],
    media: { alt: 'Illustration representing English literature', plate: 'humanities' },
  }),
  program({
    slug: 'bs-poultry-management',
    name: 'BS Poultry Management',
    shortName: 'BS Poultry Management',
    facultySlug: 'veterinary-science',
    tagline: 'Healthy flocks, safe food and well-run poultry enterprises.',
    overview:
      'BS Poultry Management combines poultry science with farm and business management, covering bird health, nutrition, breeding, hatchery operations and the economics of production.',
    introduction: [
      'Poultry is one of the fastest-growing parts of Pakistan’s agriculture. Running it well requires both scientific knowledge and sound management.',
      'This program is intended for students who want to manage farms, hatcheries and feed operations, or work in the wider poultry and food industry.',
    ],
    objectives: [
      'Provide a foundation in poultry anatomy, physiology and health.',
      'Develop knowledge of nutrition, breeding and hatchery management.',
      'Introduce biosecurity, food safety and welfare standards.',
      'Build management and business skills for poultry enterprises.',
    ],
    learningOutcomes: [
      'Explain the principles of poultry health and disease prevention.',
      'Plan feeding and housing programs for different production systems.',
      'Apply biosecurity and welfare practices on a farm.',
      'Evaluate the economics of a poultry enterprise.',
    ],
    careerAreas: ['Poultry farm management', 'Hatchery operations', 'Feed industry', 'Food processing and safety', 'Agribusiness and entrepreneurship'],
    featured: false,
    seoKeywords: ['BS Poultry Management Lahore', 'poultry science degree Pakistan'],
    media: { alt: 'Illustration representing poultry management', plate: 'poultry' },
  }),
  program({
    slug: 'pharm-d',
    name: 'Doctor of Pharmacy',
    shortName: 'Pharm D',
    facultySlug: 'pharmaceutical-sciences',
    tagline: 'From molecule to patient: the science and practice of medicines.',
    overview:
      'The Doctor of Pharmacy program develops expertise in how medicines are discovered, formulated, regulated and used safely, with a strong emphasis on laboratory work and patient-centred practice.',
    introduction: [
      'Pharmacists are experts in medicines. They make sure patients receive the right medicine, in the right dose, with the right advice.',
      'The program is intended for students with a strong interest in chemistry, biology and health who want a professional career in pharmacy and the pharmaceutical sector.',
    ],
    objectives: [
      'Build a strong foundation in pharmaceutical chemistry, pharmacology and pharmaceutics.',
      'Develop competence in laboratory methods used in pharmacy.',
      'Prepare students for patient-centred pharmacy practice.',
      'Promote ethical, legal and professional standards in pharmacy.',
    ],
    learningOutcomes: [
      'Explain how medicines act on the body and how the body handles them.',
      'Prepare and evaluate pharmaceutical dosage forms.',
      'Counsel patients on the safe and effective use of medicines.',
      'Apply regulatory and ethical principles in pharmacy settings.',
    ],
    careerAreas: ['Hospital pharmacy', 'Community pharmacy', 'Pharmaceutical industry', 'Regulatory affairs', 'Research and quality control'],
    featured: true,
    seoKeywords: ['Pharm D Lahore', 'Doctor of Pharmacy Lahore', 'pharmacy degree Pakistan'],
    media: { alt: 'Illustration representing pharmacy', plate: 'pharmacy' },
  }),
  program({
    slug: 'bsn-nursing',
    name: 'BS Nursing',
    shortName: 'BSN',
    facultySlug: 'nursing',
    tagline: 'Professional nursing, built on science and compassion.',
    overview:
      'The BS Nursing program prepares professional nurses through study of the health sciences and supervised practice of nursing skills, first in skills laboratories and then in clinical settings.',
    introduction: [
      'Nurses are at the centre of patient care. They assess needs, deliver treatment, educate patients and families and work closely with every member of the health team.',
      'This program is for students who want a demanding, rewarding career caring for people at every stage of life.',
    ],
    objectives: [
      'Provide a foundation in anatomy, physiology and the health sciences.',
      'Develop safe, competent clinical nursing skills.',
      'Promote compassionate, patient-centred and ethical care.',
      'Prepare students for professional practice and lifelong learning.',
    ],
    learningOutcomes: [
      'Assess patient needs and plan appropriate nursing care.',
      'Perform core nursing procedures safely under supervision.',
      'Communicate effectively with patients, families and colleagues.',
      'Apply evidence and ethical principles to nursing decisions.',
    ],
    careerAreas: ['Hospital nursing', 'Community and public health nursing', 'Specialist clinical nursing', 'Nurse education', 'Health service management'],
    featured: true,
    seoKeywords: ['BS Nursing Lahore', 'BSN Lahore', 'nursing degree Pakistan'],
    media: { alt: 'Illustration representing nursing', plate: 'nursing' },
  }),
  program({
    slug: 'bs-public-health',
    name: 'BS Public Health',
    shortName: 'BS Public Health',
    facultySlug: 'allied-health',
    tagline: 'Protecting and improving the health of whole communities.',
    overview:
      'BS Public Health studies how diseases spread, how health can be promoted and how health systems can serve populations more fairly and effectively.',
    introduction: [
      'Public health looks beyond the individual patient to the health of communities. It asks why people become ill and how illness can be prevented.',
      'This program suits students who want to work on prevention, health promotion and health policy.',
    ],
    objectives: [
      'Introduce epidemiology, biostatistics and health promotion.',
      'Develop understanding of health systems and policy.',
      'Build skills in community health assessment.',
      'Promote equity and ethics in public health practice.',
    ],
    learningOutcomes: [
      'Describe patterns of disease in populations using basic epidemiology.',
      'Design a simple health promotion intervention.',
      'Interpret health data and communicate findings.',
      'Explain how health systems are organised and financed.',
    ],
    careerAreas: ['Public health programs', 'Non-governmental health organisations', 'Health research', 'Health policy and administration', 'Community health'],
    featured: false,
    seoKeywords: ['BS Public Health Lahore', 'public health degree Pakistan'],
    media: { alt: 'Illustration representing public health', plate: 'allied-health' },
  }),
  program({
    slug: 'doctor-of-physical-therapy',
    name: 'Doctor of Physical Therapy',
    shortName: 'DPT',
    facultySlug: 'allied-health',
    tagline: 'Restoring movement, function and independence.',
    overview:
      'The Doctor of Physical Therapy program prepares physiotherapists to assess, treat and prevent movement disorders through evidence-based, hands-on care.',
    introduction: [
      'Physical therapists help people recover from injury, manage pain and long-term conditions and regain independence.',
      'The program is designed for students with an interest in human movement and health who want a hands-on clinical career.',
    ],
    objectives: [
      'Develop a strong foundation in anatomy, physiology and biomechanics.',
      'Build competence in physical assessment and therapeutic techniques.',
      'Promote evidence-based, patient-centred rehabilitation.',
      'Prepare students for professional clinical practice.',
    ],
    learningOutcomes: [
      'Assess movement and function using appropriate clinical tests.',
      'Plan and deliver therapeutic exercise and manual therapy under supervision.',
      'Educate patients to manage their own recovery.',
      'Apply research evidence to clinical decisions.',
    ],
    careerAreas: ['Hospital physiotherapy', 'Sports and exercise rehabilitation', 'Private practice', 'Community rehabilitation', 'Research and teaching'],
    featured: false,
    seoKeywords: ['DPT Lahore', 'Doctor of Physical Therapy Lahore', 'physiotherapy degree Pakistan'],
    media: { alt: 'Illustration representing physical therapy', swap: true, plate: 'allied-health' },
  }),
  program({
    slug: 'bs-engineering-technology',
    name: 'BS Engineering Technology',
    shortName: 'BS Engineering Technology',
    facultySlug: 'engineering-technology',
    tagline: 'Engineering principles, applied where systems are built and run.',
    overview:
      'BS Engineering Technology develops the applied engineering knowledge and practical skills needed to install, operate, maintain and improve technical systems in industry.',
    introduction: [
      'Engineering technologists turn engineering designs into working systems. Their work is practical, applied and close to production.',
      'This program is for students who enjoy hands-on technical work and want careers in manufacturing, utilities, construction and industrial services.',
    ],
    objectives: [
      'Provide a foundation in mathematics and engineering science.',
      'Develop workshop and laboratory skills.',
      'Introduce industrial processes, maintenance and safety.',
      'Build teamwork and project management skills.',
    ],
    learningOutcomes: [
      'Apply engineering principles to practical technical problems.',
      'Operate and maintain equipment safely in a laboratory or workshop.',
      'Read and produce technical drawings.',
      'Plan and manage a small technical project.',
    ],
    careerAreas: ['Manufacturing and production', 'Plant maintenance', 'Utilities and energy', 'Construction services', 'Quality control'],
    featured: false,
    seoKeywords: ['BS Engineering Technology Lahore', 'engineering technology degree Pakistan'],
    media: { alt: 'Illustration representing engineering technology', plate: 'engineering' },
  }),
  program({
    slug: 'bs-aviation-management',
    name: 'BS Aviation Management',
    shortName: 'BS Aviation Management',
    facultySlug: 'aviation-management',
    tagline: 'Preparing managers for airlines, airports and aviation services.',
    overview:
      'BS Aviation Management combines management studies with the operational, regulatory and safety knowledge specific to the aviation industry.',
    introduction: [
      'Aviation is a complex, highly regulated industry where safety, efficiency and customer service must work together.',
      'This program prepares students for management roles in airlines, airports, cargo and ground handling companies and aviation authorities.',
    ],
    objectives: [
      'Introduce the structure and economics of the aviation industry.',
      'Develop understanding of airline and airport operations.',
      'Build knowledge of aviation safety and regulation.',
      'Develop general management and customer service skills.',
    ],
    learningOutcomes: [
      'Explain how airlines and airports plan and manage operations.',
      'Apply safety management principles to aviation scenarios.',
      'Analyse the commercial performance of aviation businesses.',
      'Communicate professionally in customer-facing aviation roles.',
    ],
    careerAreas: ['Airline operations', 'Airport management', 'Air cargo and logistics', 'Ground handling', 'Aviation safety and compliance'],
    featured: true,
    seoKeywords: ['BS Aviation Management Lahore', 'aviation management degree Pakistan'],
    media: { alt: 'Illustration representing aviation management', plate: 'aviation' },
  }),
  program({
    slug: 'llb',
    name: 'Bachelor of Laws',
    shortName: 'LLB',
    facultySlug: 'law-sharia',
    tagline: 'A professional foundation in law and legal practice.',
    overview:
      'The LLB develops a thorough knowledge of the major areas of law in Pakistan, together with the research, reasoning, drafting and advocacy skills needed for legal practice.',
    introduction: [
      'Law shapes every part of society. Studying it develops precise thinking, careful use of language and a strong sense of justice.',
      'The program is intended for students who aim to practise law or to work in roles where legal knowledge is essential.',
    ],
    objectives: [
      'Provide a comprehensive foundation in the core subjects of law.',
      'Develop legal research, reasoning and writing skills.',
      'Build practical advocacy and drafting skills.',
      'Promote professional ethics and commitment to the rule of law.',
    ],
    learningOutcomes: [
      'Explain the key principles of constitutional, criminal, civil and commercial law.',
      'Research legal questions using statutes and case law.',
      'Draft legal documents clearly and accurately.',
      'Present legal arguments orally, for example in moot court exercises.',
    ],
    careerAreas: ['Legal practice', 'Corporate legal departments', 'Judicial and civil service', 'Legal advisory and compliance', 'Human rights and advocacy'],
    featured: false,
    seoKeywords: ['LLB Lahore', 'law degree Lahore', 'Bachelor of Laws Pakistan'],
    media: { alt: 'Illustration representing law', plate: 'law' },
  }),
  program({
    slug: 'ba-llb',
    name: 'BA LLB',
    shortName: 'BA LLB',
    facultySlug: 'law-sharia',
    tagline: 'Law studied alongside the humanities and social sciences.',
    overview:
      'The BA LLB integrates the study of law with subjects from the arts and social sciences, giving legal education a broader intellectual context.',
    introduction: [
      'Legal problems rarely exist in isolation. They involve history, politics, economics and society. The BA LLB places the study of law within that wider picture.',
      'It is suited to students who want a legal career and who also want a broad education in the humanities and social sciences.',
    ],
    objectives: [
      'Combine legal education with study of the humanities and social sciences.',
      'Develop legal research, reasoning and writing skills.',
      'Build practical advocacy and drafting skills.',
      'Promote professional ethics and an understanding of justice in society.',
    ],
    learningOutcomes: [
      'Explain the core principles of Pakistan’s legal system.',
      'Relate legal questions to their social, political and economic context.',
      'Research, write and argue legal positions effectively.',
      'Apply ethical reasoning to legal and social issues.',
    ],
    careerAreas: ['Legal practice', 'Public policy', 'Civil service', 'Journalism and media law', 'Non-governmental organisations'],
    featured: false,
    seoKeywords: ['BA LLB Lahore', 'integrated law degree Lahore'],
    media: { alt: 'Illustration representing legal studies', swap: true, plate: 'law' },
  }),
  program({
    slug: 'bs-agri-business',
    name: 'BS Agri Business',
    shortName: 'BS Agri Business',
    facultySlug: 'agricultural-science',
    tagline: 'The management and economics of food and agriculture.',
    overview:
      'BS Agri Business combines agricultural knowledge with business, economics and marketing, preparing students to manage enterprises across the agricultural value chain.',
    introduction: [
      'Agriculture remains central to Pakistan’s economy. Making it more productive and profitable requires people who understand both farming and business.',
      'This program suits students who want to work in agricultural companies, food supply chains, finance or rural development.',
    ],
    objectives: [
      'Introduce crop and livestock production systems.',
      'Develop knowledge of agricultural economics and marketing.',
      'Build skills in farm and agribusiness management.',
      'Encourage entrepreneurship and sustainable practice in agriculture.',
    ],
    learningOutcomes: [
      'Explain how agricultural markets and supply chains work.',
      'Prepare a business plan for an agricultural enterprise.',
      'Analyse costs, prices and risks in agricultural production.',
      'Evaluate sustainable practices in agribusiness.',
    ],
    careerAreas: ['Agribusiness management', 'Agricultural marketing and trade', 'Agri-finance and banking', 'Food supply chains', 'Rural development'],
    featured: false,
    seoKeywords: ['BS Agri Business Lahore', 'agribusiness degree Pakistan'],
    media: { alt: 'Illustration representing agribusiness', plate: 'agriculture' },
  }),
  program({
    slug: 'bs-statistics',
    name: 'BS Statistics',
    shortName: 'BS Statistics',
    facultySlug: 'basic-natural-science',
    tagline: 'Turning data into reliable evidence.',
    overview:
      'BS Statistics develops the theory and practice of collecting, analysing and interpreting data, with strong emphasis on statistical computing.',
    introduction: [
      'Statistics is the science of learning from data. It is used everywhere, from medicine and economics to sport and public policy.',
      'This program is for students with a strong interest in mathematics who want to work with data.',
    ],
    objectives: [
      'Provide a foundation in probability and mathematical statistics.',
      'Develop skills in data analysis and statistical computing.',
      'Introduce survey design and experimental design.',
      'Build the ability to communicate statistical findings clearly.',
    ],
    learningOutcomes: [
      'Apply probability models to real problems.',
      'Carry out and interpret common statistical analyses using software.',
      'Design surveys and experiments that produce reliable data.',
      'Report statistical results clearly to non-specialists.',
    ],
    careerAreas: ['Data analysis', 'Market and social research', 'Banking and insurance', 'Public sector statistics', 'Research and further study'],
    featured: false,
    seoKeywords: ['BS Statistics Lahore', 'statistics degree Pakistan'],
    media: { alt: 'Illustration representing statistics', swap: true, plate: 'sciences' },
  }),
  program({
    slug: 'bs-mathematics',
    name: 'BS Mathematics',
    shortName: 'BS Maths',
    facultySlug: 'basic-natural-science',
    tagline: 'Abstract thinking, precise reasoning, practical power.',
    overview:
      'BS Mathematics develops a deep understanding of pure and applied mathematics, building the rigorous reasoning valued across science, technology and finance.',
    introduction: [
      'Mathematics is the foundation of the sciences and a discipline of great beauty in its own right.',
      'This program suits students who enjoy proof, problem-solving and abstract thinking, and who want careers that reward analytical skill.',
    ],
    objectives: [
      'Provide a strong foundation in calculus, algebra and analysis.',
      'Introduce applied mathematics and mathematical modelling.',
      'Develop rigorous logical reasoning and proof.',
      'Build computational skills for mathematical work.',
    ],
    learningOutcomes: [
      'Construct and explain mathematical proofs.',
      'Model real-world problems mathematically.',
      'Use computational tools to solve mathematical problems.',
      'Communicate mathematical ideas clearly.',
    ],
    careerAreas: ['Teaching', 'Finance and actuarial work', 'Data science', 'Software and technology', 'Research and further study'],
    featured: false,
    seoKeywords: ['BS Mathematics Lahore', 'BS Maths Lahore', 'mathematics degree Pakistan'],
    media: { alt: 'Illustration representing mathematics', plate: 'sciences' },
  }),
];

export const programBySlug = (slug: string) => programs.find((p) => p.slug === slug);
export const programsForFaculty = (facultySlug: string) => programs.filter((p) => p.facultySlug === facultySlug);

/** Questions shared by all program pages. Answers point to the official source instead of inventing details. */
export const programFaqs = (p: Program) => [
  {
    question: `How long does the ${p.shortName} program take?`,
    answer:
      p.official.duration ??
      'The official duration will be published by the University. Please contact the Admissions Office for confirmed details.',
  },
  {
    question: `What are the entry requirements for ${p.shortName}?`,
    answer:
      p.official.eligibility?.join(' ') ??
      'Eligibility criteria are set by the University and will be published on this page. Until then, please contact the Admissions Office.',
  },
  {
    question: 'What are the fees?',
    answer:
      p.official.fees ??
      'The fee structure has not yet been published on this website. Please contact the Admissions Office for current fees.',
  },
  {
    question: 'How do I apply?',
    answer:
      'Follow the steps on the How to Apply page. It explains how to choose a program, prepare your documents and submit an application.',
  },
];
