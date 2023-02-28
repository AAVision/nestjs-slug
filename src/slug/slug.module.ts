import { Global, Module } from '@nestjs/common';
import { SlugService } from './services/slug.service';

@Global()
@Module({
  providers: [SlugService],
  exports: [SlugService],
})
export class SlugModule { }
