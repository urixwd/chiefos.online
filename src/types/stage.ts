export interface StageSection {
  id: string;
  title: string;
  boldText?: string;
  paragraph?: string;
  imageUrl: string;
  imageBigUrl?: string;
}

export const stageSections: StageSection[] = [
  {
    id: "stage-1",
    title:
      "Ensures a flawless experience from pre-embarkation to five-star reviews",
    boldText: "Check-Out",
    imageUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-1.png",
    imageBigUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-1-big.png",
  },
  {
    id: "stage-2",
    title:
      "Empower your guests to manage what they can, and deliver your expertise exactly when it's needed",
    boldText: "Troubleshooting",
    imageUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-2.png",
    imageBigUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-2-big.png",
  },
  {
    id: "stage-3",
    title:
      "Proactively notifies to ensure safety and prevent damages by having ChiefOS watching your guests back",
    boldText: "Boat Operation",
    imageUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-3.png",
    imageBigUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-3-big.png",
  },
  {
    id: "stage-4",
    title:
      "Know where your guests are and empower them to choose their next course of action, easily at their fingertips",
    boldText: "Briefing",
    imageUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-4.png",
    imageBigUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-4-big.png",
  },
  {
    id: "stage-5",
    title: "Get your guests ready well ahead embarkation",
    boldText: "Check-In",
    imageUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-5.png",
    imageBigUrl:
      "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-5-big.png",
  },
];
