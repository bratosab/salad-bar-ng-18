import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // private store = inject(Store);
  title = 'salad-bar-ng-18';

  name$!: Observable<string>;
  orderId$!: Observable<number>;

  constructor(private store: Store<{ app: AppState }>) {
    this.name$ = this.store.select((state) => state.app.name);
    this.orderId$ = this.store.select((state) => state.app.orderId);
  }
}
