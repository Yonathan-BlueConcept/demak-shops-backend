import { Test, TestingModule } from '@nestjs/testing';
import { AppOwnerController } from './app-owner.controller';

describe('AppOwnerController', () => {
  let controller: AppOwnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppOwnerController],
    }).compile();

    controller = module.get<AppOwnerController>(AppOwnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
