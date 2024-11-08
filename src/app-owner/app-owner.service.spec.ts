import { Test, TestingModule } from '@nestjs/testing';
import { AppOwnerService } from './app-owner.service';

describe('AppOwnerService', () => {
  let service: AppOwnerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppOwnerService],
    }).compile();

    service = module.get<AppOwnerService>(AppOwnerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
