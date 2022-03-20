import {Column, Entity, BaseEntity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false
  })
  name: string;

  @Column({
    type: 'int',
    nullable: false
  })
  price: number;

  @Column({
    type: 'varchar',
    length: 100
  })
  image: string;
}
