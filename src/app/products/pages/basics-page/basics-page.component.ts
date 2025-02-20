import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  standalone: false,
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {
  public nameLower: string = 'brandon';
  public nameUpper: string = 'BRANDON';
  public fullName: string = 'bRANdoN gArBeTT';

  public customDate: Date = new Date();
}
