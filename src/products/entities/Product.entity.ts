import {Column, Entity, BaseEntity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({
  name: 'products'
})
export class Product extends BaseEntity {

  @PrimaryGeneratedColumn({
    type: 'int'
  })
  id: number;

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

  @Column({
    type: 'date',
    name: 'created_at'
  })
  createdAt: Date;
}
