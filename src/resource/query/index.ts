import { Resolver } from '@nestjs/graphql';
import { NodeQuery } from '@appvise/graphql';
import { ResourceQuery } from '@appvise/resource';
import { ResourceNode } from '../dto';

@Resolver(() => ResourceNode)
export class ResourceResolver extends NodeQuery(
  ResourceNode,
  ResourceQuery,
  'resource'
) {}
