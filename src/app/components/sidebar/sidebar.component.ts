import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCoffee, faHome, faSquare, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  faCoffe = faCoffee
  faSquare = faSquare
  faHome = faHome
  faBars = faBars
  faUser = faUser
}
