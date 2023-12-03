import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  public screenWidth: any;
  public screenHeight: any;
  public isMobileMenuOpen: boolean = false;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  toggleMobileMenu(event: any) {
    const menu = event.currentTarget;
    menu.classList.toggle('open');

    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    const header = document.querySelector('header');
    if (header) {
      header.classList.toggle('expanded', this.isMobileMenuOpen);
    }
  }
}
