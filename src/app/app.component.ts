import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PetStay';
  @ViewChild('ham') Ham: ElementRef;

  public isMenuCollapsed = true;
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  clickHam()
  {
    this.Ham.nativeElement.click();
  }
  closeHam()
  {
    if(this.isMenuCollapsed==false)
    {
      this.Ham.nativeElement.click();
    }
    
  }
}
