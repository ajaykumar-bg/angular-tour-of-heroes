import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  @Input() heroes: Hero[];

  constructor() { }

  ngOnInit() {
  }

}
