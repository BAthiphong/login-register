import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerObj: any = {
    username: '',
    password: '',
    email: '',
  };

  private apiUrl = 'http://localhost:3000/register';

  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    if (
      this.registerObj.username &&
      this.registerObj.password &&
      this.registerObj.email
    ) {
      this.http.post(this.apiUrl, this.registerObj).subscribe((res: any) => {
        if (res.result) {
          alert('register successful');
          this.router.navigateByUrl("login");
        } else {
          alert('User already exists');
        }
      },
      () => {
        // Handle any HTTP errors
        alert("User already exists");
      });
    } else {
      this.errorMessage = 'All fields are required.';
      this.successMessage = null;
    }
  }
}
