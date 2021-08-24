import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: "root"
})
export class EmailService {

  public readonly emailLink = 'mailto:toyotaangiang.pt@gmail.com';

  private URL = 'http://localhost:4200/api/email';

  constructor(
    private http: HttpClient,
    private readonly messageService: MessageService
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

      this.messageService.add({
        severity: 'success',
        summary: 'Email sent',
        detail: 'test message'
      });
    } catch (error) {
      console.error(error);
      this.messageService.add({
        severity: 'error',
        summary: 'error',
        detail: 'error message'
      });
    }
  }

}
