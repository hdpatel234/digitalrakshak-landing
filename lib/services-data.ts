export interface Service {
  name: string
  description?: string
}

export interface SubService {
  name: string
  description?: string
  services: Service[]
}

export interface MainService {
  name: string
  description: string
  icon: string
  subservices: SubService[]
}

export const servicesData: MainService[] = [
  {
    name: 'ID & e-KYC Data Stack',
    description: 'Complete digital identity and KYC solutions',
    icon: '🔐',
    subservices: [
      {
        name: 'e-KYC Onboarding',
        description: 'Seamless digital onboarding with document access',
        services: [
          { name: 'Access Digi-Locker', description: 'Access digital documents' },
          { name: 'Aadhar', description: 'Aadhar verification' },
          { name: 'PAN', description: 'PAN verification' }
        ]
      },
      {
        name: 'Security/Auth',
        description: 'Advanced security and authentication services',
        services: [
          { name: 'Face Match', description: 'Biometric face matching' },
          { name: 'Liveness Check', description: 'Anti-spoofing liveness verification' },
          { name: 'KYC - OCR', description: 'Optical character recognition for KYC' },
          { name: 'Email / Mobile Verification', description: 'Channel verification' },
          { name: 'Email Fraud Check', description: 'Detect email fraud' },
          { name: 'Mobile No. Revocation List (MNRL)', description: 'Check mobile revocation' }
        ]
      },
      {
        name: 'Identity Verification',
        description: 'Verify multiple identity documents',
        services: [
          { name: 'Aadhar Card', description: 'Aadhar verification' },
          { name: 'PAN Card', description: 'PAN verification' },
          { name: 'Passport', description: 'Passport verification' },
          { name: 'Voter ID', description: 'Voter ID verification' },
          { name: 'Ration Card Details', description: 'Ration card verification' }
        ]
      },
      {
        name: 'Membership Verification',
        description: 'Professional membership verification',
        services: [
          { name: 'CA - Chartered Accountant', description: 'Verify CA membership' },
          { name: 'ICSI - Institute of Company Secretaries', description: 'Verify ICSI membership' },
          { name: 'ICWAI - Institute of Cost Accountants', description: 'Verify ICWAI membership' }
        ]
      },
      {
        name: 'Business Verification',
        description: 'Comprehensive business entity verification',
        services: [
          { name: 'Company & LLP Check', description: 'Company and LLP verification' },
          { name: 'PAN Verify', description: 'Business PAN verification' },
          { name: 'TAN Verify', description: 'TAN verification' },
          { name: 'TIN Verify', description: 'TIN verification' },
          { name: 'GSTIN Verify', description: 'GST registration verification' },
          { name: 'Import / Export Certificate', description: 'Import/export verification' },
          { name: 'Shop & Establishment', description: 'Shop registration verification' },
          { name: 'MSME / Udyam', description: 'MSME registration check' },
          { name: 'EPFO Establishment Search', description: 'EPFO verification' }
        ]
      }
    ]
  },
  {
    name: 'Document Intelligence',
    description: 'Advanced document verification and validation',
    icon: '📄',
    subservices: [
      {
        name: 'Due Diligence',
        description: 'Comprehensive verification and validation',
        services: [
          { name: 'Name Match', description: 'Verify name consistency' },
          { name: 'Address Match', description: 'Address verification' },
          { name: 'Address Split', description: 'Parse address components' },
          { name: 'Geo Fencing', description: 'Geographic boundary verification' },
          { name: 'Reverse GeoCodes', description: 'Reverse geocoding services' },
          { name: 'Property Tax Verification', description: 'Property tax records check' },
          { name: 'Driving Licence (DL)', description: 'DL verification' },
          { name: 'Vehicle RC Verification', description: 'RC verification' },
          { name: 'Fast Tag Verification', description: 'FASTag verification' },
          { name: 'FASTTAG Last Location', description: 'FASTag location tracking' },
          { name: 'Electricity Bill Verify', description: 'Electricity bill verification' },
          { name: 'LPG ID Verification', description: 'LPG ID check' },
          { name: 'PNG Verification', description: 'PNG verification' }
        ]
      },
      {
        name: 'Financial Verification',
        description: 'Financial records and history verification',
        services: [
          { name: 'Bank Account Verification', description: 'Bank account validation' },
          { name: 'Compensation Verification', description: 'Verify via bank statement' },
          { name: 'IFSC Check', description: 'IFSC code verification' },
          { name: 'Income Tax Return - ITR', description: 'ITR verification' },
          { name: 'Credit / CIBIL History', description: 'Credit history check' },
          { name: 'Digital Media Forensic', description: 'Digital forensics' },
          { name: 'Social Media & Reputation', description: 'Social media screening' },
          { name: 'Cheque Verify', description: 'Cheque verification' },
          { name: 'OCR - Intelligent Doc Processing', description: 'Document OCR' }
        ]
      }
    ]
  },
  {
    name: 'Crime & Background Verification',
    description: 'Comprehensive background and criminal record checks',
    icon: '🛡️',
    subservices: [
      {
        name: 'Employment BGV',
        description: 'Employment background verification',
        services: [
          { name: 'EPF Employee Name Search', description: 'Search EPF records' },
          { name: 'EPF UAN Validation', description: 'Validate UAN number' },
          { name: 'EPF Records Check', description: 'Check EPF history' },
          { name: 'Single Record - Last Comp', description: 'Last company record' }
        ]
      },
      {
        name: 'Education BGV',
        description: 'Education verification',
        services: [
          { name: 'Graduate', description: 'Verify graduation' },
          { name: 'Post Graduate', description: 'Verify post-graduation' },
          { name: 'PhD', description: 'Verify doctoral degree' }
        ]
      },
      {
        name: 'Crime / Court Records Check',
        description: 'Criminal and court record verification',
        services: [
          { name: 'e-FIR Check', description: 'Electronic FIR check' },
          { name: 'National Criminal DB Check', description: 'National criminal database' },
          { name: 'Police Verification', description: 'Police records check' },
          { name: 'State Criminal Database', description: 'State criminal records' },
          { name: 'e-Court (Criminal/Civil)', description: 'e-Court records' },
          { name: 'Supreme / High Court Litigation', description: 'Supreme court check' },
          { name: 'District Court Record Search', description: 'District court records' },
          { name: 'Magistrate Court Search', description: 'Magistrate court records' },
          { name: 'Court/Criminal Record via Law Firm', description: 'Legal firm verification' },
          { name: 'Sex Offender Registry Check', description: 'National registry check' },
          { name: 'NCLT DB Check', description: 'NCLT database check' }
        ]
      },
      {
        name: 'Forgery Detection',
        description: 'Advanced forgery and fraud detection',
        services: [
          { name: 'Global DB - Negative Media Check', description: 'Global database screening' },
          { name: 'Advance Forgery Check', description: 'Advanced forgery detection' },
          { name: 'IP Quality Check', description: 'IP reputation check' }
        ]
      }
    ]
  },
  {
    name: 'HR Excellence Suite',
    description: 'Complete HR and employee management solutions',
    icon: '👥',
    subservices: [
      {
        name: 'Employment 360',
        description: 'End-to-end recruitment and onboarding',
        services: [
          { name: 'Technical Recruitment', description: 'Technical talent recruitment' },
          { name: 'ATS Ready Resume/CV', description: 'Resume parsing' },
          { name: 'On-boarding', description: 'Employee onboarding' },
          { name: 'Off-boarding / FnF', description: 'Employee exit management' },
          { name: 'Training / Webinars / Seminars', description: 'Training programs' }
        ]
      },
      {
        name: 'Employee BGV',
        description: 'Employee background verification',
        services: [
          { name: 'Employee Verification', description: 'Complete employee screening' }
        ]
      },
      {
        name: 'Managed Services',
        description: 'Outsourced HR and compliance services',
        services: [
          { name: 'EPFO', description: 'Employee provident fund' },
          { name: 'ESIC', description: 'Employee state insurance' },
          { name: 'TDS', description: 'Tax deducted at source' },
          { name: 'Professional Tax (PT)', description: 'Professional tax management' },
          { name: 'Employment & Labour Dept', description: 'Government assistance' },
          { name: 'ITR-1 (Sahaj) Assistance', description: 'ITR filing assistance' },
          { name: 'Cloud HR Tools', description: 'HR software solutions' },
          { name: 'Biometric Device / Data', description: 'Biometric solutions' }
        ]
      }
    ]
  },
  {
    name: 'Digital Transformation',
    description: 'Modern tech solutions and security services',
    icon: '🚀',
    subservices: [
      {
        name: 'AI / ML',
        description: 'Artificial intelligence solutions',
        services: [
          { name: 'Agents as a Service', description: 'AI agent deployment' }
        ]
      },
      {
        name: 'Cybersecurity',
        description: 'Security and threat management',
        services: [
          { name: 'VAPT Service', description: 'Vulnerability assessment' },
          { name: 'SOC', description: 'Security operations center' }
        ]
      },
      {
        name: 'License / Certification',
        description: 'Compliance certifications',
        services: [
          { name: 'ISO 9001', description: 'Quality management' },
          { name: 'ISO 27001', description: 'Information security' },
          { name: 'SOC - 1 & 2', description: 'Service organization control' },
          { name: 'GDPR Policy', description: 'GDPR compliance' },
          { name: 'DPDA Act', description: 'Data protection compliance' },
          { name: 'E-Waste Management', description: 'E-waste certification' }
        ]
      }
    ]
  }
]
