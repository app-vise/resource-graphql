import { ObjectType } from '@nestjs/graphql';
import { Connection } from '@appvise/graphql';
import { ResourceNode } from './resource.node';

@ObjectType()
export class ResourcesConnection extends Connection(ResourceNode) {}
