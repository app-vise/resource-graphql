import { Injectable, Scope } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { SearchResponse } from '@appvise/domain';
import { Resource, ResourcesQuery } from '@appvise/resource';
import { ResourcesRequest } from '../dto/resources.request';
import { ResourceNode } from '../dto/resource.node';
import DataLoader from 'dataloader';

@Injectable({ scope: Scope.REQUEST })
export class ResourcesLoader {
  constructor(private readonly queryBus: QueryBus) {}

  public readonly batch = new DataLoader(
    async (resourceIds: readonly string[]) => {
      const request = new ResourcesRequest();
      request.filter = {
        OR: resourceIds.map((resourceId) => {
          return { id: { equals: resourceId } };
        }),
      };
      const selectionSet = undefined;

      const searchResponse = await this.queryBus.execute<
        ResourcesQuery,
        SearchResponse<Resource>
      >(new ResourcesQuery(request, selectionSet));

      const resourcesMap = new Map(
        searchResponse.results.map((result) => [
          result.item.id.value,
          new ResourceNode(result.item),
        ])
      );

      return resourceIds.map((resourceId) => resourcesMap.get(resourceId));
    }
  );
}
