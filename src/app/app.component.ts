import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';

  constructor(iconRegistry: MatIconRegistry, sanitzer: DomSanitizer){
    iconRegistry.addSvgIcon(
      'medicine-bottle',
      sanitzer.bypassSecurityTrustResourceUrl(
        'assets/img/icons/medicine-bottle.svg'
      )
    )
  }
}
