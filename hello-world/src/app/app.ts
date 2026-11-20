import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'train-app';
  trains: any[] = [];
  constructor(public httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient.get('https://web.socem.plymouth.ac.uk/COMP3006/trains/trains/').subscribe((res: any) => {
      this.trains = res.trains;
    });
  }
}
