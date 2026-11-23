/**
 * Central content configuration.
 * Replace the values here to re-brand the template — no component edits required.
 */

export interface CaseImage {
  src: string
  alt: string
  caption: string
}

export interface Project {
  slug: string
  title: string
  category: string
  year: string
  role: string
  summary: string
  cover: string
  coverAlt: string
  intro: string
  challenge: string
  approach: { heading: string; body: string }[]
  outcome: string
  images: CaseImage[]
  /** Optional live project URL — shown on the case page when present. */
  link?: string
}

export const site = {
  name: 'Ahmed Abdelmaqsoud',
  monogram: 'Ahmed Abdelmaqsoud',
  role: 'Front-end developer — React.js & Firebase',
  location: 'Egypt — working remotely',
  availability: 'Available for freelance projects',
  email: 'p638599@gmail.com',
  /** Add entries like { label: 'Instagram', href: 'https://…' }. Empty entries are hidden. */
  socials: [
    { label: 'GitHub', href: 'https://github.com/ahmedpaulo77' },
    { label: 'WhatsApp', href: 'https://wa.me/201220811060' },
  ] as { label: string; href: string }[],
  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#capabilities' },
    { label: 'Contact', href: '/#contact' },
  ],
}

export const hero = {
  line1: 'Front-end developer',
  line2: '& React + Firebase specialist',
}

export const studies = {
  heading: 'Recent builds',
  intro:
    'Live products and client sites across SaaS, clinics, commerce and construction — each one built, shipped and still running.',
}

export const about = {
  heading: 'About',
  paragraphs: [
    'I’m a front-end developer based in Egypt, focused on React.js and Firebase. I build complete systems — not just pages: SaaS platforms, booking systems, and websites for clinics, businesses and online stores.',
    'Graduate of Future University in Egypt (FUE). I work as a freelancer on Khamsat, Mostaql and LinkedIn, and I’ve shipped 14+ projects that are live and clickable.',
    'Every build starts with the flow: what the visitor needs to do, then the interface. I care about fast load times, clean responsive layouts, RTL Arabic support and handing over code the next developer can read.',
  ],
  experience: [
    { period: 'Now', item: 'Freelance front-end developer — React.js & Firebase' },
    { period: 'Platforms', item: 'Khamsat · Mostaql · LinkedIn' },
    { period: 'Shipped', item: '14+ live projects — SaaS, booking, clinic & store websites' },
  ],
  portrait: '/images/about-dev.jpg',
  portraitAlt: 'MacBook Pro with code editor open showing JavaScript and GSAP animation code',
  portraitCaption: 'Working remotely from Egypt',
}

export const capabilities = {
  heading: 'Skills',
  meta: 'What I build with',
  items: [
    {
      title: 'Front-end development',
      body: 'Fast, accessible interfaces in React.js with modern JavaScript, HTML5 and CSS3 — responsive from phone to desktop.',
      tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'React Router'],
    },
    {
      title: 'Firebase & data',
      body: 'Authentication, Firestore, storage and hosting — the full stack behind the interface, wired up and secured.',
      tags: ['Firebase Auth', 'Firestore', 'Storage', 'Hosting'],
    },
    {
      title: 'Motion & interaction',
      body: 'Scroll choreography, micro-interactions and WebGL post-processing with GSAP and custom GLSL — smooth on every device.',
      tags: ['GSAP', 'ScrollTrigger', 'WebGL', 'GLSL'],
    },
    {
      title: 'Ship & maintain',
      body: 'Vite builds, Git and GitHub workflows, and clean TypeScript so the codebase stays readable after launch.',
      tags: ['Vite', 'TypeScript', 'Git & GitHub'],
    },
  ],
}

export const contact = {
  heading: 'Let’s work together',
  line: 'Have a website, store, booking system or SaaS product in mind? I take on freelance projects and reply within a day.',
}

export const projects: Project[] = [
  {
    slug: 'elkwayra',
    title: 'Elkwayra',
    category: 'Football quiz platform',
    year: '2025',
    role: 'React.js · RTL Arabic · Game logic',
    summary:
      'An Arabic football quiz platform where one host runs the phone and two teams compete through seven different trivia games.',
    cover: '/images/sites/elkwayra-cover.webp',
    coverAlt: 'Elkwayra home page with seven football game cards on a dark purple background',
    intro:
      'Football banter usually lives in group chats and notebooks. Elkwayra turns it into a set of party games: the host reads from the phone, two teams guess, and the points keep the score honest.',
    challenge:
      'Seven different games with one consistent scoring system — in an Arabic RTL interface that has to stay readable while a room is shouting over it.',
    approach: [
      {
        heading: 'One game, one guide',
        body: 'Guess Who, The Path, Risk, 100 Points, Top 3, Lineups and Cards each have their own rules page — the idea, how to play, how points are counted and a worked example.',
      },
      {
        heading: 'Host-first screens',
        body: 'The host holds the phone, so timers, reveals and score controls are sized for one hand and a loud table, not for a desktop dashboard.',
      },
      {
        heading: 'RTL by default',
        body: 'Arabic typography and layout are the primary design, with light and dark themes and an English toggle for mixed groups.',
      },
    ],
    outcome:
      'Seven playable games, question packs that keep growing, and a full guide section — one Arabic platform for football nights.',
    images: [
      {
        src: '/images/sites/elkwayra-detail.webp',
        alt: 'Elkwayra game grid with Risk, The Path and Guess Who cards',
        caption: 'Seven game modes — each with its own rules and scoring.',
      },
      {
        src: '/images/sites/elkwayra-detail2.webp',
        alt: 'A lower section of the Elkwayra site',
        caption: 'Guides for every mode, written for the host.',
      },
    ],
    link: 'https://elkwayra.com/',
  },
  {
    slug: 'aamalypro',
    title: 'Aamaly Pro',
    category: 'Business management SaaS',
    year: '2026',
    role: 'React.js · Firebase · Dashboard UI',
    summary:
      'An Arabic business operating system — point of sale, invoices, inventory, clients and team permissions in one dashboard.',
    cover: '/images/sites/aamalypro-cover.webp',
    coverAlt: 'Aamaly Pro landing page in Arabic with the headline “manage your business from one place”',
    intro:
      'Small businesses often run on a point-of-sale, a spreadsheet and a WhatsApp group. Aamaly Pro puts those three into a single Arabic dashboard with a real data model behind it.',
    challenge:
      'One product that a shop, restaurant, clinic or company can all use — with isolated data per business and permissions an owner can understand without training.',
    approach: [
      {
        heading: 'POS first',
        body: 'Barcode sales, cashier shifts and thermal receipt printing are the daily entry point, because that is where the business actually lives.',
      },
      {
        heading: 'Documents that leave the screen',
        body: 'Professional invoices exported to PDF in one click, with stock updated automatically on every sale or purchase.',
      },
      {
        heading: 'Teams and isolation',
        body: 'Role-based permissions with complete data separation between businesses — all in RTL Arabic, with a demo mode and a 14-day trial.',
      },
    ],
    outcome:
      'A complete SaaS product: landing page, signup and trial flow, demo mode, and a dashboard built around daily operations.',
    images: [
      {
        src: '/images/sites/aamalypro-detail.webp',
        alt: 'Aamaly Pro landing page features section',
        caption: 'POS, invoices, inventory and team permissions — one platform.',
      },
      {
        src: '/images/sites/aamalypro-detail2.webp',
        alt: 'A lower section of the Aamaly Pro landing page',
        caption: 'Built for shops, restaurants and clinics alike.',
      },
    ],
    link: 'https://aamalypro.com/',
  },
  {
    slug: 'rwcon',
    title: 'RWCON',
    category: 'Contracting & landscaping',
    year: '2025',
    role: 'React.js · RTL Arabic · Project gallery',
    summary:
      'A contracting and landscaping company site — pools, fountains, landscape, plants and general contracting, with real project photography.',
    cover: '/images/sites/rwcon-cover.webp',
    coverAlt: 'RWCON home page with a landscaped garden hero and Arabic headline',
    intro:
      'RWCON sells physical work: swimming pools, water features and green spaces for hotels and compounds in Saudi Arabia. The site had to show the work, not describe it.',
    challenge:
      'Present six very different service lines without the page turning into a catalogue, and keep every project reachable on a phone.',
    approach: [
      {
        heading: 'Services as chapters',
        body: 'Pools, fountains, landscape, plants, Magic and general contracting each get their own section with named projects underneath.',
      },
      {
        heading: 'Proof over claims',
        body: 'Real references — Holiday Inn Tabuk, the NHC landscape — carry the credibility instead of slogans.',
      },
      {
        heading: 'WhatsApp as the funnel',
        body: 'Every service ends in a direct WhatsApp conversation, which is how the market actually buys.',
      },
    ],
    outcome:
      'A bilingual-ready company site that walks a visitor from a finished project photo to a WhatsApp message in two taps.',
    images: [
      {
        src: '/images/sites/rwcon-detail.webp',
        alt: 'RWCON services section with pool, fountain and landscape cards',
        caption: 'Six service lines, each anchored by a real project.',
      },
      {
        src: '/images/sites/rwcon-detail2.webp',
        alt: 'A lower section of the RWCON site',
        caption: 'From design to handover — the process on one page.',
      },
    ],
    link: 'https://rwcon-sa.com/',
  },
  {
    slug: 'dhaman',
    title: 'Dhaman',
    category: 'Maintenance services site',
    year: '2025',
    role: 'React.js · Responsive · Local SEO',
    summary:
      'A maintenance and finishing company in Banha — appliance repair and apartment finishing, with clear services, reviews and one-tap contact.',
    cover: '/images/sites/dhaman-cover.webp',
    coverAlt: 'Dhaman maintenance company home page in Arabic',
    intro:
      'A local maintenance office competing on trust: does the technician arrive, is the work guaranteed, is the price clear before starting.',
    challenge:
      'Answer the three questions local customers actually ask — what, how fast, how much — before they scroll past.',
    approach: [
      {
        heading: 'Services split in two',
        body: 'Appliance maintenance and apartment finishing are separated up front, each with its own list of work and guarantees.',
      },
      {
        heading: 'Local trust signals',
        body: 'Customer reviews, a quality guarantee and straightforward pricing language, written for a Banha audience.',
      },
      {
        heading: 'One tap to contact',
        body: 'Phone and WhatsApp actions repeat after every section instead of hiding in a footer.',
      },
    ],
    outcome:
      'A compact services site that reads like a shopfront: who they are, what they fix, and how to call them.',
    images: [
      {
        src: '/images/sites/dhaman-detail.webp',
        alt: 'Dhaman services section with maintenance and finishing cards',
        caption: 'Two service tracks with clear scopes.',
      },
      {
        src: '/images/sites/dhaman-detail2.webp',
        alt: 'A lower section of the Dhaman site',
        caption: 'Reviews and guarantees placed where decisions happen.',
      },
    ],
    link: 'https://ahmedpaulo77.github.io/etqan/#/',
  },
  {
    slug: 'elite',
    title: 'Élite Store',
    category: 'Fashion e-commerce',
    year: '2025',
    role: 'React.js · Cart UI · Product grid',
    summary:
      'A multi-category fashion store — men, women and kids — with featured collections, a working cart and a timed winter offer.',
    cover: '/images/sites/elite-cover.webp',
    coverAlt: 'Élite fashion store hero with a model and the headline “Style that speaks for you”',
    intro:
      'A storefront has to do three jobs quickly: show the collection, price it clearly, and get out of the way of the buy button.',
    challenge:
      'Three audiences — men, women, kids — in one storefront, without the landing page becoming a directory.',
    approach: [
      {
        heading: 'Category-first browsing',
        body: 'The hero leads into three clearly separated collections, each with its own product cards and sale states.',
      },
      {
        heading: 'Storefront mechanics',
        body: 'Cart drawer, discount badges and a countdown offer block give the page the rhythm of a real shop.',
      },
      {
        heading: 'Cards that sell',
        body: 'Product cards lead with image, price and quick add — one decision per card.',
      },
    ],
    outcome:
      'A complete front-end storefront, ready to be connected to a real catalogue and payment flow.',
    images: [
      {
        src: '/images/sites/elite-detail.webp',
        alt: 'Élite featured collections section',
        caption: 'Three collections, one storefront rhythm.',
      },
      {
        src: '/images/sites/elite-detail2.webp',
        alt: 'A lower section of the Élite store',
        caption: 'Sale states and a timed offer, handled in the UI.',
      },
    ],
    link: 'https://ahmedpaulo77.github.io/elite/',
  },
  {
    slug: 'elegance',
    title: 'Élégance',
    category: 'Women’s fashion store',
    year: '2025',
    role: 'React.js · Editorial commerce',
    summary:
      'A women’s fashion boutique built like an editorial — collections, lookbook sections and a working cart.',
    cover: '/images/sites/elegance-cover.webp',
    coverAlt: 'Élégance women’s fashion hero with the headline “Dress with intention”',
    intro:
      'A boutique lives on taste, not on grid density. Élégance needed a storefront that reads like a magazine and still sells.',
    challenge:
      'Keep the editorial calm of a lookbook while giving shoppers categories, prices and a cart they can trust.',
    approach: [
      {
        heading: 'Collections as chapters',
        body: 'Dresses, tops, skirts and outerwear are presented as curated sets with counts and editor picks.',
      },
      {
        heading: 'Editorial spacing',
        body: 'Generous typography and whitespace, with sale states kept quiet instead of shouting from every card.',
      },
      {
        heading: 'Cart that stays out of the way',
        body: 'A lightweight cart drawer with quantities and totals, so the browsing never breaks.',
      },
    ],
    outcome:
      'A boutique storefront with a reading order — the collection reads first, the cart follows.',
    images: [
      {
        src: '/images/sites/elegance-detail.webp',
        alt: 'Élégance shop-by-collection section',
        caption: 'Four collections with editor picks.',
      },
      {
        src: '/images/sites/elegance-detail2.webp',
        alt: 'A lower section of the Élégance store',
        caption: 'Quiet sale states inside an editorial layout.',
      },
    ],
    link: 'https://ahmedpaulo77.github.io/Elegance/',
  },
  {
    slug: 'dr-mohamed',
    title: 'Dr. Mohamed Omar',
    category: 'Ophthalmology clinic',
    year: '2025',
    role: 'React.js · RTL Arabic · Appointment CTAs',
    summary:
      'A consultant ophthalmologist’s site — credentials, services from cataract to LASIK, and appointment booking at every step.',
    cover: '/images/sites/dr-mohamed-cover.webp',
    coverAlt: 'Dr. Mohamed Omar ophthalmology site hero in Arabic',
    intro:
      'A medical site is a trust document. Patients check the credentials, the procedures offered and how to book — usually in that order.',
    challenge:
      'Make twenty years of experience and a Cambridge fellowship legible in a few seconds, without a wall of text.',
    approach: [
      {
        heading: 'Credentials first',
        body: 'Fellowship, years of practice and procedure counts sit directly under the name, before any sales language.',
      },
      {
        heading: 'Procedures in plain Arabic',
        body: 'Cataract, lens implants, LASIK and retinal care each get a short, readable service block.',
      },
      {
        heading: 'Booking everywhere',
        body: 'The appointment action repeats in the header, the hero and every section end.',
      },
    ],
    outcome:
      'A calm clinic site that answers “who is this doctor and how do I get an appointment” on one screen.',
    images: [
      {
        src: '/images/sites/dr-mohamed-detail.webp',
        alt: 'Dr. Mohamed Omar services section',
        caption: 'Procedures explained in plain Arabic.',
      },
      {
        src: '/images/sites/dr-mohamed-detail2.webp',
        alt: 'A lower section of the ophthalmology site',
        caption: 'Booking repeated wherever a decision happens.',
      },
    ],
    link: 'https://ahmedpaulo77.github.io/dr-mohamed/',
  },
  {
    slug: 'dr-allam-clinic',
    title: 'Dr. Mahmoud Allam',
    category: 'Clinical nutrition clinic',
    year: '2025',
    role: 'React.js · RTL Arabic · BMI calculator',
    summary:
      'A clinical nutrition site — custom plans, therapeutic diets and online follow-up, with a built-in BMI calculator.',
    cover: '/images/sites/dr-allam-clinic-cover.webp',
    coverAlt: 'Dr. Mahmoud Allam nutrition clinic hero in Arabic',
    intro:
      'Nutrition clients decide with numbers and proof. The site had to show results, explain the programmes and give a first step that takes thirty seconds.',
    challenge:
      'Present before-and-after results honestly, and turn an interested visitor into a booked consultation without a phone call.',
    approach: [
      {
        heading: 'Results up front',
        body: 'Latest results and patient ratings sit near the top, next to the programmes that produced them.',
      },
      {
        heading: 'Programmes with boundaries',
        body: 'Custom plans, therapeutic nutrition and online follow-up are separated so each visitor recognises their case.',
      },
      {
        heading: 'A thirty-second first step',
        body: 'A BMI calculator gives an immediate answer, then hands over to the booking action.',
      },
    ],
    outcome:
      'A clinic site that turns curiosity into a BMI check, and a BMI check into a consultation request.',
    images: [
      {
        src: '/images/sites/dr-allam-clinic-detail.webp',
        alt: 'Dr. Mahmoud Allam services section',
        caption: 'Programmes split by case, not by marketing.',
      },
      {
        src: '/images/sites/dr-allam-clinic-detail2.webp',
        alt: 'A lower section of the nutrition clinic site',
        caption: 'The BMI calculator as the first step.',
      },
    ],
    link: 'https://ahmedpaulo77.github.io/dr-allam-clinic/',
  },
  {
    slug: 'hayah-clinic',
    title: 'Hayah Clinic',
    category: 'Weight-loss & physio clinic',
    year: '2025',
    role: 'React.js · RTL Arabic · Multi-branch',
    summary:
      'A weight-loss and physiotherapy clinic with three branches, before-and-after galleries and online Zoom consultations.',
    cover: '/images/sites/hayah-clinic-cover.webp',
    coverAlt: 'Hayah Clinic hero in Arabic with clinic branding',
    intro:
      'Three branches, one brand. The site had to make the clinic feel close — whichever branch a patient is near — and make booking trivial.',
    challenge:
      'Carry a large service menu (weight loss, physiotherapy, LPG, rehabilitation) without losing one clear path to booking.',
    approach: [
      {
        heading: 'Branches as a first-class choice',
        body: 'Banha, New Cairo and Sheikh Zayed are visible early, with their own contact paths.',
      },
      {
        heading: 'Proof in the gallery',
        body: 'Before-and-after results and patient testimonials are structured, not scattered.',
      },
      {
        heading: 'Two ways to book',
        body: 'In-clinic booking and Zoom consultation both live in the header, plus a BMI calculator for first-timers.',
      },
    ],
    outcome:
      'A multi-branch clinic site that reads as one brand and books as three local practices.',
    images: [
      {
        src: '/images/sites/hayah-clinic-detail.webp',
        alt: 'Hayah Clinic services section',
        caption: 'A large menu kept navigable.',
      },
      {
        src: '/images/sites/hayah-clinic-detail2.webp',
        alt: 'A lower section of the Hayah Clinic site',
        caption: 'Branches, results and reviews in one flow.',
      },
    ],
    link: 'https://ahmedpaulo77.github.io/ahmed-abdelkader/#/',
  },
  {
    slug: 'shiny-dental',
    title: 'Shiny Dental',
    category: 'Dental clinic',
    year: '2025',
    role: 'React.js · Bilingual UI · Service gallery',
    summary:
      'A dental clinic in Banha — cosmetic and implant dentistry, a service gallery and a bilingual Arabic/English interface.',
    cover: '/images/sites/shiny-dental-cover.webp',
    coverAlt: 'Shiny Dental clinic hero in Arabic',
    intro:
      'Dental patients choose on aesthetics as much as on credentials. Shiny Dental needed a site that looks like the clinic: bright, precise, reassuring.',
    challenge:
      'Present fifteen procedures without a wall of text, and serve Arabic and English visitors from one codebase.',
    approach: [
      {
        heading: 'Procedures as cards',
        body: 'Whitening, implants, orthodontics, veneers, root canals and paediatric care each get a short card with a clear next step.',
      },
      {
        heading: 'Bilingual by design',
        body: 'An Arabic/English switch with mirrored layout, so neither language is an afterthought.',
      },
      {
        heading: 'Trust built in',
        body: 'Patient counts, years of practice and a free-consultation action sit above the fold.',
      },
    ],
    outcome:
      'A clinic site that presents a full service menu in two languages, with booking always one tap away.',
    images: [
      {
        src: '/images/sites/shiny-dental-detail.webp',
        alt: 'Shiny Dental services grid',
        caption: 'Fifteen procedures as scannable cards.',
      },
      {
        src: '/images/sites/shiny-dental-detail2.webp',
        alt: 'A lower section of the Shiny Dental site',
        caption: 'Gallery, reviews and FAQ in one flow.',
      },
    ],
    link: 'https://ahmedpaulo77.github.io/shiny-dental/#/',
  },
  {
    slug: 'global-auto-parts',
    title: 'Global Auto Parts',
    category: 'Auto-parts B2B catalogue',
    year: '2025',
    role: 'React.js · Search & filters · B2B flow',
    summary:
      'An import/export auto-parts business — brand search, OEM part cards, shipment tracking and container quote requests.',
    cover: '/images/sites/global-auto-parts-cover.webp',
    coverAlt: 'Global Auto Parts hero in Arabic with vehicle brand search',
    intro:
      'Wholesale buyers arrive with a part number, not a mood. This site is built around the search box and the quote request.',
    challenge:
      'Make thousands of parts feel searchable, and separate the two audiences — workshops buying small quantities and importers asking for containers.',
    approach: [
      {
        heading: 'Search before story',
        body: 'Brand selection and part search sit in the hero, above any brand messaging.',
      },
      {
        heading: 'Parts with real data',
        body: 'Cards carry OEM numbers, origin country and stock state — the fields a buyer checks.',
      },
      {
        heading: 'Two clear funnels',
        body: 'Shipment tracking for existing orders, and a container/B2B quote form for new ones.',
      },
    ],
    outcome:
      'A B2B catalogue front end that behaves like a trade counter: search, verify, request a quote.',
    images: [
      {
        src: '/images/sites/global-auto-parts-detail.webp',
        alt: 'Global Auto Parts product cards',
        caption: 'OEM numbers and stock state on every card.',
      },
      {
        src: '/images/sites/global-auto-parts-detail2.webp',
        alt: 'A lower section of the auto-parts site',
        caption: 'Quote requests and shipment tracking side by side.',
      },
    ],
    link: 'https://ahmedpaulo77.github.io/cars/',
  },
  {
    slug: 'bloom-kitchen',
    title: 'Bloom Kitchen',
    category: 'Restaurant website',
    year: '2025',
    role: 'React.js · Menu & gallery',
    summary:
      'A restaurant site with a structured menu, a food gallery, table reservations and a direct order action.',
    cover: '/images/sites/bloom-kitchen-cover.webp',
    coverAlt: 'Bloom Kitchen hero with a plated dish and Arabic headline',
    intro:
      'Restaurant visitors decide in seconds: does the food look good, is it nearby, and can I order or book right now.',
    challenge:
      'A menu of dozens of dishes that stays readable on a phone, with ordering one thumb away.',
    approach: [
      {
        heading: 'Menu as the centre',
        body: 'Dishes grouped by meal and category, with prices, descriptions and best-sellers first.',
      },
      {
        heading: 'Appetite first',
        body: 'Photography leads every section — the gallery is part of the menu, not a separate page.',
      },
      {
        heading: 'Two conversion paths',
        body: 'Order now for delivery, or reserve a table — both in the header and repeated after the menu.',
      },
    ],
    outcome:
      'A restaurant front end that works as a menu, a gallery and an ordering entry point at once.',
    images: [
      {
        src: '/images/sites/bloom-kitchen-detail.webp',
        alt: 'Bloom Kitchen menu cards',
        caption: 'Menu cards with prices and short descriptions.',
      },
      {
        src: '/images/sites/bloom-kitchen-detail2.webp',
        alt: 'A lower section of the Bloom Kitchen site',
        caption: 'Gallery and ordering actions together.',
      },
    ],
    link: 'https://ahmedpaulo77.github.io/food/',
  },
  {
    slug: 'bookflow',
    title: 'BookFlow',
    category: 'Booking SaaS',
    year: '2026',
    role: 'React.js · Firebase · Booking logic',
    summary:
      'An Arabic booking system for clinics, salons and training centres — multi-branch, conflict-free slots and instant email notifications.',
    cover: '/images/sites/bookflow-cover.webp',
    coverAlt: 'BookFlow landing page in Arabic with the product name',
    intro:
      'Booking software fails in one place: two people book the same slot. BookFlow was built around preventing that, and around a price a local business can say yes to.',
    challenge:
      'Explain a booking product in one page, and make the trial and demo obvious enough that a salon owner signs up without a sales call.',
    approach: [
      {
        heading: 'No double bookings',
        body: 'Slots are computed per branch and service, so an overlapping appointment is technically impossible.',
      },
      {
        heading: 'Branches, hours, services',
        body: 'Each branch carries its own working hours, appointment length, days off and price list.',
      },
      {
        heading: 'A dashboard, not a spreadsheet',
        body: 'One admin screen to view, cancel and follow bookings, with an email notification on every reservation.',
      },
    ],
    outcome:
      'A product page plus a working booking flow — signup, branches, services and a shareable booking link.',
    images: [
      {
        src: '/images/sites/bookflow-detail.webp',
        alt: 'BookFlow features section',
        caption: 'Conflict-free slots, branches and notifications.',
      },
      {
        src: '/images/sites/bookflow-detail2.webp',
        alt: 'A lower section of the BookFlow landing page',
        caption: 'Three steps from signup to a shared booking link.',
      },
    ],
    link: 'https://bookflow-amber.vercel.app/',
  },
  {
    slug: 'al-nokhba-law',
    title: 'Al-Nokhba',
    category: 'Law firm website',
    year: '2025',
    role: 'React.js · Scroll motion · Arabic typography',
    summary:
      'A corporate law firm site — practice areas, team, articles and consultation booking, with a slow, deliberate motion language.',
    cover: '/images/sites/al-nokhba-law-cover.webp',
    coverAlt: 'Al-Nokhba law firm hero in Arabic with the headline “your right deserves unwavering defence”',
    intro:
      'A law firm sells judgement, not speed. The site had to feel composed — large type, long lines, and motion that never hurries.',
    challenge:
      'Make a twenty-year practice feel current, and turn three practice areas into a clear navigation instead of a list.',
    approach: [
      {
        heading: 'Three practice paths',
        body: 'Commercial law, litigation and arbitration, and corporate law are separated with their own scopes and language.',
      },
      {
        heading: 'Motion as tone',
        body: 'Scroll-driven reveals and a draggable 3D emblem give the page a slow, weighty rhythm.',
      },
      {
        heading: 'Consultation as the goal',
        body: 'Every section resolves into the same action: book a consultation.',
      },
    ],
    outcome:
      'A firm site with an editorial voice — practice areas, team and articles under one restrained design system.',
    images: [
      {
        src: '/images/sites/al-nokhba-law-detail.webp',
        alt: 'Al-Nokhba practice areas section',
        caption: 'Practice areas as three clear paths.',
      },
      {
        src: '/images/sites/al-nokhba-law-detail2.webp',
        alt: 'A lower section of the law firm site',
        caption: 'Team and articles in the same measured grid.',
      },
    ],
    link: 'https://ahmedpaulo77.github.io/law/',
  },
  {
    slug: 'forme',
    title: 'FORME',
    category: 'Fashion concept store',
    year: '2026',
    role: 'React.js · Editorial commerce',
    summary:
      'A concept clothing label — a quiet editorial storefront with a numbered collection, product rotation and a cart.',
    cover: '/images/sites/forme-cover.webp',
    coverAlt: 'FORME concept store hero with the headline “Less noise. More you.”',
    intro:
      'FORME sells a point of view more than a catalogue. The storefront had to stay quiet enough for that idea to land.',
    challenge:
      'Build a store that feels like a lookbook but behaves like a shop — sizes, prices, cart — with no clutter.',
    approach: [
      {
        heading: 'Numbered collection',
        body: 'The collection is presented as an editorial spread, with each piece introduced rather than listed.',
      },
      {
        heading: 'Rotation, not grid',
        body: 'Products appear in a rotating sequence, so the page reads like a story rather than a shelf.',
      },
      {
        heading: 'Quiet commerce',
        body: 'Prices, bag and add-to-cart stay minimal and legible, never competing with the photography.',
      },
    ],
    outcome:
      'A concept storefront that carries the label’s tone and still completes the sale.',
    images: [
      {
        src: '/images/sites/forme-detail.webp',
        alt: 'FORME collection section',
        caption: 'The everyday collection, numbered.',
      },
      {
        src: '/images/sites/forme-detail2.webp',
        alt: 'A lower section of the FORME store',
        caption: 'The rotation — products as a sequence.',
      },
    ],
    link: 'https://ahmedpaulo77.github.io/clothes/',
  },
]

/** Motion parameters — tweak timing/easing globally here. */
export const motion = {
  ease: 'power3.out',
  heroReveal: { duration: 1.1, stagger: 0.12 },
  transition: { duration: 0.55 },
}

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
export const nextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug)
  return projects[(i + 1) % projects.length]
}
