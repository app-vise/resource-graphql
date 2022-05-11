import { Field, ObjectType } from '@nestjs/graphql';
import { Resource, MimeType, ResourceType } from '@appvise/resource';
import { BaseNode } from '@appvise/graphql';

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

  constructor(resource: Resource) {
    super(resource);

    this.name = resource.file.name;
    this.type = resource.type;
    this.mimeType = resource.file.mimeType;
    this.size = resource.file.size;
    this.public = resource.file.public;
    this.url = resource.file.url ?? `/resources/${resource.id.value}`;
  }
}