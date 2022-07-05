import { registerEnumType } from '@nestjs/graphql';

// Import ResourceParentType from config to allow each implementing application to define their own types
import { ResourceParentType } from '@config/appvise/resource';

export { ResourceParentType };

registerEnumType(ResourceParentType, {
  name: 'ResourceParentType',
  description: 'Resource parent type',
});
