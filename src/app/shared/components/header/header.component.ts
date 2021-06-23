import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { getAuthStatusSelector } from '../../../store/styles.reducer';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private store: Store,
              private auth: AuthService) {
  }

  ngOnInit(): void {
    this.store.select(getAuthStatusSelector)
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(
        result => this.isAuth = result
      );
  }

  logout(): void {
    this.auth.logout();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
