import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { AppHelperValidators } from 'src/app/shared/AppHelper/app-helper.validators';

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

  ngOnInit(): void {
    this.ClientId = this.clientdata.ClientId;
    this.FirstName = this.clientdata.FirstName;
    this.LastName = this.clientdata.LastName;
    this.MobileNumber = this.clientdata.MobileNumber;
    this.IdNumber = this.clientdata.IdNumber;
    this.PhysicalAddress = this.clientdata.PhysicalAddress;

    // this.ClientId = this.clientdata.ClientId;
    // this.FirstName = 'Mathipa';
    // this.LastName = 'Makgato';
    // this.MobileNumber = '0764631679';
    // this.IdNumber = '8707245453081';
    // this.PhysicalAddress = '12 Rita road Kaalkop';

    this.clientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required]],
      mobileNumber: ['null', [Validators.required]],
      idNumber: ['', [Validators.required,  Validators.maxLength(13), AppHelperValidators.checksanumber]],
      physicalAddress: ['', [Validators.required]],
    });

  }

  get clientFormControl() {
    return this.clientForm.controls;
  }

  addClient(){
    this.submitted=true;
    if(this.clientForm.valid) {
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
