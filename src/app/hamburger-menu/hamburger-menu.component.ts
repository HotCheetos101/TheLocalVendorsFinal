import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent {
  @HostBinding('class.open') isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  navigateTo(option: string) {
    // Implement navigation logic based on the selected option
    console.log(`Navigating to ${option}`);
  }
}
