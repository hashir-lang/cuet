import type { SchemeOfStudy } from './types';

/**
 * Schemes of study taken from the HEC (Higher Education Commission) revised curricula that the
 * University supplied in November 2026, one entry per program slug. Each entry's `basis` names
 * the HEC document and links to the copy in public/documents/hec-curricula/.
 *
 * These are HEC's minimum national standards, not yet the University's own approved schemes. When
 * the University's Academic Council approves a scheme, replace the entry and set `basis` to null.
 * Programs without an entry here (BS Poultry Science, B.E. Information Security Management
 * Technology) show "to be confirmed" panels until a scheme is supplied.
 *
 * To edit: change the text in place. Courses keep the HEC credit notation, e.g. "3 (3-0)" or "2+1".
 */
export const schemes: Record<string, SchemeOfStudy> = {
  "bba": {
    "basis": {
      "title": "HEC Curriculum Booklet: Business and Management (2025)",
      "issued": "notified by HEC on 24 October 2025",
      "document": "/documents/hec-curricula/business-and-management-2025.pdf"
    },
    "scope": "The Bachelor of Business Administration (BBA) is a four-year undergraduate degree at NQF Level 6 that builds a strong foundation in business and management principles and integrates theoretical knowledge with practical application for a dynamic, competitive global business environment. The curriculum spans general education, core business areas including accounting, finance, marketing and human resource management, interdisciplinary courses, specialization electives, an internship and a capstone project. Emphasis is placed on analytical thinking, problem solving, ethical decision-making, leadership and an entrepreneurial mindset. Graduates are prepared for entry-level managerial roles in public and private sector organisations, for starting or expanding family businesses, or for advanced study in business and management.",
    "duration": "4 years (8 semesters)",
    "totalCreditHours": "Minimum 130",
    "structure": [
      {
        "component": "Duration",
        "credits": "4 years (8 regular semesters); maximum 6 years (12 regular semesters), further extendible by 1 year (2 regular semesters) with the permission of the statutory bodies"
      },
      {
        "component": "General Education Courses",
        "credits": "34 credit hours (14 courses)"
      },
      {
        "component": "Mandatory Core Courses",
        "credits": "33 credit hours (11 courses)"
      },
      {
        "component": "Core Courses to be Decided by HEIs",
        "credits": "27 credit hours (9 courses)"
      },
      {
        "component": "Specialization / Electives (specialization clusters)",
        "credits": "18 credit hours (6 courses)"
      },
      {
        "component": "Interdisciplinary / Allied Courses",
        "credits": "12 credit hours (4 courses)"
      },
      {
        "component": "Field Experience / Internship",
        "credits": "3 credit hours"
      },
      {
        "component": "Capstone Project",
        "credits": "3 credit hours"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Quantitative Reasoning-I",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Applications of Information and Communication Technologies",
            "credits": "2+1",
            "category": "General Education"
          },
          {
            "title": "Principles of Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Core Course-I",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Interdisciplinary Course-I",
            "credits": "3+0",
            "category": "Interdisciplinary"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Quantitative Reasoning-II",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Social Science",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Expository Writing",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Natural Science",
            "credits": "2+1",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – I (for Muslim Students)",
            "credits": "0+1",
            "category": "General Education"
          },
          {
            "title": "Organizational Behaviour",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Principles of Accounting",
            "credits": "3+0",
            "category": "Major"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Arts and Humanities",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Education / Ethics for non-Muslim students)",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – II (for Muslim Students)",
            "credits": "0+1",
            "category": "General Education"
          },
          {
            "title": "Financial Accounting",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Core Course-II",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Interdisciplinary Course-II",
            "credits": "3+0",
            "category": "Interdisciplinary"
          }
        ],
        "total": "16"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Civics and Community Engagement",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Ideology and Constitution of Pakistan",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Business Finance",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Core Course-III",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-IV",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Principles of Marketing",
            "credits": "3+0",
            "category": "Major"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester V",
        "courses": [
          {
            "title": "Marketing Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Financial Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Human Resource Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Interdisciplinary Course-III",
            "credits": "3+0",
            "category": "Interdisciplinary"
          },
          {
            "title": "HEI Decided Core Course-V",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VI",
        "courses": [
          {
            "title": "HEI Decided Core Course-VI",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-VII",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Interdisciplinary Course-IV",
            "credits": "3+0",
            "category": "Interdisciplinary"
          },
          {
            "title": "Elective-I",
            "credits": "3+0",
            "category": "Specialization"
          },
          {
            "title": "Elective-II",
            "credits": "3+0",
            "category": "Specialization"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VII",
        "courses": [
          {
            "title": "Business Research Methods",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "AI in Business",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Core Course-VIII (Business & Management Relevant Certification)",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Elective-III",
            "credits": "3+0",
            "category": "Specialization"
          },
          {
            "title": "Elective-IV",
            "credits": "3+0",
            "category": "Specialization"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VIII",
        "courses": [
          {
            "title": "HEI Decided Core Course-IX",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Elective-V",
            "credits": "3+0",
            "category": "Specialization"
          },
          {
            "title": "Elective-VI",
            "credits": "3+0",
            "category": "Specialization"
          },
          {
            "title": "Capstone Project",
            "credits": "3+0",
            "category": "Capstone Project"
          },
          {
            "title": "Internship/Field Experience",
            "credits": "3",
            "category": "Field Experience"
          }
        ],
        "total": "15"
      }
    ],
    "specializations": [
      "Business Analytics",
      "Digital Business and E-Commerce",
      "Entrepreneurship and Innovation",
      "Finance",
      "Human Resource Management",
      "Islamic Banking and Finance",
      "Marketing",
      "Operations and Supply Chain Management",
      "Project Management"
    ],
    "eligibility": [
      "Higher Secondary School Certificate (HSSC), A-levels, or an equivalent qualification recognised by the IBCC, involving 12 years of schooling with a minimum of 50% marks.",
      "Students admitted through lateral entry with Level 5 qualifications (for example non-relevant Associate Degrees, BA, BSc or B.Com) must complete a bridging semester of 15-18 credit hours of deficiency courses determined by the HEI, offered as a complete set in one semester.",
      "No bridging semester is required for holders of relevant Associate Degrees completed under the semester system."
    ],
    "passingCriteria": [
      "Completion of 130 credit hours in a minimum of eight semesters spread over a minimum of four years.",
      "CGPA of at least 2.00 out of 4.00 at completion of the degree; the university may set a higher standard.",
      "Completion of the 3-credit-hour internship or field experience and the capstone project, neither of which may be substituted by other coursework.",
      "Completion of relevant business and management certification equivalent to 3 credit hours in total over the four-year program, where 16 hours of study count as 1 credit hour; the department guides the choice of certifications."
    ],
    "internship": "A field experience or internship of 3 credit hours is a mandatory, non-substitutable requirement of the BBA degree. It lasts six to eight weeks, is preferably undertaken during a semester break or summer, and must be formally evaluated by a faculty member in consultation with the field supervisor. The scheme lists it in Semester VIII, and students may complete it any time after the fifth semester.",
    "projects": "A capstone project, typically spanning three to six credit hours (3 credit hours in the program structure and scheme), is a mandatory requirement of the BBA degree. It must be supervised and graded by a faculty member in accordance with the HEI's protocols and cannot be substituted with additional coursework or the internship. It is placed in Semester VIII.",
    "accreditation": "Programs in this field are accredited or recognised by the National Business Education Accreditation Council (NBEAC). The accreditation status of this CueTech program will be published once the process is complete.",
    "fees": null
  },
  "bs-aviation-management": {
    "basis": {
      "title": "HEC Curriculum Booklet: Business and Management (2025)",
      "issued": "notified by HEC on 24 October 2025",
      "document": "/documents/hec-curricula/business-and-management-2025.pdf",
      "note": "HEC publishes one scheme for all BS programs in business and management disciplines and lists Aviation Management among the approved titles. The 27 credit hours of domain courses are set by the University."
    },
    "scope": "The Bachelor of Studies (BS) programs in business and management disciplines are four-year NQF Level 6 degrees titled 'BS in [thematic area]'. They are designed to give students a robust academic foundation and the practical skills needed in a dynamic business environment, emphasising critical thinking, strategic decision-making and ethical leadership together with an understanding of core business functions across sectors. Theoretical instruction is combined with practical application, case studies and industry exposure, and entrepreneurial thinking, business planning and venture creation are encouraged. In this program the thematic area is Aviation Management, with 27 credit hours of domain courses designed by the institution.",
    "duration": "4 years (8 semesters)",
    "totalCreditHours": "Minimum 130",
    "structure": [
      {
        "component": "Duration",
        "credits": "4 years (8 regular semesters); maximum 6 years (12 regular semesters), further extendible by 1 year (2 regular semesters) with the permission of the statutory bodies"
      },
      {
        "component": "General Education Courses",
        "credits": "34 credit hours (14 courses)"
      },
      {
        "component": "Mandatory Core Courses (common for all BS programs in Business & Management)",
        "credits": "33 credit hours (11 courses)"
      },
      {
        "component": "Domain Core Courses in the thematic area (to be decided by HEIs)",
        "credits": "27 credit hours (9 courses)"
      },
      {
        "component": "Electives (one pool, not constituting specializations)",
        "credits": "18 credit hours (6 courses)"
      },
      {
        "component": "Interdisciplinary / Allied Courses",
        "credits": "12 credit hours (4 courses)"
      },
      {
        "component": "Field Experience / Internship",
        "credits": "3 credit hours"
      },
      {
        "component": "Capstone Project",
        "credits": "3 credit hours"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Quantitative Reasoning-I",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Applications of Information and Communication Technologies",
            "credits": "2+1",
            "category": "General Education"
          },
          {
            "title": "Principles of Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Domain Course-I",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Interdisciplinary Course-I",
            "credits": "3+0",
            "category": "Interdisciplinary"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Quantitative Reasoning-II",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Social Science",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Expository Writing",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Natural Science",
            "credits": "2+1",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – I (for Muslim Students)",
            "credits": "0+1",
            "category": "General Education"
          },
          {
            "title": "Organizational Behaviour",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Principles of Accounting",
            "credits": "3+0",
            "category": "Major"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Arts and Humanities",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – II (for Muslim Students)",
            "credits": "0+1",
            "category": "General Education"
          },
          {
            "title": "Principles of Marketing",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Financial Accounting",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Domain Course-II",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Interdisciplinary Course-II",
            "credits": "3+0",
            "category": "Interdisciplinary"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Civics and Community Engagement",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Ideology and Constitution of Pakistan",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Education / Ethics for non-Muslim students)",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Business Finance",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Marketing Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Domain Course-III",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester V",
        "courses": [
          {
            "title": "Human Resource Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Financial Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Interdisciplinary Course-III",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Domain Course-IV",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Domain Course-V",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VI",
        "courses": [
          {
            "title": "HEI Decided Domain Course-VI",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Domain Course-VII",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Interdisciplinary Course-IV",
            "credits": "3+0",
            "category": "IDS"
          },
          {
            "title": "Elective-I",
            "credits": "3+0",
            "category": "Elective"
          },
          {
            "title": "Elective-II",
            "credits": "3+0",
            "category": "Elective"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VII",
        "courses": [
          {
            "title": "Business Research Methods",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "AI in Business",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Domain Course-VIII (Business & Management Relevant Certification)",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Elective-III",
            "credits": "3+0",
            "category": "Elective"
          },
          {
            "title": "Elective-IV",
            "credits": "3+0",
            "category": "Elective"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VIII",
        "courses": [
          {
            "title": "HEI Decided Domain Course-IX",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Elective-V",
            "credits": "3+0",
            "category": "Elective"
          },
          {
            "title": "Elective-VI",
            "credits": "3+0",
            "category": "Elective"
          },
          {
            "title": "Capstone Project",
            "credits": "3+0",
            "category": "Capstone Project"
          },
          {
            "title": "Internship/Field Experience",
            "credits": "3",
            "category": "Field Experience"
          }
        ],
        "total": "15"
      }
    ],
    "specializations": null,
    "eligibility": [
      "Higher Secondary School Certificate (HSSC), A-levels, or an equivalent qualification recognised by the IBCC, involving 12 years of schooling with a minimum of 50% marks.",
      "Lateral entry follows the rules given for the BBA: holders of Level 5 qualifications (for example non-relevant Associate Degrees, BA, BSc or B.Com) must complete a bridging semester of 15-18 credit hours determined by the HEI, while holders of relevant Associate Degrees completed under the semester system need no bridging semester."
    ],
    "passingCriteria": [
      "Completion of 130 credit hours in a minimum of eight semesters spread over a minimum of four years.",
      "CGPA of at least 2.00 out of 4.00 at completion of the degree; the university may set a higher standard.",
      "Completion of the 3-credit-hour internship or field experience and the 3-credit-hour capstone project, neither of which may be substituted by other coursework.",
      "Completion of relevant certification equivalent to 3 credit hours in total over the four-year program, where 16 hours of study count as 1 credit hour; the department guides the choice of certifications."
    ],
    "internship": "A field experience or internship of 3 credit hours is a mandatory, non-substitutable requirement of the BS programs. It lasts six to eight weeks, is preferably undertaken during a semester break or summer, and must be formally evaluated by a faculty member in consultation with the field supervisor. The scheme lists it in Semester VIII, and students may complete it any time after the fifth semester.",
    "projects": "A capstone project worth 3 credit hours is a mandatory requirement of the BS degrees. It must be supervised and graded by a faculty member in accordance with the HEI's protocols and cannot be substituted with additional coursework or the internship. It is placed in Semester VIII.",
    "accreditation": "Programs in this field are accredited or recognised by the National Business Education Accreditation Council (NBEAC). The accreditation status of this CueTech program will be published once the process is complete.",
    "fees": null
  },
  "bs-agribusiness-management": {
    "basis": {
      "title": "HEC Curriculum Booklet: Business and Management (2025)",
      "issued": "notified by HEC on 24 October 2025",
      "document": "/documents/hec-curricula/business-and-management-2025.pdf",
      "note": "HEC publishes one scheme for all BS programs in business and management disciplines and lists Agribusiness among the approved titles. The 27 credit hours of domain courses are set by the University."
    },
    "scope": "The Bachelor of Studies (BS) programs in business and management disciplines are four-year NQF Level 6 degrees titled 'BS in [thematic area]'. They are designed to give students a robust academic foundation and the practical skills needed in a dynamic business environment, emphasising critical thinking, strategic decision-making and ethical leadership together with an understanding of core business functions across sectors. Theoretical instruction is combined with practical application, case studies and industry exposure, and entrepreneurial thinking, business planning and venture creation are encouraged. In this program the thematic area is Agribusiness, with 27 credit hours of domain courses designed by the institution.",
    "duration": "4 years (8 semesters)",
    "totalCreditHours": "Minimum 130",
    "structure": [
      {
        "component": "Duration",
        "credits": "4 years (8 regular semesters); maximum 6 years (12 regular semesters), further extendible by 1 year (2 regular semesters) with the permission of the statutory bodies"
      },
      {
        "component": "General Education Courses",
        "credits": "34 credit hours (14 courses)"
      },
      {
        "component": "Mandatory Core Courses (common for all BS programs in Business & Management)",
        "credits": "33 credit hours (11 courses)"
      },
      {
        "component": "Domain Core Courses in the thematic area (to be decided by HEIs)",
        "credits": "27 credit hours (9 courses)"
      },
      {
        "component": "Electives (one pool, not constituting specializations)",
        "credits": "18 credit hours (6 courses)"
      },
      {
        "component": "Interdisciplinary / Allied Courses",
        "credits": "12 credit hours (4 courses)"
      },
      {
        "component": "Field Experience / Internship",
        "credits": "3 credit hours"
      },
      {
        "component": "Capstone Project",
        "credits": "3 credit hours"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Quantitative Reasoning-I",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Applications of Information and Communication Technologies",
            "credits": "2+1",
            "category": "General Education"
          },
          {
            "title": "Principles of Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Domain Course-I",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Interdisciplinary Course-I",
            "credits": "3+0",
            "category": "Interdisciplinary"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Quantitative Reasoning-II",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Social Science",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Expository Writing",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Natural Science",
            "credits": "2+1",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – I (for Muslim Students)",
            "credits": "0+1",
            "category": "General Education"
          },
          {
            "title": "Organizational Behaviour",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Principles of Accounting",
            "credits": "3+0",
            "category": "Major"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Arts and Humanities",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – II (for Muslim Students)",
            "credits": "0+1",
            "category": "General Education"
          },
          {
            "title": "Principles of Marketing",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Financial Accounting",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Domain Course-II",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Interdisciplinary Course-II",
            "credits": "3+0",
            "category": "Interdisciplinary"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Civics and Community Engagement",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Ideology and Constitution of Pakistan",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Education / Ethics for non-Muslim students)",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Business Finance",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Marketing Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Domain Course-III",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester V",
        "courses": [
          {
            "title": "Human Resource Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Financial Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Interdisciplinary Course-III",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Domain Course-IV",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Domain Course-V",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VI",
        "courses": [
          {
            "title": "HEI Decided Domain Course-VI",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Domain Course-VII",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Interdisciplinary Course-IV",
            "credits": "3+0",
            "category": "IDS"
          },
          {
            "title": "Elective-I",
            "credits": "3+0",
            "category": "Elective"
          },
          {
            "title": "Elective-II",
            "credits": "3+0",
            "category": "Elective"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VII",
        "courses": [
          {
            "title": "Business Research Methods",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "AI in Business",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Domain Course-VIII (Business & Management Relevant Certification)",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Elective-III",
            "credits": "3+0",
            "category": "Elective"
          },
          {
            "title": "Elective-IV",
            "credits": "3+0",
            "category": "Elective"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VIII",
        "courses": [
          {
            "title": "HEI Decided Domain Course-IX",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "Elective-V",
            "credits": "3+0",
            "category": "Elective"
          },
          {
            "title": "Elective-VI",
            "credits": "3+0",
            "category": "Elective"
          },
          {
            "title": "Capstone Project",
            "credits": "3+0",
            "category": "Capstone Project"
          },
          {
            "title": "Internship/Field Experience",
            "credits": "3",
            "category": "Field Experience"
          }
        ],
        "total": "15"
      }
    ],
    "specializations": null,
    "eligibility": [
      "Higher Secondary School Certificate (HSSC), A-levels, or an equivalent qualification recognised by the IBCC, involving 12 years of schooling with a minimum of 50% marks.",
      "Lateral entry follows the rules given for the BBA: holders of Level 5 qualifications (for example non-relevant Associate Degrees, BA, BSc or B.Com) must complete a bridging semester of 15-18 credit hours determined by the HEI, while holders of relevant Associate Degrees completed under the semester system need no bridging semester."
    ],
    "passingCriteria": [
      "Completion of 130 credit hours in a minimum of eight semesters spread over a minimum of four years.",
      "CGPA of at least 2.00 out of 4.00 at completion of the degree; the university may set a higher standard.",
      "Completion of the 3-credit-hour internship or field experience and the 3-credit-hour capstone project, neither of which may be substituted by other coursework.",
      "Completion of relevant certification equivalent to 3 credit hours in total over the four-year program, where 16 hours of study count as 1 credit hour; the department guides the choice of certifications."
    ],
    "internship": "A field experience or internship of 3 credit hours is a mandatory, non-substitutable requirement of the BS programs. It lasts six to eight weeks, is preferably undertaken during a semester break or summer, and must be formally evaluated by a faculty member in consultation with the field supervisor. The scheme lists it in Semester VIII, and students may complete it any time after the fifth semester.",
    "projects": "A capstone project worth 3 credit hours is a mandatory requirement of the BS degrees. It must be supervised and graded by a faculty member in accordance with the HEI's protocols and cannot be substituted with additional coursework or the internship. It is placed in Semester VIII.",
    "accreditation": "Programs in this field are accredited or recognised by the National Business Education Accreditation Council (NBEAC). The accreditation status of this CueTech program will be published once the process is complete.",
    "fees": null
  },
  "ad-business-administration": {
    "basis": {
      "title": "HEC Curriculum Booklet: Business and Management (2025)",
      "issued": "notified by HEC on 24 October 2025",
      "document": "/documents/hec-curricula/business-and-management-2025.pdf",
      "note": "HEC publishes one scheme for all associate degrees in business and management disciplines. The 21 credit hours of domain courses are set by the University."
    },
    "scope": "The two-year Associate Degree in business and management disciplines is an NQF Level 5 undergraduate program for students who have completed 12 years of schooling. It provides foundational knowledge and practical skills in business and management functions, preparing graduates for entry-level, para-professional positions across businesses and industries, or for further study through lateral entry into a four-year bachelor's degree. The curriculum balances general education with discipline-specific courses and combines theoretical understanding with applied learning. In this program the thematic area is Business Administration, the title the document assigns to the exit award for BBA students who complete the Associate Degree requirements in the first four semesters.",
    "duration": "2 years (4 semesters); maximum 3.5",
    "totalCreditHours": "70 to 72",
    "structure": [
      {
        "component": "Duration",
        "credits": "2 years (4 regular semesters); maximum 3.5 years"
      },
      {
        "component": "Total credit hours",
        "credits": "70-72"
      },
      {
        "component": "General Education Courses",
        "credits": "34 credit hours (14 courses)"
      },
      {
        "component": "Mandatory Core Courses (common for all Associate Degrees in Business and Management)",
        "credits": "15 credit hours (5 courses)"
      },
      {
        "component": "Domain Specific Courses in the thematic area (to be decided by HEIs)",
        "credits": "21 credit hours (7 courses in the scheme)"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Quantitative Reasoning-I",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Applications of Information and Communication Technologies",
            "credits": "2+1",
            "category": "General Education"
          },
          {
            "title": "Principles of Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Core Course-I",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-II",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Quantitative Reasoning-II",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Social Science",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Expository Writing",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Natural Science",
            "credits": "2+1",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – I (for Muslim Students)",
            "credits": "0+1",
            "category": "General Education"
          },
          {
            "title": "Organizational Behavior",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Principles of Accounting",
            "credits": "3+0",
            "category": "Major"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Arts and Humanities",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Education / Ethics for non-Muslim students)",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – II (for Muslim Students)",
            "credits": "0+1",
            "category": "General Education"
          },
          {
            "title": "HEI Decided Core Course-III",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-IV",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-V",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "16"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Civics and Community Engagement",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Ideology and Constitution of Pakistan",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Business Finance",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Principles of Marketing",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Core Course-VI",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-VII",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "18"
      }
    ],
    "specializations": null,
    "eligibility": [
      "Higher Secondary School Certificate (HSSC), A-levels, or an equivalent qualification recognised by the IBCC, involving 12 years of schooling with a minimum of 50% marks."
    ],
    "passingCriteria": [
      "Completion of 70-72 credit hours over a minimum of four regular semesters (two years), within a maximum duration of 3.5 years.",
      "Completion of the 34 credit hours of General Education courses, the 15 credit hours of mandatory core courses and the 21 credit hours of HEI-decided domain courses prescribed in the program structure."
    ],
    "internship": null,
    "projects": null,
    "accreditation": "Programs in this field are accredited or recognised by the National Business Education Accreditation Council (NBEAC). The accreditation status of this CueTech program will be published once the process is complete.",
    "fees": null
  },
  "ad-accounting-and-finance": {
    "basis": {
      "title": "HEC Curriculum Booklet: Business and Management (2025)",
      "issued": "notified by HEC on 24 October 2025",
      "document": "/documents/hec-curricula/business-and-management-2025.pdf",
      "note": "HEC publishes one scheme for all associate degrees in business and management disciplines. The 21 credit hours of domain courses are set by the University."
    },
    "scope": "The two-year Associate Degree in business and management disciplines is an NQF Level 5 undergraduate program for students who have completed 12 years of schooling. It provides foundational knowledge and practical skills in business and management functions, preparing graduates for entry-level, para-professional positions across businesses and industries, or for further study through lateral entry into a four-year bachelor's degree. The curriculum balances general education with discipline-specific courses and combines theoretical understanding with applied learning. In this program the thematic area is Accounting and Finance, and the 21 credit hours of domain courses are designed by the institution.",
    "duration": "2 years (4 semesters); maximum 3.5",
    "totalCreditHours": "70 to 72",
    "structure": [
      {
        "component": "Duration",
        "credits": "2 years (4 regular semesters); maximum 3.5 years"
      },
      {
        "component": "Total credit hours",
        "credits": "70-72"
      },
      {
        "component": "General Education Courses",
        "credits": "34 credit hours (14 courses)"
      },
      {
        "component": "Mandatory Core Courses (common for all Associate Degrees in Business and Management)",
        "credits": "15 credit hours (5 courses)"
      },
      {
        "component": "Domain Specific Courses in the thematic area (to be decided by HEIs)",
        "credits": "21 credit hours (7 courses in the scheme)"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Quantitative Reasoning-I",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Applications of Information and Communication Technologies",
            "credits": "2+1",
            "category": "General Education"
          },
          {
            "title": "Principles of Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Core Course-I",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-II",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Quantitative Reasoning-II",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Social Science",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Expository Writing",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Natural Science",
            "credits": "2+1",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – I (for Muslim Students)",
            "credits": "0+1",
            "category": "General Education"
          },
          {
            "title": "Organizational Behavior",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Principles of Accounting",
            "credits": "3+0",
            "category": "Major"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Arts and Humanities",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Education / Ethics for non-Muslim students)",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – II (for Muslim Students)",
            "credits": "0+1",
            "category": "General Education"
          },
          {
            "title": "HEI Decided Core Course-III",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-IV",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-V",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "16"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Civics and Community Engagement",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Ideology and Constitution of Pakistan",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Business Finance",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Principles of Marketing",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Core Course-VI",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-VII",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "18"
      }
    ],
    "specializations": null,
    "eligibility": [
      "Higher Secondary School Certificate (HSSC), A-levels, or an equivalent qualification recognised by the IBCC, involving 12 years of schooling with a minimum of 50% marks."
    ],
    "passingCriteria": [
      "Completion of 70-72 credit hours over a minimum of four regular semesters (two years), within a maximum duration of 3.5 years.",
      "Completion of the 34 credit hours of General Education courses, the 15 credit hours of mandatory core courses and the 21 credit hours of HEI-decided domain courses prescribed in the program structure."
    ],
    "internship": null,
    "projects": null,
    "accreditation": "Programs in this field are accredited or recognised by the National Business Education Accreditation Council (NBEAC). The accreditation status of this CueTech program will be published once the process is complete.",
    "fees": null
  },
  "ad-business-analytics": {
    "basis": {
      "title": "HEC Curriculum Booklet: Business and Management (2025)",
      "issued": "notified by HEC on 24 October 2025",
      "document": "/documents/hec-curricula/business-and-management-2025.pdf",
      "note": "HEC publishes one scheme for all associate degrees in business and management disciplines. The 21 credit hours of domain courses are set by the University."
    },
    "scope": "The two-year Associate Degree in business and management disciplines is an NQF Level 5 undergraduate program for students who have completed 12 years of schooling. It provides foundational knowledge and practical skills in business and management functions, preparing graduates for entry-level, para-professional positions across businesses and industries, or for further study through lateral entry into a four-year bachelor's degree. The curriculum balances general education with discipline-specific courses and combines theoretical understanding with applied learning. In this program the thematic area is Business Analytics, an area recommended by the NCRC, with 21 credit hours of domain courses designed by the institution.",
    "duration": "2 years (4 semesters); maximum 3.5",
    "totalCreditHours": "70 to 72",
    "structure": [
      {
        "component": "Duration",
        "credits": "2 years (4 regular semesters); maximum 3.5 years"
      },
      {
        "component": "Total credit hours",
        "credits": "70-72"
      },
      {
        "component": "General Education Courses",
        "credits": "34 credit hours (14 courses)"
      },
      {
        "component": "Mandatory Core Courses (common for all Associate Degrees in Business and Management)",
        "credits": "15 credit hours (5 courses)"
      },
      {
        "component": "Domain Specific Courses in the thematic area (to be decided by HEIs)",
        "credits": "21 credit hours (7 courses in the scheme)"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Quantitative Reasoning-I",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Applications of Information and Communication Technologies",
            "credits": "2+1",
            "category": "General Education"
          },
          {
            "title": "Principles of Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Core Course-I",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-II",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Quantitative Reasoning-II",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Social Science",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Expository Writing",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Natural Science",
            "credits": "2+1",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – I (for Muslim Students)",
            "credits": "0+1",
            "category": "General Education"
          },
          {
            "title": "Organizational Behavior",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Principles of Accounting",
            "credits": "3+0",
            "category": "Major"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Arts and Humanities",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Education / Ethics for non-Muslim students)",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – II (for Muslim Students)",
            "credits": "0+1",
            "category": "General Education"
          },
          {
            "title": "HEI Decided Core Course-III",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-IV",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-V",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "16"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Civics and Community Engagement",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Ideology and Constitution of Pakistan",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Business Finance",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Principles of Marketing",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Core Course-VI",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-VII",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "18"
      }
    ],
    "specializations": null,
    "eligibility": [
      "Higher Secondary School Certificate (HSSC), A-levels, or an equivalent qualification recognised by the IBCC, involving 12 years of schooling with a minimum of 50% marks."
    ],
    "passingCriteria": [
      "Completion of 70-72 credit hours over a minimum of four regular semesters (two years), within a maximum duration of 3.5 years.",
      "Completion of the 34 credit hours of General Education courses, the 15 credit hours of mandatory core courses and the 21 credit hours of HEI-decided domain courses prescribed in the program structure."
    ],
    "internship": null,
    "projects": null,
    "accreditation": "Programs in this field are accredited or recognised by the National Business Education Accreditation Council (NBEAC). The accreditation status of this CueTech program will be published once the process is complete.",
    "fees": null
  },
  "ad-aviation-management": {
    "basis": {
      "title": "HEC Curriculum Booklet: Business and Management (2025)",
      "issued": "notified by HEC on 24 October 2025",
      "document": "/documents/hec-curricula/business-and-management-2025.pdf",
      "note": "HEC publishes one scheme for all associate degrees in business and management disciplines. The 21 credit hours of domain courses are set by the University."
    },
    "scope": "The two-year Associate Degree in business and management disciplines is an NQF Level 5 undergraduate program for students who have completed 12 years of schooling. It provides foundational knowledge and practical skills in business and management functions, preparing graduates for entry-level, para-professional positions across businesses and industries, or for further study through lateral entry into a four-year bachelor's degree. The curriculum balances general education with discipline-specific courses and combines theoretical understanding with applied learning. In this program the thematic area is Aviation Management, with the 21 credit hours of domain courses designed by the institution.",
    "duration": "2 years (4 semesters); maximum 3.5",
    "totalCreditHours": "70 to 72",
    "structure": [
      {
        "component": "Duration",
        "credits": "2 years (4 regular semesters); maximum 3.5 years"
      },
      {
        "component": "Total credit hours",
        "credits": "70-72"
      },
      {
        "component": "General Education Courses",
        "credits": "34 credit hours (14 courses)"
      },
      {
        "component": "Mandatory Core Courses (common for all Associate Degrees in Business and Management)",
        "credits": "15 credit hours (5 courses)"
      },
      {
        "component": "Domain Specific Courses in the thematic area (to be decided by HEIs)",
        "credits": "21 credit hours (7 courses in the scheme)"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Quantitative Reasoning-I",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Applications of Information and Communication Technologies",
            "credits": "2+1",
            "category": "General Education"
          },
          {
            "title": "Principles of Management",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Core Course-I",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-II",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Quantitative Reasoning-II",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Social Science",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Expository Writing",
            "credits": "3+0",
            "category": "General Education"
          },
          {
            "title": "Natural Science",
            "credits": "2+1",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – I (for Muslim Students)",
            "credits": "0+1",
            "category": "General Education"
          },
          {
            "title": "Organizational Behavior",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Principles of Accounting",
            "credits": "3+0",
            "category": "Major"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Arts and Humanities",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Education / Ethics for non-Muslim students)",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – II (for Muslim Students)",
            "credits": "0+1",
            "category": "General Education"
          },
          {
            "title": "HEI Decided Core Course-III",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-IV",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-V",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "16"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Civics and Community Engagement",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Ideology and Constitution of Pakistan",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2+0",
            "category": "General Education"
          },
          {
            "title": "Business Finance",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Principles of Marketing",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "HEI Decided Core Course-VI",
            "credits": "3+0",
            "category": "To be decided by HEI"
          },
          {
            "title": "HEI Decided Core Course-VII",
            "credits": "3+0",
            "category": "To be decided by HEI"
          }
        ],
        "total": "18"
      }
    ],
    "specializations": null,
    "eligibility": [
      "Higher Secondary School Certificate (HSSC), A-levels, or an equivalent qualification recognised by the IBCC, involving 12 years of schooling with a minimum of 50% marks."
    ],
    "passingCriteria": [
      "Completion of 70-72 credit hours over a minimum of four regular semesters (two years), within a maximum duration of 3.5 years.",
      "Completion of the 34 credit hours of General Education courses, the 15 credit hours of mandatory core courses and the 21 credit hours of HEI-decided domain courses prescribed in the program structure."
    ],
    "internship": null,
    "projects": null,
    "accreditation": "Programs in this field are accredited or recognised by the National Business Education Accreditation Council (NBEAC). The accreditation status of this CueTech program will be published once the process is complete.",
    "fees": null
  },
  "bs-computer-science": {
    "basis": {
      "title": "HEC Revised Curriculum for Degree Programs in Computer Science (2025)",
      "issued": "notified by HEC on 14 October 2025",
      "document": "/documents/hec-curricula/computer-science-2025.pdf"
    },
    "scope": "The BS Computer Science is a four-year degree aligned with the HEC Undergraduate Education Policy V 1.1. It is designed to equip students with a solid foundation in core computing principles alongside specialized knowledge in emerging fields such as software engineering, artificial intelligence, data science, cyber security, robotics and gaming design. The program emphasizes theoretical understanding and practical skills, fostering problem-solving, software and hardware development, and critical analysis of technological solutions. Students engage in hands-on projects, internships and research activities addressing real-world challenges in industry, healthcare, entertainment and national security, while the curriculum promotes ethical and professional responsibility, teamwork and effective communication to produce adaptable, lifelong learners in computing.",
    "duration": "4 years (8 semesters); maximum 6",
    "totalCreditHours": "Minimum 130",
    "structure": [
      {
        "component": "Duration",
        "credits": "4 years (minimum 8 regular semesters); maximum 6 years, further extendable by one year subject to approval of the university's statutory body under the HEC Undergraduate Education Policy 2023 V 1.1"
      },
      {
        "component": "Total credit hours",
        "credits": "Minimum 130 (the HEC scheme totals exactly 130; universities may set higher standards provided the HEC minimum is not reduced)"
      },
      {
        "component": "Minimum Credit Hours",
        "credits": "130"
      },
      {
        "component": "General Education Courses",
        "credits": "34 credit hours (14 courses)"
      },
      {
        "component": "Discipline Related Courses / Major (total)",
        "credits": "75 credit hours (26 courses)"
      },
      {
        "component": "Computer Science Core Courses (compulsory)",
        "credits": "48 credit hours (14 courses)"
      },
      {
        "component": "Specialization Electives",
        "credits": "24 credit hours (08 courses)"
      },
      {
        "component": "Professional Certification",
        "credits": "03 credit hours"
      },
      {
        "component": "Interdisciplinary / Allied Courses",
        "credits": "12 credit hours (4 courses; Calculus and Analytical Geometry and Linear Algebra mandatory)"
      },
      {
        "component": "Field Experience / Internship",
        "credits": "3 credit hours"
      },
      {
        "component": "Capstone Project / Final Year Project",
        "credits": "6 credit hours"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Quantitative Reasoning-I",
            "credits": "3 (3+0)",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3 (3+0)",
            "category": "General Education"
          },
          {
            "title": "Applications of Information and Communication Technologies",
            "credits": "3 (2+1)",
            "category": "General Education"
          },
          {
            "title": "Social Science",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Programming Fundamentals",
            "credits": "4 (3+1)",
            "category": "Major"
          },
          {
            "title": "Calculus & Analytical Geometry – IDS I",
            "credits": "3 (3+0)",
            "category": "IDS - Mandatory"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Quantitative Reasoning-II",
            "credits": "3 (3+0)",
            "category": "General Education"
          },
          {
            "title": "Arts and Humanities",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – I (for Muslim Students)",
            "credits": "1 (0+1)",
            "category": "General Education"
          },
          {
            "title": "Object Oriented Programming",
            "credits": "4 (3+1)",
            "category": "Major"
          },
          {
            "title": "Digital Logic Design",
            "credits": "4 (3+1)",
            "category": "Major"
          },
          {
            "title": "Linear Algebra IDS-II",
            "credits": "3 (3+0)",
            "category": "IDS - Mandatory"
          }
        ],
        "total": "19"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Expository Writing",
            "credits": "3 (3+0)",
            "category": "General Education"
          },
          {
            "title": "Natural Science",
            "credits": "3 (2+1)",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – II (for Muslim Students)",
            "credits": "1 (0+1)",
            "category": "General Education"
          },
          {
            "title": "Data Structures",
            "credits": "4 (3+1)",
            "category": "Major"
          },
          {
            "title": "Database Systems",
            "credits": "4 (3+1)",
            "category": "Major"
          },
          {
            "title": "Operating Systems",
            "credits": "4 (3+1)",
            "category": "Major"
          }
        ],
        "total": "19"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Civics and Community Engagement",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Ideology and Constitution of Pakistan",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Education / Ethics for non-Muslim students)",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Software Engineering",
            "credits": "3 (3+0)",
            "category": "Major"
          },
          {
            "title": "Computer Organization & Architecture",
            "credits": "3 (2+1)",
            "category": "Major"
          },
          {
            "title": "Design & Analysis of Algorithms",
            "credits": "3 (3+0)",
            "category": "Major"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester V",
        "courses": [
          {
            "title": "Computer Networks",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Information Security",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Artificial Intelligence",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Theory of Automata",
            "credits": "3 (3+0)",
            "category": "Major"
          },
          {
            "title": "IDS - III",
            "credits": "3 (3+0)",
            "category": "IDS"
          },
          {
            "title": "IDS - IV",
            "credits": "3 (3+0)",
            "category": "IDS"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester VI",
        "courses": [
          {
            "title": "Cloud Computing",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Elective-I",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Elective-II",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Elective-III",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Elective-IV",
            "credits": "3",
            "category": "Major"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VII",
        "courses": [
          {
            "title": "Elective-V",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Elective-VI",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Elective-VII",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Elective-VIII",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Professional Certification",
            "credits": "3",
            "category": "Certification"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VIII",
        "courses": [
          {
            "title": "Final Year Project",
            "credits": "6",
            "category": "Capstone Project"
          },
          {
            "title": "Field Experience",
            "credits": "3",
            "category": "Field Experience"
          }
        ],
        "total": "9"
      }
    ],
    "specializations": [
      "Software Engineering",
      "Data Science",
      "Artificial Intelligence",
      "Cyber Security",
      "Information Technology",
      "Computer Engineering",
      "Computer Games Development",
      "Multimedia and Animation",
      "Robotics",
      "Human Computer Interaction",
      "Internet of Things (IoT)",
      "Network Infrastructure & Cloud Computing",
      "Quantum Computing",
      "Health Informatics"
    ],
    "eligibility": [
      "Higher Secondary School Certificate / A-levels (minimum 12 years of schooling) or an IBCC-equivalent qualification with at least 50% marks, having studied Mathematics, is the basic eligibility requirement for admission to all BS Computing programs.",
      "Students who have not studied Mathematics at intermediate level must pass deficiency courses in Mathematics (06 credits) in the first year, including a zero semester.",
      "Candidates may additionally be required to pass an entry test conducted by the university or admission authority and to fulfil other institutional criteria such as interviews or aptitude assessments.",
      "Holders of a 14-year qualification in Computing (Associate Degree – Computing) with a minimum CGPA of 2.00/4.00 may be admitted to the fifth semester after completing 15-18 credits of deficiency courses in a bridging semester; the university may set higher eligibility and admission criteria for this pathway."
    ],
    "passingCriteria": [
      "Completion of a minimum of 130 credit hours over at least eight regular semesters (four years), within a maximum of six years, extendable by one further year with the approval of the university's statutory body.",
      "Completion of all 14 General Education courses (34 credit hours) with the same titles and credits as prescribed in the HEC Undergraduate Education Policy V 1.1.",
      "Completion of the 14 compulsory Computer Science core courses (48 credit hours), 24 credit hours of specialization electives (7-8 courses from a specialization cluster) and at least 12 credit hours of interdisciplinary courses, including the mandatory Calculus and Analytical Geometry and Linear Algebra.",
      "Completion of a graded Field Experience / Internship of 3 credit hours, which cannot be substituted with additional coursework, capstone, research or project work.",
      "Completion of a Capstone / Final Year Project of 6 credit hours, which cannot be substituted with additional coursework or internship.",
      "Completion of industry-relevant professional certification(s) equivalent to 3 credit hours over the four-year program, where a certification comprising at least 16 hours of study counts as 1 credit hour.",
      "A course load of 15-21 credit hours per regular semester; summer/winter semesters are used only for remedial, deficiency, failure or repetition courses.",
      "A student with a semester GPA below 2.00/4.00 who passes all papers is promoted on probation and must achieve more than 2.0 GPA in the next semester; a student with GPA 1.7 or above who fails any paper is promoted conditionally on probation and must register in the summer semester to improve the grade; a student with GPA below 1.7 in two consecutive semesters who still fails papers after attending a summer semester for one academic year is dropped from the university rolls."
    ],
    "internship": "A Field Experience / Internship of 3 credit hours (equal to a minimum of 150 working hours; 6 to 8 weeks) is a mandatory degree-award requirement for the BS Computer Science, graded by a faculty member in collaboration with the supervisor in the field. It cannot be substituted with additional coursework, capstone or project work. The scheme places it in Semester VIII, but it may be offered during a summer/winter semester, and Annex-A allows completion at any time during the four-year degree, recommending it after the second year (four semesters). Accepted modes are on-site, remote/online, university-assigned projects/tasks, and industry-focused courses/workshops/bootcamps offered or approved by the university; assessment may include internship reports/logbooks, employer/supervisor feedback, presentations or viva and project deliverables. The Associate Degree – Computing structure contains no internship component.",
    "projects": "A Capstone / Final Year Project of 6 credit hours is a mandatory degree-award requirement for the BS Computer Science and cannot be substituted with additional coursework or internship. The scheme places it in Semester VIII, but it may be split across the 7th and 8th semesters (Annex-B: a minimum of 6 credit hours completed over at least two consecutive semesters or during the last semester). The main text says the FYP must be supervised jointly by an industry supervisor and graded by a faculty member; Annex-B requires a department-approved faculty supervisor with industry co-supervisors encouraged. Projects should align with one or more UN Sustainable Development Goals or relevant thematic areas; students may work individually or in teams with clearly defined roles. Evaluation is staged (proposal approval, progress reviews, final presentation/demonstration, report submission, external evaluation where required) and deliverables are a final report/thesis, presentation slides, a working prototype/system/model and a poster or summary document, with plagiarism rules and acknowledgement of licensed data, copyrighted material and AI tools. Separately, professional certification(s) equivalent to 3 credit hours (Semester VII in the scheme) are a mandatory degree-completion requirement.",
    "accreditation": "Programs in this field are accredited or recognised by the National Computing Education Accreditation Council (NCEAC). The accreditation status of this CueTech program will be published once the process is complete.",
    "fees": null
  },
  "ad-computer-science": {
    "basis": {
      "title": "HEC Revised Curriculum for Degree Programs in Computer Science (2025)",
      "issued": "notified by HEC on 14 October 2025",
      "document": "/documents/hec-curricula/computer-science-2025.pdf",
      "note": "HEC prescribes one standard scheme and title, \"Associate Degree – Computing\", for all two-year computing programs."
    },
    "scope": "The Associate Degree – Computing is the standardized two-year undergraduate qualification at NQF Level 5 that the HEC Computer Science curriculum (2025) prescribes alongside the BS Computer Science, following the HEC Undergraduate Education Policy 2023 V 1.1. It comprises a minimum of four regular semesters and 72 credit hours: the 14 General Education courses mandated for every undergraduate degree, seven compulsory computing core courses that provide a strong and comprehensive foundation in the fundamental areas of computing, and 12 credit hours of electives drawn from a pool of applied computing courses. Graduates may progress to the fifth semester of BS Computer Science after completing bridging courses.",
    "duration": "2 years (4 semesters); maximum 3.5",
    "totalCreditHours": "Minimum 72",
    "structure": [
      {
        "component": "Duration",
        "credits": "2 years (minimum 4 regular semesters); maximum 3.5 years"
      },
      {
        "component": "Total credit hours",
        "credits": "Minimum 72 (the HEC scheme totals exactly 72; universities may set higher standards provided the HEC minimum is not reduced)"
      },
      {
        "component": "Minimum Credit Hours",
        "credits": "72"
      },
      {
        "component": "General Education Courses",
        "credits": "34 credit hours (14 courses)"
      },
      {
        "component": "Discipline Related Courses / Major (total)",
        "credits": "38 credit hours (11 courses)"
      },
      {
        "component": "Computing Core (compulsory)",
        "credits": "26 credit hours (7 courses)"
      },
      {
        "component": "Specialization Electives (from the Pool of Electives)",
        "credits": "12 credit hours (3-4 courses)"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Quantitative Reasoning-I",
            "credits": "3 (3+0)",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3 (3+0)",
            "category": "General Education"
          },
          {
            "title": "Applications of Information and Communication Technologies",
            "credits": "3 (2+1)",
            "category": "General Education"
          },
          {
            "title": "Social Science",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Programming Fundamentals",
            "credits": "3+1",
            "category": "Major"
          },
          {
            "title": "Elective - I",
            "credits": "3",
            "category": "Major"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Quantitative Reasoning-II",
            "credits": "3 (3+0)",
            "category": "General Education"
          },
          {
            "title": "Arts and Humanities",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – I (for Muslim Students)",
            "credits": "1 (0+1)",
            "category": "General Education"
          },
          {
            "title": "Object Oriented Programming",
            "credits": "3+1",
            "category": "Major"
          },
          {
            "title": "Data Structures",
            "credits": "3+1",
            "category": "Major"
          },
          {
            "title": "Elective - II",
            "credits": "3",
            "category": "Major"
          }
        ],
        "total": "19"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Expository Writing",
            "credits": "3 (3+0)",
            "category": "General Education"
          },
          {
            "title": "Natural Science",
            "credits": "3 (2+1)",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – II (for Muslim Students)",
            "credits": "1 (0+1)",
            "category": "General Education"
          },
          {
            "title": "Computer Networks",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Database Systems",
            "credits": "3+1",
            "category": "Major"
          },
          {
            "title": "Elective-III",
            "credits": "3",
            "category": "Major"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Civics and Community Engagement",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Ideology and Constitution of Pakistan",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Education / Ethics for non-Muslim students)",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Software Engineering",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Operating Systems",
            "credits": "3+1",
            "category": "Major"
          },
          {
            "title": "Elective-IV",
            "credits": "3",
            "category": "Major"
          }
        ],
        "total": "18"
      }
    ],
    "specializations": null,
    "eligibility": [
      "Higher Secondary School Certificate / A-levels (minimum 12 years of schooling) or an IBCC-equivalent qualification with at least 45% marks, having studied Mathematics, is the basic eligibility requirement for admission to all Associate Degrees in Computing programs.",
      "Students who have not studied Mathematics at intermediate level must pass deficiency courses in Mathematics (06 credits) in the first year, including a zero semester.",
      "Candidates may additionally be required to pass an entry test conducted by the university or admission authority and to fulfil other institutional criteria such as interviews or aptitude assessments."
    ],
    "passingCriteria": [
      "Completion of a minimum of 72 credit hours over at least four regular semesters (two years), within a maximum of 3.5 years.",
      "Completion of all 14 General Education courses (34 credit hours) with the same titles and credits as prescribed in the HEC Undergraduate Education Policy V 1.1.",
      "Completion of the seven compulsory computing core courses (26 credit hours) and 12 credit hours (3-4 courses) of electives from the pool of electives approved by the university's statutory bodies.",
      "A course load of 15-21 credit hours per regular semester; summer/winter semesters are used only for remedial, deficiency, failure or repetition courses.",
      "The document states no minimum CGPA for award of the Associate Degree; a CGPA of at least 2.00/4.00 in the Associate Degree is, however, the minimum for admission to the fifth semester of BS Computer Science."
    ],
    "internship": "Not required. The Associate Degree – Computing structure (34 General Education + 26 core + 12 electives = 72 credit hours) contains no Field Experience / Internship component; the document states the 3-credit internship as a degree-award requirement for the BS Computer Science only.",
    "projects": "Not required. No Capstone / Final Year Project and no professional certification component appears in the Associate Degree – Computing structure or scheme; these are stated as BS Computer Science requirements only.",
    "accreditation": "The scheme of study follows the HEC curriculum. The recognition and accreditation status of this CueTech program will be published by the University.",
    "fees": null
  },
  "ad-data-science": {
    "basis": {
      "title": "HEC Revised Curriculum for Degree Programs in Computer Science (2025)",
      "issued": "notified by HEC on 14 October 2025",
      "document": "/documents/hec-curricula/computer-science-2025.pdf",
      "note": "HEC prescribes one standard scheme and title, \"Associate Degree – Computing\", for all two-year computing programs. The data science courses of the HEC curriculum are offered within the 12 elective credit hours."
    },
    "scope": "The Associate Degree – Computing is the standardized two-year undergraduate qualification at NQF Level 5 prescribed by the HEC Computer Science curriculum (2025). The curriculum fixes a single title for the Level 5 program rather than field-specific associate degrees; a Data Science orientation is carried by the 12 credit hours of electives, which the university may draw from the prescribed pool or add from the Data Science specialization courses with statutory-body approval. The program comprises at least four regular semesters and 72 credit hours, combining the 14 mandatory General Education courses with seven compulsory computing core courses, and leads on to the fifth semester of BS Computer Science after bridging courses.",
    "duration": "2 years (4 semesters); maximum 3.5",
    "totalCreditHours": "Minimum 72",
    "structure": [
      {
        "component": "Duration",
        "credits": "2 years (minimum 4 regular semesters); maximum 3.5 years"
      },
      {
        "component": "Total credit hours",
        "credits": "Minimum 72 (the HEC scheme totals exactly 72; universities may set higher standards provided the HEC minimum is not reduced)"
      },
      {
        "component": "Minimum Credit Hours",
        "credits": "72"
      },
      {
        "component": "General Education Courses",
        "credits": "34 credit hours (14 courses)"
      },
      {
        "component": "Discipline Related Courses / Major (total)",
        "credits": "38 credit hours (11 courses)"
      },
      {
        "component": "Computing Core (compulsory)",
        "credits": "26 credit hours (7 courses)"
      },
      {
        "component": "Specialization Electives (from the Pool of Electives; Data Science courses for this program)",
        "credits": "12 credit hours (3-4 courses)"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Quantitative Reasoning-I",
            "credits": "3 (3+0)",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3 (3+0)",
            "category": "General Education"
          },
          {
            "title": "Applications of Information and Communication Technologies",
            "credits": "3 (2+1)",
            "category": "General Education"
          },
          {
            "title": "Social Science",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Programming Fundamentals",
            "credits": "3+1",
            "category": "Major"
          },
          {
            "title": "Elective - I",
            "credits": "3",
            "category": "Major"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Quantitative Reasoning-II",
            "credits": "3 (3+0)",
            "category": "General Education"
          },
          {
            "title": "Arts and Humanities",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – I (for Muslim Students)",
            "credits": "1 (0+1)",
            "category": "General Education"
          },
          {
            "title": "Object Oriented Programming",
            "credits": "3+1",
            "category": "Major"
          },
          {
            "title": "Data Structures",
            "credits": "3+1",
            "category": "Major"
          },
          {
            "title": "Elective - II",
            "credits": "3",
            "category": "Major"
          }
        ],
        "total": "19"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Expository Writing",
            "credits": "3 (3+0)",
            "category": "General Education"
          },
          {
            "title": "Natural Science",
            "credits": "3 (2+1)",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – II (for Muslim Students)",
            "credits": "1 (0+1)",
            "category": "General Education"
          },
          {
            "title": "Computer Networks",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Database Systems",
            "credits": "3+1",
            "category": "Major"
          },
          {
            "title": "Elective-III",
            "credits": "3",
            "category": "Major"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Civics and Community Engagement",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Ideology and Constitution of Pakistan",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Education / Ethics for non-Muslim students)",
            "credits": "2 (2+0)",
            "category": "General Education"
          },
          {
            "title": "Software Engineering",
            "credits": "3+0",
            "category": "Major"
          },
          {
            "title": "Operating Systems",
            "credits": "3+1",
            "category": "Major"
          },
          {
            "title": "Elective-IV",
            "credits": "3",
            "category": "Major"
          }
        ],
        "total": "18"
      }
    ],
    "specializations": null,
    "eligibility": [
      "Higher Secondary School Certificate / A-levels (minimum 12 years of schooling) or an IBCC-equivalent qualification with at least 45% marks, having studied Mathematics, is the basic eligibility requirement for admission to all Associate Degrees in Computing programs.",
      "Students who have not studied Mathematics at intermediate level must pass deficiency courses in Mathematics (06 credits) in the first year, including a zero semester.",
      "Candidates may additionally be required to pass an entry test conducted by the university or admission authority and to fulfil other institutional criteria such as interviews or aptitude assessments."
    ],
    "passingCriteria": [
      "Completion of a minimum of 72 credit hours over at least four regular semesters (two years), within a maximum of 3.5 years.",
      "Completion of all 14 General Education courses (34 credit hours) with the same titles and credits as prescribed in the HEC Undergraduate Education Policy V 1.1.",
      "Completion of the seven compulsory computing core courses (26 credit hours) and 12 credit hours (3-4 courses) of electives from the pool of electives approved by the university's statutory bodies.",
      "A course load of 15-21 credit hours per regular semester; summer/winter semesters are used only for remedial, deficiency, failure or repetition courses.",
      "The document states no minimum CGPA for award of the Associate Degree; a CGPA of at least 2.00/4.00 in the Associate Degree is, however, the minimum for admission to the fifth semester of BS Computer Science."
    ],
    "internship": "Not required. The Associate Degree – Computing structure (34 General Education + 26 core + 12 electives = 72 credit hours) contains no Field Experience / Internship component; the document states the 3-credit internship as a degree-award requirement for the BS Computer Science only.",
    "projects": "Not required. No Capstone / Final Year Project and no professional certification component appears in the Associate Degree – Computing structure or scheme; these are stated as BS Computer Science requirements only.",
    "accreditation": "The scheme of study follows the HEC curriculum. The recognition and accreditation status of this CueTech program will be published by the University.",
    "fees": null
  },
  "bs-education": {
    "basis": {
      "title": "HEC Revised Curriculum for Degree Programs in Education (2025)",
      "issued": "notified by HEC on 11 April 2025",
      "document": "/documents/hec-curricula/education-2025.pdf",
      "note": "HEC titles this four-year degree \"Bachelor of Education (B.Ed)\"; the University lists it as BS Education."
    },
    "scope": "The Bachelor of Education (B.Ed) four-year program, developed in 2006 as a 12+4 degree, prepares skilled, reflective and compassionate educators grounded in content knowledge, pedagogical skills and professionalism. Its curriculum spans mathematical reasoning, science, language, social sciences and the arts, pairs two years of content courses with two years of professional courses, and incorporates contemporary resources, research methodologies and technology. Prospective teachers gain practical experience through school observation, simulations and practice teaching, learn to plan lessons and assess learning, and must show ethical responsibility, inclusivity and commitment to lifelong learning. The revised program follows the HEC Undergraduate Education Policy V 1.1, with flexible entry points and credit transfer.",
    "duration": "4 years (8 semesters); maximum 6",
    "totalCreditHours": "Minimum 132",
    "structure": [
      {
        "component": "Duration",
        "credits": "4 years (8 regular semesters); minimum 4 years, maximum 6 years"
      },
      {
        "component": "Total credit hours",
        "credits": "Minimum 132 (universities may offer up to a maximum of 148)"
      },
      {
        "component": "General Education Courses",
        "credits": "34 credit hours (14 courses)"
      },
      {
        "component": "Major Education Courses (total)",
        "credits": "80 credit hours"
      },
      {
        "component": "Major: Professional Courses Education (Compulsory/Fixed)",
        "credits": "36 credit hours (12 courses)"
      },
      {
        "component": "Major: Class Observation and Practice Teaching (Practical/Fixed)",
        "credits": "02+06 = 08 credits (3 courses)"
      },
      {
        "component": "Major: Pedagogy Courses (Compulsory/Fixed)",
        "credits": "18 credit hours (06 courses)"
      },
      {
        "component": "Major: Specialization Courses (Electives, from the pool of courses of one chosen area of specialization)",
        "credits": "18 credit hours (6 courses)"
      },
      {
        "component": "Interdisciplinary Courses (from pool of courses)",
        "credits": "12 credit hours (4 courses)"
      },
      {
        "component": "Internship",
        "credits": "3 credit hours"
      },
      {
        "component": "Capstone Project/Thesis",
        "credits": "3 credit hours"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Quantitative Reasoning – I",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Natural Science",
            "credits": "3 (2-1)",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Applications of Information & Communication Technologies (ICT)",
            "credits": "3 (2-1)",
            "category": "General Education"
          },
          {
            "title": "Professional Course Education I",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Professional Course Education II",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Quantitative Reasoning – II",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Social Sciences",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Expository Writing",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Professional Course Education III",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Professional Course Education IV",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Professional Course Education V",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Fehm-e-Quran – I (for Muslim Students)",
            "credits": "01 (0-1)",
            "category": "General Education"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Arts & Humanities",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Ethics for non-Muslim students)",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Ideology & Constitution of Pakistan",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Professional Course Education VI",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Professional Course Education VII",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Professional Course Education VIII",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Pedagogy Course - I",
            "credits": "3 (3-0)",
            "category": "Major: Pedagogy Course"
          },
          {
            "title": "Fehm-e-Quran – II (for Muslim Students)",
            "credits": "01 (0-1)",
            "category": "General Education"
          }
        ],
        "total": "19"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Pakistan Studies",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Civics & Community Engagement (a) Scouting OR Emergency Training; b) Community Service)",
            "credits": "2 (1-1)",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Professional Course Education IX",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Professional Course Education X",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "School Observation",
            "credits": "2 (0-2)",
            "category": "Major"
          },
          {
            "title": "Pedagogy Course - II",
            "credits": "3 (3-0)",
            "category": "Major: Pedagogy Course"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester V",
        "courses": [
          {
            "title": "Interdisciplinary Course - I",
            "credits": "3 (3-0)",
            "category": "Interdisciplinary Courses"
          },
          {
            "title": "Interdisciplinary Course - II",
            "credits": "3 (3-0)",
            "category": "Interdisciplinary Courses"
          },
          {
            "title": "Professional Course Education XI",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Pedagogy Course - III",
            "credits": "3 (3-0)",
            "category": "Major: Pedagogy Course"
          },
          {
            "title": "Specialization Elective Course I",
            "credits": "3 (3-0)",
            "category": "Major: Elective"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VI",
        "courses": [
          {
            "title": "Interdisciplinary Course - III",
            "credits": "3 (3-0)",
            "category": "Interdisciplinary Courses"
          },
          {
            "title": "Professional Course Education XII",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Pedagogy Course - IV",
            "credits": "3 (3-0)",
            "category": "Major: Pedagogy Course"
          },
          {
            "title": "Pedagogy Course - V",
            "credits": "3 (3-0)",
            "category": "Major: Pedagogy Course"
          },
          {
            "title": "Specialization Elective Course II",
            "credits": "3 (3-0)",
            "category": "Major: Elective"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VII",
        "courses": [
          {
            "title": "Practice Teaching - I",
            "credits": "3 (0-3)",
            "category": "Major: Practical Course"
          },
          {
            "title": "Pedagogy Course - VI",
            "credits": "3 (3-0)",
            "category": "Major: Pedagogy Course"
          },
          {
            "title": "Specialization Elective Course – III",
            "credits": "3 (3-0)",
            "category": "Major: Elective"
          },
          {
            "title": "Specialization Elective Course – IV",
            "credits": "3 (3-0)",
            "category": "Major: Elective"
          },
          {
            "title": "Capstone Project",
            "credits": "3",
            "category": "Capstone Project"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VIII",
        "courses": [
          {
            "title": "Practice Teaching - II",
            "credits": "3 (0-3)",
            "category": "Major: Practical Course"
          },
          {
            "title": "Interdisciplinary Course - IV",
            "credits": "3 (3-0)",
            "category": "Interdisciplinary Courses"
          },
          {
            "title": "Specialization Elective Course – V",
            "credits": "3 (3-0)",
            "category": "Major: Elective"
          },
          {
            "title": "Specialization Elective Course – VI",
            "credits": "3 (3-0)",
            "category": "Major: Elective"
          },
          {
            "title": "Internship",
            "credits": "3",
            "category": "Internship"
          }
        ],
        "total": "15"
      }
    ],
    "specializations": [
      "Early Childhood Care and Education",
      "Educational Research",
      "Educational Assessment",
      "Child Rights and Safety Education",
      "Educational Policy and Planning",
      "Curriculum Studies",
      "Educational Leadership and Management",
      "Educational Psychology",
      "Guidance and Counselling",
      "Inclusive Education",
      "Literacy and Non-Formal Education",
      "Online and Distance Education",
      "Quality Assurance in Education",
      "Comparative Education",
      "Teacher Professional Development",
      "Mathematics Education",
      "STEM Education",
      "Islamic Education",
      "Education for Sustainable Development",
      "Educational Entrepreneurship",
      "Educational Technology",
      "Health and Physical Education",
      "Artificial Intelligence in Education",
      "Special Education (Intellectual Impairments)",
      "Special Education (Physical Impairments)",
      "Special Education (Hearing Impairments)",
      "Special Education (Visual Impairments)",
      "Special Education (Learning Disabilities)",
      "Special Education (Autism Spectrum Disorders)"
    ],
    "eligibility": [
      "Higher Secondary School Certificate (involving 12 years of schooling) in any discipline or an Inter Board Coordination Commission (IBCC) equivalent qualification.",
      "The admitting university may set minimum eligibility scores and may conduct an entry/admission test through its own testing body or an external testing services provider of repute, as per the screening, admission and merit calculation criteria approved by its statutory bodies.",
      "Holders of an Associate Degree in Education or a related discipline are allowed admission to the fifth semester, with a minimum CGPA of 2.00/4.00 in the Associate Degree; the university may set higher criteria.",
      "Holders of an Associate Degree in a discipline other than Education may be admitted to the fifth semester after completing 15-18 credit hours of deficiency courses in a bridging semester, as determined by the admitting department.",
      "Holders of a two-year conventional BA/BSc/equivalent degree with a minimum 45% cumulative score are allowed admission to the fifth semester subject to completing 15-18 credit hours of deficiency courses in a bridging semester."
    ],
    "passingCriteria": [
      "Completion of a minimum of 132 credit hours (including internship/field experience) spread over eight regular semesters; universities may offer up to a maximum of 148 credit hours.",
      "Completion of the General Education courses with the same titles and credits as prescribed under the HEC Undergraduate Education Policy V 1.1.",
      "Completion of a mandatory field experience/internship of 3 credit hours and six to eight weeks, graded by a faculty member in collaboration with the field supervisor; it cannot be substituted with additional coursework, capstone or project work.",
      "Completion of a mandatory capstone project of 3 credit hours, supervised and graded by a faculty member under the department's protocols; it cannot be substituted with additional coursework or internship.",
      "Completion of six specialization elective courses from one chosen specialization track and four interdisciplinary courses from the pools offered by the HEI.",
      "The program must be completed within a minimum of 4 years and a maximum of 6 years, with a course load of 15-21 credit hours per regular semester."
    ],
    "internship": "A field experience/internship of 3 credit hours, lasting six to eight weeks and preferably undertaken during a semester or summer break, is a mandatory degree award requirement for the B.Ed. It is scheduled in Semester VIII, must be graded by a faculty member in collaboration with the supervisor in the field, and cannot be substituted with additional coursework, capstone or project work. Separately, the Major includes School Observation (2 credit hours, Semester IV) and Practice Teaching I and II (3 credit hours each, Semesters VII and VIII) as practical/fixed courses.",
    "projects": "A capstone project of 3 credit hours (Semester VII) is a mandatory degree award requirement for the B.Ed. It is a multifaceted culminating body of work that must be supervised and graded by a faculty member as per the protocols prescribed by the concerned department, and it cannot be substituted with additional coursework or internship.",
    "accreditation": "The scheme of study follows the HEC curriculum. The recognition and accreditation status of this CueTech program will be published by the University.",
    "fees": null
  },
  "ad-education": {
    "basis": {
      "title": "HEC Revised Curriculum for Degree Programs in Education (2025)",
      "issued": "notified by HEC on 11 April 2025",
      "document": "/documents/hec-curricula/education-2025.pdf"
    },
    "scope": "The Associate Degree in Education (ADE) is structured in accordance with the HEC Undergraduate Education Policy V 1.1 and comprises a minimum of 72 credit hours spread over four regular semesters. Its scheme of studies is the same as the first four semesters of the four-year Bachelor of Education (B.Ed), combining the General Education component with ten mandatory professional courses in Education, two pedagogy courses and school observation. The capstone project and field experience are not mandatory requirements for the ADE. Students enrolled in the B.Ed may exit with the ADE after completing the first four semesters, and ADE graduates are allowed admission to the fifth semester of the B.Ed.",
    "duration": "2 years (4 semesters)",
    "totalCreditHours": "Minimum 72",
    "structure": [
      {
        "component": "Duration",
        "credits": "2 years (4 regular semesters); no maximum duration is stated for the ADE"
      },
      {
        "component": "General Education Courses",
        "credits": "34 credit hours (15 course rows incl. Fehm-e-Quran I and II) (computed)"
      },
      {
        "component": "Major: Professional Courses Education I-X (Compulsory/Fixed)",
        "credits": "30 credit hours (10 courses) (computed)"
      },
      {
        "component": "Major: Pedagogy Courses I-II (Compulsory/Fixed)",
        "credits": "6 credit hours (2 courses) (computed)"
      },
      {
        "component": "Major: School Observation (Practical/Fixed)",
        "credits": "2 credit hours (1 course) (computed)"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Quantitative Reasoning – I",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Natural Science",
            "credits": "3 (2-1)",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Applications of Information & Communication Technologies (ICT)",
            "credits": "3 (2-1)",
            "category": "General Education"
          },
          {
            "title": "Professional Course Education I",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Professional Course Education II",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Quantitative Reasoning – II",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Social Sciences",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Expository Writing",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Professional Course Education III",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Professional Course Education IV",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Professional Course Education V",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Fehm-e-Quran – I (for Muslim Students)",
            "credits": "01 (0-1)",
            "category": "General Education"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Arts & Humanities",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Ethics for non-Muslim students)",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Ideology & Constitution of Pakistan",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Professional Course Education VI",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Professional Course Education VII",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Professional Course Education VIII",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Pedagogy Course - I",
            "credits": "3 (3-0)",
            "category": "Major: Pedagogy Course"
          },
          {
            "title": "Fehm-e-Quran – II (for Muslim Students)",
            "credits": "01 (0-1)",
            "category": "General Education"
          }
        ],
        "total": "19"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Pakistan Studies",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Civics & Community Engagement (a) Scouting OR Emergency Training; b) Community Service)",
            "credits": "2 (1-1)",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Professional Course Education IX",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "Professional Course Education X",
            "credits": "3 (3-0)",
            "category": "Major: Professional Course"
          },
          {
            "title": "School Observation",
            "credits": "2 (0-2)",
            "category": "Major"
          },
          {
            "title": "Pedagogy Course - II",
            "credits": "3 (3-0)",
            "category": "Major: Pedagogy Course"
          }
        ],
        "total": "17"
      }
    ],
    "specializations": null,
    "eligibility": [
      "Higher Secondary School Certificate (involving 12 years of schooling) in any discipline or an Inter Board Coordination Commission (IBCC) equivalent qualification.",
      "The admitting university may set minimum eligibility scores and may conduct an entry/admission test through its own testing body or an external testing services provider of repute, as per the screening, admission and merit calculation criteria approved by its statutory bodies."
    ],
    "passingCriteria": [
      "Completion of a minimum of 72 credit hours spread over four regular semesters, following the scheme of the first four semesters of the four-year B.Ed.",
      "Completion of the General Education courses with the same titles and credits as prescribed under the HEC Undergraduate Education Policy V 1.1.",
      "The capstone project and field experience/internship are not mandatory requirements for the Associate Degree in Education.",
      "A student enrolled in the four-year B.Ed may exit with the Associate Degree in Education after completing the requirements of the first four semesters as prescribed in the policy."
    ],
    "internship": "Not required. The document states that field experience (internship) is not a mandatory requirement for the Associate Degree in Education. School Observation (2 credit hours, Semester IV) is part of the ADE scheme.",
    "projects": "Not required. The document states that the capstone project is not a mandatory requirement for the Associate Degree in Education.",
    "accreditation": "The scheme of study follows the HEC curriculum. The recognition and accreditation status of this CueTech program will be published by the University.",
    "fees": null
  },
  "bs-english": {
    "basis": {
      "title": "HEC Curriculum for English Degree Programs (2025)",
      "issued": "notified by HEC on 12 June 2025",
      "document": "/documents/hec-curricula/english-2025.pdf"
    },
    "scope": "The BS in English is structured under the HEC Undergraduate Education Policy V 1.1 (2023) to give a comprehensive, interdisciplinary understanding of the English language, literature and linguistics in historical and contemporary contexts. Students engage with a broad range of literary texts, linguistic theories and communicative practices, supported by core and elective courses that reflect global trends, local relevance and emerging fields such as digital humanities, discourse studies and language technology. A capstone project applies disciplinary learning to real linguistic, literary or cultural questions. The program prepares graduates for careers in academia, education, research, publishing, media, cultural institutions and language-related industries.",
    "duration": "4 years (8 semesters); maximum 6",
    "totalCreditHours": "Minimum 136",
    "structure": [
      {
        "component": "Duration",
        "credits": "4 years (8 regular semesters); maximum 6 years"
      },
      {
        "component": "Total credit hours",
        "credits": "Minimum 136 (universities may offer up to 148)"
      },
      {
        "component": "General Education",
        "credits": "34 credit hours (15 courses)"
      },
      {
        "component": "Major: compulsory courses",
        "credits": "63 credit hours (21 courses)"
      },
      {
        "component": "Major: mandatory electives",
        "credits": "21 credit hours (7 courses)"
      },
      {
        "component": "Interdisciplinary courses",
        "credits": "12 credit hours (4 courses)"
      },
      {
        "component": "Internship",
        "credits": "3 credit hours"
      },
      {
        "component": "Capstone project",
        "credits": "3 credit hours"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Introduction to Literary Studies",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Introduction to Linguistics",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Quantitative Reasoning I",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Education / Ethics for non-Muslim students)",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Applications of Information and Communication Technologies",
            "credits": "3 (2-1)",
            "category": "General Education"
          },
          {
            "title": "Understanding of Holy Quran I",
            "credits": "1 (0-1)",
            "category": "General Education"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Introduction to Literary Movements",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Introduction to Phonetics and Phonology",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Quantitative Reasoning II",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Expository Writing",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Social Sciences (any course in the category)",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Understanding of Holy Quran II",
            "credits": "1 (0-1)",
            "category": "General Education"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Introduction to Textual Analysis",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Introduction to Morphology",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "British Literary History: Medieval to Romantic",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Natural Science (any course in the category)",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Arts and Humanities (any course in the category)",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Civics and Community Engagement",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Ideology and Constitution of Pakistan",
            "credits": "2 (2-0)",
            "category": "General Education"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "British Literary History: Victorian to Postmodern",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Semantics and Pragmatics",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Syntax",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Poetry: 14th to 19th Century",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Stylistics",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2 (2-0)",
            "category": "General Education"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester V",
        "courses": [
          {
            "title": "Classical Drama",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Sociolinguistics",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Non-Fiction",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Interdisciplinary Course I",
            "credits": "3",
            "category": "Interdisciplinary"
          },
          {
            "title": "Interdisciplinary Course II",
            "credits": "3",
            "category": "Interdisciplinary"
          },
          {
            "title": "Interdisciplinary Course III",
            "credits": "3",
            "category": "Interdisciplinary"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester VI",
        "courses": [
          {
            "title": "Novel: 18th and 19th Century",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Discourse Studies",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Psycholinguistics",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Second Language Acquisition",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Literary Theory and Criticism",
            "credits": "3 (3-0)",
            "category": "Major"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VII",
        "courses": [
          {
            "title": "Elective I",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Elective II",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Elective III",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Elective IV",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Research Methods for English Studies",
            "credits": "3 (3-0)",
            "category": "Major"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VIII",
        "courses": [
          {
            "title": "Elective V",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Elective VI",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Elective VII",
            "credits": "3",
            "category": "Major"
          },
          {
            "title": "Language and Technology in the Digital Age",
            "credits": "3 (3-0)",
            "category": "Interdisciplinary (mandatory)"
          },
          {
            "title": "Capstone Project",
            "credits": "3",
            "category": "Capstone"
          }
        ],
        "total": "15"
      }
    ],
    "specializations": [
      "English Linguistics",
      "English Literature"
    ],
    "eligibility": [
      "Higher Secondary School Certificate (12 years of schooling) or an IBCC-equivalent qualification in any group.",
      "The University may set minimum eligibility scores and may hold an entry or admission test under criteria approved by its statutory bodies."
    ],
    "passingCriteria": [
      "All General Education courses as prescribed in the HEC Undergraduate Education Policy V 1.1, including Pakistan Studies and Understanding of Holy Quran I and II, must be completed.",
      "A minimum of 136 credit hours must be completed.",
      "A capstone of 3 credit hours must be completed; it cannot be replaced by coursework or the internship.",
      "A supervised internship of 3 credit hours must be completed; it cannot be replaced by coursework, capstone or project work.",
      "CGPA must not be below 2.00 out of 4.00 at completion; the University may set a higher standard.",
      "Minimum duration 8 regular semesters (4 years); maximum 12 regular semesters (6 years), extendable by up to 1 year with the approval of the University's statutory body."
    ],
    "internship": "A supervised internship of 3 credit hours is a mandatory degree requirement for the BS. It is graded and supervised by a faculty member together with a supervisor in the field, under protocols approved by the University's statutory body.",
    "projects": "A capstone project of 3 credit hours is a mandatory degree requirement. It is a culminating body of work supervised and graded by a faculty member, and cannot be substituted with additional coursework or the internship.",
    "accreditation": "The scheme of study follows the HEC curriculum. The recognition and accreditation status of this CueTech program will be published by the University.",
    "fees": null
  },
  "ad-english": {
    "basis": {
      "title": "HEC Curriculum for English Degree Programs (2025)",
      "issued": "notified by HEC on 12 June 2025",
      "document": "/documents/hec-curricula/english-2025.pdf"
    },
    "scope": "The Associate Degree in English follows the first four semesters of the HEC scheme of studies for the BS in English. It combines the General Education courses of the HEC Undergraduate Education Policy with foundation courses in literary studies, literary movements, textual analysis, British literary history, poetry, stylistics and the core areas of linguistics: phonetics and phonology, morphology, syntax, semantics and pragmatics. Graduates may enter employment or, subject to the University's regulations, progress to the fifth semester of the BS in English.",
    "duration": "2 years (4 semesters)",
    "totalCreditHours": "70",
    "structure": [
      {
        "component": "Duration",
        "credits": "2 years (4 regular semesters)"
      },
      {
        "component": "Total credit hours",
        "credits": "70 (the first four semesters of the BS scheme, computed)"
      },
      {
        "component": "General Education",
        "credits": "32 credit hours (14 courses) in semesters I to IV"
      },
      {
        "component": "Major (English)",
        "credits": "38 credit hours (13 courses) in semesters I to IV"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Introduction to Literary Studies",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Introduction to Linguistics",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Quantitative Reasoning I",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Education / Ethics for non-Muslim students)",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Applications of Information and Communication Technologies",
            "credits": "3 (2-1)",
            "category": "General Education"
          },
          {
            "title": "Understanding of Holy Quran I",
            "credits": "1 (0-1)",
            "category": "General Education"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Introduction to Literary Movements",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Introduction to Phonetics and Phonology",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Quantitative Reasoning II",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Expository Writing",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Social Sciences (any course in the category)",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Understanding of Holy Quran II",
            "credits": "1 (0-1)",
            "category": "General Education"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Introduction to Textual Analysis",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Introduction to Morphology",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "British Literary History: Medieval to Romantic",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Natural Science (any course in the category)",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Arts and Humanities (any course in the category)",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Civics and Community Engagement",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Ideology and Constitution of Pakistan",
            "credits": "2 (2-0)",
            "category": "General Education"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "British Literary History: Victorian to Postmodern",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Semantics and Pragmatics",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Syntax",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Poetry: 14th to 19th Century",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Stylistics",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2 (2-0)",
            "category": "General Education"
          }
        ],
        "total": "17"
      }
    ],
    "specializations": null,
    "eligibility": [
      "Higher Secondary School Certificate (12 years of schooling) or an IBCC-equivalent qualification in any group, as for the BS in English.",
      "The University may set minimum eligibility scores and may hold an entry or admission test under criteria approved by its statutory bodies."
    ],
    "passingCriteria": [
      "Completion of the first four semesters of the BS in English scheme of studies as prescribed by HEC, including the General Education courses.",
      "Award of the Associate Degree is subject to the approval of the University's relevant statutory body.",
      "Graduates with a CGPA of at least 2.00 out of 4.00 may be admitted to the fifth semester of the BS in English, with deficiency courses of up to 18 credit hours where required."
    ],
    "internship": "Field experience or internship is not a mandatory requirement for the Associate Degree in English.",
    "projects": "No capstone project is required for the Associate Degree; the capstone belongs to the BS.",
    "accreditation": "The scheme of study follows the HEC curriculum. The recognition and accreditation status of this CueTech program will be published by the University.",
    "fees": null
  },
  "llb": {
    "basis": {
      "title": "HEC Revised Curriculum of LLB Four-Year Degree Program (2025)",
      "issued": "notified by HEC on 10 July 2025",
      "document": "/documents/hec-curricula/llb-2025.pdf",
      "note": "The 2025 HEC curriculum sets the LLB at four years, replacing the earlier five-year program, following the Pakistan Bar Council's proposal."
    },
    "scope": "The Bachelor of Laws (LLB) is a four-year undergraduate degree at level 6 of the National Qualifications Framework. It replaces the five-year LLB after the Pakistan Bar Council and its Directorate of Legal Education proposed the reduction to align the degree with other undergraduate programmes and the HEC Undergraduate Education Policy V 1.1. The programme combines theoretical knowledge with hands-on learning and covers core areas such as Constitutional Law, Criminal Law, Contract Law, Property Law and Legal Ethics, alongside specialised electives and clinical legal education. It emphasises research, advocacy and legal writing, preparing graduates for careers as legal practitioners, judges, academics and policy makers, or for advanced study in law.",
    "duration": "4 years (8 semesters); maximum 6",
    "totalCreditHours": "Minimum 146",
    "structure": [
      {
        "component": "Duration",
        "credits": "4 years (minimum 8 regular semesters); maximum 6 years, further extendable by one more year subject to approval of the university's statutory body under HEC Undergraduate Education Policy 2023 V 1.1"
      },
      {
        "component": "Total credit hours",
        "credits": "Minimum 146 (universities may offer up to a maximum of 148)"
      },
      {
        "component": "General Education",
        "credits": "35 credit hours (14 courses)"
      },
      {
        "component": "Discipline Related Courses / Major",
        "credits": "93 credit hours (31 courses)"
      },
      {
        "component": "Major - Core Courses",
        "credits": "75 credit hours (25 courses)"
      },
      {
        "component": "Major - Specialization Electives",
        "credits": "18 credit hours (6 courses)"
      },
      {
        "component": "Interdisciplinary / Allied Courses",
        "credits": "12 credit hours (4 courses)"
      },
      {
        "component": "Field Experience / Internship",
        "credits": "3 credit hours"
      },
      {
        "component": "Capstone Project",
        "credits": "3 credit hours"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Quantitative Reasoning-I",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Applications of Information and Communication Technologies",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Introduction to Law and Legal Systems",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Interdisciplinary Course I (IDS-I)",
            "credits": "3 (3-0)",
            "category": "Interdisciplinary"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Quantitative Reasoning-II",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Social Science",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Expository Writing",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Natural Science (Environmental Sciences & Law)",
            "credits": "3 (2-1)",
            "category": "General Education"
          },
          {
            "title": "Law of Torts",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Fehm-e-Quran – I (for Muslim Students)",
            "credits": "1 (0-1)",
            "category": "General Education"
          },
          {
            "title": "Criminal Law",
            "credits": "3 (3-0)",
            "category": "Major"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Arts and Humanities",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Education / Ethics for non-Muslim students)",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran – II (for Muslim Students)",
            "credits": "1 (0-1)",
            "category": "General Education"
          },
          {
            "title": "Law of Contract",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Jurisprudence",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Principles of Constitutional Law",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Interdisciplinary Course II (IDS-II)",
            "credits": "3 (3-0)",
            "category": "Interdisciplinary"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Civics and Community Engagement",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Constitutional Law of Pakistan (Ideology and Constitution of Pakistan)",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Equity, Trusts and Specific Relief",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Law of Property",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Alternative Dispute Resolution (ADR)",
            "credits": "3 (3-0)",
            "category": "Interdisciplinary"
          },
          {
            "title": "Islamic Jurisprudence",
            "credits": "3 (3-0)",
            "category": "Major"
          }
        ],
        "total": "19"
      },
      {
        "semester": "Semester V",
        "courses": [
          {
            "title": "Islamic Personal Law-I",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Law of Business Organizations-I",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Law of Evidence",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Administrative and Services Law",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Land Law",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Cyber Law",
            "credits": "3 (3-0)",
            "category": "Major"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester VI",
        "courses": [
          {
            "title": "Islamic Personal Law-II",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Law of Business Organizations-II",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Legal Drafting and Pleadings",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "International Law",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective-I",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective-II",
            "credits": "3 (3-0)",
            "category": "Major"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester VII",
        "courses": [
          {
            "title": "Legal Ethics and Moot Cases",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Criminal Procedure Code-I",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Civil Procedure Code-I",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Research Methodology",
            "credits": "3 (3-0)",
            "category": "Interdisciplinary"
          },
          {
            "title": "Elective-III",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective-IV",
            "credits": "3 (3-0)",
            "category": "Major"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester VIII",
        "courses": [
          {
            "title": "Criminal Procedure Code-II",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Civil Procedure Code-II",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Environmental Law",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective-V",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective-VI",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Capstone Project",
            "credits": "3 (3-0)",
            "category": "Capstone Project"
          }
        ],
        "total": "18"
      }
    ],
    "specializations": [
      "Technology & Law",
      "Business & Commercial Law",
      "Human Rights & Social Justice",
      "Environment & Climate Justice",
      "Constitutional Law and Governance",
      "Legal Ethics & Skills",
      "Emerging and Specialized Legal Fields / Niche and Frontier Areas of Law"
    ],
    "eligibility": [
      "Higher Secondary School Certificate or A-levels (involving 12 years of schooling), or an IBCC-equivalent qualification, with a minimum of 45% marks.",
      "A score of at least 50% in the Law Admission Test (LAT) conducted by ETC-HEC is mandatory.",
      "No upper age limit applies to the LLB programme, and any student who has completed 12 years of schooling and cleared the LAT is eligible for admission irrespective of age or any sessional gap, as there is no such bar under the Pakistan Bar Council Legal Education Rules, 2015."
    ],
    "passingCriteria": [
      "All courses in the General Education category must be completed as prescribed by the HEC Undergraduate Education Policy 2023 V 1.1.",
      "A total of 146 credit hours must be completed in a minimum of 8 semesters spread over a minimum of four years.",
      "The capstone project (3 credit hours) must be completed following HEC-prescribed guidelines and cannot be substituted with additional coursework.",
      "An internship of 3 credit hours must be completed in accordance with the HEC Undergraduate Education Policy V 1.1 and cannot be substituted with additional coursework, capstone, research or project work.",
      "CGPA must not be below 2.00 out of 4.00 at the completion of the degree programme; the university may set a higher standard.",
      "A minimum of 75% attendance is mandatory to sit each semester's final examination conducted by the HEI."
    ],
    "internship": "A field experience/internship of 3 credit hours is a mandatory degree award requirement for the LLB. The internship lasts six to eight weeks, preferably undertaken during a semester or summer break, and must be graded by a faculty member in collaboration with the supervisor in the field. It cannot be substituted with additional coursework, capstone, research or project work. The internship does not appear as a row in the semester-wise scheme; the eight semester totals sum to 143 credit hours and the internship brings the degree total to 146.",
    "projects": "A capstone project of 3 credit hours is a mandatory degree award requirement, placed in Semester VIII. The document describes it as a multifaceted body of work serving as a culminating academic and intellectual experience; it must be supervised and graded by a faculty member under the protocols of the department and cannot be substituted with additional coursework or internship. No separate research thesis is required; research skills are covered by the mandatory interdisciplinary course Research Methodology (Semester VII). Moot court and clinical work are delivered through the core course Legal Ethics and Moot Cases (Semester VII), whose outcomes include advocacy, client counselling, drafting, e-filing, ADR, role-plays, mock trials and moot court simulations; clinical legal education is described as a seminal feature of the programme, and Legal Clinics and Mooting, Advocacy, and Drafting (Practical Modules) are offered as electives in the Legal Ethics & Skills cluster.",
    "accreditation": "Programs in this field are accredited or recognised by the Pakistan Bar Council. The accreditation status of this CueTech program will be published once the process is complete.",
    "fees": null
  },
  "bs-nursing": {
    "basis": {
      "title": "HEC Curriculum of BS in Nursing (BSN) / MS in Nursing (Revised 2024)",
      "issued": "revised by HEC in 2024",
      "document": "/documents/hec-curricula/nursing-bsn-2024.pdf"
    },
    "scope": "The Bachelor of Science in Nursing (BSN) is a four-year professional degree leading to practice as a Registered Nurse. It integrates the knowledge, skills, competencies and professional attitude required for competent clinical nursing practice, focusing on risk mitigation, disease prevention, health restoration and health promotion. Courses are built on nursing knowledge, basic sciences, arts and humanities and are delivered through theoretical teaching, simulation and clinical practice in diverse healthcare and community settings. Graduates are prepared to provide comprehensive, evidence-based care at primary, secondary and tertiary levels in roles such as staff nurse, community health nurse and home health care nurse, and complete a one-year internship afterwards.",
    "duration": "4 years (8 semesters), then a one-year internship",
    "totalCreditHours": "134",
    "structure": [
      {
        "component": "Duration",
        "credits": "4 years (8 semesters); program duration 4-6 years, extendable by one further year in special cases; semesters of 16-18 weeks (including 1-2 weeks for examination)"
      },
      {
        "component": "Major (including two Elective courses)",
        "credits": "82 credit hours (23 courses, of which 2 Electives worth 5 credits) (computed from the scheme)"
      },
      {
        "component": "General Education (GE)",
        "credits": "33 credit hours (14 courses tagged GE in the scheme) (computed from the scheme); the document separately states the GE cluster as 12 mandatory courses worth 30 credits"
      },
      {
        "component": "Interdisciplinary (ID)",
        "credits": "15 credit hours (6 courses) (computed from the scheme)"
      },
      {
        "component": "Clinical Practicum (CP)",
        "credits": "4 credit hours (1 course, Semester VIII)"
      },
      {
        "component": "Theory / Clinical / Skills-Lab split",
        "credits": "Theory 92.5, Clinical 25.5, Skills/Lab 13, plus a 3-credit Semester VIII Elective with no breakdown given (computed from the scheme)"
      },
      {
        "component": "Internship (post-degree)",
        "credits": "One year of paid internship after completion of all credit requirements (no credit hours assigned)"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Microbiology",
            "credits": "2 (Theory 1.5, Skills/Lab 0.5)",
            "category": "General Education (Natural Sciences)"
          },
          {
            "title": "Biochemistry",
            "credits": "2 (Theory 1.5, Skills/Lab 0.5)",
            "category": "General Education"
          },
          {
            "title": "English – Functional English",
            "credits": "3 (Theory 3)",
            "category": "General Education"
          },
          {
            "title": "Fundamentals of Nursing – I",
            "credits": "3 (Theory 2, Skills/Lab 1)",
            "category": "Major"
          },
          {
            "title": "Anatomy & Physiology – I",
            "credits": "3 (Theory 2.5, Skills/Lab 0.5)",
            "category": "Major"
          },
          {
            "title": "Ideology and Constitution of Pakistan",
            "credits": "2 (Theory 2)",
            "category": "General Education"
          },
          {
            "title": "Information and Communication Technology",
            "credits": "2 (Theory 1, Skills/Lab 1)",
            "category": "General Education"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Fundamentals of Nursing – II",
            "credits": "4 (Theory 2, Clinical 1, Skills/Lab 1)",
            "category": "Major"
          },
          {
            "title": "Quantitative Reasoning – I",
            "credits": "3 (Theory 3)",
            "category": "General Education"
          },
          {
            "title": "Anatomy & Physiology – II",
            "credits": "3 (Theory 2.5, Skills/Lab 0.5)",
            "category": "Major"
          },
          {
            "title": "Applied Nutrition",
            "credits": "2 (Theory 2)",
            "category": "Interdisciplinary"
          },
          {
            "title": "Theoretical Basis of Nursing",
            "credits": "2 (Theory 2)",
            "category": "General Education (Arts & Humanities)"
          },
          {
            "title": "Islamic Studies / Ethics",
            "credits": "2 (Theory 2)",
            "category": "General Education"
          }
        ],
        "total": "16"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Professional Communication Skills",
            "credits": "3 (Theory 3)",
            "category": "General Education"
          },
          {
            "title": "Clinical Pharmacology and Drug Administration – I",
            "credits": "2 (Theory 2)",
            "category": "Major"
          },
          {
            "title": "Medical Surgical Nursing – I",
            "credits": "7 (Theory 3, Clinical 3, Skills/Lab 1)",
            "category": "Major"
          },
          {
            "title": "Health Assessment – I",
            "credits": "2 (Theory 1, Skills/Lab 1)",
            "category": "Major"
          },
          {
            "title": "Pathophysiology – I",
            "credits": "3 (Theory 2, Skills/Lab 1)",
            "category": "Major"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Applied Psychology",
            "credits": "3 (Theory 3)",
            "category": "Interdisciplinary"
          },
          {
            "title": "Medical Surgical Nursing – II",
            "credits": "7 (Theory 3, Clinical 3, Skills/Lab 1)",
            "category": "Major"
          },
          {
            "title": "Health Assessment – II",
            "credits": "2 (Theory 1, Skills/Lab 1)",
            "category": "Major"
          },
          {
            "title": "Pathophysiology – II",
            "credits": "2 (Theory 2)",
            "category": "Major"
          },
          {
            "title": "Clinical Pharmacology and Drug Administration – II",
            "credits": "2 (Theory 2)",
            "category": "Major"
          },
          {
            "title": "Professional Ethics for Nurses",
            "credits": "2 (Theory 2)",
            "category": "Major"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester V",
        "courses": [
          {
            "title": "Civics and Community Engagement",
            "credits": "2 (Theory 2)",
            "category": "General Education"
          },
          {
            "title": "Pediatric Health Nursing",
            "credits": "7 (Theory 3, Clinical 3, Skills/Lab 1)",
            "category": "Major"
          },
          {
            "title": "Maternal, Neonatal and Child Health Nursing",
            "credits": "3 (Theory 2, Clinical 1)",
            "category": "Major"
          },
          {
            "title": "Epidemiology",
            "credits": "2 (Theory 2)",
            "category": "Interdisciplinary"
          },
          {
            "title": "Infectious Diseases",
            "credits": "2 (Theory 2)",
            "category": "Interdisciplinary"
          }
        ],
        "total": "16"
      },
      {
        "semester": "Semester VI",
        "courses": [
          {
            "title": "Principles of Teaching & Learning",
            "credits": "3 (Theory 3)",
            "category": "Interdisciplinary"
          },
          {
            "title": "Public Health Nursing",
            "credits": "4 (Theory 2, Clinical 2)",
            "category": "Major"
          },
          {
            "title": "Mental Health Nursing",
            "credits": "6 (Theory 3, Clinical 2, Skills/Lab 1)",
            "category": "Major"
          },
          {
            "title": "Introduction to Biostatistics (QR II)",
            "credits": "3 (Theory 3)",
            "category": "General Education"
          },
          {
            "title": "Culture, Health & Society",
            "credits": "2 (Theory 2)",
            "category": "General Education"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester VII",
        "courses": [
          {
            "title": "Leadership & Management",
            "credits": "3 (Theory 2, Clinical 1)",
            "category": "Interdisciplinary"
          },
          {
            "title": "Critical Care Nursing",
            "credits": "7 (Theory 2, Clinical 4, Skills/Lab 1)",
            "category": "Major"
          },
          {
            "title": "Introduction to Nursing Research",
            "credits": "3 (Theory 3)",
            "category": "Major"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2 (Theory 2)",
            "category": "General Education"
          },
          {
            "title": "Elective",
            "credits": "2 (Theory 2)",
            "category": "Major"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester VIII",
        "courses": [
          {
            "title": "Geriatric Nursing",
            "credits": "3 (Theory 1.5, Clinical 1.5)",
            "category": "Major"
          },
          {
            "title": "Trends and Issues in Health Care",
            "credits": "2 (Theory 2)",
            "category": "Major"
          },
          {
            "title": "Expository Writing",
            "credits": "3 (Theory 3)",
            "category": "General Education"
          },
          {
            "title": "Elective",
            "credits": "3 (breakdown not given)",
            "category": "Major"
          },
          {
            "title": "Clinical Practicum",
            "credits": "4 (Clinical 4)",
            "category": "Clinical Practicum"
          }
        ],
        "total": "15"
      }
    ],
    "specializations": null,
    "eligibility": [
      "HSSC, A-levels or an equivalent qualification (12 years of schooling) in the Pre-Medical group with a minimum of 50% marks.",
      "The admitting university may conduct an entry test through its own testing body or another body, as per its own approved screening/admission criteria."
    ],
    "passingCriteria": [
      "Completion of the 134 credit hours of the standardized eight-semester scheme of studies.",
      "Minimum attendance of 75%.",
      "Completion within the program duration of 4-6 years, extendable by one further year in special cases.",
      "A summer semester of 8-9 weeks may carry a maximum of 8 credit hours and is used only for remedial, deficiency, failure or repetition courses.",
      "Course load is as per the HEC Semester Guidelines."
    ],
    "internship": "One year of paid internship is required after completion of all credit requirements of the BSN degree, at any healthcare facility; placement for the internship is the responsibility of the institute offering the program. Within the degree, clinical practice is built into the major courses (25.5 clinical credits in total) and culminates in a 4-credit, all-clinical Clinical Practicum in Semester VIII that prepares students for role transition to bedside nurse. The document does not mention a licensing or registration examination.",
    "projects": null,
    "accreditation": "Programs in this field are accredited or recognised by the Pakistan Nursing and Midwifery Council. The accreditation status of this CueTech program will be published once the process is complete.",
    "fees": null
  },
  "doctor-of-pharmacy": {
    "basis": {
      "title": "HEC Revised Curriculum for Degree Programs in Pharmacy (2025)",
      "issued": "notified by HEC on 3 September 2025",
      "document": "/documents/hec-curricula/pharmacy-pharm-d-2025.pdf"
    },
    "scope": "The Doctor of Pharmacy is a five-year program that provides a comprehensive foundation in pharmaceutical sciences and clinical practice. The curriculum builds expertise in the core areas of Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmacognosy and Pharmacy Practice, while courses in Basic Medical Sciences cover human anatomy, physiology and pathology. These foundational sciences are integrated with advanced training in Pharmacy Practice through hospital rotations, community pharmacy internships and case-based learning, giving students exposure to medication management, patient counselling and healthcare collaboration. Graduates are positioned to work in hospitals, community pharmacies, the pharmaceutical industry, regulatory agencies, government departments, non-governmental and international health organizations, or to become entrepreneurs and pursue further specialization.",
    "duration": "5 years (10 semesters); maximum 7",
    "totalCreditHours": "Minimum 195",
    "structure": [
      {
        "component": "Duration",
        "credits": "5 years (10 regular semesters); maximum 7 years, further extendable by one year subject to approval of the university's statutory body"
      },
      {
        "component": "Total credit hours",
        "credits": "Minimum 195 (210 if the optional specialization track is opted)"
      },
      {
        "component": "General Education",
        "credits": "34 credit hours (14 courses as prescribed by HEC)"
      },
      {
        "component": "Major: Core courses (Pharmacology, Pharmacy Practice, Pharmaceutics, Pharmacognosy, Pharmaceutical Chemistry)",
        "credits": "141 credit hours (38 courses)"
      },
      {
        "component": "Interdisciplinary / Allied courses",
        "credits": "14 credit hours (4 courses)"
      },
      {
        "component": "Field Experience (Pharmacy Practice Experience / Clinical Pharmacy Clerkship)",
        "credits": "3 credit hours"
      },
      {
        "component": "Capstone Project",
        "credits": "3 credit hours"
      },
      {
        "component": "Optional specialization cluster (electives from one cluster)",
        "credits": "15 credit hours (5-6 courses), raising the degree total to 210"
      },
      {
        "component": "Mandatory international certifications (non-credited)",
        "credits": "Three certifications equivalent to 3 credit hours in total (each of at least 16 hours = 1 credit hour); waived if the specialization track is opted"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Physical Pharmacy - I",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Organic Chemistry - I",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Biochemistry - I",
            "credits": "2+1",
            "category": "Major: Core"
          },
          {
            "title": "Physiology-I",
            "credits": "3+1",
            "category": "Allied/Interdisciplinary"
          },
          {
            "title": "Functional English",
            "credits": "3",
            "category": "General Education"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Physical Pharmacy - II",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Organic Chemistry - II",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Biochemistry - II",
            "credits": "2+1",
            "category": "Major: Core"
          },
          {
            "title": "Anatomy & Histology",
            "credits": "2+1",
            "category": "Allied/Interdisciplinary"
          },
          {
            "title": "Physiology-II",
            "credits": "3+1",
            "category": "Allied/Interdisciplinary"
          },
          {
            "title": "Islamic Studies",
            "credits": "2",
            "category": "General Education"
          }
        ],
        "total": "20"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Drug Delivery Systems and Formulation Science - I",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Pharmacology and Therapeutics-I",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Pharmacognosy - (Basic I)",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Pathology",
            "credits": "2+1",
            "category": "Allied/Interdisciplinary"
          },
          {
            "title": "Basic Pharmaceutical Microbiology",
            "credits": "2+1",
            "category": "General Education (Natural Sciences)"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Drug Delivery Systems and Formulation Science - II",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Applied Pharmaceutical Microbiology and Immunology",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Artificial Intelligence in Pharmacology and Therapeutics (Pharmacology and Therapeutics-II)",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Pharmacognosy (Basic - II)",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran I",
            "credits": "1",
            "category": "General Education"
          }
        ],
        "total": "19"
      },
      {
        "semester": "Semester V",
        "courses": [
          {
            "title": "Pharmacognosy (Applied)",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Pharmaceutical Analysis-I",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Pharmacology and Therapeutics-III",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Hospital and Community Pharmacy",
            "credits": "2",
            "category": "Major: Core"
          },
          {
            "title": "Quantitative Reasoning – I",
            "credits": "3",
            "category": "General Education"
          },
          {
            "title": "Ideology & Constitution of Pakistan",
            "credits": "2",
            "category": "General Education"
          },
          {
            "title": "Fehm-e-Quran II",
            "credits": "1",
            "category": "General Education"
          }
        ],
        "total": "20"
      },
      {
        "semester": "Semester VI",
        "courses": [
          {
            "title": "Pharmacognosy (Advanced)",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Dispensing, Social & Administrative Pharmacy",
            "credits": "2",
            "category": "Major: Core"
          },
          {
            "title": "Pharmaceutical Analysis-II",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Pharmacology and Therapeutics-IV",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Applications of ICT (Especial focus on Pharmacy)",
            "credits": "2+1",
            "category": "General Education"
          },
          {
            "title": "Quantitative Reasoning-II",
            "credits": "3",
            "category": "General Education"
          }
        ],
        "total": "20"
      },
      {
        "semester": "Semester VII",
        "courses": [
          {
            "title": "Industrial Pharmacy - I",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Biopharmaceutics and Pharmacokinetics - I",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Clinical Pharmacy-I",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Pharmaceutical Quality Management System",
            "credits": "3",
            "category": "Major: Core"
          },
          {
            "title": "Expository Writing",
            "credits": "3",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2",
            "category": "General Education"
          }
        ],
        "total": "20"
      },
      {
        "semester": "Semester VIII",
        "courses": [
          {
            "title": "Industrial Pharmacy - II",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Biopharmaceutics and Pharmacokinetics - II",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Clinical Pharmacy-II",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Civics & Community Engagement (Fulfill requirement of Pharmacy Practice-III)",
            "credits": "1+1",
            "category": "General Education"
          },
          {
            "title": "Pharmaceutical Quality Control",
            "credits": "2+1",
            "category": "Major: Core"
          },
          {
            "title": "Pharmaceutical Management and Marketing",
            "credits": "2",
            "category": "General Education (Social Sciences)"
          }
        ],
        "total": "19"
      },
      {
        "semester": "Semester IX",
        "courses": [
          {
            "title": "Pharmaceutical Technology - I",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Pharmaceutical Regulatory Science-I",
            "credits": "3",
            "category": "Major: Core"
          },
          {
            "title": "Medicinal Chemistry-I",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Advanced Clinical Pharmacy-I",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Clinical Pharmacology",
            "credits": "2+1",
            "category": "Major: Core"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester X",
        "courses": [
          {
            "title": "Pharmaceutical Technology - II",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Pharmaceutical Regulatory Science-II",
            "credits": "3",
            "category": "Major: Core"
          },
          {
            "title": "Medicinal Chemistry-II",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Advanced Clinical Pharmacy-II",
            "credits": "3+1",
            "category": "Major: Core"
          },
          {
            "title": "Bioethics (Arts & Humanities Category)",
            "credits": "2",
            "category": "General Education"
          },
          {
            "title": "Capstone Project",
            "credits": "3",
            "category": "Capstone Project"
          }
        ],
        "total": "20"
      }
    ],
    "specializations": [
      "Pharmacology",
      "Pharmacy Practice",
      "Pharmaceutics",
      "Pharmacognosy",
      "Pharmaceutical Chemistry / Medicinal Chemistry",
      "Pharmaceutical Analysis / Quality Control",
      "Industrial Pharmacy",
      "Hospital and Community Pharmacy",
      "Regulatory Affairs",
      "Clinical Research in Pharmacy",
      "Pharmaceutical Marketing",
      "Pharmaceutical Management"
    ],
    "eligibility": [
      "Higher Secondary School Certificate (12 years of schooling) or an IBCC-equivalent qualification in the Pre-Medical Group with at least 60% cumulative score.",
      "The admitting university may or may not conduct an entry or admission test, through its own testing body or an external testing service provider of repute, under the screening, admission and merit-calculation criteria approved by its statutory bodies."
    ],
    "passingCriteria": [
      "All General Education courses prescribed in the HEC Undergraduate Education Policy V 1.1, including Pakistan Studies and Fehm-e-Quran, must be completed.",
      "A minimum of 195 credit hours is required where no specialization is opted.",
      "A minimum of 210 credit hours is required for a Pharm-D degree with specialization in a particular domain.",
      "A capstone or research project of 3 credit hours must be completed in accordance with the HEC Undergraduate Education Policy V 1.1; it cannot be substituted with additional coursework or internship.",
      "An internship or field experience of 3 credit hours must be completed; it cannot be substituted with additional coursework, capstone, research or project work.",
      "Three international certifications (non-credited, equivalent to 3 credit hours in total, each of at least 16 hours) must be completed over the five-year program; this requirement is waived for students who opt for the 210-credit specialization track.",
      "CGPA must not be below 2.00 out of 4.00 at completion of the degree; the university may set a higher standard.",
      "A student who fails a practical re-appears in the practical only, and a student who fails theory re-appears in theory only; the theory and practical weightage for CGPA follows the distribution of marks.",
      "External evaluation is mandatory for all practical courses in every examination, with equal weightage given to external and internal evaluation, and the course teacher acts as the internal examiner.",
      "The program must be completed within a maximum of 7 years, extendable by a further year subject to approval of the university's statutory body."
    ],
    "internship": "Field experience of 3 credit hours is a mandatory degree award requirement, delivered as Pharmacy Practice Experience (PPE), described as a Clinical Pharmacy Clerkship. The internship lasts six to eight weeks, preferably during a semester or summer break, and must be graded by a faculty member in collaboration with the supervisor in the field; it cannot be substituted with additional coursework, capstone or project work. Students may start PPE in the third year and it is graded by faculty in the fifth year. PPE may be undertaken in community pharmacy, the pharmaceutical industry, regulatory bodies, sales and marketing, or hospital and clinical settings. In hospital and clinical settings the training covers participation in the inter-professional team, patient assessment, drug therapy review, written and verbal communication, pharmacokinetic monitoring and systems management to improve therapeutic outcomes, assessed through clinical rounds, case presentations, OSCE, oral viva, case discussions, journal clubs and assignments. Separately, the Civics and Community Engagement course requires students to dedicate 100 hours over the degree to community service in pharmacy-related assignments, reported to the class teacher.",
    "projects": "A Capstone Project of 3 credit hours, placed in Semester X, is a mandatory degree award requirement and may be supervised by faculty members of any core discipline of Pharmacy (Pharmaceutics, Pharmacy Practice, Pharmacology, Pharmaceutical Chemistry, Pharmacognosy); it cannot be substituted with additional coursework or internship. The project comprises a proposal (20% of the grade) with literature review, objectives, methodology and ethical considerations including IRB approval where human subjects are involved; execution of research- or practice-based work (30%); a written report structured like a thesis or manuscript (25%); and an oral presentation and defence of about 15-20 minutes (25%), with a poster presentation possible. It follows an eight- to nine-month timeline with bi-weekly or monthly supervisory meetings and is assessed by a committee of two to three faculty members, graded Pass with Distinction (A), Pass (B or C) or Fail (D or F).",
    "accreditation": "Programs in this field are accredited or recognised by the Pharmacy Council of Pakistan. The accreditation status of this CueTech program will be published once the process is complete.",
    "fees": null
  },
  "bs-public-health": {
    "basis": {
      "title": "HEC Curriculum of Public Health: Associate Degree, BS, MS (Revised 2025)",
      "issued": "revised by HEC in 2025",
      "document": "/documents/hec-curricula/public-health-2025.pdf"
    },
    "scope": "The Bachelor of Science in Public Health is a four-year, eight-semester program structured under the HEC Undergraduate Education Policy V 1.1. It gives students an interdisciplinary understanding of public health, covering epidemiology, biostatistics, reproductive, maternal, neonatal and child health, communicable and non-communicable diseases, environmental health, health policy and management, and social and behavioral sciences, with a focus on promoting health, preventing disease and improving quality of life. The curriculum builds theoretical knowledge, analytical and research skills, and prepares students to design, implement and evaluate culturally competent public health interventions. Graduates are prepared for careers in government health agencies, NGOs, hospitals, research institutions and the private sector, and for advanced study.",
    "duration": "4 years (8 semesters); maximum 6",
    "totalCreditHours": "Minimum 125",
    "structure": [
      {
        "component": "Duration",
        "credits": "4 years (8 regular semesters); maximum 6 years (further extendable by another year subject to approval of the university's statutory body)"
      },
      {
        "component": "Total credit hours",
        "credits": "Minimum 125 (including internship / field experience); universities may offer up to 144"
      },
      {
        "component": "General Education Courses",
        "credits": "32 credit hours (13 courses as prescribed by HEC Undergraduate Education Policy V 1.1)"
      },
      {
        "component": "Discipline Related Courses / Major",
        "credits": "75 credit hours (25 courses, including 7 electives of 21 credit hours)"
      },
      {
        "component": "Interdisciplinary / Allied Courses",
        "credits": "12 credit hours (4 courses)"
      },
      {
        "component": "Internship",
        "credits": "3 credit hours"
      },
      {
        "component": "Capstone Project",
        "credits": "3 credit hours"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Introduction to Public Health",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Quantitative Reasoning – I",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Natural Science",
            "credits": "3 (2-1)",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Applications of Information & Communication Technologies (ICT)",
            "credits": "3 (2-1)",
            "category": "General Education"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Life Sciences Biology-I",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Concept of Health & Disease",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Medical Anthropology",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Quantitative Reasoning – II",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Expository Writing",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2 (2-0)",
            "category": "General Education"
          }
        ],
        "total": "17"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Life Sciences Biology-II",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Fundamentals of Health Systems",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Health Promotion",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Arts & Humanities",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Edu / Ethics for non-Muslim students)",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Ideology & Constitution of Pakistan",
            "credits": "2 (2-0)",
            "category": "General Education"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Basic Epidemiology-I",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Biostatistics-I",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Primary Health Care",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Social Science",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Civics & Community Engagement",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2 (2-0)",
            "category": "General Education"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester V",
        "courses": [
          {
            "title": "Basic Epidemiology-II",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Biostatistics-II",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Population Dynamics",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Reproductive Health",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Interdisciplinary / IDS Course – I",
            "credits": "3 (3-0)",
            "category": "Interdisciplinary"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VI",
        "courses": [
          {
            "title": "Research Methods in Public Health",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Community Nutrition",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective – I",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective – II",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Interdisciplinary / IDS Course – II",
            "credits": "3 (3-0)",
            "category": "Interdisciplinary"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VII",
        "courses": [
          {
            "title": "Communicable and Non-Communicable Diseases",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Interdisciplinary / IDS Course – III",
            "credits": "3 (3-0)",
            "category": "Interdisciplinary"
          },
          {
            "title": "Elective – III",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective – IV",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Interdisciplinary / IDS Course – IV",
            "credits": "3 (3-0)",
            "category": "Interdisciplinary"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VIII",
        "courses": [
          {
            "title": "Environmental and Occupational Health",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective – V",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective – VI",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective – VII",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Capstone Project",
            "credits": "3 (3-0)",
            "category": "Capstone"
          }
        ],
        "total": "15"
      }
    ],
    "specializations": [
      "Epidemiology",
      "Community Health",
      "Global Health",
      "Environmental and Occupational Health",
      "Health Policy and Management",
      "Nutrition and Public Health",
      "Biostatistics and Data Science",
      "Maternal and Child Health",
      "Health Communication",
      "Infectious Disease Control",
      "Mental Health and Well-Being",
      "Aging and Geriatric Health",
      "Public Health Informatics",
      "Emergency Preparedness",
      "Behavioral and Social Science in Public Health",
      "Occupational Health and Safety",
      "Health Equity and Advocacy",
      "Urban Health",
      "Technology and Public Health",
      "Sexual and Reproductive Health"
    ],
    "eligibility": [
      "Higher Secondary School Certificate (involving 12 years of schooling) or an IBCC-equivalent qualification in the pre-medical group is the basic eligibility requirement for admission.",
      "The university may set higher standards and may conduct an entry/admission test through its own testing body or an external testing service provider of repute, as per the screening, admission and merit calculation criteria approved by its statutory bodies.",
      "Holders of an Associate Degree in Public Health may be admitted to the fifth semester without any deficiency course; holders of an Associate Degree in a discipline related to Public Health must complete deficiency courses through a bridging semester before the fifth semester.",
      "The minimum eligibility for fifth-semester admission on the basis of an Associate Degree is a CGPA of 2.00/4.00 in the prior qualification; the university may set higher criteria.",
      "Graduates of two-year conventional BSc/equivalent programs may be admitted to the fifth semester with a minimum 45% cumulative score in the prior qualification, subject to completing deficiency courses through a bridging semester as determined by the admitting university."
    ],
    "passingCriteria": [
      "All courses in the General Education category, with the titles and credit hours prescribed in the HEC Undergraduate Education Policy V 1.1 including Pakistan Studies, must be completed.",
      "A minimum of 125 credit hours, including all program-related requirements, must be completed.",
      "A capstone/research project of 3 credit hours must be completed in accordance with the HEC Undergraduate Education Policy V 1.1; it cannot be substituted with additional coursework or internship.",
      "An internship of 3 credit hours must be completed in accordance with the HEC Undergraduate Education Policy V 1.1; it cannot be substituted with additional coursework, capstone, research or project work.",
      "CGPA must not be below 2.00/4.00 at the time of completion of the degree program; the university may set a higher standard.",
      "The minimum duration is eight regular semesters spread over four years; it may be extended in extraordinary circumstances with approval of the university's statutory body, but not beyond the maximum duration prescribed in HEC semester guidelines, and a summer semester is not counted as a regular semester."
    ],
    "internship": "A supervised internship of 3 credit hours is a mandatory degree award requirement for the BS Public Health. It lasts six to eight weeks, preferably undertaken during a semester or summer break, and must be graded by a faculty member in collaboration with the supervisor in the field, in accordance with the HEC Undergraduate Education Policy V 1.1. It cannot be substituted with additional coursework, capstone, research or project work. The 3 internship credits count toward the 125-credit minimum but are not placed in any semester of the scheme of studies. Field experience/internship is not a mandatory requirement for the Associate Degree in Public Health.",
    "projects": "A Capstone Project of 3 credit hours (3-0), listed in Semester VIII under the Capstone category, is a mandatory degree award requirement. The document describes it as a multifaceted body of work that serves as a culminating academic and intellectual experience; it must be supervised and graded by a faculty member as per the protocols prescribed by the concerned department and cannot be substituted with additional coursework or internship.",
    "accreditation": "The scheme of study follows the HEC curriculum. The recognition and accreditation status of this CueTech program will be published by the University.",
    "fees": null
  },
  "bs-statistics": {
    "basis": {
      "title": "HEC Curriculum for Statistics: AD, BS, M.Phil. (Revised 2025)",
      "issued": "revised by HEC in 2025",
      "document": "/documents/hec-curricula/statistics-2025.pdf"
    },
    "scope": "The Bachelor of Science in Statistics is structured under the HEC Undergraduate Education Policy V 1.1 to give students an interdisciplinary understanding of statistics and the analytical and problem-solving skills needed for real-world data analysis. It covers probability, sampling, design of experiments, inferential statistics, regression analysis and statistical computing, emphasising hands-on learning with modern statistical software. Over eight semesters the curriculum builds theoretical knowledge, critical thinking and research skills, and lets students integrate statistics with fields such as economics, public health, epidemiology, psychology and artificial intelligence. Optional specializations such as Data Science, Biostatistics and Financial Statistics prepare graduates for careers in finance, healthcare, technology and research, or for further study.",
    "duration": "4 years (8 semesters); maximum 6",
    "totalCreditHours": "Minimum 133",
    "structure": [
      {
        "component": "Duration",
        "credits": "Minimum 4 years (8 regular semesters); maximum 6 years, further extendable by another year subject to approval of the university's statutory body"
      },
      {
        "component": "Total credit hours",
        "credits": "Minimum 133 (including internship); universities may offer up to a maximum of 144"
      },
      {
        "component": "General Education Courses",
        "credits": "34 credit hours (15 courses)"
      },
      {
        "component": "Major / Discipline Related Courses",
        "credits": "81 credit hours (27 courses including 7 mandatory elective courses)"
      },
      {
        "component": "Interdisciplinary / Allied Courses",
        "credits": "12 credit hours (4 courses)"
      },
      {
        "component": "Internship",
        "credits": "3 credit hours"
      },
      {
        "component": "Capstone Project",
        "credits": "3 credit hours"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Introduction to Statistics",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Quantitative Reasoning – I",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Natural Science",
            "credits": "3 (2-1)",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Application of Information & Communication Technologies",
            "credits": "3 (2-1)",
            "category": "General Education"
          },
          {
            "title": "Calculus-I",
            "credits": "3 (3-0)",
            "category": "IDS"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Introduction to Probability & Probability Distributions",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Introduction to Sampling Theory",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Calculus – II",
            "credits": "3 (3-0)",
            "category": "IDS"
          },
          {
            "title": "Understanding of Holy Quran - I",
            "credits": "1 (0-1)",
            "category": "General Education"
          },
          {
            "title": "Quantitative Reasoning – II",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Expository Writing",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2 (2-0)",
            "category": "General Education"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Basic Statistical Inference",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Exploratory Data Analysis and Visualization",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Arts & Humanities",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Edu. / Ethics for non-Muslim students)",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Understanding of Holy Quran - II",
            "credits": "1 (0-1)",
            "category": "General Education"
          },
          {
            "title": "Ideology & Constitution of Pakistan",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Official Statistics",
            "credits": "3 (3-0)",
            "category": "Major"
          }
        ],
        "total": "16"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Introduction to Regression and Analysis of Variance",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Data Wrangling",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Statistical Packages",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Non-Parametric Methods",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Social Science",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Civics & Community Engagement",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2 (2-0)",
            "category": "General Education"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester V",
        "courses": [
          {
            "title": "Probability Distributions",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Design and Analysis of Experiments",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Sampling Techniques",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Biostatistics",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Linear Algebra",
            "credits": "3 (3-0)",
            "category": "IDS"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VI",
        "courses": [
          {
            "title": "Statistical Inference",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Regression Analysis",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective I",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective II",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Interdisciplinary/IDS Course IV",
            "credits": "3 (3-0)",
            "category": "IDS"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VII",
        "courses": [
          {
            "title": "Statistical Programming Using R and Python",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Research Methodology",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Statistical Quality Control",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective III",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective IV",
            "credits": "3 (3-0)",
            "category": "Major"
          }
        ],
        "total": "15"
      },
      {
        "semester": "Semester VIII",
        "courses": [
          {
            "title": "Applied Multivariate Analysis",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective V",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective VI",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Elective VII",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Capstone Project",
            "credits": "3 (3-0)",
            "category": "Major"
          }
        ],
        "total": "15"
      }
    ],
    "specializations": [
      "Data Science",
      "Biostatistics",
      "Financial Statistics"
    ],
    "eligibility": [
      "Higher Secondary School Certificate (involving 12 years of schooling) or an IBCC-equivalent qualification in any group of studies is the minimum eligibility requirement for admission.",
      "Students who have completed an Associate Degree in Statistics with a minimum CGPA of 2.00/4.00 may be admitted to the fifth semester without any deficiency course.",
      "Students who have completed an Associate Degree in a discipline related to Statistics, with a minimum CGPA of 2.00/4.00, must complete deficiency courses through a bridging semester before the fifth semester.",
      "Students who have completed a two-year conventional BSc or equivalent degree with a minimum 45% cumulative score may be admitted to the fifth semester after completing deficiency courses through a bridging semester, as determined by the admitting university.",
      "Universities or departments may set higher eligibility and admission criteria than these minimums."
    ],
    "passingCriteria": [
      "All courses in the General Education category, with titles and credit hours as prescribed in the HEC Undergraduate Education Policy V 1.1 including the course of Pakistan Studies, must be completed.",
      "A minimum of 133 credit hours, including all program-related requirements, must be completed.",
      "A capstone/research project of 3 credit hours must be completed in accordance with the HEC Undergraduate Education Policy V 1.1; it cannot be substituted with additional coursework or internship.",
      "An internship of 3 credit hours must be completed in accordance with the HEC Undergraduate Education Policy V 1.1; it cannot be substituted with additional coursework, capstone, research or project work.",
      "CGPA must not be below 2.00/4.00 at the time of completion of the degree program; the university may set a higher standard.",
      "The minimum duration is eight regular semesters spread over four years; it may be extended in extraordinary circumstances with approval of the university's statutory body, but not beyond the maximum duration prescribed in HEC semester guidelines, and the summer semester does not count as a regular semester."
    ],
    "internship": "An internship of 3 credit hours lasting six to eight weeks, preferably undertaken during a semester or summer break in the senior years, is a mandatory degree award requirement for the Bachelor of Science in Statistics. It must be graded by a faculty member in collaboration with the supervisor in the field, under protocols set by the department and approved by the university's statutory body, and cannot be substituted with additional coursework, capstone, research or project work. The internship is not listed in any semester table; its 3 credit hours are counted on top of the 130 credit hours of tabulated coursework.",
    "projects": "A capstone project of 3 credit hours, scheduled in Semester VIII, is a mandatory degree award requirement for the Bachelor of Science in Statistics with or without specialization. The document describes it as a multifaceted body of work serving as the culminating academic and intellectual experience of the program; it must be supervised and graded by a faculty member under department protocols approved by the university's statutory body, and cannot be substituted with additional coursework or internship.",
    "accreditation": "The scheme of study follows the HEC curriculum. The recognition and accreditation status of this CueTech program will be published by the University.",
    "fees": null
  },
  "ad-statistics": {
    "basis": {
      "title": "HEC Curriculum for Statistics: AD, BS, M.Phil. (Revised 2025)",
      "issued": "revised by HEC in 2025",
      "document": "/documents/hec-curricula/statistics-2025.pdf"
    },
    "scope": "The Associate Degree in Statistics is defined in the HEC curriculum as the first four semesters of the Bachelor of Science in Statistics, sharing its eligibility criteria and structure, and is awarded in generic form without any specialization. Students enrolled in the BS may exit with the Associate Degree after completing the requirements of the first four semesters with a minimum CGPA of 2.00/4.00, and Associate Degree holders with that CGPA may be admitted to the fifth semester of the BS without deficiency courses. The four semesters combine general education and calculus courses with introductory statistics, probability, sampling, inference, exploratory data analysis, regression, data wrangling, statistical packages and official statistics.",
    "duration": "2 years (4 semesters)",
    "totalCreditHours": "70",
    "structure": [
      {
        "component": "Duration",
        "credits": "First four regular semesters of the BS Statistics scheme (2 years at the BS pace of two regular semesters per year); the document states no AD-specific maximum duration"
      },
      {
        "component": "Total credit hours",
        "credits": "70 (computed from Semesters I-IV of the BS scheme: 18 + 18 + 16 + 18; the document does not state an AD credit total)"
      },
      {
        "component": "General Education Courses",
        "credits": "34 credit hours (15 courses) (computed from Semesters I-IV)"
      },
      {
        "component": "Major / Discipline Related Courses",
        "credits": "30 credit hours (10 courses) (computed from Semesters I-IV)"
      },
      {
        "component": "Interdisciplinary / Allied Courses",
        "credits": "6 credit hours (2 courses: Calculus-I and Calculus – II) (computed from Semesters I-IV)"
      }
    ],
    "curriculum": [
      {
        "semester": "Semester I",
        "courses": [
          {
            "title": "Introduction to Statistics",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Quantitative Reasoning – I",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Natural Science",
            "credits": "3 (2-1)",
            "category": "General Education"
          },
          {
            "title": "Functional English",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Application of Information & Communication Technologies",
            "credits": "3 (2-1)",
            "category": "General Education"
          },
          {
            "title": "Calculus-I",
            "credits": "3 (3-0)",
            "category": "IDS"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester II",
        "courses": [
          {
            "title": "Introduction to Probability & Probability Distributions",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Introduction to Sampling Theory",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Calculus – II",
            "credits": "3 (3-0)",
            "category": "IDS"
          },
          {
            "title": "Understanding of Holy Quran - I",
            "credits": "1 (0-1)",
            "category": "General Education"
          },
          {
            "title": "Quantitative Reasoning – II",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Expository Writing",
            "credits": "3 (3-0)",
            "category": "General Education"
          },
          {
            "title": "Pakistan Studies",
            "credits": "2 (2-0)",
            "category": "General Education"
          }
        ],
        "total": "18"
      },
      {
        "semester": "Semester III",
        "courses": [
          {
            "title": "Basic Statistical Inference",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Exploratory Data Analysis and Visualization",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Arts & Humanities",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Islamic Studies (Religious Edu. / Ethics for non-Muslim students)",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Understanding of Holy Quran - II",
            "credits": "1 (0-1)",
            "category": "General Education"
          },
          {
            "title": "Ideology & Constitution of Pakistan",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Official Statistics",
            "credits": "3 (3-0)",
            "category": "Major"
          }
        ],
        "total": "16"
      },
      {
        "semester": "Semester IV",
        "courses": [
          {
            "title": "Introduction to Regression and Analysis of Variance",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Data Wrangling",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Statistical Packages",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Non-Parametric Methods",
            "credits": "3 (3-0)",
            "category": "Major"
          },
          {
            "title": "Social Science",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Civics & Community Engagement",
            "credits": "2 (2-0)",
            "category": "General Education"
          },
          {
            "title": "Entrepreneurship",
            "credits": "2 (2-0)",
            "category": "General Education"
          }
        ],
        "total": "18"
      }
    ],
    "specializations": null,
    "eligibility": [
      "Higher Secondary School Certificate (involving 12 years of schooling) or an IBCC-equivalent qualification in any group of studies is the minimum eligibility requirement, the same as for the Bachelor of Science in Statistics.",
      "Universities or departments may set higher eligibility and admission criteria than these minimums."
    ],
    "passingCriteria": [
      "The requirements of the first four semesters of the Bachelor of Science in Statistics as prescribed in the policy must be completed (70 credit hours as tabulated, including all 15 General Education courses).",
      "A minimum CGPA of 2.00/4.00 must be maintained.",
      "The Associate Degree in Statistics is awarded in its generic form, without any specialization."
    ],
    "internship": "Not required for the Associate Degree. The document prescribes the 3-credit internship as a degree award requirement of the Bachelor of Science in Statistics only, and no internship forms part of the first four semesters that make up the Associate Degree.",
    "projects": "Not required for the Associate Degree. The 3-credit capstone project is a Bachelor of Science requirement scheduled in Semester VIII and is not part of the first four semesters.",
    "accreditation": "The scheme of study follows the HEC curriculum. The recognition and accreditation status of this CueTech program will be published by the University.",
    "fees": null
  }
};
