import { Component } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // isSidebarVisible: boolean = false;

  // onToggleSidebar() {
  //   this.isSidebarVisible = !this.isSidebarVisible;
  //   console.log(this.isSidebarVisible);
  // }

  navData=navbarData;
  activeIndex: number=0;
  current: string = window.location.href;
  allLinks = document.querySelectorAll(".sidebar-links a");
  collapsed=true;

        


  constructor() { }

  ngOnInit(): void {
    const expandBtn = document.querySelector(".expand-btn") as HTMLElement;
    
     
    

    this.allLinks.forEach((elem) => {
      elem.addEventListener('click', () => {
        const hrefLinkClick = elem.getAttribute("href");

        this.allLinks.forEach((link) => {
          if (link.getAttribute("href") === hrefLinkClick) {
            link.classList.add("active");
          } else {
            link.classList.remove('active');
          }
        });
      });
    });

   
  }
  togglecollase():void{
    this.collapsed = !this.collapsed;
  }
  closeSidenav():void{
    this.collapsed =false;
  
  }
}


