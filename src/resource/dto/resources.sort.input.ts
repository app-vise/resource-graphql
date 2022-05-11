import { Field, InputType } from '@nestjs/graphql';
import { SortFieldInput } from '@appvise/graphql';
import { ResourcesSortFieldEnum } from './resources.sort-field.enum';

@InputType()
export class ResourcesSortInput extends SortFieldInput {
  @Field(() => ResourcesSortFieldEnum)
  field!: ResourcesSortFieldEnum;
}
