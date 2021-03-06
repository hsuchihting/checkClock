import { environment } from './../../../environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss'],
})
export class AsideNavComponent implements OnInit {
  @Input() closePath: string;
  route: ActivatedRoute;

  constructor(private router: Router) {}
  highlight = false;

  active() {
    this.highlight = true;
    return this.highlight;
  }

  userClose() {
    if (this.closePath) {
      this.router.navigate(['./login'], {
        relativeTo: this.route,
      });
    }
  }
  ngOnInit(): void {}
}
