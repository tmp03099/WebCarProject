import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EmailService {

  public sendEmail(body: any) {
    console.log(`send email with ${body}`);

  }

}
