import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PromotionsService {

  public readonly header = 'CHƯƠNG TRÌNH KHUYẾN MÃI CỰC HẤP DẪN TRONG THÁNG';

  public readonly promotions = [
    "Tặng ngay gói phụ kiện chăm sóc làm đẹp xe chính hãng",
    "Hỗ trợ thủ tục vay ngân hàng lên đến 80% với lãi suất thấp chỉ từ 0.49%",
    "Có dịch vụ giao xe bằng xe chuyên dụng",
    "Hỗ trợ thủ tục đăng ký xe trong ngày tiết kiệm thời gian cho quý khách",
    "Tặng ngày bảo hiểm vật chất xe hoặc giảm tiền mặt",
    "Tặng 10 phần quà tặng có giá trị tại Toyota An Giang",
    'Liên hệ ngay nhân viên tư vấn 0987777529 hoặc nhấn ngay vào nút "Yêu cầu báo giá" để nhận thêm khuyến mãi'
  ];
}
