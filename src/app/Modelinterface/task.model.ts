export interface Task {
    id: number;
    name: string;
    description: string;
    status: 'pending' | 'in progress' | 'completed';
    priority: 'High' | 'Medium' | 'Low';
    editing ?: boolean;
  }
  