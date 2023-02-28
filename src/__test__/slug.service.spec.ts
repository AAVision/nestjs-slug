import { Test, TestingModule } from '@nestjs/testing';
import { SlugService } from '../slug/services/slug.service';

describe('SlugService', () => {
  let service: SlugService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlugService],
    }).compile();

    service = module.get<SlugService>(SlugService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should be return message when call the getHello function', () => {
    expect(service.isSlug('test!')).toBe('test!');
  });
});
