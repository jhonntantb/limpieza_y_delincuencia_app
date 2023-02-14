import { Test, TestingModule } from '@nestjs/testing';
import { Complaint } from './complaint';

describe('Complaint', () => {
  let provider: Complaint;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Complaint],
    }).compile();

    provider = module.get<Complaint>(Complaint);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
