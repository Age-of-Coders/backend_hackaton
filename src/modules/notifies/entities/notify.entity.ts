import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('notifies_medics')
export class Notify {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {nullable: true})
  description: string;

  @Column('text')
  certificateImageUrl: string;

  @Column('boolean', { default: false })
  isVerified: boolean;

  @ManyToOne(() => User, user => user.notifyMedics, { onDelete: 'CASCADE' })
  user: User;

}
