export interface Section {
  id:number;
  name: string;
  description: string;
  position: number;
  user_id:number;
  depth:number;
  children_count:number;
  created_at:Date;
  updated_at:Date;
}
