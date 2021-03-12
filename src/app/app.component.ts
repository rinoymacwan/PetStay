import { Component, ViewChild, ElementRef } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PetStay';
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;

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
