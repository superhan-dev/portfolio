import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Project {
  @IsNotEmpty({ message: 'project id는 필수값 입니다.' })
  @IsNumber()
  id: number;

  @IsNotEmpty({ message: 'project name은 필수값 입니다.' })
  @IsString()
  projectName: string;

  constructor({ id, projectName }: Project) {
    this.id = id;
    this.projectName = projectName;
  }
}
