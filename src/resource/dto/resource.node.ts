import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { Resource, MimeType, ResourceType } from '@appvise/resource';
import { BaseNode } from '@appvise/graphql';
import { ResourceParentType } from '.';

@ObjectType('Resource')
export class ResourceNode extends BaseNode {
  @Field()
  name: string;

  @Field(() => ResourceType)
  type: ResourceType;

  @Field(() => MimeType)
  mimeType: MimeType;

  @Field()
  size: number;

  @Field()
  public: boolean;

  @Field()
  url: string;

  @Field({ nullable: true })
  parentId?: string;

  @Field(() => ResourceType)
  parentType: ResourceParentType;

  @Field(() => GraphQLISODateTime, {
    description: 'Timestamp as to when this entity was created in offline mode',
  })
  clientCreatedAt: Date;

  @Field(() => GraphQLISODateTime, {
    description:
      'Timestamp as to when this entity was last updated in offline mode',
  })
  clientUpdatedAt: Date;

  constructor(resource: Resource) {
    super(resource);

    this.name = resource.file.name;
    this.type = resource.type;
    this.mimeType = resource.file.mimeType;
    this.size = resource.file.size;
    this.public = resource.file.public;
    this.url = resource.file.url ?? `/resources/${resource.id.value}`;
    this.parentId = resource.parentId ? resource.parentId.value : undefined;
    this.parentType = resource.parentType;
    this.clientCreatedAt = resource.clientCreatedAt.value;
    this.clientUpdatedAt = resource.clientUpdatedAt.value;
  }
}
