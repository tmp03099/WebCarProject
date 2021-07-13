import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-picture-library',
  templateUrl: 'picture-library.component.html',
  styleUrls: ['picture-library.component.scss']
})
export class PictureLibraryComponent {
  @Input()
  public images: string[];

  @Input()
  public totalDisplay: number = 4;
}
