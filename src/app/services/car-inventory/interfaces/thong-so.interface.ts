export interface ThongSoInterface {
  label: string;
  value: string;
}

export class ThongSo implements ThongSoInterface{
  label: string;
  value: string;

  constructor(label: string, value: string) {
    this.label = label;
    this.value = value;
  }
}
