import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryBus } from '@nestjs/cqrs';
import { SearchResponse, SelectionSet } from '@appvise/domain';
import {
  SelectionSet as SelectionSetDecorator,
  ConnectionFactory,
} from '@appvise/graphql';

import { Resource, ResourcesQuery } from '@appvise/resource';
import { ResourcesRequest } from '../dto/resources.request';
import { ResourcesConnection } from '../dto/resources.connection';
import { ResourceNode } from '../dto/resource.node';

@Resolver(() => ResourceNode)
export class ResourcesResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query(() => ResourcesConnection, { name: 'resources' })
  async execute(
    @Args() request: ResourcesRequest,
    @SelectionSetDecorator() selectionSet: SelectionSet
  ): Promise<ResourcesConnection> {
    const searchResponse = await this.queryBus.execute<
      ResourcesQuery,
      SearchResponse<Resource>
    >(new ResourcesQuery(request, selectionSet));

    return ConnectionFactory.fromSearchResponse(
      ResourcesConnection,
      ResourceNode,
      searchResponse,
      selectionSet
    );
  }
}
