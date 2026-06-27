export const company = {
  name: "KIT Care",
  registrationLabel: "Registered NDIS Provider",
  phone: "1300 123 456",
  email: "hello@kitcare.com.au",
  serviceArea: "Melbourne, Victoria",
  addressLine: "Supporting participants across Melbourne communities",
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
    code: "0107",
    group: "Assist-Personal Activities",
    slug: "personal-care",
    href: "/services/personal-care",
    summary:
      "Support with daily living routines so you can feel comfortable and confident at home.",
    image: "/images/generated/personal-care-morning-routine.png",
    ctaImage: "/images/generated/personal-care-meal-support.png",
    icon: "care",
    detail:
      "Personal Care support is designed around your daily routines, preferences, privacy, and goals. KIT Care works respectfully with you so support feels practical, consistent, and comfortable.",
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
    benefits: ["Daily routines", "Comfort at home", "Respectful support"],
    approach: [
      "We start with your preferred routines and privacy needs.",
      "Support is paced around what feels comfortable for you.",
      "We keep communication clear with you and your support network.",
    ],
    scenarios: [
      {
        title: "Morning routines",
        description: "Practical help to start the day with confidence.",
        image: "/images/generated/getting-started-support-conversation.png",
      },
      {
        title: "Meal and home prompts",
        description: "Support with simple daily tasks that keep life moving.",
        image: "/images/generated/personal-care-meal-support.png",
      },
      {
        title: "Comfort and choice",
        description: "Respectful assistance shaped around your preferences.",
        image: "/images/generated/life-skills-routine-planning.png",
      },
    ],
    relatedSlugs: [
      "development-life-skills",
      "household-tasks",
      "supported-independent-living",
    ],
  },
  {
    title: "Travel & Transport",
    code: "0108",
    group: "Assist-Travel/Transport",
    slug: "travel-transport",
    href: "/services/travel-transport",
    summary:
      "Safe and reliable support for appointments, activities, shopping, and community access.",
    image: "/images/generated/travel-clinic-appointment-support.png",
    ctaImage: "/images/generated/travel-shopping-errands.png",
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
    benefits: ["Appointments", "Errands", "Community access"],
    approach: [
      "We plan travel around your comfort, timing, and destination.",
      "Support can include preparation before leaving and settling in after arrival.",
      "We help build familiar travel routines where that is part of your goal.",
    ],
    scenarios: [
      {
        title: "Appointments",
        description: "Reliable support getting to health, therapy, or plan meetings.",
        image: "/images/generated/travel-clinic-appointment-support.png",
      },
      {
        title: "Shopping and errands",
        description: "Practical support for regular community tasks.",
        image: "/images/generated/travel-shopping-errands.png",
      },
      {
        title: "Confidence with travel",
        description: "Step-by-step routines for safer community access.",
        image: "/images/generated/travel-planning-driveway.png",
      },
    ],
    relatedSlugs: [
      "community-participation",
      "innovative-community-participation",
      "development-life-skills",
    ],
  },
  {
    title: "Daily Tasks / Shared Living",
    code: "0115",
    group: "Daily Tasks/Shared Living",
    slug: "daily-tasks-shared-living",
    href: "/services/daily-tasks-shared-living",
    summary:
      "Practical assistance with shared living routines, daily tasks, and home-based independence.",
    image: "/images/generated/shared-living-weekly-planning.png",
    ctaImage: "/images/generated/shared-living-meal-routine.png",
    icon: "home",
    detail:
      "Daily Tasks and Shared Living support is focused on practical routines, shared responsibilities, and confidence at home. This content should be reviewed against the current NDIS registration wording before launch for providers using this group after 1 July 2026.",
    includes: [
      "Daily routine planning",
      "Shared living task support",
      "Meal and household routine prompts",
      "Building confidence with everyday responsibilities",
    ],
    helps: [
      "Participants in shared living arrangements",
      "People who want stronger home routines",
      "Families and support networks planning consistent daily support",
    ],
    benefits: ["Shared routines", "Home confidence", "Daily planning"],
    approach: [
      "We support shared responsibilities with calm, practical routines.",
      "We keep the participant's choices central in shared living settings.",
      "We help review what is working as household needs change.",
    ],
    scenarios: [
      {
        title: "Shared responsibilities",
        description: "Support with routines that make shared living easier.",
        image: "/images/generated/shared-living-weekly-planning.png",
      },
      {
        title: "Meal planning",
        description: "Prompts and support around everyday kitchen routines.",
        image: "/images/generated/shared-living-meal-routine.png",
      },
      {
        title: "Steady home rhythm",
        description: "Consistent support for predictable daily tasks.",
        image: "/images/generated/supported-independent-living-home-routine.png",
      },
    ],
    relatedSlugs: [
      "supported-independent-living",
      "household-tasks",
      "development-life-skills",
    ],
  },
  {
    title: "Supported Independent Living",
    code: "0138",
    group: "Assistance with supported independent living",
    slug: "supported-independent-living",
    href: "/services/supported-independent-living",
    summary:
      "Tailored support for participants who need help living more independently at home.",
    image: "/images/generated/sil-shared-kitchen-evening.png",
    ctaImage: "/images/generated/sil-kitchen-skills.png",
    icon: "living",
    detail:
      "Supported Independent Living support can assist with daily routines, skill building, safety, and shared home responsibilities. It should always be planned around the participant's needs, preferences, and approved supports.",
    includes: [
      "Daily living routines",
      "Skill development in the home",
      "Support with shared home responsibilities",
      "Consistent support planning with the participant",
    ],
    helps: [
      "Participants who need regular assistance at home",
      "People building independent living skills",
      "Families planning stable and person-centred home support",
    ],
    benefits: ["Home routines", "Skill building", "Stable support"],
    approach: [
      "We work from the participant's approved supports and home goals.",
      "Support is planned around consistency, dignity, and independence.",
      "We coordinate routines so the home feels safer and more predictable.",
    ],
    scenarios: [
      {
        title: "Living at home",
        description: "Regular support around daily life and home responsibilities.",
        image: "/images/generated/sil-shared-kitchen-evening.png",
      },
      {
        title: "Building independence",
        description: "Step-by-step skill practice in familiar routines.",
        image: "/images/generated/sil-kitchen-skills.png",
      },
      {
        title: "Shared household planning",
        description: "Clear routines that support confidence and choice.",
        image: "/images/generated/supported-independent-living-home-routine.png",
      },
    ],
    relatedSlugs: [
      "daily-tasks-shared-living",
      "development-life-skills",
      "household-tasks",
    ],
  },
  {
    title: "Innovative Community Participation",
    code: "0116",
    group: "Innov Community Participation",
    slug: "innovative-community-participation",
    href: "/services/innovative-community-participation",
    summary:
      "Creative, goal-based support to build confidence, connection, and community skills.",
    image: "/images/generated/group-centre-art-table.png",
    ctaImage: "/images/generated/community-creative-workshop.png",
    icon: "community",
    detail:
      "Innovative Community Participation support helps participants explore meaningful ways to build capacity, confidence, and connection in community settings.",
    includes: [
      "Goal-based community activities",
      "Confidence building in new environments",
      "Support to explore interests and local opportunities",
      "Practical social and community skill development",
    ],
    helps: [
      "Participants wanting to try new community experiences",
      "People building confidence outside the home",
      "Participants who want support that feels personal and purposeful",
    ],
    benefits: ["New interests", "Confidence", "Local connection"],
    approach: [
      "We shape community activities around interests and realistic goals.",
      "Support can start small and build confidence over time.",
      "We focus on meaningful participation rather than one-size-fits-all activities.",
    ],
    scenarios: [
      {
        title: "Trying something new",
        description: "Explore interests with practical support nearby.",
        image: "/images/generated/community-library-planning.png",
      },
      {
        title: "Local opportunities",
        description: "Find community options that suit your goals and comfort.",
        image: "/images/generated/community-creative-workshop.png",
      },
      {
        title: "Skill practice",
        description: "Build confidence in real community settings.",
        image: "/images/generated/ndis-support-services-collage.png",
      },
    ],
    relatedSlugs: [
      "community-participation",
      "group-centre-activities",
      "travel-transport",
    ],
  },
  {
    title: "Development Life Skills",
    code: "0117",
    group: "Development-Life Skills",
    slug: "development-life-skills",
    href: "/services/development-life-skills",
    summary:
      "Skill-building support for everyday routines, decision-making, confidence, and independence.",
    image: "/images/generated/life-skills-budget-tabletop.png",
    ctaImage: "/images/generated/life-skills-cooking-confidence.png",
    icon: "skills",
    detail:
      "Development Life Skills support focuses on practical, repeatable skills that help participants take part in daily life with greater confidence and choice.",
    includes: [
      "Daily routine skill building",
      "Planning and decision-making support",
      "Communication and confidence building",
      "Practical steps toward greater independence",
    ],
    helps: [
      "Participants working toward independence goals",
      "People who want to build daily living confidence",
      "Families looking for practical, measurable support",
    ],
    benefits: ["Practical skills", "Planning", "Confidence"],
    approach: [
      "We break skills into practical steps that can be repeated.",
      "Support is connected to everyday goals, not abstract exercises.",
      "We review progress with the participant and adjust the pace where needed.",
    ],
    scenarios: [
      {
        title: "Everyday decisions",
        description: "Support to plan, choose, and practise daily tasks.",
        image: "/images/generated/life-skills-budget-tabletop.png",
      },
      {
        title: "Community confidence",
        description: "Build skills that make getting out feel easier.",
        image: "/images/generated/life-skills-routine-planning.png",
      },
      {
        title: "Independent routines",
        description: "Repeatable steps for home, transport, and daily life.",
        image: "/images/generated/life-skills-cooking-confidence.png",
      },
    ],
    relatedSlugs: [
      "personal-care",
      "community-participation",
      "supported-independent-living",
    ],
  },
  {
    title: "Household Tasks",
    code: "0120",
    group: "Household Tasks",
    slug: "household-tasks",
    href: "/services/household-tasks",
    summary:
      "Practical support to keep your home safe, clean, organised, and comfortable.",
    image: "/images/generated/household-linen-organisation-detail.png",
    ctaImage: "/images/generated/household-laundry-support.png",
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
    benefits: ["Cleaning routines", "Laundry", "Safer home"],
    approach: [
      "We respect how you like your home to feel and function.",
      "Support focuses on practical routines that can be maintained.",
      "We work with you to keep tasks clear, manageable, and consistent.",
    ],
    scenarios: [
      {
        title: "Keeping spaces comfortable",
        description: "Light household routines that support a safer home.",
        image: "/images/generated/household-linen-organisation-detail.png",
      },
      {
        title: "Laundry and linen",
        description: "Practical support with regular home tasks.",
        image: "/images/generated/household-bedroom-organisation.png",
      },
      {
        title: "Kitchen routines",
        description: "Help with meal-related cleaning and organisation.",
        image: "/images/generated/household-pantry-support.png",
      },
    ],
    relatedSlugs: [
      "personal-care",
      "daily-tasks-shared-living",
      "supported-independent-living",
    ],
  },
  {
    title: "Community Participation",
    code: "0125",
    group: "Participate Community",
    slug: "community-participation",
    href: "/services/community-participation",
    summary:
      "Build skills, pursue interests, and take part in community activities that matter to you.",
    image: "/images/generated/community-market-choice-support.png",
    ctaImage: "/images/generated/community-skills-library.png",
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
    benefits: ["Activities", "Social confidence", "Hobbies"],
    approach: [
      "We listen to what community connection means for you.",
      "Support can include planning, transport routines, and confidence building.",
      "We keep activities purposeful, safe, and aligned with your interests.",
    ],
    scenarios: [
      {
        title: "Activities that matter",
        description: "Support to attend places and groups you value.",
        image: "/images/generated/community-market-choice-support.png",
      },
      {
        title: "Meeting people",
        description: "Build confidence around social and community settings.",
        image: "/images/generated/ndis-support-services-collage.png",
      },
      {
        title: "Getting there",
        description: "Plan community access with practical travel support.",
        image: "/images/community-participation.png",
      },
    ],
    relatedSlugs: [
      "innovative-community-participation",
      "group-centre-activities",
      "travel-transport",
    ],
  },
  {
    title: "Group & Centre Activities",
    code: "0136",
    group: "Group/Centre Activities",
    slug: "group-centre-activities",
    href: "/services/group-centre-activities",
    summary:
      "Inclusive group activities that support social connection, participation, and confidence.",
    image: "/images/generated/group-centre-art-table.png",
    ctaImage: "/images/generated/group-centre-social-lunch.png",
    icon: "group",
    detail:
      "Group and Centre Activities support safe, welcoming participation in structured activities with peers, support workers, and community networks.",
    includes: [
      "Structured group activities",
      "Social connection and participation",
      "Support to attend centre-based programs",
      "Inclusive activity planning around participant interests",
    ],
    helps: [
      "Participants who enjoy shared activities",
      "People building social confidence",
      "Participants seeking inclusive and welcoming programs",
    ],
    benefits: ["Group programs", "Social connection", "Inclusive activities"],
    approach: [
      "We support participation in a way that feels welcoming and manageable.",
      "Activities are matched to interests, comfort, and support needs.",
      "We focus on connection, confidence, and respectful inclusion.",
    ],
    scenarios: [
      {
        title: "Shared activities",
        description: "Welcoming group programs with practical support.",
        image: "/images/generated/group-centre-art-table.png",
      },
      {
        title: "Creative interests",
        description: "Activities that encourage confidence and participation.",
        image: "/images/generated/group-centre-social-lunch.png",
      },
      {
        title: "Centre-based support",
        description: "Structured programs in inclusive environments.",
        image: "/images/generated/community-skills-library.png",
      },
    ],
    relatedSlugs: [
      "community-participation",
      "innovative-community-participation",
      "development-life-skills",
    ],
  },
];

export const serviceScenarios = [
  {
    title: "Daily routines",
    description:
      "Support for personal care, meals, home rhythms, and everyday confidence.",
    image: "/images/generated/getting-started-support-conversation.png",
    icon: "care",
  },
  {
    title: "Getting out",
    description:
      "Travel support for appointments, errands, activities, and community access.",
    image: "/images/generated/travel-clinic-appointment-support.png",
    icon: "transport",
  },
  {
    title: "Home confidence",
    description:
      "Practical help with household tasks, shared living, and safer home routines.",
    image: "/images/generated/household-linen-organisation-detail.png",
    icon: "home",
  },
  {
    title: "Community connection",
    description:
      "Support to build social confidence, explore interests, and take part locally.",
    image: "/images/community-participation.png",
    icon: "community",
  },
];

export const gettingStartedSteps = [
  {
    title: "Talk with us",
    description: "We learn about your goals, routines, preferences, and plan.",
    icon: "chat",
  },
  {
    title: "Plan support",
    description:
      "We shape support around the service group, your needs, and your choices.",
    icon: "person",
  },
  {
    title: "Review together",
    description:
      "Support can adapt as your confidence, routines, or circumstances change.",
    icon: "heart",
  },
];

export const featuredServiceSlugs = [
  "personal-care",
  "travel-transport",
  "household-tasks",
  "community-participation",
];

export const featuredServices = services.filter((service) =>
  featuredServiceSlugs.includes(service.slug),
);

export const trustPoints = [
  {
    title: "People first",
    icon: "person",
  },
  {
    title: "Melbourne based",
    icon: "pin",
  },
  {
    title: "Registered NDIS provider",
    icon: "shield",
  },
  {
    title: "Choice and control",
    icon: "heart",
  },
];

export const carePrinciples = [
  {
    title: "Your choice comes first",
    description:
      "We listen carefully, respect your preferences, and shape support around your goals.",
    icon: "person",
  },
  {
    title: "Warm, reliable support",
    description:
      "We focus on consistent communication, practical help, and respectful relationships.",
    icon: "hands",
  },
  {
    title: "Independence in real life",
    description:
      "Support is designed to build confidence in routines, home life, transport, and community access.",
    icon: "skills",
  },
  {
    title: "Inclusive community connection",
    description:
      "We help participants stay connected to people, places, and activities that matter.",
    icon: "community",
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
      "Proudly supporting participants across Melbourne to stay connected with their community.",
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
    question: "How do I get started with KIT Care?",
    answer:
      "Contact our team and we will talk through your goals, support needs, and the services that may suit you.",
  },
  {
    question: "Can I choose my support worker?",
    answer:
      "We aim to match you with support workers who suit your preferences, routines, and goals where available.",
  },
];
