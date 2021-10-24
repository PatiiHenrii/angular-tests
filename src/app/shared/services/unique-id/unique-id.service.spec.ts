import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;
  beforeEach(() => {
    // TestBed.configureTestingModule({});
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTruthy();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate dublicate ids`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getnumberOfGeneratedIds.name} should return the number of generated ids when caled`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    const numberOfGeneratedIds = service.getnumberOfGeneratedIds();
    expect(numberOfGeneratedIds).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '0', '1'];
    emptyValues.forEach(value => {
      expect(() => service.generateUniqueIdWithPrefix(value))
      .withContext(`Empty value: ${value}`)
      .toThrow();
    })
  });
});

// describe('UniqueIdService', () => {
//   let service: UniqueIdService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(UniqueIdService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {
//     const service = new UniqueIdService();
//     const id = service.generateUniqueIdWithPrefix('app');
//     expect(id).toContain('app-');
//   });
// });
