import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  // isSidebarVisible: boolean = false;

  // onToggleSidebar() {
  //   this.isSidebarVisible = !this.isSidebarVisible;
  //   console.log(this.isSidebarVisible);
  // }

  navData = navbarData;
  activeIndex: number = 0;
  current: string = window.location.href;
  allLinks = document.querySelectorAll('.sidebar-links a');
  collapsed = true;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.allLinks.forEach((elem) => {
      elem.addEventListener('click', () => {
        const hrefLinkClick = elem.getAttribute('href');

        this.allLinks.forEach((link) => {
          if (link.getAttribute('href') === hrefLinkClick) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      });
    });
  }
  togglecollase(): void {
    this.collapsed = !this.collapsed;
  }
  closeSidenav(): void {
    this.collapsed = false;
  }

  logout(): void {
    this.http.post('http://localhost:8080/logout', {}).subscribe(
      () => {
        console.log('Logged out successfully');
        this.router.navigate(['/sign-in']); // Redirect to sign-in page after logout
      },
      (error) => {
        console.error('Logout failed', error);
        // Handle logout failure if needed
      }
    );
  }
}
