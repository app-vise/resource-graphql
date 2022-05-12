import { ResourcesLoader } from './dataloader';
import { ResourceResolver } from './query';

export const ResourceGraphQLServices = [
  // DataLoaders
  ResourcesLoader,

  // Queries
  ResourceResolver,
];

export * from './dataloader';
export * from './dto';
