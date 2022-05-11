import { Field, InputType } from '@nestjs/graphql';
import { FilterType } from '@appvise/domain';
import { NumericFilterInput, StringFilterInput } from '@appvise/graphql';

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

  @Field(() => [ResourcesFilter], {
    nullable: true,
  })
  AND?: ResourcesFilter[];

  @Field(() => [ResourcesFilter], {
    nullable: true,
  })
  OR?: ResourcesFilter[];
}