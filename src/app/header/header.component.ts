import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getAuthStatusSelector } from '../store/styles.reducer';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;
  constructor(private store: Store, private auth: AuthService) { }

  ngOnInit(): void {
    this.store.select(getAuthStatusSelector)
      .subscribe(
        result=>this.isAuth = result
      );
  }

  logout(): void{
    this.auth.logout()
  }

}
