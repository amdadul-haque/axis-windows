export const inquirySteps = [
  {
    id: 1,
    title: "Are you looking to replace existing windows or install new ones?",
    options: ["Replace existing windows", "Install new windows"],
  },
  {
    id: 2,
    title: "What type of windows are you interested in?",
    options: ["Single-Hung", "Double-Hung", "Casement", "Sliding", "Awning", "Bay/Bow", "Picture", "Shaped"],
  },
  {
    id: 3,
    title: "How many windows do you need?",
    options: ["1-5", "6-10", "11-20", "More than 20", "Not sure"],
  },
  {
    id: 4,
    title: "Do you have a specific design or style in mind?",
    options: [
      "Yes, I have detailed design plans",
      "No, but I have a clear vision of what I want",
      "No, I need guidance from a professional",
    ],
  },
  {
    id: 5,
    title: "Do you own or rent your home?",
    options: ["Own", "Rent"],
  },
  {
    id: 6,
    title: "Where are you in the planning process?",
    options: ["Ready to install", "Just getting a price"],
  },
  {
    id: 7,
    title: "What is your ZIP Code?",
    inputType: "text",
    inputName: "zipCode",
  },
  {
    id: 8,
    title: "Who should we prepare this free estimate for?",
    inputs: [
      { inputType: "text", inputName: "fullName", placeholder: "Full Name" },
      { inputType: "email", inputName: "email", placeholder: "Email Address" },
      { inputType: "tel", inputName: "phoneNumber", placeholder: "Phone Number" },
    ],
  },
];
