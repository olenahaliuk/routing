import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private authService: AuthService) { }

  public onLoadServer(id: number): void {
    // complex calculation
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading'});
  }

  public onLogin(): void {
    this.authService.login();
  }

  public onLogout(): void {
    this.authService.logout();
  }
}
