import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoPayment {
  private url: string =
    'https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruitiSng-backend-dev-save-payment-data';

  constructor(private http: HttpClient) {}

  paymentData(iban: any, name: string): Observable<any> {
    let body = {
      customerId: 1,
      iban: iban,
      owner: name,
    };
    return this.http.post<any>(this.url, body, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
