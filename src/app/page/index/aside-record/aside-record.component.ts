import { Component, OnInit } from '@angular/core';
import { HttpPostService, ApiRes } from 'src/app/service/http-post.service';


@Component({
  selector: 'app-aside-record',
  templateUrl: './aside-record.component.html',
  styleUrls: ['./aside-record.component.scss']
})
export class AsideRecordComponent implements OnInit {

  constructor(
    private httpPostService: HttpPostService
  ) { }

  ngOnInit(): void {

    this.httpPostService.fetchApi().subscribe((res: ApiRes[]) => {
      console.log('res', res)
    })
  }
}

