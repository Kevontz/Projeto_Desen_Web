import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userFormGroup!: FormGroup

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.userFormGroup = this.fb.group({
      nome: ['Pablo Escobar', Validators.required],
      email: ['pablo@email.com', [Validators.required, Validators.email]],
      funcao: ['engenheiro_be', Validators.required],
      senha: ['passwordcool', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  onSubmit() {
    if (this.userFormGroup.valid) {
      console.log('Novo usuário:', this.userFormGroup.value);
      this.router.navigate(["/app/users"])
    }
  }
}
