import { BaseEntity, Entity, PrimaryColumn, BeforeInsert, Column } from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column('citext', { unique: true })
  email: string;

  @Column('varchar', { length: 50 })
  firstName: string;

  @Column('varchar', { length: 50 })
  lastName: string;

  @BeforeInsert()
  generateId(): void {
    this.id = v4();
  }
}
