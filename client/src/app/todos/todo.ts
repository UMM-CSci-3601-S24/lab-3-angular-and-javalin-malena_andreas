export interface Todo {
  _id: string;
  owner: string;
  status: boolean;
  body: string;
  category: TodoCategory;
  //sort: SortBy;
}

 export type TodoCategory = 'software design' | 'homework' | 'groceries' | 'video games';
 export type SortBy = '_id' | 'owner' | 'status' | 'category';
