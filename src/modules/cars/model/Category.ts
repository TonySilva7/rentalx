import { v4 as uuidV4 } from 'uuid';

class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    this.id = !this.id ? uuidV4() : this.id;
    this.name = '';
    this.description = '';
    this.created_at = new Date();
  }
}

export { Category };
