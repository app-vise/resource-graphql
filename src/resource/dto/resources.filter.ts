import { Field, InputType } from '@nestjs/graphql';
import { FilterType } from '@appvise/domain';
import {
  DateTimeFilterInput,
  NumericFilterInput,
  StringFilterInput,
} from '@appvise/graphql';

@InputType()
export class ResourcesFilter implements FilterType {
  @Field(() => StringFilterInput, { nullable: true })
  search?: StringFilterInput;

  @Field(() => StringFilterInput, { nullable: true })
  id?: StringFilterInput;

  @Field(() => StringFilterInput, { nullable: true })
  filename?: StringFilterInput;

  @Field(() => StringFilterInput, { nullable: true })
  type?: StringFilterInput;

  @Field(() => StringFilterInput, { nullable: true })
  mimeType?: StringFilterInput;

  @Field(() => NumericFilterInput, { nullable: true })
  size?: NumericFilterInput;

  @Field(() => StringFilterInput, { nullable: true })
  creatorId?: StringFilterInput;

  @Field(() => DateTimeFilterInput, { nullable: true })
  createdAt?: DateTimeFilterInput;

  @Field(() => DateTimeFilterInput, { nullable: true })
  updatedAt?: DateTimeFilterInput;

  @Field(() => DateTimeFilterInput, { nullable: true })
  clientCreatedAt?: DateTimeFilterInput;

  @Field(() => DateTimeFilterInput, { nullable: true })
  clientUpdatedAt?: DateTimeFilterInput;

  @Field(() => [ResourcesFilter], {
    nullable: true,
  })
  AND?: ResourcesFilter[];

  @Field(() => [ResourcesFilter], {
    nullable: true,
  })
  OR?: ResourcesFilter[];
}
