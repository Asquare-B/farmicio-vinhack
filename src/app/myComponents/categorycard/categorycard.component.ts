import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categorycard',
  templateUrl: './categorycard.component.html',
  styleUrls: ['./categorycard.component.css']
})
export class CategorycardComponent implements OnInit {

  @Input()
  title!: string;
  @Input()
  link!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
