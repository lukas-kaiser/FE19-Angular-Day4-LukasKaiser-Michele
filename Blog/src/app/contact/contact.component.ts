import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
info = new FormGroup({
  name: new FormControl("", Validators.required),
  email: new FormControl("", Validators.required),
  age: new FormControl("", Validators.required)
})
onSubmit(){
  if(this.info.valid){
    console.log(this.info.value);
  }
}
}
