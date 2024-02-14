export interface Todo {
  _id: string;
  owner: string;
  status: TodoStatus;
  body: string;
  //category: string;
  category: TodoCategory;
}

 export type TodoCategory = 'software design' | 'homework' | 'groceries' | 'video games';
 export type TodoStatus = true | false;
/*
 "_id": "58895985a22c04e761776d54",
  "owner": "Blanche",
  "status": false,
  "body": "In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.",
  "category": "software design"
*/
