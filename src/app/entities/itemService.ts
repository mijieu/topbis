import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getImageUrl(): String {
    return 'https://picsum.photos/354/200';
      /*
    this.http.get('https://your-api-url.com/image').toPromise()
      .then((response: any) => response.url)
      .catch(() => 'https://picsum.photos/165/140');*/
  }

  getProductName(): Promise<string> {
    return this.http.get('https://your-api-url.com/product').toPromise()
      .then((response: any) => response.name)
      .catch(() => 'Default Product Name');
  }

  getDescription(): Promise<string> {
    return this.http.get('https://your-api-url.com/description').toPromise()
      .then((response: any) => response.description)
      .catch(() => 'Default Description');
  }

  getPrice(): Promise<string> {
    return this.http.get('https://your-api-url.com/price').toPromise()
      .then((response: any) => response.price)
      .catch(() => '0.00');
  }
}