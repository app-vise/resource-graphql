import { registerEnumType } from '@nestjs/graphql';

export enum ResourcesSortFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
}

registerEnumType(ResourcesSortFieldEnum, {
  name: 'ResourcesSortField',
  description: 'Sort field',
});
