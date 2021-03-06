import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: "root"
})
export class EmailService {

  public readonly emailLink = 'mailto:toyotaangiang.pt@gmail.com';

  private URL = 'api/email.php';
  // private URL = 'http://localhost:8000/api/email.php';

  constructor(
    private http: HttpClient,
    private readonly messageService: MessageService
  ){}

  public async sendEmail(subject: string, text: string): Promise<void> {
    console.log(`send email with ${subject}, ${text}`);

    const body = {
      subject: subject,
      text: text
    }

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.http.post(this.URL, body, httpOptions).subscribe(
      data => {
        this.messageService.add({
          severity: 'success',
          summary: 'Email đã gửi',
          detail: 'Thông tin của quý khách đã được gửi. Nhân viên tư vấn sẽ liên hệ quý khách hàng trong thời gian sớm nhất. Xin cảm ơn. '
        });
      },
      error => {
        console.error(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Email bị lỗi',
          detail: 'Thông tin chưa được gửi. Quý khách vui lòng nhập lại thông tin. Xin cảm ơn.'
        });
      }
    )
  }
}
