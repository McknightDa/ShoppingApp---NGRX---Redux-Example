import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { ProductsService } from './products.service';
import { Product } from '../classes/product';

describe('ProductsService', () => {
  // let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let productsService: ProductsService;

  const mockShirtsData = [{
    "id" : 1,
    "image_url" : "someURL1.jpg",
    "name" : "Jersey",
    "price" : 80.00,
    "firebaseId": "dsfdggfhf"
  },{
    "id" : 2,
    "image_url" : "someURL2.jpg",
    "name" : "Hoodie",
    "price" : 50.00,
    "firebaseId": "cxvvbnft"
  }];

  const mockCartData = [{
    "id" : 1,
    "image_url" : "someURL1.jpg",
    "name" : "Jersey",
    "price" : 80.00,
    "quantity": 3
  },{
    "id" : 2,
    "image_url" : "someURL2.jpg",
    "name" : "Hoodie",
    "price" : 50.00,
    "quantity": 1
  }];

  /* 
  const shirtsUrl = 'https://shopping-app-132c5-default-rtdb.firebaseio.com/Shirts.json'
  const favoritesUrl = 'https://shopping-app-132c5-default-rtdb.firebaseio.com/Favorites.json'
  const cartUrl = 'https://shopping-app-132c5-default-rtdb.firebaseio.com/Cart.json'
  const deleteUrl = 'https://shopping-app-132c5-default-rtdb.firebaseio.com/Favorites/'
  const jsonEXT = '.json' 
  */

  beforeEach(() => {
    // // TODO: spy on other methods too
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    // productsService = new ProductsService(httpClientSpy);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    productsService = TestBed.inject(ProductsService);
  });

  afterEach(() => {
    httpMock.verify();
  })

  describe('#getShirts', () => {
    let expectedShirts: Product[];

    beforeEach(() => {
    productsService = TestBed.inject(ProductsService);
    expectedShirts = mockShirtsData;
    })

    it('should GET and return expected data', ()=>{
      productsService.getShirts().subscribe({
        next: shirts => expect(shirts)
          .withContext('should return expected shirts')
          .toEqual(expectedShirts),
        error: fail
      });

      const req = httpMock.expectOne(productsService.shirtsUrl);
      expect(req.request.method).toEqual('GET'); // GET from expected url
      req.flush(mockShirtsData); // Respond with mock data
    })
  })

  xit('#getShirts should GET and return stub data', (done: DoneFn) => {
    productsService.getShirts().subscribe(data => {
      expect(data).toEqual(mockShirtsData);
      done();
    });
    const req = httpMock.expectOne(productsService.shirtsUrl);
    expect(req.request.method).toEqual('GET'); // Moved here from below
    req.flush(mockShirtsData);
  });

  /* it('#getShirts should use GET to retreive data', () => {
    productsService.getShirts().subscribe();
    const req = httpMock.expectOne(shirtsUrl);  
    expect(req.request.method).toEqual('GET');
  }); */

  it('#getFavorites should GET and return stub favorites', (done: DoneFn)=>{
    productsService.getFavorites().subscribe(data => {
      expect(data).toEqual(mockShirtsData);
      done();
    })
    const req = httpMock.expectOne(productsService.favoritesUrl);
    expect(req.request.method).toEqual('GET'); // Moved here from below
    req.flush(mockShirtsData);
  })
  it('#getCart should GET and return stub cart items', (done: DoneFn)=>{
    productsService.getCart().subscribe(data => {
      expect(data).toEqual(mockCartData);
      done();
    })
    const req = httpMock.expectOne(productsService.cartUrl);
    expect(req.request.method).toEqual('GET'); // Moved here from below
    req.flush(mockCartData);
  })
  xit('#addFavorites should POST and return posted data', (done: DoneFn)=>{

    // productsService.addFavorites()
  })
  xit('#deleteFav should DELETE and return posted data', (done: DoneFn)=>{})
  /*
  getShirts(): Observable<any>{
    return this.http.get<Product>(this.shirtsUrl)
  }
  getFavorites(): Observable<any>{
    return this.http.get<Product>(this.favoritesUrl)
  }
  addFavorites(newItem: any){
    return this.http.post<any>(this.favoritesUrl, newItem)
  }  
  deleteFav(id:any){
    const url = `${this.deleteUrl}${id}${this.jsonEXT}`
    return this.http.delete(url)
  }
  getCart(): Observable<Cart>{
    return this.http.get<any>(this.cartUrl)
  }
  */

});
