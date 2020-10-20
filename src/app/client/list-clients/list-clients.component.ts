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

  ModalTitle: string;
  ActivateAddEditClient:boolean=false;
  clientdata:any;

  ClientIdFilter: string="";
  ClientFilterName: string="";
  ClientListWithoutFilter: any[];

  ngOnInit(): void {
    this.getClientList();
  }

  addClient() {
    this.clientdata = {
      ClientId: 0,
      FirstName:"",
      LastName:"",
      MobileNumber:"",
      IdNumber:"",
      PhysicalAddress:""
    }
    this.ModalTitle = "Add Client";
    this.ActivateAddEditClient = true;
  }

  editClient(item) {
    this.clientdata = item;
    this.ModalTitle = "Edit Client";
    this.ActivateAddEditClient = true;
  }

  deleteClient(item) {
    if(confirm('Are you sure?')) {
      this.service.DeleteClient(item.ClientId).subscribe(data=> {
        alert(data.toString());
        this.getClientList();
      });
    }
  
  }

  closeModal() {
    this.ActivateAddEditClient=false;
    this.getClientList();
  }

  getClientList() {
    this.service.getClintList().subscribe(data=>{
      this.ClientList = data;
    });
  }


  FilterFn(){
    var ClientIdFilter = this.ClientIdFilter;
    var ClientNameFilter = this.ClientFilterName;

    this.ClientList = this.ClientListWithoutFilter.filter(function (el){
        return el.ClientId.toString().toLowerCase().includes(
          ClientIdFilter.toString().trim().toLowerCase()
        )&&
        el.FirstName.toString().toLowerCase().includes(
          ClientNameFilter.toString().trim().toLowerCase()
        )
    });
  }

}
