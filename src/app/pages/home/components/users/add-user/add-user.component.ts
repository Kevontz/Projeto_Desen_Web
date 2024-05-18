import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userFormGroup!: FormGroup

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.userFormGroup = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      funcao: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  onSubmit() {
    if (this.userFormGroup.valid) {
      console.log('Novo usuário:', this.userFormGroup.value);
      this.router.navigate(["/app/users"])
    }
  }
}
