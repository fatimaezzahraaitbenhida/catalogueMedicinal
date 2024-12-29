// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { RecommandationsService } from './recommandations.service';

// describe('RecommandationsService', () => {
//   let service: RecommandationsService;
//   let httpMock: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [RecommandationsService],
//     });

//     service = TestBed.inject(RecommandationsService);
//     httpMock = TestBed.inject(HttpTestingController);
//   });

//   afterEach(() => {
//     httpMock.verify();
//   });

//   it('should fetch recommendations', () => {
//     const dummyPlantes = [
//       { id: 1, nom: 'Menthe', description: 'Pour la digestion', proprietes: '', utilisations: '' },
//     ];

//     service.getRecommandations(1).subscribe((plantes) => {
//       expect(plantes.length).toBe(1);
//       expect(plantes).toEqual(dummyPlantes);
//     });

//     const req = httpMock.expectOne('http://localhost:8080/api/recommandations/1/obtenir');
//     expect(req.request.method).toBe('GET');
//     req.flush(dummyPlantes);
//   });
// });
