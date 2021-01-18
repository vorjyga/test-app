export interface ActionItem {
  id: string;
  name: string;
  time: Date;
  type: TransferType;
}

export type TransferType = "adding" | "removing";
