import type { Draft, MediaSlot, Program, ProgramLevel, ProposedProgram } from './types';

/**
 * Degree programs, as listed in the University's website brief (Annex-A):
 * 13 undergraduate degree programs, 9 associate degree programs and 7 proposed graduate programs.
 *
 * The descriptive text (overview, objectives, outcomes, career areas) is DRAFT copy
 * written for editorial review. It describes the discipline in general terms and makes
 * no claim about the official scheme of study.
 *
 * Everything under `official` (scope, duration, credit hours, curriculum, admission and
 * passing criteria, internship, projects, accreditation, fees) must be supplied by the
 * University. It is null for now, so the website shows a "to be confirmed" panel instead
 * of inventing details.
 */

const draft = <T,>(value: T): Draft<T> => ({ status: 'draft', value });

const unconfirmed: Program['official'] = {
  scope: null,
  duration: null,
  totalCreditHours: null,
  curriculum: null,
  eligibility: null,
  passingCriteria: null,
  internship: null,
  projects: null,
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

const make =
  (level: ProgramLevel) =>
  (p: ProgramInput): Program => ({
    ...p,
    level,
    overview: draft(p.overview),
    introduction: draft(p.introduction),
    objectives: draft(p.objectives),
    learningOutcomes: draft(p.learningOutcomes),
    careerAreas: draft(p.careerAreas),
    official: unconfirmed,
    media: { src: null, ...p.media },
  });

const undergraduate = make('Undergraduate');
const associate = make('Associate Degree');

/** Shared sentence for associate degree introductions. Keeps the claim general: the official duration is published by the University. */
const adNote =
  'Associate degrees are shorter undergraduate qualifications offered under the national undergraduate education framework. They can lead directly to employment or, subject to the University’s regulations, to further study towards a bachelor’s degree.';

export const programs: Program[] = [
  // ------------------------------------------------------------------ Undergraduate
  undergraduate({
    slug: 'bs-computer-science',
    name: 'BS Computer Science',
    shortName: 'BSCS',
    facultySlug: 'computing-and-emerging-technologies',
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
  undergraduate({
    slug: 'bba',
    name: 'BBA',
    shortName: 'BBA',
    facultySlug: 'management-sciences',
    tagline: 'A broad foundation in how organisations are run, financed and grown.',
    overview:
      'The BBA (Bachelor of Business Administration) introduces the core functions of business, including accounting, finance, marketing, operations and people management, and develops the analytical and communication skills needed to lead within organisations.',
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
    featured: true,
    seoKeywords: ['BBA Lahore', 'Bachelor of Business Administration Lahore', 'business degree Lahore'],
    media: { alt: 'Illustration representing business administration', plate: 'management' },
  }),
  undergraduate({
    slug: 'bs-english',
    name: 'BS English',
    shortName: 'BS English',
    facultySlug: 'arts-and-humanities',
    tagline: 'Literature, language and the power of the written word.',
    overview: 'BS English develops close reading, critical analysis and confident writing through the study of English literature and linguistics.',
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
  undergraduate({
    slug: 'bs-education',
    name: 'BS Education',
    shortName: 'BS Education',
    facultySlug: 'social-sciences',
    tagline: 'Teaching as a profession, grounded in how people learn.',
    overview: 'BS Education prepares students to plan, deliver and evaluate teaching, combining educational theory with practical classroom experience.',
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
    featured: false,
    seoKeywords: ['BS Education Lahore', 'education degree Lahore', 'teaching degree Pakistan'],
    media: { alt: 'Illustration representing education', plate: 'education' },
  }),
  undergraduate({
    slug: 'llb',
    name: 'LLB',
    shortName: 'LLB',
    facultySlug: 'law-and-shariah',
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
  undergraduate({
    slug: 'bs-aviation-management',
    name: 'BS Aviation Management',
    shortName: 'BS Aviation Management',
    facultySlug: 'aviation-and-aeronautical-sciences',
    tagline: 'Preparing managers for airlines, airports and aviation services.',
    overview: 'BS Aviation Management combines management studies with the operational, regulatory and safety knowledge specific to the aviation industry.',
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
  undergraduate({
    slug: 'bs-statistics',
    name: 'BS Statistics',
    shortName: 'BS Statistics',
    facultySlug: 'basic-and-natural-sciences',
    tagline: 'Turning data into reliable evidence.',
    overview: 'BS Statistics develops the theory and practice of collecting, analysing and interpreting data, with strong emphasis on statistical computing.',
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
    media: { alt: 'Illustration representing statistics', plate: 'sciences' },
  }),
  undergraduate({
    slug: 'bs-agribusiness-management',
    name: 'BS Agribusiness Management',
    shortName: 'BS Agribusiness Management',
    facultySlug: 'agriculture-sciences',
    tagline: 'The management and economics of food and agriculture.',
    overview:
      'BS Agribusiness Management combines agricultural knowledge with business, economics and marketing, preparing students to manage enterprises across the agricultural value chain.',
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
    seoKeywords: ['BS Agribusiness Management Lahore', 'agribusiness degree Pakistan'],
    media: { alt: 'Illustration representing agribusiness', plate: 'agriculture' },
  }),
  undergraduate({
    slug: 'bs-public-health',
    name: 'BS Public Health',
    shortName: 'BS Public Health',
    facultySlug: 'medicine-and-allied-health-sciences',
    tagline: 'Protecting and improving the health of whole communities.',
    overview: 'BS Public Health studies how diseases spread, how health can be promoted and how health systems can serve populations more fairly and effectively.',
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
  undergraduate({
    slug: 'be-information-security-management-technology',
    name: 'B.E. Information Security Management Technology',
    shortName: 'B.E. Information Security',
    facultySlug: 'engineering-and-technology',
    tagline: 'Engineering the defences that keep information systems safe.',
    overview:
      'B.E. Information Security Management Technology develops the engineering knowledge and hands-on skills needed to design, operate and manage secure networks, systems and information infrastructure.',
    introduction: [
      'Every organisation now depends on information systems, and every one of them is a target. Information security engineering technologists build and run the defences: secure networks, hardened systems, monitoring and response.',
      'This program is for students who enjoy technical problem-solving and want a career protecting the digital systems that businesses, government and the public rely on.',
    ],
    objectives: [
      'Provide a foundation in mathematics, electronics and computing for security engineering.',
      'Develop practical skills in network, system and application security.',
      'Introduce security operations, incident response and digital forensics.',
      'Build understanding of security governance, risk management and compliance.',
    ],
    learningOutcomes: [
      'Design and configure secure network and system architectures.',
      'Identify vulnerabilities and apply appropriate controls and countermeasures.',
      'Monitor systems, detect incidents and respond following established procedures.',
      'Apply professional, legal and ethical standards to information security work.',
    ],
    careerAreas: ['Security operations', 'Network and systems security', 'Security engineering', 'Risk and compliance', 'Digital forensics and incident response'],
    featured: true,
    seoKeywords: ['information security engineering Lahore', 'BE information security Pakistan', 'cyber security degree Lahore'],
    media: { alt: 'Illustration representing information security engineering technology', plate: 'engineering' },
  }),
  undergraduate({
    slug: 'bs-nursing',
    name: 'BS Nursing',
    shortName: 'BSN',
    facultySlug: 'nursing-and-midwifery',
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
  undergraduate({
    slug: 'doctor-of-pharmacy',
    name: 'Doctor of Pharmacy',
    shortName: 'Pharm.D',
    facultySlug: 'pharmacy-and-pharmaceutical-sciences',
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
  undergraduate({
    slug: 'bs-poultry-science',
    name: 'BS Poultry Science',
    shortName: 'BS Poultry Science',
    facultySlug: 'veterinary-sciences',
    tagline: 'Healthy flocks, safe food and well-run poultry enterprises.',
    overview:
      'BS Poultry Science combines the biology of poultry with production and management, covering bird health, nutrition, breeding, hatchery operations and the economics of production.',
    introduction: [
      'Poultry is one of the fastest-growing parts of Pakistan’s agriculture. Running it well requires both scientific knowledge and sound management.',
      'This program is intended for students who want to work in poultry production, hatcheries, feed operations and the wider food industry.',
    ],
    objectives: [
      'Provide a foundation in poultry anatomy, physiology and health.',
      'Develop knowledge of nutrition, breeding and hatchery management.',
      'Introduce biosecurity, food safety and welfare standards.',
      'Build production management skills for poultry enterprises.',
    ],
    learningOutcomes: [
      'Explain the principles of poultry health and disease prevention.',
      'Plan feeding and housing programs for different production systems.',
      'Apply biosecurity and welfare practices on a farm.',
      'Evaluate the performance and economics of a poultry enterprise.',
    ],
    careerAreas: ['Poultry production management', 'Hatchery operations', 'Feed industry', 'Food processing and safety', 'Agribusiness and entrepreneurship'],
    featured: false,
    seoKeywords: ['BS Poultry Science Lahore', 'poultry science degree Pakistan'],
    media: { alt: 'Illustration representing poultry science', plate: 'poultry' },
  }),

  // ------------------------------------------------------------------ Associate degrees
  associate({
    slug: 'ad-computer-science',
    name: 'AD Computer Science',
    shortName: 'AD Computer Science',
    facultySlug: 'computing-and-emerging-technologies',
    tagline: 'A practical start in programming and computing.',
    overview: 'The Associate Degree in Computer Science builds core skills in programming, data structures, databases and web development for entry-level technology roles.',
    introduction: ['Students learn to write programs, work with data and understand how computing systems fit together, through coursework that is heavily practical.', adNote],
    objectives: ['Teach programming in at least one modern language.', 'Introduce data structures, databases and networks.', 'Develop problem-solving with computational thinking.', 'Prepare students for technical roles or further study.'],
    learningOutcomes: ['Write, test and debug programs to a specification.', 'Design simple databases and query them.', 'Build a small web or desktop application.', 'Explain the main components of a computer system.'],
    careerAreas: ['Junior software development', 'Technical support', 'Web development', 'Database support', 'Further study in computer science'],
    featured: false,
    seoKeywords: ['Associate Degree Computer Science Lahore', 'ADP computer science Pakistan'],
    media: { alt: 'Illustration representing an associate degree in computer science', swap: true, plate: 'computing' },
  }),
  associate({
    slug: 'ad-data-science',
    name: 'AD Data Science',
    shortName: 'AD Data Science',
    facultySlug: 'computing-and-emerging-technologies',
    tagline: 'Working with data, from collection to insight.',
    overview: 'The Associate Degree in Data Science introduces statistics, programming and data tools, preparing students to clean, analyse and present data in any organisation.',
    introduction: ['Data science combines statistics, programming and domain knowledge to turn raw data into decisions. Students practise the full cycle, from gathering data to communicating results.', adNote],
    objectives: ['Introduce programming for data analysis.', 'Teach descriptive and inferential statistics.', 'Develop skills in data cleaning, visualisation and reporting.', 'Introduce the basics of machine learning.'],
    learningOutcomes: ['Prepare and explore datasets with standard tools.', 'Apply basic statistical methods and interpret the results.', 'Create clear charts and dashboards.', 'Explain how common machine learning models work.'],
    careerAreas: ['Data analysis', 'Business intelligence support', 'Reporting and visualisation', 'Research assistance', 'Further study in data science'],
    featured: false,
    seoKeywords: ['Associate Degree Data Science Lahore', 'data science ADP Pakistan'],
    media: { alt: 'Illustration representing an associate degree in data science', plate: 'sciences' },
  }),
  associate({
    slug: 'ad-business-administration',
    name: 'AD Business Administration',
    shortName: 'AD Business Administration',
    facultySlug: 'management-sciences',
    tagline: 'The essentials of running a business.',
    overview: 'The Associate Degree in Business Administration covers the fundamentals of management, marketing, accounting and communication for early-career business roles.',
    introduction: ['Students gain a practical overview of how businesses operate, from managing people and money to reaching customers.', adNote],
    objectives: ['Introduce the main functions of a business.', 'Develop basic accounting and financial literacy.', 'Build communication and teamwork skills.', 'Encourage an entrepreneurial outlook.'],
    learningOutcomes: ['Describe how the functions of a business work together.', 'Prepare and read basic financial records.', 'Communicate professionally in writing and in person.', 'Contribute to a simple business plan.'],
    careerAreas: ['Office and operations administration', 'Sales and customer service', 'Small business management', 'Banking support roles', 'Further study towards a BBA'],
    featured: false,
    seoKeywords: ['Associate Degree Business Administration Lahore', 'ADP business Pakistan'],
    media: { alt: 'Illustration representing an associate degree in business administration', swap: true, plate: 'management' },
  }),
  associate({
    slug: 'ad-accounting-and-finance',
    name: 'AD Accounting and Finance',
    shortName: 'AD Accounting & Finance',
    facultySlug: 'management-sciences',
    tagline: 'Keeping the books and reading the numbers.',
    overview: 'The Associate Degree in Accounting and Finance develops practical skills in bookkeeping, financial reporting, taxation basics and financial analysis.',
    introduction: ['Every organisation needs people who can record transactions accurately, prepare accounts and understand what the figures mean.', adNote],
    objectives: ['Teach the principles of financial and management accounting.', 'Introduce finance, banking and taxation basics.', 'Develop competence with accounting software and spreadsheets.', 'Promote accuracy, integrity and professional ethics.'],
    learningOutcomes: ['Record transactions and prepare basic financial statements.', 'Analyse costs and budgets for management decisions.', 'Use spreadsheets and accounting software confidently.', 'Explain the basics of taxation and financial regulation.'],
    careerAreas: ['Accounts and bookkeeping', 'Audit support', 'Banking operations', 'Payroll and finance administration', 'Further study in accounting'],
    featured: false,
    seoKeywords: ['Associate Degree Accounting and Finance Lahore', 'ADP accounting Pakistan'],
    media: { alt: 'Illustration representing an associate degree in accounting and finance', plate: 'management' },
  }),
  associate({
    slug: 'ad-business-analytics',
    name: 'AD Business Analytics',
    shortName: 'AD Business Analytics',
    facultySlug: 'management-sciences',
    tagline: 'Business questions answered with data.',
    overview: 'The Associate Degree in Business Analytics combines business fundamentals with data analysis, so graduates can measure performance and support decisions with evidence.',
    introduction: ['Organisations collect more data than ever. Business analysts turn it into reports, forecasts and recommendations that managers can act on.', adNote],
    objectives: ['Introduce the main business functions and their key measures.', 'Develop skills in spreadsheets, databases and visualisation tools.', 'Teach basic statistics and forecasting.', 'Build the ability to present findings to decision-makers.'],
    learningOutcomes: ['Collect and organise business data from different sources.', 'Build reports and dashboards that track performance.', 'Apply basic statistical techniques to business problems.', 'Present analytical findings clearly.'],
    careerAreas: ['Business and data analysis', 'Reporting and performance management', 'Marketing analytics', 'Operations support', 'Further study in business or analytics'],
    featured: false,
    seoKeywords: ['Associate Degree Business Analytics Lahore', 'business analytics ADP Pakistan'],
    media: { alt: 'Illustration representing an associate degree in business analytics', swap: true, plate: 'sciences' },
  }),
  associate({
    slug: 'ad-english',
    name: 'AD English',
    shortName: 'AD English',
    facultySlug: 'arts-and-humanities',
    tagline: 'Strong English for study and work.',
    overview: 'The Associate Degree in English develops reading, writing and communication skills through the study of language and literature.',
    introduction: ['Students read a range of literary and non-literary texts, strengthen their grammar and style, and learn to write with clarity and purpose.', adNote],
    objectives: ['Build fluency and accuracy in written and spoken English.', 'Introduce major forms of literature in English.', 'Develop critical reading and analysis.', 'Prepare students for communication-focused roles or further study.'],
    learningOutcomes: ['Write clear, well-organised prose for different purposes.', 'Analyse literary and non-literary texts.', 'Speak confidently in presentations and discussions.', 'Apply the conventions of academic writing.'],
    careerAreas: ['Teaching support', 'Content writing and editing', 'Customer communication', 'Administration', 'Further study towards BS English'],
    featured: false,
    seoKeywords: ['Associate Degree English Lahore', 'ADP English Pakistan'],
    media: { alt: 'Illustration representing an associate degree in English', swap: true, plate: 'humanities' },
  }),
  associate({
    slug: 'ad-education',
    name: 'AD Education',
    shortName: 'AD Education',
    facultySlug: 'social-sciences',
    tagline: 'First steps into the teaching profession.',
    overview: 'The Associate Degree in Education introduces the foundations of teaching and learning, with practical classroom skills for those beginning a career in education.',
    introduction: ['Students learn how children develop and learn, how lessons are planned and how classrooms are managed, with opportunities to observe and practise teaching.', adNote],
    objectives: ['Introduce educational psychology and child development.', 'Develop lesson planning and classroom management skills.', 'Build understanding of curriculum and assessment.', 'Encourage reflective practice.'],
    learningOutcomes: ['Plan and deliver a structured lesson.', 'Use basic assessment methods to check learning.', 'Apply principles of child development in the classroom.', 'Reflect on and improve teaching practice.'],
    careerAreas: ['Primary and early-years teaching support', 'Teaching assistance', 'Tutoring', 'Education administration', 'Further study towards BS Education'],
    featured: false,
    seoKeywords: ['Associate Degree Education Lahore', 'ADP education Pakistan'],
    media: { alt: 'Illustration representing an associate degree in education', swap: true, plate: 'education' },
  }),
  associate({
    slug: 'ad-aviation-management',
    name: 'AD Aviation Management',
    shortName: 'AD Aviation Management',
    facultySlug: 'aviation-and-aeronautical-sciences',
    tagline: 'Into the aviation industry, faster.',
    overview: 'The Associate Degree in Aviation Management introduces airline and airport operations, aviation safety and customer service for entry-level roles in the industry.',
    introduction: ['Students learn how airports and airlines work day to day, from passenger handling and cargo to safety and regulation.', adNote],
    objectives: ['Introduce the structure of the aviation industry.', 'Develop understanding of airport and airline operations.', 'Build awareness of aviation safety and regulation.', 'Develop customer service and communication skills.'],
    learningOutcomes: ['Describe the main operations of an airport and an airline.', 'Apply basic safety and security procedures.', 'Handle customer-facing situations professionally.', 'Explain the regulatory framework of aviation in outline.'],
    careerAreas: ['Passenger services', 'Ground handling', 'Cargo operations', 'Airport administration', 'Further study towards BS Aviation Management'],
    featured: false,
    seoKeywords: ['Associate Degree Aviation Management Lahore', 'aviation ADP Pakistan'],
    media: { alt: 'Illustration representing an associate degree in aviation management', swap: true, plate: 'aviation' },
  }),
  associate({
    slug: 'ad-statistics',
    name: 'AD Statistics',
    shortName: 'AD Statistics',
    facultySlug: 'basic-and-natural-sciences',
    tagline: 'The foundations of data and probability.',
    overview: 'The Associate Degree in Statistics builds a solid base in probability, statistical methods and computing for roles that work with data.',
    introduction: ['Students learn to collect, summarise and interpret data, and to use statistical software to analyse it.', adNote],
    objectives: ['Teach descriptive statistics and probability.', 'Introduce estimation and hypothesis testing.', 'Develop skills in statistical software.', 'Build clear reporting of quantitative results.'],
    learningOutcomes: ['Summarise and present data appropriately.', 'Apply basic probability models.', 'Carry out standard statistical tests with software.', 'Report results clearly to non-specialists.'],
    careerAreas: ['Data entry and analysis', 'Survey and research support', 'Quality control', 'Public sector statistics', 'Further study towards BS Statistics'],
    featured: false,
    seoKeywords: ['Associate Degree Statistics Lahore', 'statistics ADP Pakistan'],
    media: { alt: 'Illustration representing an associate degree in statistics', swap: true, plate: 'sciences' },
  }),
];

/** Graduate programs the University has proposed. Shown as "proposed" and without detail pages until launched. */
export const proposedPrograms: ProposedProgram[] = [
  { name: 'MS Computer Science', shortName: 'MS CS', level: 'Graduate', facultySlug: 'computing-and-emerging-technologies' },
  { name: 'MBA', shortName: 'MBA', level: 'Graduate', facultySlug: 'management-sciences' },
  { name: 'MS Accounting and Finance', shortName: 'MS Accounting & Finance', level: 'Graduate', facultySlug: 'management-sciences' },
  { name: 'MS English Linguistics', shortName: 'MS English Linguistics', level: 'Graduate', facultySlug: 'arts-and-humanities' },
  { name: 'MS English Literature', shortName: 'MS English Literature', level: 'Graduate', facultySlug: 'arts-and-humanities' },
  { name: 'M.Phil. Education', shortName: 'M.Phil. Education', level: 'Graduate', facultySlug: 'social-sciences' },
  { name: 'MS Statistics', shortName: 'MS Statistics', level: 'Graduate', facultySlug: 'basic-and-natural-sciences' },
];

export const programLevels: { level: ProgramLevel; slug: string; label: string; plural: string }[] = [
  { level: 'Undergraduate', slug: 'undergraduate', label: 'Undergraduate degree program', plural: 'Undergraduate Degree Programs' },
  { level: 'Associate Degree', slug: 'associate', label: 'Associate degree program', plural: 'Associate Degree Programs' },
  { level: 'Graduate', slug: 'graduate', label: 'Graduate program', plural: 'Graduate Programs' },
];

export const programBySlug = (slug: string) => programs.find((p) => p.slug === slug);
export const programsForFaculty = (facultySlug: string) => programs.filter((p) => p.facultySlug === facultySlug);
export const programsAtLevel = (level: ProgramLevel) => programs.filter((p) => p.level === level);
export const proposedForFaculty = (facultySlug: string) => proposedPrograms.filter((p) => p.facultySlug === facultySlug);

/** Questions shared by all program pages. Answers point to the official source instead of inventing details. */
export const programFaqs = (p: Program) => [
  {
    question: `How long does the ${p.shortName} program take?`,
    answer: p.official.duration ?? 'The official duration will be published by the University. Please contact the Admissions Office for confirmed details.',
  },
  {
    question: `What are the entry requirements for ${p.shortName}?`,
    answer:
      p.official.eligibility?.join(' ') ??
      'Eligibility criteria are set by the University and will be published on this page. Until then, please contact the Admissions Office.',
  },
  {
    question: 'What are the fees?',
    answer: p.official.fees ?? 'The fee structure has not yet been published on this website. Please contact the Admissions Office for current fees.',
  },
  {
    question: 'How do I apply?',
    answer: 'Follow the steps on the How to Apply page. It explains how to choose a program, prepare your documents and submit an application.',
  },
];
