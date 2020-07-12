import { BaseEntity, PrimaryColumn, BeforeInsert, Entity } from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export class Listing extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @BeforeInsert()
  generateId(): void {
    this.id = v4();
  }
}
