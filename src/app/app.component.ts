import { Component, OnInit } from '@angular/core';

declare const grammar: any;
declare const nearley: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nearly';

  ngOnInit(): void {
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    parser.feed('foo\n');
    console.log(parser.results);
  }
}
