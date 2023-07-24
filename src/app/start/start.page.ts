import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../services/itemService';
import { Item } from '../entities/item';

@Component({
  selector: 'app-start',
  templateUrl: 'start.page.html',
  styleUrls: ['start.page.scss']
})
export class StartPage {

  items: Item[] = [];
  notificationCount: number = 510;
  colHeight: string = '200px';
  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit() {
    this.items = this.geItems();
    this.setColHeight();
  }
    
  geItems(): any[] {
    this.itemService.getItems()
      .subscribe(
        (response: Item[])  => {
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

  navigateToProductDetail(item: Item) {
    this.router.navigate(['/product-detail', item.id], { state: { item } });
  }

}
