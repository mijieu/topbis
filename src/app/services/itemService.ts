import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../entities/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:8080/items';
  private apigetUrl = 'http://localhost:8080/product-detail';
    
  constructor(private http: HttpClient) {} 

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }
    
  getItemById(itemId: string): Observable<Item> {
    const url = `${this.apigetUrl}/${itemId}`;
    return this.http.get<Item>(url);
  }
}