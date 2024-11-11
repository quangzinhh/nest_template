import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  mId: number;  

  @Column({ name: 'm_name' })
  mName: string;  

  @Column({ name: 'm_email', unique: true })
  mEmail: string;  

  @Column({ name: 'm_password' })
  mPassword: string;  

  @Column({ name: 'm_department_id' })
  mDepartmentId: number;  

  @Column({ name: 'm_created', type: 'varchar', length: 19 })
  mCreated: string;  

  @Column({ name: 'm_modified', type: 'varchar', length: 19 })
  mModified: string;
}
