
export interface StageSection {
  id: string;
  title: string;
  boldText?: string;
  paragraph?: string;
  imageUrl: string;
}

export const stageSections: StageSection[] = [
  {
    id: "stage-1",
    title: "Ensures a flawless experience from\npre-embarkation to five-star reviews at",
    boldText: "check-out",
    imageUrl: "https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-1.png"
  }
  // Additional stages can be added here
];
