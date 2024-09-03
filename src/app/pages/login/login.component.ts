import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  
  loginObj: any = {
    username: '',
    password: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.http.post("http://localhost:3000/login", this.loginObj).subscribe(
      (res: any) => {
        if (res.result) {
          // Save the token to localStorage
          localStorage.setItem("token", res.data.token);
          // Navigate to the dashboard
          this.router.navigateByUrl("layout");
        } else {
          // Show alert if login fails
          alert("Check User Name or Password");
        }
      },
      () => {
        // Handle any HTTP errors
        alert("Check User Name or Password");
      }
    );
  }
}
