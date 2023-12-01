import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let productService: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });

    productService = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  it('should create a product', () => {
    const productData = {
      name: 'Test Product',
      price: 50,
      discount: 10,
      image: 'test-image.jpg',
      category_id: 'category123',
      countInStock: 20,
      numReviews: 0,
      description: 'Test product description',
      tags: 'tag1, tag2'
    };

    productService.createProduct(productData).subscribe((response: any) => {
      expect(response).toBeTruthy();
      // Add more assertions based on your API response structure
    });

    const req = httpTestingController.expectOne('http://localhost:4400/product');
    expect(req.request.method).toBe('POST');
    req.flush({/* Mock response data */});
  });

  it('should get products', () => {
    productService.getAllProducts().subscribe((response: any) => {
      expect(response).toBeTruthy();
      // Add more assertions based on your API response structure
    });

    const req = httpTestingController.expectOne('http://localhost:4400/products');
    expect(req.request.method).toBe('GET');
    req.flush({/* Mock response data */});
  });

  it('should get product by ID', () => {
    const productId = 'product123';

    productService.getProductById(productId).subscribe((response: any) => {
      expect(response).toBeTruthy();
      // Add more assertions based on your API response structure
    });

    const req = httpTestingController.expectOne(`http://localhost:4400/products/${productId}`);
    expect(req.request.method).toBe('GET');
    req.flush({/* Mock response data */});
  });

  it('should delete a product', () => {
    const productId = 'product123';

    productService.deleteProduct(productId).subscribe((response: any) => {
      expect(response).toBeTruthy();
      
    });

    const req = httpTestingController.expectOne(`http://localhost:4400/products/${productId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({/* Mock response data */});
  });

  it('should update a product', () => {
    const productId = 'product123';
    const updatedProductData = {/* Updated data */};

    productService.updateProduct(productId, updatedProductData).subscribe((response: any) => {
      expect(response).toBeTruthy();
      // Add more assertions based on your API response structure
    });

    const req = httpTestingController.expectOne(`http://localhost:4400/products/${productId}`);
    expect(req.request.method).toBe('PUT');
    req.flush({/* Mock response data */});
  });

  it('should create a product review', () => {
    const productId = 'product123';
    const reviewData = {/* Review data */};

    productService.createProductReview(productId, reviewData).subscribe((response: any) => {
      expect(response).toBeTruthy();
      // Add more assertions based on your API response structure
    });

    const req = httpTestingController.expectOne(`http://localhost:4400/products/${productId}/reviews`);
    expect(req.request.method).toBe('POST');
    req.flush({/* Mock response data */});
  });
});
