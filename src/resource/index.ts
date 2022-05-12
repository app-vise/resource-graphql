import { ResourceResolver } from './query';
import { ResourcesLoader } from './dataloader';

export const ResourceGraphQLServices = [
  // Queries
  ResourceResolver,

  // DataLoaders
  ResourcesLoader,
];

export * from './dataloader';
export * from './dto';
export * from './query';
