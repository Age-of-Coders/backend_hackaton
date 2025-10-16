import { Exclude } from "class-transformer";
import { Notify } from "src/modules/notifies/entities/notify.entity";
import { Profile } from "src/modules/profiles/entities/profile.entity";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  username: string;

  @Column({ unique: true })
  email: string;

  @Column('text')
  @Exclude()
  password: string;

  @Column('text', { array: true, default: ['user'] })
  roles: string[];

  @Column('boolean', { default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Profile, profile => profile.user)
  profile: Profile;

  @OneToMany(() => Notify, notify => notify.user)
  notifyMedics: Notify[];
}
