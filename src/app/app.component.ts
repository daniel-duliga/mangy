import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mangy';

  constructor(
    public dataService: StorageService,
    public router: Router,
  ) { }

  ngOnInit() { }

  tabIsActive(tabName: string): boolean {
    return this.router.url === `/${tabName}`;
  }
}
