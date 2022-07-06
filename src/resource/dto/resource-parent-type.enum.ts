import { registerEnumType } from '@nestjs/graphql';

import { ResourceParentType } from '@appvise/resource';

export { ResourceParentType };

registerEnumType(ResourceParentType, {
  name: 'ResourceParentType',
  description: 'Resource parent type',
});
