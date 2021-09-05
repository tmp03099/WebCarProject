import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-vios-uu-dai',
  templateUrl: 'vios-uu-dai.component.html',
  styleUrls: ['vios-uu-dai.component.scss']
})
export class ViosUuDaiComponent implements OnInit {

  public info: any[];

  public ngOnInit() {
    this.info = [
      {
        model: "Vios G",
        detail: "Tổng giá trị 26,510,000 đồng bao gồm hỗ trợ một phần lệ phí trước bạ 22 triệu đồng và camera hành trình 4,51 triệu đồng."
      },
      {
        model: "vios E CVT/MT",
        detail: "Tổng giá trị 21,010,000 đồng bao gồm hỗ trợ một phần lệ phí trước bạ 16,5 triệu đồng và camera hành trình 4,51 triệu đồng."
      }
    ];

  }
}
