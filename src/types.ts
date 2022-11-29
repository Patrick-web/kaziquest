export interface TodoInterface {
  id: number;
  text: string;
  isComplete: boolean;
}

export type FilterOption = "All" | "Active" | "Completed";
