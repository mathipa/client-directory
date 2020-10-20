import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  constructor(private service: SharedService) { }

  ClientList: any[];

  ngOnInit(): void {
    this.getClientList();
  }

  getClientList() {
    this.service.getClintList().subscribe(data=>{
      this.ClientList = data;
    });
  }

}
