export const practiceAreas = [
  {
    slug: 'criminal-law',
    title: 'Criminal Law',
    shortDescription:
      'Defense and prosecution in criminal matters including bail, trials, appeals, and white-collar crimes.',
    fullDescription:
      'With extensive experience in criminal litigation, I represent clients in matters ranging from economic offenses and white-collar crimes to serious penal offenses. My practice covers bail applications, anticipatory bail, trials before Sessions Courts, and criminal appeals before the High Court and Supreme Court. I work diligently to protect your constitutional rights at every stage of the criminal justice process.',
    icon: 'Gavel',
    services: [
      'Bail & Anticipatory Bail Applications',
      'Criminal Trials & Defense',
      'White-Collar & Economic Offenses',
      'Criminal Appeals & Revisions',
      'Quashing of FIR (Section 482 CrPC)',
      'Cyber Crime & IT Act Offenses',
    ],
    faqs: [
      {
        question: 'How quickly can you file a bail application?',
        answer:
          'In urgent matters, I can prepare and file a bail application within 24–48 hours. For anticipatory bail, immediate action is recommended — contact me as soon as an FIR is registered or anticipated.',
      },
      {
        question: 'Do you handle cases outside Delhi?',
        answer:
          'Yes. While based in Delhi, I regularly appear before courts across India and coordinate with local counsel when required.',
      },
    ],
  },
  {
    slug: 'civil-litigation',
    title: 'Civil Litigation',
    shortDescription:
      'Comprehensive representation in civil disputes, contract breaches, recovery suits, and injunctions.',
    fullDescription:
      'Civil litigation forms the backbone of my practice. I represent individuals and businesses in complex civil disputes including contract enforcement, recovery of dues, specific performance, injunctions, and declaratory suits. My approach combines thorough legal research with practical courtroom strategy to achieve efficient resolutions.',
    icon: 'FileText',
    services: [
      'Contract Disputes & Breach of Contract',
      'Recovery & Money Suits',
      'Injunctions (Temporary & Permanent)',
      'Specific Performance Suits',
      'Consumer Disputes',
      'Arbitration & Mediation',
    ],
    faqs: [
      {
        question: 'How long does a typical civil suit take?',
        answer:
          'Timelines vary significantly based on court jurisdiction and case complexity. A straightforward recovery suit may take 2–4 years, while complex commercial disputes can extend longer. I always provide realistic timeline estimates during consultation.',
      },
    ],
  },
  {
    slug: 'corporate-law',
    title: 'Corporate Law',
    shortDescription:
      'Legal advisory for companies — compliance, contracts, mergers, governance, and regulatory matters.',
    fullDescription:
      'I advise startups, SMEs, and established corporations on a wide range of corporate legal matters. From incorporation and shareholder agreements to regulatory compliance under the Companies Act, SEBI regulations, and FEMA, I help businesses navigate the legal landscape with confidence.',
    icon: 'Building2',
    services: [
      'Company Incorporation & Compliance',
      'Shareholder & Partnership Agreements',
      'Mergers & Acquisitions Advisory',
      'Corporate Governance',
      'SEBI & Regulatory Compliance',
      'Due Diligence & Legal Audits',
    ],
    faqs: [
      {
        question: 'Do you provide retainer-based corporate advisory?',
        answer:
          'Yes. I offer monthly retainer arrangements for businesses requiring ongoing legal support, which includes contract review, compliance monitoring, and priority consultation access.',
      },
    ],
  },
  {
    slug: 'family-law',
    title: 'Family Law',
    shortDescription:
      'Sensitive handling of divorce, custody, maintenance, adoption, and matrimonial disputes.',
    fullDescription:
      'Family law matters require both legal expertise and emotional sensitivity. I guide clients through divorce proceedings, child custody disputes, maintenance and alimony claims, domestic violence cases, and adoption matters. My goal is to resolve disputes with dignity while fiercely protecting my clients\' interests and their children\'s welfare.',
    icon: 'Users',
    services: [
      'Divorce & Judicial Separation',
      'Child Custody & Visitation Rights',
      'Maintenance & Alimony',
      'Domestic Violence (DV Act)',
      'Adoption & Guardianship',
      'Mutual Consent Divorce',
    ],
    faqs: [
      {
        question: 'How does mutual consent divorce work?',
        answer:
          'Under Section 13B of the Hindu Marriage Act, both parties must agree to divorce and file a joint petition. There is a mandatory 6-month cooling-off period (which can sometimes be waived), after which the court grants the decree of divorce.',
      },
    ],
  },
  {
    slug: 'property-law',
    title: 'Property Law',
    shortDescription:
      'Property disputes, title verification, real estate transactions, and landlord-tenant matters.',
    fullDescription:
      'Property disputes are among the most common legal issues in India. I handle title disputes, partition suits, eviction proceedings, RERA-related matters, and property transaction documentation. Whether you are buying property, facing an illegal possession, or dealing with a landlord-tenant conflict, I provide thorough legal support.',
    icon: 'Home',
    services: [
      'Property Title Verification',
      'Partition & Co-ownership Disputes',
      'Eviction & Illegal Possession',
      'RERA Complaints & Advisory',
      'Sale Deed & Documentation Review',
      'Landlord-Tenant Disputes',
    ],
    faqs: [
      {
        question: 'Should I verify property title before purchase?',
        answer:
          'Absolutely. Title verification is essential to avoid future disputes. I conduct thorough due diligence including chain of title, encumbrance checks, and verification of approvals and permissions.',
      },
    ],
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    shortDescription:
      'Protection and enforcement of trademarks, copyrights, patents, and trade secrets.',
    fullDescription:
      'In today\'s knowledge economy, intellectual property is often a business\'s most valuable asset. I assist with trademark registration and opposition, copyright protection, IP licensing agreements, and enforcement actions against infringement. My IP practice serves creators, tech companies, and brands seeking to protect their innovations.',
    icon: 'Lightbulb',
    services: [
      'Trademark Registration & Opposition',
      'Copyright Registration & Enforcement',
      'IP Licensing Agreements',
      'Infringement Litigation',
      'Trade Secret Protection',
      'Domain Name Disputes',
    ],
    faqs: [
      {
        question: 'How long does trademark registration take in India?',
        answer:
          'The trademark registration process typically takes 18–24 months if no objections are raised. I handle the entire process including filing, responding to objections, and opposition proceedings.',
      },
    ],
  },
];

export const getPracticeAreaBySlug = (slug) =>
  practiceAreas.find((area) => area.slug === slug);

export default practiceAreas;
