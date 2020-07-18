import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Listing extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
