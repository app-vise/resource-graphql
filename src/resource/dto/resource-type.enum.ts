import { registerEnumType } from '@nestjs/graphql';
import { ResourceType } from '@appvise/resource';

export { ResourceType };

registerEnumType(ResourceType, {
  name: 'ResourceType',
  description: 'Resource type',
});
