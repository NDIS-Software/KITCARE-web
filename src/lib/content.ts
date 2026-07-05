export const company = {
  name: "KIT Care",
  registrationLabel: "Registered NDIS Provider",
  phone: "0428 822 662",
  email: "Kityee3_12au@yahoo.com",
  abn: "52 416 080 961",
  headOffice: "1 Queen Street Black Burn VIC 3130",
  serviceArea: "Melbourne, Victoria",
  addressLine: "Supporting participants across Melbourne communities",
  responseNote:
    "We aim to respond to general enquiries during business hours and will let you know if we need more information before support can be discussed.",
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
      "Respectful assistance with everyday routines such as personal presentation, meals, prompts, mobility, and comfort at home. Support is shaped around privacy, preferences, communication needs, and the participant's own pace so daily life can feel steadier and more manageable.",
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
      "Practical support to get to appointments, shopping, errands, social activities, and community places with more confidence. We help plan the journey, prepare for timing and access needs, and support familiar travel routines where this aligns with participant goals.",
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
      "Support with daily responsibilities in shared living or home-based routines, including planning, meals, household rhythms, and practical prompts. The focus is on clearer expectations, participant choice, and steady routines that make everyday living feel more organised.",
    image: "/images/generated/shared-living-wheelchair-kitchen-routine.png",
    ctaImage: "/images/generated/shared-living-meal-walker-planning.png",
    icon: "home",
    detail:
      "Daily Tasks and Shared Living support is focused on practical routines, shared responsibilities, and confidence at home. KIT Care works with the participant and their support network to understand household rhythms, preferences, and the kind of assistance that makes daily life more manageable.",
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
        image: "/images/generated/shared-living-wheelchair-kitchen-routine.png",
      },
      {
        title: "Meal planning",
        description: "Prompts and support around everyday kitchen routines.",
        image: "/images/generated/shared-living-meal-walker-planning.png",
      },
      {
        title: "Steady home rhythm",
        description: "Consistent support for predictable daily tasks.",
        image: "/images/generated/shared-living-collaborative-laundry-support.png",
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
      "Regular support for participants who need assistance to live more independently at home. Services can include daily routines, shared household responsibilities, skill building, and practical planning while keeping dignity, safety, and participant choice at the centre.",
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
      "Goal-based community support for participants who want to explore interests, build confidence, and take part in meaningful local opportunities. Activities are planned around comfort, preferences, practical skills, and the participant's own idea of connection.",
    image: "/images/generated/community-art-arm-sling-participation.png",
    ctaImage: "/images/generated/community-library-cane-computer.png",
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
        image: "/images/generated/community-art-arm-sling-participation.png",
      },
      {
        title: "Local opportunities",
        description: "Find community options that suit your goals and comfort.",
        image: "/images/generated/community-library-cane-computer.png",
      },
      {
        title: "Skill practice",
        description: "Build confidence in real community settings.",
        image: "/images/generated/community-wheelchair-market-choice.png",
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
      "Everyday skill-building support for routines, planning, cooking, budgeting, communication, and decision-making. We break goals into practical steps that can be practised in real settings, helping participants build confidence without turning support into a classroom exercise.",
    image: "/images/generated/life-skills-meal-budget-detail.png",
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
        image: "/images/generated/life-skills-meal-budget-detail.png",
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
      "Practical help with light household tasks such as laundry, kitchen routines, linen, cleaning prompts, and organising living spaces. Support respects how the participant wants their home to feel while helping make routines clearer, safer, and easier to maintain.",
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
      "Support to attend activities, pursue interests, meet people, and stay connected with places that matter. Community participation can include planning, confidence building, travel routines, social support, and practical help to make local activities feel more achievable.",
    image: "/images/generated/community-wheelchair-market-choice.png",
    ctaImage: "/images/generated/community-library-cane-computer.png",
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
        image: "/images/generated/community-wheelchair-market-choice.png",
      },
      {
        title: "Meeting people",
        description: "Build confidence around social and community settings.",
        image: "/images/generated/community-art-arm-sling-participation.png",
      },
      {
        title: "Finding local options",
        description: "Use familiar local places to practise confidence and choice.",
        image: "/images/generated/community-library-cane-computer.png",
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
      "Structured group or centre-based activities that support social connection, participation, creativity, and confidence. Programs are matched to interests, comfort levels, and support needs so participants can join shared activities in a welcoming and respectful way.",
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
      "Support can begin with practical daily routines: getting ready, preparing meals, keeping track of the week, and feeling more settled at home. The goal is not to take over, but to make each step clearer and easier to repeat.",
    image: "/images/generated/getting-started-support-conversation.png",
    icon: "care",
  },
  {
    title: "Getting out",
    description:
      "For appointments, errands, activities, and community access, support can include planning the trip, preparing before leaving, navigating the destination, and building familiar travel routines over time.",
    image: "/images/generated/melbourne-library-community-support.png",
    icon: "transport",
  },
  {
    title: "Home confidence",
    description:
      "Household and shared living support can help make home routines more predictable, from laundry and kitchen tasks to planning meals, organising spaces, and keeping daily responsibilities manageable.",
    image: "/images/generated/household-linen-organisation-detail.png",
    icon: "home",
  },
  {
    title: "Community connection",
    description:
      "Community support is shaped around the participant's interests, whether that means visiting a library, joining a group activity, attending a market, or practising social confidence in familiar local places.",
    image: "/images/generated/community-art-arm-sling-participation.png",
    icon: "community",
  },
];

export const gettingStartedSteps = [
  {
    title: "Talk with us",
    description:
      "We start with a clear conversation about goals, daily routines, preferences, communication needs, service area, and the type of support being considered. Family members, advocates, or support coordinators can be included when the participant wants them involved.",
    icon: "chat",
  },
  {
    title: "Plan support",
    description:
      "Support is shaped around the relevant NDIS service group, practical routines, safety considerations, worker matching, timing, and what the participant wants to achieve. The plan should be easy to understand before services begin.",
    icon: "person",
  },
  {
    title: "Review together",
    description:
      "Once support starts, communication stays open. Routines, goals, worker fit, and practical arrangements can be reviewed as circumstances change so support remains useful, respectful, and aligned with participant choice.",
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

export const audienceSupport = [
  {
    title: "For participants",
    description:
      "Support should feel practical, respectful, and connected to everyday life. We focus on goals, routines, preferences, privacy, communication needs, and the participant's right to make informed choices about how support is delivered.",
    icon: "person",
  },
  {
    title: "For families",
    description:
      "Families often want clear communication and confidence that support is planned thoughtfully. With participant consent, we can involve family members in conversations about routines, preferences, changes, feedback, and what is working well.",
    icon: "heart",
  },
  {
    title: "For coordinators",
    description:
      "Support coordinators need a provider who can explain service fit clearly. We keep conversations focused on the participant's goals, relevant support groups, practical availability, and the next step required before support can begin.",
    icon: "chat",
  },
];

export const serviceAreaHighlights = [
  "Inner Melbourne",
  "Northern suburbs",
  "Western suburbs",
  "South Eastern suburbs",
  "Local community settings",
  "Appointments and activities",
];

export const feedbackCards = [
  {
    initials: "EW",
    label: "Emily Wilson",
    quote:
      "The support felt calm and organised from the first conversation. We appreciated that routines, communication preferences, and small details at home were discussed before services started, rather than being treated as an afterthought.",
  },
  {
    initials: "JM",
    label: "James Miller",
    quote:
      "The team explained service fit in plain language and kept the discussion focused on the participant's goals. It made it easier to understand what support could look like without needing to know every registration group first.",
  },
  {
    initials: "SB",
    label: "Sarah Bennett",
    quote:
      "I felt listened to when we talked about my weekly routine. The support was not about rushing through tasks; it was about helping me feel more confident doing the things that matter in my own way.",
  },
];

export const aboutTrustAreas = [
  {
    title: "Person-centred support",
    description:
      "We start with the person, not a checklist. Support is shaped around goals, strengths, daily routines, communication needs, and preferences so participants can stay involved in decisions that affect their own life.",
    icon: "person",
  },
  {
    title: "Choice and control",
    description:
      "Participants should be supported to understand options, ask questions, include trusted people where they choose, and make informed decisions. Our role is to assist decision-making, not remove it.",
    icon: "heart",
  },
  {
    title: "Privacy and dignity",
    description:
      "Support often happens in personal spaces and everyday routines. We treat information carefully, respect privacy, and approach home, personal care, and communication with dignity and discretion.",
    icon: "shield",
  },
  {
    title: "Safe, respectful support",
    description:
      "Support is planned with practical safety in mind while still respecting independence and dignity of risk. We consider the setting, task, preferences, and any changes that may affect support.",
    icon: "hands",
  },
  {
    title: "Feedback is welcome",
    description:
      "Participants, families, advocates, and coordinators should feel able to raise concerns, ask for changes, or share what is working. Feedback helps improve communication, matching, and service quality.",
    icon: "chat",
  },
  {
    title: "Continuity of support",
    description:
      "Reliable support depends on planning, communication, and practical backup arrangements. If routines or worker availability change, the priority is to communicate clearly and reduce avoidable disruption.",
    icon: "award",
  },
];

export const founderProfile = {
  name: "Chloe Lo",
  role: "Director & Support Leader",
  summary:
    "Chloe leads KIT Care with more than five years of practical support experience across disability support, aged care, personal care, community access, and daily living assistance. Her approach is calm, reliable, and person-centred, with a focus on consistent support relationships that respect each participant's routines, goals, communication needs, and dignity.",
  highlights: [
    "Disability and aged care support",
    "Personal care and daily living routines",
    "Community access, appointments, and companionship",
  ],
  credentials: [
    "5+ years practical support experience",
    "Certificate IV in Disability",
    "Certificate IV in Ageing Support",
    "Current First Aid and CPR",
  ],
  verificationNote:
    "Verified worker checks and relevant safety training are maintained before support is arranged.",
};

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
    question: "How do I get started with KIT Care?",
    answer:
      "Contact us by phone or email and tell us what kind of support you are looking for. We will talk through goals, routines, service area, timing, and whether the relevant support group appears to fit before any service arrangement is discussed.",
  },
  {
    question: "Do I need to know the exact NDIS support category?",
    answer:
      "No. Many people begin with a practical need, such as help at home, transport, community access, or building life skills. We can explain which service group may be relevant in plain language and keep the conversation focused on real support.",
  },
  {
    question: "Can my family, advocate or support coordinator contact you?",
    answer:
      "Yes, when the participant wants them involved. We can speak with family members, advocates, nominees, or support coordinators to understand goals, communication preferences, service fit, and next steps while keeping participant choice and consent at the centre.",
  },
  {
    question: "Can I choose or request a preferred support worker?",
    answer:
      "You can share preferences such as communication style, routine, timing, interests, gender preference, or cultural considerations. We aim to match support thoughtfully where availability allows, and we can review arrangements if something is not working well.",
  },
  {
    question: "What areas do you support?",
    answer:
      "KIT Care supports participants across Melbourne communities, including home, appointments, local activities, errands, and community settings. Because availability can vary by suburb, support type, and timing, it is best to contact us with your location and preferred schedule.",
  },
  {
    question: "How do you protect privacy and dignity?",
    answer:
      "We treat personal information carefully and approach support with respect for privacy, home routines, communication needs, and personal preferences. This is especially important where support involves personal care, home tasks, family conversations, or sensitive daily living details.",
  },
  {
    question: "What if I want to give feedback or raise a concern?",
    answer:
      "Feedback is welcome from participants, families, advocates, and coordinators. You can raise concerns, request changes, or share positive feedback so support can be reviewed and improved. Serious or urgent safety concerns should always be escalated through appropriate emergency channels.",
  },
];
