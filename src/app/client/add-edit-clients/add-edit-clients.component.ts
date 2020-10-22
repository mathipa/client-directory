import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { AppHelperValidators } from 'src/app/shared/AppHelper/app-helper.validators';
import { CompileNgModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'add-edit-clients',
  templateUrl: './add-edit-clients.component.html',
  styleUrls: ['./add-edit-clients.component.scss']
})
export class AddEditClientsComponent implements OnInit {
  clientForm: FormGroup;
  submitted = false;

  constructor(private service: SharedService, private fb: FormBuilder) { }

  @Input()clientdata: any;
  ClientId: string;
  FirstName: string;
  LastName: string;
  MobileNumber: string;
  IdNumber: string;
  PhysicalAddress: string;

  ClientList: any[];

  ngOnInit(): void {
    this.ClientId = this.clientdata.ClientId;
    this.FirstName = this.clientdata.FirstName;
    this.LastName = this.clientdata.LastName;
    this.MobileNumber = this.clientdata.MobileNumber;
    this.IdNumber = this.clientdata.IdNumber;
    this.PhysicalAddress = this.clientdata.PhysicalAddress;

    this.clientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required]],
      mobileNumber: ['null', [Validators.required]],
      idNumber: ['', [Validators.required,  Validators.maxLength(13), AppHelperValidators.checksanumber]],
      physicalAddress: ['', [Validators.required]],
    });
    this.getClientList();
  }

  get clientFormControl() {
    return this.clientForm.controls;
  }

  addClient() {
    this.submitted=true;
    if(this.clientForm.valid) {

      var idCheck =  this.checkIdNumber(this.IdNumber);
      var MobileCheck =  this.checkContactNumber(this.MobileNumber);

      if(MobileCheck.length != 0) {
        alert ('The entered Mobile Number exist');
      } else if (idCheck.length != 0) {
        alert ('The entered ID Number exist');
      } else {
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
    }
  }

  updateClient(){
    if(this.clientForm.valid) {
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

  getClientList() {
    this.service.getClintList().subscribe(data=>{
      this.ClientList = data;
    });
  }

  checkIdNumber(IdNumber) {
    return this.ClientList.filter  (
      function(ClientList) {
      return ClientList.IdNumber === IdNumber 
    });
  }

  checkContactNumber(MobileNumber) {
    return this.ClientList.filter  (
      function(ClientList) {
      return ClientList.MobileNumber === MobileNumber 
    });
  }
}