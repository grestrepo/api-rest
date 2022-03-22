import {Column, Entity, BaseEntity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({
  name: 'users'
})
export class User extends BaseEntity {

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
    type: 'varchar',
    length: 100,
    nullable: false,
    name: 'last_name'
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    unique: true
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  profession: number;

  @Column({
    type: 'varchar',
    enum: ['ADMIN', 'USER'],
    length: 100,
  })
  role: string;

  @Column({
    type: 'date',
    name: 'created_at'
  })
  createdAt: Date;
}
