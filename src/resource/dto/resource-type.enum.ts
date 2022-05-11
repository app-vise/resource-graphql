import { registerEnumType } from '@nestjs/graphql';
import { ResourceType } from '@appvise/resource';

registerEnumType(ResourceType, {
  name: 'ResourceType',
  description: 'Resource type',
});
