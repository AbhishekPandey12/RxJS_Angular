import { Component, VERSION, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit(){

    of(2, 3, 4, 6, 8).subscribe(console.log);

    from([20, 40, 60, 80]).subscribe(
      item => console.log(`Item is.... ${item}`),
      err => console.log(`Got Error`),
      () => console.log(`Complete`)
    )
  }
}
