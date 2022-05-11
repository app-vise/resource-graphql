import { ArgsType, Field } from '@nestjs/graphql';
import { Optional } from '@nestjs/common';
import { SortDirection } from '@appvise/domain';
import { SearchRequestArgs } from '@appvise/graphql';
import { ResourcesSortInput } from './resources.sort.input';
import { ResourcesSortFieldEnum } from './resources.sort-field.enum';
import { ResourcesFilter } from './resources.filter';

@ArgsType()
export class ResourcesRequest extends SearchRequestArgs {
  @Field(() => ResourcesFilter, { nullable: true })
  filter?: ResourcesFilter;

  @Optional()
  @Field(() => [ResourcesSortInput], {
    nullable: true,
    defaultValue: [
      {
        field: ResourcesSortFieldEnum.createdAt,
        direction: SortDirection.desc,
      } as ResourcesSortInput,
    ],
  })
  sort?: ResourcesSortInput[];
}
