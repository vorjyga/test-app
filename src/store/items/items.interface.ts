export interface Item {
  id: string;
  name: string;
  items: Item[];
  count?: number;
}
