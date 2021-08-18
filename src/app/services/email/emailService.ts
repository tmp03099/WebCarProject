import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EmailService {

  private URL = 'http://localhost:4200/api/email';

  constructor(
    private http: HttpClient
  ){}

  public async sendEmail(subject: string, text: string): Promise<void> {
    console.log(`send email with ${subject}, ${text}`);

    try {
      const body = {
        subject: subject,
        text: text
      }

      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

      await this.http.post(this.URL, body, httpOptions).toPromise();
    } catch (error) {
      console.error(error);
    }
  }

}
