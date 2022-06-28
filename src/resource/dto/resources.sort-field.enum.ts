import { registerEnumType } from '@nestjs/graphql';

export enum ResourcesSortFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  clientCreatedAt = 'clientCreatedAt',
  clientUpdatedAt = 'clientUpdatedAt',
}

registerEnumType(ResourcesSortFieldEnum, {
  name: 'ResourcesSortField',
  description: 'Sort field',
});
