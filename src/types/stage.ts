export interface StageSection {
  id: string;
  title: string;
  boldText?: string;
  paragraph?: string;
  imageUrl: string;
}

export const stageSections: StageSection[] = [
  /*
  "Ensures a flawless experience from
pre-embarkation to five-star reviews"
Check-Out

"Empower your guests to manage what they can, 
and deliver your expertise exactly when it's needed."
Troubleshooting

"Proactively notifies to ensure safety and prevent damages by having
Chief.OS watching your guests back."
Boat Operation

"Empowering your skippers to navigate every guiding point,
ensuring a safe and harm-free return for their guests"
Safety

"Know where your guests are and empower them to choose 
their next course of action, easily at their fingertips"
Briefing


Get your guests ready well ahead embarkation.
Check-In
  */
  {
    id: "stage-1",
    title:
      "Ensures a flawless experience from pre-embarkation to five-star reviews",
    boldText: "Check-Cut",
    imageUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-1.png",
  },
  {
    id: "stage-2",
    title:
      "Empower your guests to manage what they can, and deliver your expertise exactly when it's needed",
    boldText: "Troubleshooting",
    imageUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-1.png",
  },
  {
    id: "stage-3",
    title:
      "Proactively notifies to ensure safety and prevent damages by having ChiefOS watching your guests back",
    boldText: "Boat Operation",
    imageUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-1.png",
  },
  {
    id: "stage-4",
    title:
      "Know where your guests are and empower them to choose their next course of action, easily at their fingertips",
    boldText: "Briefing",
    imageUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-1.png",
  },
  {
    id: "stage-5",
    title: "Get your guests ready well ahead embarkation",
    boldText: "Check-In",
    imageUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-1.png",
  },
  // {
  //   id: "stage-1",
  //   title:
  //     "Ensures a flawless experience from pre-embarkation to five-star reviews at",
  //   boldText: "check-out",
  //   imageUrl:
  //     "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-1.png",
  // },
  // {
  //   id: "stage-2",
  //   title: "Streamline your operations with seamless integration and",
  //   boldText: "powerful features",
  //   imageUrl:
  //     "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-1.png",
  // },
];
