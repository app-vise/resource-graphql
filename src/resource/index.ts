import { ResourcesLoader } from './dataloader';
import { ResourceResolver, ResourcesResolver } from './query';

export const ResourceGraphQLServices = [
  // DataLoaders
  ResourcesLoader,

  // Queries
  ResourceResolver,
  ResourcesResolver,
];

export * from './dataloader';
export * from './dto';
