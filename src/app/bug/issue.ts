export interface Issue {
  title: string;
  description: string;
  priority: 'low' | 'high';
  status: 'open' | 'closed';
  created: Date;
  updated: Date;
  completed: Date;
}
