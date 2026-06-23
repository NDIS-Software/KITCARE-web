export const company = {
  name: "KITCARE",
  registrationLabel: "Registered NDIS Provider",
  phone: "1300 123 456",
  email: "hello@kitcare.com.au",
  serviceArea: "Australia",
  addressLine: "Supporting participants across local communities",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Personal Care",
    slug: "personal-care",
    href: "/services/personal-care",
    summary:
      "Support with daily living routines so you can feel comfortable and confident at home.",
    image: "/images/personal-care.png",
    icon: "care",
    detail:
      "Personal Care support is designed around your daily routines, preferences, privacy, and goals. KITCARE works respectfully with you so support feels practical, consistent, and comfortable.",
    includes: [
      "Daily routines and personal presentation",
      "Meal preparation prompts and support",
      "Mobility and transfers where appropriate",
      "Building confidence with everyday tasks",
    ],
    helps: [
      "Participants who want reliable help at home",
      "People building confidence with daily routines",
      "Families seeking respectful, person-centred support",
    ],
  },
  {
    title: "Community Participation",
    slug: "community-participation",
    href: "/services/community-participation",
    summary:
      "Build skills, pursue interests, and take part in community activities that matter to you.",
    image: "/images/community-participation.png",
    icon: "community",
    detail:
      "Community Participation support helps you stay connected, develop skills, and take part in activities that are meaningful to you.",
    includes: [
      "Attending local activities or appointments",
      "Building social confidence and independence",
      "Support to pursue hobbies and interests",
      "Planning safe and enjoyable community access",
    ],
    helps: [
      "Participants wanting to connect with community",
      "People developing independence outside the home",
      "Participants who want practical support to try new activities",
    ],
  },
  {
    title: "Household Tasks",
    slug: "household-tasks",
    href: "/services/household-tasks",
    summary:
      "Practical support to keep your home safe, clean, organised, and comfortable.",
    image: "/images/household-tasks.png",
    icon: "home",
    detail:
      "Household Tasks support helps keep your home clean, safe, and comfortable while respecting how you like your space to work.",
    includes: [
      "Light cleaning and household routines",
      "Laundry and linen support",
      "Kitchen organisation and meal-related tasks",
      "Practical support to maintain a safer home",
    ],
    helps: [
      "Participants who need support maintaining their home",
      "People who want consistent household routines",
      "Families looking for practical daily living support",
    ],
  },
  {
    title: "Travel & Transport",
    slug: "travel-transport",
    href: "/services/travel-transport",
    summary:
      "Safe and reliable support for appointments, activities, shopping, and community access.",
    image: "/images/travel-transport.png",
    icon: "transport",
    detail:
      "Travel and Transport support helps you get where you need to go for appointments, activities, shopping, and community life.",
    includes: [
      "Transport to appointments and activities",
      "Support with shopping and errands",
      "Community access planning",
      "Confidence building around travel routines",
    ],
    helps: [
      "Participants who need reliable travel support",
      "People attending regular appointments",
      "Participants building confidence with community access",
    ],
  },
];

export const trustPoints = [
  {
    title: "Person-centred support",
    icon: "person",
  },
  {
    title: "Trusted, respectful and reliable",
    icon: "shield",
  },
  {
    title: "Empowering independence and inclusion",
    icon: "community",
  },
  {
    title: "Caring for our community",
    icon: "heart",
  },
];

export const whyChooseUs = [
  {
    title: "You're at the centre",
    description: "We listen, respect your choices, and support your goals.",
    icon: "chat",
  },
  {
    title: "Qualified and caring team",
    description:
      "Our team is skilled, experienced, and passionate about making a positive difference.",
    icon: "award",
  },
  {
    title: "Reliable and consistent support",
    description: "We focus on building trust and providing support you can count on.",
    icon: "hands",
  },
  {
    title: "Local and community focused",
    description:
      "Proudly supporting people to stay connected with their community.",
    icon: "pin",
  },
];

export const faqs = [
  {
    question: "What is the NDIS?",
    answer:
      "The National Disability Insurance Scheme supports eligible Australians with disability to access reasonable and necessary supports.",
  },
  {
    question: "How do I get started with KITCARE?",
    answer:
      "Contact our team and we will talk through your goals, support needs, and the services that may suit you.",
  },
  {
    question: "Can I choose my support worker?",
    answer:
      "We aim to match you with support workers who suit your preferences, routines, and goals where available.",
  },
];
