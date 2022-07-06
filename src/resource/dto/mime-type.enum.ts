import { registerEnumType } from '@nestjs/graphql';
import { MimeType } from '@appvise/resource';

registerEnumType(MimeType, {
  name: 'MimeType',
  description: 'File mime type',
});
