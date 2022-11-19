import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  constructor(private http: HttpClient) {
    this.http.get('/api/message?name=event-booking')
      .subscribe((resp: any) => {
        this.title = resp.message
      });
  }
}
