import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../entities/item';

@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss']
})
export class DetailsPage implements OnInit{
  item: Item = {} as Item;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.item = this.route.snapshot.data['item'];
    console.log('Achille');
    console.log(this.item);
  }
    
}
