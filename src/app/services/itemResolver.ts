import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { ItemService } from './itemService';
import { Item } from '../entities/item';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemResolver implements Resolve<Item> {
  constructor(private itemService: ItemService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> | Observable<never> {
    const productId = route.paramMap.get('id');
    if (productId) {
      return this.itemService.getItemById(productId).pipe(
        catchError(() => {
          // Handle error if getItemById throws an error (optional)
          // For example, you can redirect to a not-found page or return null.
          this.router.navigate(['tabs/start']); // Redirect to the home page
          return of(null) as Observable<never>; // Or return null or redirect to not-found page
        })
      );
    } else {
      // Handle the case when productId is null by redirecting to the home page
      this.router.navigate(['tabs/start']);
      return of(null) as Observable<never>; // Or return null or redirect to not-found page
    }
  }
}
