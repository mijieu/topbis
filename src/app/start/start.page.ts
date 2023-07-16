import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemService } from '../entities/itemService'; 

@Component({
  selector: 'app-start',
  templateUrl: 'start.page.html',
  styleUrls: ['start.page.scss']
})
export class StartPage {

  items: any[] = [];
  colHeight: string = '200px';
  constructor(private itemService: ItemService, private http: HttpClient) {}

  ngOnInit() {
    this.items = this.geItems();
    this.setColHeight();
  }
    
  geItems(): any[] {
    this.http.get<any>('http://localhost:8080/items')
      .subscribe(
        response => {
          this.items = response;
          console.log('API Response:', response);
        },
        error => {
          console.error('API Error:', error);
        }
      );
      
      return this.items;
  }
    
  @HostListener('window:resize')
  setColHeight() {
    const windowHeight = window.innerHeight;
    this.colHeight = (windowHeight * 0.4) + 'px'; // Adjust the height percentage as needed
  }

  getHeight(): string {
    return this.colHeight;
  }
    
  /*geItems(count: number): any[] {
    const items = [];

    for (let i = 0; i < count; i++) {
      const ad = {
        image: this.itemService.getImageUrl(),
        title: this.itemService.getProductName(),
        description: this.itemService.getDescription(),
        price: this.itemService.getPrice()
      };

      items.push(ad);
    }

    return items;
  }*/

}
