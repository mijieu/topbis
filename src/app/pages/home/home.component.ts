import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  onScroll (e:any) {
      const topbar = document.getElementById("topnavbar");
      if(!topbar) {
        return
      }
      const searchbarTop = topbar.querySelector(".search-bar-top");
      if(!searchbarTop) {
        return
      }
      const logoTop = topbar.querySelector(".logo-top img");
      if(!logoTop) {
        return
      }
      const logoWidth = topbar.querySelector(".top-logo-width");
  
      if (e.detail.scrollTop > 10) {
          topbar.classList.add("shrink");
          searchbarTop.classList.add("centered-search-bar");
          (logoTop as HTMLImageElement).src = "./assets/img/small-logo.png";
          (logoWidth as HTMLImageElement).style.width = "40px";
          // topbar.style.height = "60px";
          (searchbarTop as HTMLElement).style.display = "block";
          topbar.style.display = "flex";
          topbar.style.alignItems = "center";
  
      } else {
          topbar.classList.remove("shrink");
          searchbarTop.classList.remove("centered-search-bar");
          (logoTop as HTMLImageElement).src = "./assets/img/logo.png";
          (logoWidth as HTMLImageElement).style.width = "100px";
          // topbar.style.height = "100px";
          (searchbarTop as HTMLElement).style.display = "block";
          topbar.style.display = "flex";
      }
      // logoTop.classList.add("transition-effect");

  }

}
