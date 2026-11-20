import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-train',
  standalone: false,
  templateUrl: './train.html',
  styleUrl: './train.css',
})
export class Train implements OnInit {
  @Input() departs: string = '';
  @Input() destination: string = '';
  @Input() platform = '';
  constructor() {}
  ngOnInit() {}
}
