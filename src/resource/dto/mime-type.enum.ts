import { registerEnumType } from '@nestjs/graphql';
import { MimeType } from '@appvise/resource';

export { MimeType };

registerEnumType(MimeType, {
  name: 'MimeType',
  description: 'File mime type',
});
