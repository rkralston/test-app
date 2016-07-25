import { Component } from '@angular/core';
import * as jquery from 'jquery';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Test App';

  constructor() {
    var jQuery: any;
    console.log(jquery);
    jQuery('#input');
  }
}
