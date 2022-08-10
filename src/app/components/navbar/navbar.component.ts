import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  refresh(): void {
    setTimeout(() => {
      window.location.reload();
    }, 10);
}

  ngOnInit(): void {

  }

}
