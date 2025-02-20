import { AbstractModel } from '@job-processor/nestjs';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User extends AbstractModel {
  @Field()
  email: string;
}
