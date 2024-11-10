export const surveyQuestions = [
  [
    {
      id: 1,
      question: "Child’s Name",
      type: "short",
    },
    { id: 2, question: "Child’s Age", type: "short" },
    { id: 3, question: "Child’s Grade", type: "short" },
  ],
  [
    {
      id: 4,
      question: "Child’s School",
      type: "short",
    },
    { id: 5, question: "Parent/Guardian Name?", type: "short" },
    { id: 6, question: "Contact Number", type: "short" },
  ],
  [
    { id: 7, question: "Address", type: "long" },
    {
      id: 8,
      question: "How did you come to know about Azpire Mind Gym?",
      type: "mcq",
      options: [
        "Book My Show",
        "Word of Mouth",
        "Social Media Platform (Facebook/ LinkedIn/ Insta)",
        "Website",
      ],
    },
    {
      id: 9,
      question:
        "Is your child a special needs child or does your child require any additional support in learning or development (e.g., ADHD, autism spectrum, speech or motor delays)?",
      type: "mcq",
      options: ["No", "Yes", "Prefer not to disclose"],
    },
  ],
  [
    {
      id: 11,
      question:
        "Does your child spend most of their free time on screens (e.g., watching TV, playing video games, using tablets or smartphones)?",
      type: "mcq",
      options: ["Yes, frequently", "Sometimes", "Rarely", "No"],
    },
    {
      id: 10,
      question:
        "What types of activities does your child enjoy the most? (Select all that apply)",
      type: "multi-select",
      options: [
        "Building with blocks or Lego",
        "Outdoor activities (e.g., sports, cycling)",
        "Creative arts (e.g., drawing, painting, crafting)",
        "Reading books or storytelling",
        "Other",
      ],
    },
    {
      id: 12,
      question:
        "Would you be interested in a play-based learning program at Azpire Mind Gym that encourages your child to engage in creative, hands-on activities like building, solving puzzles, and designing projects?",
      type: "mcq",
      options: [
        "Yes, I would love to explore this option.",
        "Maybe, if it aligns with my child’s interests.",
        "No, my child already spends enough time on such activities.",
      ],
    },
  ],
  [
    {
      id: 13,
      question:
        "If yes, does your child prefer creating their designs and ideas when building or do they enjoy following instructions or a manual?",
      type: "mcq",
      options: [
        "Prefers to follow instructions and complete specific tasks",
        "Enjoys creating their unique designs and experimenting",
        "Likes a mix of both (following instructions and adding creative elements)",
      ],
    },
    {
      id: 14,
      question:
        "What skills would you like your child to develop through play-based learning? (Select all that apply)",
      type: "multi-select",
      options: [
        "Problem-Solving",
        "Creativity and Independent Thinking",
        "Social Interaction",
        "Fine Motor Skills",
        "Confidence and Leadership",
        "Time Management and Focus",
        "Development of Academic Skills",
      ],
    },
    {
      id: 15,
      question:
        "How often would you prefer your child to participate in activities at the centre?",
      type: "mcq",
      options: ["Once a week", "2-3 times a week", "Daily", "Other"],
    },
  ],
  [
    {
      id: 16,
      question:
        "What time slots or days are most convenient for your child to attend the LEGO activity sessions?",
      type: "mcq",
      options: ["11 am to 2 pm", "2 pm to 4 pm", "4 pm to 6 pm"],
    },
    {
      id: 17,
      question:
        "What aspects of Azpire Mind Gym did you and your child enjoy the most?",
      type: "long",
    },
    {
      id: 18,
      question:
        "What areas could be improved to enhance the overall experience?",
      type: "long",
    },
  ],
];

export const rewardOptions = [
  {
    id: 1,
    title: "1. Exclusive Offer from Azpire (Mind Gym) 🎉",
    offer:
      "Enjoy 30 minutes of free play for your child on their next 1-hour booking at Azpire (Mind Gym)!",
    description:
      "Complete our feedback survey and enjoy 30 minutes of free play for your child on their next 1-hour booking at Azpire (Mind Gym)! \nWe value your feedback and want to thank you for helping us improve. Fill out the survey, share your thoughts, and let your child enjoy more fun and creativity with LEGO!\nHow to Redeem:\nComplete the survey.\nBook a 1-hour play session for your child.\nShow the survey completion confirmation at the time of booking to enjoy 30 minutes of free play!\nReady to build more memories? 🧩",
  },
  {
    id: 2,
    title: "2. Special Offer from Peps Mattress 🛏✨",
    offer: "Enjoy a 10% discount on your purchase at Peps Mattress",
    description:
      "Enjoy a 10% discount on your purchase at Peps Mattress! Choose any mattress or accessory and save big on your next restful night's sleep.\nHow to Redeem:\nVisit our store or website.\nSelect any mattress or accessory of your choice.\nUse the promo code PEPS10 at checkout to enjoy a 10% discount.\nDon't miss out on this limited-time offer! Upgrade your sleep experience with Peps Mattress today!",
  },
  {
    id: 3,
    title: "3.Special Offer from Jaanavi Opticals 👓✨",
    offer: "Enjoy a 20% discount on all frames and lenses at Jaanavi Opticals.",
    description:
      "Brighten up your look with our exclusive offer! Enjoy a 20% discount on all frames and lenses at Jaanavi Opticals.\nHow to Redeem:\nVisit our store or browse our collection online.\nChoose your favorite frames and lenses.\nUse the promo code JAANAVI20 at checkout to get your 20% discount.\nDon't miss out on this limited-time offer! Elevate your eyewear game with Jaanavi Opticals today.",
  },
];
