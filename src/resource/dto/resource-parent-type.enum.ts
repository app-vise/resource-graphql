import { registerEnumType } from '@nestjs/graphql';

// Import ResourceParentType from config to allow each implementing application to define their own types
// TODO: Find better way to allow for importing types from project
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ResourceParentType } from '@config/appvise/resource';

export { ResourceParentType };

registerEnumType(ResourceParentType, {
  name: 'ResourceParentType',
  description: 'Resource parent type',
});
