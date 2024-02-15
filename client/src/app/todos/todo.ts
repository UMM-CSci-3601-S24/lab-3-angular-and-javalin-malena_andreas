export interface Todo {
  _id: string;
  owner: string;
  status: boolean;
  body: string;
  category: TodoCategory;
  sortBy: SortBy
}

 export type TodoCategory = 'software design' | 'homework' | 'groceries' | 'video games';
 export type SortBy = 'owner' | 'category' | 'status';
/*
 "_id": "58895985a22c04e761776d54",
  "owner": "Blanche",
  "status": false,
  "body": "In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.",
  "category": "software design"
*/
