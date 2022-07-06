import { registerEnumType } from '@nestjs/graphql';
import { ResourceParentType } from '@appvise/resource';

registerEnumType(ResourceParentType, {
  name: 'ResourceParentType',
  description: 'Resource parent type',
});
