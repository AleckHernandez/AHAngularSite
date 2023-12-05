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
  public maxScreenWidth: number = 650;
  public isMobileMenuOpen: boolean = false;

  public header: any;
  public menu: any;
  

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    const now = new Date();
    const seconds = now.getSeconds();
    let angle = (seconds - 15) * 6;
    let imgToRotate = document.getElementById("logo");

    setInterval(() => {
      if (imgToRotate) {
        imgToRotate.style.transform = `rotate(${angle}deg)`;
        angle += 1;
      }
    }, 1000/6);

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;


    if (this.screenWidth > this.maxScreenWidth) {
      this.header = document.querySelector('header');
      if (this.isMobileMenuOpen) {
        this.isMobileMenuOpen = !this.isMobileMenuOpen
        this.header.classList.remove('expanded');
      }
    }
  }

  toggleMobileMenu(event: any) {
    this.menu = event.currentTarget;
    this.menu.classList.toggle('open');

    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    this.header = document.querySelector('header');
    if (this.header) {
      this.header.classList.toggle('expanded');
    }
  }
}
