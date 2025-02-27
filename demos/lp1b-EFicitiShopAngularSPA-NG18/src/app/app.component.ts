import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lp1b-EFicitiShopAngularSPA-NG18';

  constructor(private router : Router) {
  }

  isLoggedIn() : boolean {
    return window.sessionStorage.getItem('loggedIn') === 'yes';
  }

  logout() {
    sessionStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }
}
