const mainTabs = [
  { id: 1, name: "ANNOUNCEMENT", key: "ANNOUNCEMENT" },
  { id: 2, name: "INITIAL PUBLIC OFFERING", key: "IPO" },
  { id: 3, name: "REPORTS_PRESENTATIONS AND FINANCIALS", key: "RPAF" },
  { id: 4, name: "SHAREHOLDING PATTERN", key: "SP" },
];

const years = [
  {
    id: 1,
    key: "ANNOUNCEMENT",
    years: ["2022-23", "2023-24"],
    direct: false,
  },
  {
    id: 2,
    key: "IPO",
    years: null,
    direct: true,
  },
  {
    id: 3,
    key: "RPAF",
    years: ["2022-23", "2023-24"],
    direct: false,
  },
  {
    id: 4,
    key: "SP",
    years: ["2022-23", "2023-24", "2024-25"],
    direct: true,
  },
];

const reportsData = [
  {
    id: 1,
    uniq: "ANNOUNCEMENT",
    tab: "ANNOUNCEMENT",
    type: "SYD",
    sidebar: [
      {
        type: "CLOSURE OF TRADING WINDOW",
        key: 11,
        years: ["2022-23", "2023-24"],
        data: [
          {
            year: "2022-23",
            title: "Closure-of-Trading-Window_30.03.2023",
            url: "/main/ANNOUNCEMENT/CLOSURE OF TRADING WINDOW/2022-2023/Closure-of-Trading-Window_30.03.2023.pdf",
          },
          {
            year: "2023-24",
            title: "Closure-of-Trading-Window_30.09.2023",
            url: "/main/ANNOUNCEMENT/CLOSURE OF TRADING WINDOW/2023-2024/Closure-of-Trading-Window_30.09.2023.pdf",
          },
          {
            year: "2023-24",
            title: "Closure-of-Trading-Window_31-03-24",
            url: "/main/ANNOUNCEMENT/CLOSURE OF TRADING WINDOW/2023-2024/Closure-of-Trading-Window_31-03-2024.pdf",
          },
        ],
      },
      {
        type: "DISCLOSURES",
        key: 12,
        isNested: true,
        years: ["2022-23", "2023-24", "2024-25"],
        data: [
          {
            innerTab: "COMPLIANCE CERTIFICATE",
            innerData: [
              {
                year: "2022-23",
                title: "Regulation_74(5)_Compliance Certificate_Q2",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/COMPLIANCE CERTIFICATE/2022-2023/Regulation_74(5)_Compliance Certificate_Q2.pdf",
              },
              {
                year: "2022-23",
                title: "Regulation_74(5)_Compliance Certificate_Q3",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/COMPLIANCE CERTIFICATE/2022-2023/Regulation_74(5)_Compliance Certificate_Q3.pdf",
              },
              {
                year: "2022-23",
                title: "Regulation_74(5)_Compliance Certificate_Q4",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/COMPLIANCE CERTIFICATE/2022-2023/Regulation_74(5)_Compliance Certificate_Q4.pdf",
              },

              {
                year: "2023-24",
                title: "Regulation_74(5)_Compliance Certificate_Q1",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/COMPLIANCE CERTIFICATE/2023-2024/Regulation_74(5)_Compliance Certificate_Q1.pdf",
              },
              {
                year: "2023-24",
                title: "Regulation_74(5)_Compliance Certioficate_Q2",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/COMPLIANCE CERTIFICATE/2023-2024/Regulation_74(5)_Compliance Certioficate_Q2.pdf",
              },
              {
                year: "2023-24",
                title: "Regulation_74(5)_Compliance Certificate_Q3",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/COMPLIANCE CERTIFICATE/2023-2024/Regulation_74(5)_Compliance Certificate_Q3.pdf",
              },
              {
                year: "2023-24",
                title: "Regulation_74(5)_Compliance Certificate_Q4",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/COMPLIANCE CERTIFICATE/2023-2024/Regulation_74(5)_Compliance Certificate_Q4.pdf",
              },

              {
                year: "2024-25",
                title: "Regulation_74(5)_Compliance Certificate_Q1",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/COMPLIANCE CERTIFICATE/2024-2025/Regulation_74(5)_Compliance Certificate_Q1.pdf",
              },
            ],
          },
          {
            innerTab: "CORPORATE GOVERNANCE",
            innerData: [
              {
                year: "2022-23",
                title: "Regulation 27(2)_Compliance Certificate_Q3",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/CORPORATE GOVERNANCE/2022-2023/Regulation 27(2)_Compliance Certificate_Q3.pdf",
              },
              {
                year: "2022-23",
                title: "Regulation 27(2)_Compliance Certificate_Q4",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/CORPORATE GOVERNANCE/2022-2023/Regulation 27(2)_Compliance Certificate_Q4.pdf",
              },
              {
                year: "2023-24",
                title: "Regulation 27(2)_Compliance Certificate_Q1",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/CORPORATE GOVERNANCE/2023-2024/Regulation 27(2)_Compliance Certificate_Q1.pdf",
              },
              {
                year: "2023-24",
                title: "Regulation 27(2)_Compliance Certificate_Q2",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/CORPORATE GOVERNANCE/2023-2024/Regulation 27(2)_Compliance Certificate_Q2.pdf",
              },
              {
                year: "2023-24",
                title: "Regulation 27(2)_Compliance Certificate_Q3",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/CORPORATE GOVERNANCE/2023-2024/Regulation 27(2)_Compliance Certificate_Q3.pdf",
              },
              {
                year: "2023-24",
                title: "Regulation 27(2)_Compliance Certificate_Q4",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/CORPORATE GOVERNANCE/2023-2024/Regulation 27(2)_Compliance Certificate_Q4.pdf",
              },
              {
                year: "2024-25",
                title: "Regulation 27(2)_Compliance Certificate_Q1",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/CORPORATE GOVERNANCE/2024-2025/Regulation 27(2)_Compliance Certificate_Q1.pdf",
              },
            ],
          },
          {
            innerTab: "GENERAL ANNOUNCEMENTS",
            innerData: [
              {
                year: "2022-23",
                title: "Appointment_Internal Auditor_2022-23",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2022-2023/Appointment_Internal Auditor_2022-23.pdf",
              },
              {
                year: "2022-23",
                title: "Appointment_Secretarial Auditor_2022-23",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2022-2023/Appointment_Secretarial Auditor_2022-23.pdf",
              },
              {
                year: "2022-23",
                title: "Certficate_Regulation_24A_2022-23",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2022-2023/Certficate_Regulation_24A_2022-23.pdf",
              },
              {
                year: "2022-23",
                title: "Certificate_Regulation_7(3)_2022-23",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2022-2023/Certificate_Regulation_7(3)_2022-23.pdf",
              },
              {
                year: "2022-23",
                title: "Certificate_Regulation_40(9)_2022-23",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2022-2023/Certificate_Regulation_40(9)_2022-23.pdf",
              },
              {
                year: "2022-23",
                title: "Declaration_SAST Regulation_31(4)_2022-23",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2022-2023/Declaration_SAST Regulation_31(4)_2022-23.pdf",
              },
              {
                year: "2022-23",
                title:
                  "Regulation 29(1) of SEBI (SAST) REGULATION_VICKY JAVERI",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2022-2023/Regulation 29(1) of SEBI (SAST) REGULATION_VICKY JAVERI.pdf",
              },

              {
                year: "2023-24",
                title: "Appointment_Internal Auditor_2023-24",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Appointment_Internal Auditor_2023-24.pdf",
              },
              {
                year: "2023-24",
                title: "Appointment_Secretarial Auditor_2023-24",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Appointment_Secretarial Auditor_2023-24.pdf",
              },
              {
                year: "2023-24",
                title: "Appointment_Statutory Auditor_2023",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Appointment_Statutory Auditor_2023.pdf",
              },
              {
                year: "2023-24",
                title: "Book-Closure_AGM_2023-24",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Book-Closure_AGM_2023-24.pdf",
              },
              {
                year: "2023-24",
                title: "Certficate_Regulation_24A_2023-24",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Certficate_Regulation_24A_2023-24.pdf",
              },
              {
                year: "2023-24",
                title: "Certificate_Regulation_7(3)_2023-24",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Certificate_Regulation_7(3)_2023-24.pdf",
              },
              {
                year: "2023-24",
                title: "Certificate_Regulation_40(9)_2023-24",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Certificate_Regulation_40(9)_2023-24.pdf",
              },
              {
                year: "2023-24",
                title: "Clarification_Price_Movement_2023",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Clarification_Price_Movement_2023.pdf",
              },
              {
                year: "2023-24",
                title: "Declaration_SAST Regulation_31(4)_2023-24",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Declaration_SAST Regulation_31(4)_2023-24.pdf",
              },
              {
                year: "2023-24",
                title: "General Announcement_Reg 31_SAST",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/General Announcement_Reg 31_SAST.pdf",
              },
              {
                year: "2023-24",
                title: "Reg 29(2) of SAST_Intimation_05.03.2024",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Reg 29(2) of SAST_Intimation_05.03.2024.pdf",
              },
              {
                year: "2023-24",
                title: "Reg 29(2) of SAST_Intimation_06.03.2024",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Reg 29(2) of SAST_Intimation_06.03.2024.pdf",
              },
              {
                year: "2023-24",
                title: "Reg 29(2) of SAST_Intimation_15.03.2024",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Reg 29(2) of SAST_Intimation_15.03.2024.pdf",
              },
              {
                year: "2023-24",
                title: "Reg 29(2) of SAST_Intimation_22.02.2024",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Reg 29(2) of SAST_Intimation_22.02.2024.pdf",
              },
              {
                year: "2023-24",
                title: "Reg 29(2) of SAST_Intimation_23.02.2024",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Reg 29(2) of SAST_Intimation_23.02.2024.pdf",
              },
              {
                year: "2023-24",
                title: "Regulation 7(2)_PIT Regulation_05.03.2024",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Regulation 7(2)_PIT Regulation_05.03.2024.pdf",
              },
              {
                year: "2023-24",
                title: "Regulation 7(2)_PIT Regulation_06.03.2024",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Regulation 7(2)_PIT Regulation_06.03.2024.pdf",
              },
              {
                year: "2023-24",
                title: "Regulation 7(2)_PIT Regulation_15.03.2024",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Regulation 7(2)_PIT Regulation_15.03.2024.pdf",
              },
              {
                year: "2023-24",
                title: "Regulation 7(2)_PIT Regulation_22.02.2024",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Regulation 7(2)_PIT Regulation_22.02.2024.pdf",
              },
              {
                year: "2023-24",
                title: "Regulation 7(2)_PIT Regulation_23.02.2024",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Regulation 7(2)_PIT Regulation_23.02.2024.pdf",
              },
              {
                year: "2023-24",
                title: "Scrutinizer-Report_AGM_2023-24",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2023-2024/Scrutinizer-Report_AGM_2023-24.pdf",
              },

              {
                year: "2024-25",
                title: "Appointment_Internal Auditor_2023-24",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2024-2025/Appointment_Internal Auditor_2023-24.pdf",
              },
              {
                year: "2024-25",
                title: "Appointment_Secretarial Auditor_2023-24",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2024-2025/Appointment_Secretarial Auditor_2023-24.pdf",
              },
              {
                year: "2024-25",
                title: "Book-Closure_AGM_2024-25",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2024-2025/Book-Closure_AGM_2024-25.pdf",
              },
              {
                year: "2024-25",
                title: "Intimation_Regulation 31(1)_ SAST_",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2024-2025/Intimation_Regulation 31(1)_ SAST_.pdf",
              },
              {
                year: "2024-25",
                title: "Reg 29(2) of SAST_Intimation_13.08.2024",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2024-2025/Reg 29(2) of SAST_Intimation_13.08.2024.pdf",
              },
              {
                year: "2024-25",
                title: "Regulation 7(2)_PIT Regulation_30.08.2024",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/GENERAL ANNOUNCEMENTS/2024-2025/Regulation 7(2)_PIT Regulation_30.08.2024.pdf",
              },
            ],
          },
          {
            innerTab: "RECONCILIATION OF SHARE CAPITAL",
            innerData: [
              {
                year: "2022-23",
                title: "Reconciliation_Share Capital_Q3",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/RECONCILIATION OF SHARE CAPITAL/2022-2023/Reconciliation_Share Capital_Q3.pdf",
              },
              {
                year: "2022-23",
                title: "Reconciliation_Share Capital_Q4",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/RECONCILIATION OF SHARE CAPITAL/2022-2023/Reconciliation_Share Capital_Q4.pdf",
              },

              {
                year: "2023-24",
                title: "Reconciliation_Share Capital_Q1",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/RECONCILIATION OF SHARE CAPITAL/2023-2024/Reconciliation_Share Capital_Q1.pdf",
              },
              {
                year: "2023-24",
                title: "Reconciliation_Share Capital_Q2",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/RECONCILIATION OF SHARE CAPITAL/2023-2024/Reconciliation_Share Capital_Q2.pdf",
              },
              {
                year: "2023-24",
                title: "Reconciliation_Share Capital_Q3",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/RECONCILIATION OF SHARE CAPITAL/2023-2024/Reconciliation_Share Capital_Q3.pdf",
              },
              {
                year: "2023-24",
                title: "Reconciliation_Share Capital_Q4",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/RECONCILIATION OF SHARE CAPITAL/2023-2024/Reconciliation_Share Capital_Q4.pdf",
              },

              {
                year: "2024-25",
                title: "Reconciliation_Share Capital_Q1",
                url: "/main/ANNOUNCEMENT/DISCLOSURES/RECONCILIATION OF SHARE CAPITAL/2024-2025/Reconciliation_Share Capital_Q1.pdf",
              },
            ],
          },
        ],
      },
      {
        type: "QUARTERLY INVESTOR GRIEVANCES",
        key: 13,
        years: ["2022-23", "2023-24", "2024-25"],
        data: [
          {
            year: "2022-23",
            title: "INVESTOR GRIVENCE_2022-23_Q2",
            url: "#",
          },
          {
            year: "2022-23",
            title: "INVESTOR GRIVENCE_2022-23_Q3",
            url: "#",
          },
          {
            year: "2022-23",
            title: "INVESTOR GRIVENCE_2022-23_Q4",
            url: "#",
          },

          {
            year: "2023-24",
            title: "INVESTORS GRIVENCES_2023-24_Q1",
            url: "#",
          },
          {
            year: "2023-24",
            title: "INVESTORS GRIVENCES_2023-24_Q2",
            url: "#",
          },
          {
            year: "2023-24",
            title: "INVESTORS GRIVENCES_2023-24_Q3",
            url: "#",
          },
          {
            year: "2023-24",
            title: "INVESTORS GRIVENCES_2023-24_Q4",
            url: "#",
          },

          {
            year: "2024-25",
            title: "INVESTORS GRIVENCES_2024-25_Q1",
            url: "#",
          },
        ],
      },
      {
        type: "SDD",
        key: 14,
        years: ["2022-23", "2023-24", "2024-25"],
        data: [
          {
            year: "2022-23",
            title: "SDD_Q4_2022-23",
            url: "#",
          },

          {
            year: "2023-24",
            title: "SDD Compliance_Q1",
            url: "#",
          },
          {
            year: "2023-24",
            title: "SDD Compliance_Q2",
            url: "#",
          },
          {
            year: "2023-24",
            title: "SDD Compliance_Q3",
            url: "#",
          },
          {
            year: "2023-24",
            title: "SDD Compliance_Q4",
            url: "#",
          },

          {
            year: "2024-25",
            title: "SDD Compliance_Q1",
            url: "#",
          },
        ],
      },
      {
        type: "VOTING RESULT",
        key: 15,
        years: ["2023-24"],
        data: [
          {
            year: "2023-24",
            title: "Scrutinizer_Report_",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    uniq: "IPO",
    type: "D",
    tab: "INITIAL PUBLIC OFFERING",
    sidebar: [
      {
        title: "Draft Prospectus",
        url: "/main/Draft Prospectus.pdf",
      },
      {
        title: "General Information Document",
        url: "/main/General Information Document.pdf",
      },
      {
        title: "Prospectus",
        url: "/main/Prospectus.pdf",
      },
    ],
  },
  {
    id: 3,
    uniq: "RPAF",
    type: "SIYD",
    tab: "REPORTS_PRESENTATIONS AND FINANCIALS",
    sidebar: [
      {
        type: "ANNUAL REPORTS AND RETURNS",
        years: ["2022-23", "2023-24"],
        key: 21,
        data: [
          {
            year: "2022-23",
            title: "Annual Report_2022-23",
            url: "#",
          },
          {
            year: "2022-23",
            title: "MGT-7_2022-23",
            url: "#",
          },
          {
            year: "2023-24",
            title: "Annual Report_2023-24",
            url: "#",
          },
        ],
      },
      {
        type: "BOARD MEETING",
        key: 22,
        years: ["2022-23", "2023-24", "2024-25"],
        data: [
          {
            year: "2022-23",
            title: "Intimation-of-BM-November-14-2022",
            url: "#",
          },
          {
            year: "2022-23",
            title: "Outcome-of-BM-November-14-2022",
            url: "#",
          },

          {
            year: "2023-24",
            title: "Intimation_BM_May_27_2023",
            url: "#",
          },
          {
            year: "2023-24",
            title: "Intimation_BM_November_08_2023",
            url: "#",
          },
          {
            year: "2023-24",
            title: "Intimation_BM_September_05_2023",
            url: "#",
          },
          {
            year: "2023-24",
            title: "Outcome_BM_May_27_2023",
            url: "#",
          },
          {
            year: "2023-24",
            title: "Outcome_BM_November_08_2023",
            url: "#",
          },
          {
            year: "2023-24",
            title: "Outcome_BM_September_05_2023",
            url: "#",
          },

          {
            year: "2024-25",
            title: "Intimation_BM_04_September_2024",
            url: "#",
          },
          {
            year: "2024-25",
            title: "Intimation_BM_May_18_2024",
            url: "#",
          },
          {
            year: "2024-25",
            title: "Outcome_BM_04_September_2024",
            url: "#",
          },
          {
            year: "2024-25",
            title: "Outcome_BM_May_18_2024",
            url: "#",
          },
        ],
      },
      {
        type: "FINANCIALS",
        key: 23,
        years: ["2022-23", "2023-24"],
        data: [
          {
            year: "2022-23",
            title: "Financial Result_Half Yearly_September_2022-23",
            url: "#",
          },
          {
            year: "2022-23",
            title: "Financial Result_Yearly_March_2022-23",
            url: "#",
          },

          {
            year: "2023-24",
            title: "Financial Result_Half Yearly_September_2023-24",
            url: "#",
          },
          {
            year: "2023-24",
            title: "Financial Result_Yearly_March_2023-24",
            url: "#",
          },
        ],
      },
      {
        type: "GENERAL MEETING",
        key: 24,
        years: ["2022-23", "2023-24"],
        data: [
          {
            year: "2022-23",
            title: "Notice_AGM_FY-2022-23",
            url: "#",
          },
          {
            year: "2022-23",
            title: "Outcome-of-AGM_FY2022-23",
            url: "#",
          },

          {
            year: "2023-24",
            title: "Notice_AGM_FY-23-24",
            url: "#",
          },
        ],
      },
      {
        type: "INVESTORS UPDATES",
        key: 25,
        years: null,
        data: [
          {
            title: "DEMAND VIDEO",
            url: "#",
          },
          {
            title: "_PitchDeck_2021",
            url: "#",
          },

          {
            title: "PITCH DECK 2022",
            url: "#",
          },
        ],
      },
      {
        type: "POLICIES",
        key: 26,
        years: null,
        data: [
          {
            title: "Board Diversity Policy",
            url: "#",
          },
          {
            title: "Code for Independent Directors",
            url: "#",
          },
          {
            title:
              "Code of Conduct for Board Members and Senior Management Personnel",
            url: "#",
          },
          {
            title: "Code of Internal Procedure Conduct for Prevention",
            url: "#",
          },
          {
            title:
              "Code of Practices and Procedures for Fair Disclosure of UPSI",
            url: "#",
          },
          {
            title: "Familiarization Programme for Independent",
            url: "#",
          },
          {
            title: "Nomination-Remuneration-Policy",
            url: "#",
          },
          {
            title: "Performance-Evaluation-Policy",
            url: "#",
          },
          {
            title: "Policy for Materiality of Events",
            url: "#",
          },
          {
            title: "Related Party Transaction Policy",
            url: "#",
          },
          {
            title: "Whistler Blowe Policy",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    uniq: "SP",
    type: "YD",
    tab: "SHAREHOLDING PATTERN",
    sidebar: [
      {
        type: null,
        years: ["2022-23", "2023-24", "2024-25"],
        data: [
          {
            year: "2022-23",
            title: "Shareholding Pattern_Before listing_2022-23",
            url: "papa",
          },
          {
            year: "2022-23",
            title: "Shareholding Pattern_Q3",
            url: "#",
          },
          {
            year: "2022-23",
            title: "Shareholding Pattern_Q4",
            url: "#",
          },

          {
            year: "2023-24",
            title: "Shareholding Pattern_Q2",
            url: "#",
          },
          {
            year: "2023-24",
            title: "Shareholding Pattern_Q3",
            url: "#",
          },
          {
            year: "2023-24",
            title: "Shareholding Pattern_Q4",
            url: "#",
          },
          {
            year: "2023-24",
            title: "Shareholding Patter_Q1",
            url: "#",
          },

          {
            year: "2024-25",
            title: "Shareholding Pattern_Q1",
            url: "#",
          },
        ],
      },
    ],
  },
];

export { reportsData, mainTabs, years };
