import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'add-edit-clients',
  templateUrl: './add-edit-clients.component.html',
  styleUrls: ['./add-edit-clients.component.scss']
})
export class AddEditClientsComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input()clientdata: any;
  ClientId: string;
  FirstName: string;
  LastName: string;
  MobileNumber: string;
  IdNumber: string;
  PhysicalAddress: string;

  ngOnInit(): void {
    this.loadClients();
  }


  loadClients (){
    this.ClientId = this.clientdata.ClientId;
    this.FirstName = this.clientdata.FirstName;
    this.LastName = this.clientdata.LastName;
    this.MobileNumber = this.clientdata.MobileNumber;
    this.IdNumber = this.clientdata.IdNumber;
    this.PhysicalAddress = this.clientdata.PhysicalAddress;

  }
  addClient(){
    var val = {
      ClientId:this.ClientId,
      FirstName:this.FirstName,
      LastName:this.LastName,
      MobileNumber: this.MobileNumber,
      IdNumber: this.IdNumber,
      PhysicalAddress: this.PhysicalAddress
    };
    this.service.addClient(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateClient(){
    var val = {
      ClientId:this.ClientId,
      FirstName:this.FirstName,
      LastName:this.LastName,
      MobileNumber: this.MobileNumber,
      IdNumber: this.IdNumber,
      PhysicalAddress: this.PhysicalAddress};
    this.service.UpdateClient(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
