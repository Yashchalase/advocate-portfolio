export const blogPosts = [
  {
    slug: 'property-dispute-lawyer-delhi-guide',
    title: 'Property Dispute Lawyer in Delhi: A Complete Guide for Homeowners',
    excerpt:
      'Understanding your legal rights in property disputes — from illegal possession to title defects and partition suits in Delhi courts.',
    category: 'Property Law',
    date: '2025-06-15',
    readTime: '8 min read',
    author: 'Adv. Rajesh Kumar Mehta',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    content: `
<p>Property disputes are among the most common legal challenges faced by Delhi residents. Whether you are dealing with illegal possession, a defective title, or a family partition matter, understanding your legal options is the first step toward resolution.</p>

<h2>Common Types of Property Disputes</h2>
<p>Delhi courts handle thousands of property-related cases each year. The most frequent include illegal possession or encroachment, title disputes arising from incomplete documentation, co-owner partition conflicts, and landlord-tenant disagreements under the Delhi Rent Control Act.</p>

<h2>When to Consult a Property Lawyer</h2>
<p>You should seek legal counsel immediately if you receive an eviction notice, discover someone occupying your property without authorization, or find discrepancies during a property purchase. Early intervention often prevents protracted litigation.</p>

<h2>Legal Remedies Available</h2>
<p>Depending on your situation, remedies may include filing a suit for possession, seeking a permanent injunction, initiating partition proceedings, or filing a complaint under RERA for builder-related disputes. Each remedy has specific procedural requirements and timelines.</p>

<h2>Choosing the Right Advocate</h2>
<p>Look for an advocate with active practice before Delhi High Court and district courts, experience in property title verification, and a track record in both litigation and negotiated settlements. A consultation can help assess the strength of your case and the most efficient path forward.</p>
    `,
  },
  {
    slug: 'anticipatory-bail-process-india',
    title: 'Anticipatory Bail in India: Process, Timeline, and What to Expect',
    excerpt:
      'A step-by-step guide to obtaining anticipatory bail under Section 438 CrPC — when to apply, required documents, and factors courts consider.',
    category: 'Criminal Law',
    date: '2025-05-28',
    readTime: '6 min read',
    author: 'Adv. Rajesh Kumar Mehta',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    content: `
<p>Anticipatory bail is a pre-arrest legal protection granted under Section 438 of the Code of Criminal Procedure, 1973. It allows a person to seek bail in anticipation of arrest in connection with a non-bailable offense.</p>

<h2>When Should You Apply?</h2>
<p>Apply as soon as you have reason to believe an FIR may be registered against you, or immediately after an FIR is filed. Delay in applying can weaken your case, as courts may view it as an indication of consciousness of guilt.</p>

<h2>Which Court to Approach?</h2>
<p>You can approach either the Sessions Court or the High Court. For urgent matters or cases involving complex legal questions, the High Court is often preferred. If the Sessions Court rejects your application, you can approach the High Court.</p>

<h2>Factors Courts Consider</h2>
<p>Courts evaluate the nature and gravity of the offense, the applicant's role, criminal antecedents, likelihood of fleeing, and whether custodial interrogation is necessary. Strong legal arguments and proper documentation significantly improve your chances.</p>
    `,
  },
  {
    slug: 'mutual-consent-divorce-delhi',
    title: 'Mutual Consent Divorce in Delhi: Requirements and Timeline',
    excerpt:
      'Everything you need to know about filing for mutual consent divorce under Section 13B of the Hindu Marriage Act in Delhi Family Courts.',
    category: 'Family Law',
    date: '2025-04-10',
    readTime: '7 min read',
    author: 'Adv. Rajesh Kumar Mehta',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    content: `
<p>Mutual consent divorce is the most amicable way for couples to legally end their marriage when both parties agree. In Delhi, these petitions are filed before the Family Court having jurisdiction over the area where the couple last resided together.</p>

<h2>Eligibility Requirements</h2>
<p>The couple must have been living separately for at least one year, mutually agree that the marriage should be dissolved, and have settled matters related to alimony, child custody, and property division.</p>

<h2>The Two-Stage Process</h2>
<p>First motion involves filing the joint petition and recording statements. A mandatory cooling-off period of six months follows (though courts may waive this under exceptional circumstances). Second motion confirms the mutual consent, and the court grants the divorce decree.</p>

<h2>Documents Required</h2>
<p>Marriage certificate, address proof, passport-size photographs, joint petition, and settlement agreement covering alimony, custody, and property matters. Having these prepared in advance expedites the process.</p>
    `,
  },
  {
    slug: 'trademark-registration-india-2025',
    title: 'Trademark Registration in India: Updated Guide for 2025',
    excerpt:
      'Step-by-step process for registering your trademark with the Indian Trademark Registry, including fees, timelines, and common pitfalls.',
    category: 'Intellectual Property',
    date: '2025-03-22',
    readTime: '9 min read',
    author: 'Adv. Rajesh Kumar Mehta',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80',
    content: `
<p>Registering a trademark protects your brand identity and gives you exclusive rights to use your mark in connection with specified goods or services. Here is what you need to know about the current registration process.</p>

<h2>Step 1: Trademark Search</h2>
<p>Before filing, conduct a comprehensive search on the IP India portal to ensure your proposed mark does not conflict with existing registrations. This prevents costly objections and opposition proceedings later.</p>

<h2>Step 2: Filing the Application</h2>
<p>Submit Form TM-A online with the prescribed fee. You must specify the class of goods/services under the Nice Classification system. Multi-class applications are permitted but increase the fee.</p>

<h2>Step 3: Examination and Publication</h2>
<p>The Registrar examines the application for distinctiveness and conflicts. If accepted, the mark is published in the Trademark Journal for a four-month opposition period. If no opposition is filed, the registration certificate is issued.</p>
    `,
  },
];

export const blogCategories = ['All', 'Criminal Law', 'Property Law', 'Family Law', 'Corporate Law', 'Intellectual Property'];

export const getBlogPostBySlug = (slug) => blogPosts.find((post) => post.slug === slug);

export default blogPosts;
