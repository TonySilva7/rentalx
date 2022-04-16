import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public username: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @Column()
  public driver_license: string;

  @Column()
  public isAdmin: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  constructor() {
    this.id = !this.id ? uuidV4() : this.id;
  }
}

export { User };
