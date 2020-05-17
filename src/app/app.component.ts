import { Component, VERSION, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

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

    of(2, 4, 6).pipe(
      map(item => item * 2),
      tap(item => console.log(` My selected item.... ${item}`)),
      take(2)
    ).subscribe(console.log)
  }
}
