import { ResourceResolver } from './queries';
import { ResourcesLoader } from './dataloader/resource.loader';

export default [
  // Queries
  ResourceResolver,

  // DataLoaders
  ResourcesLoader,
];

// Must be exported for the enum to be registered in GraphQL schema
export * from './dto/mime-type.enum';
export * from './dto/resource-type.enum';
