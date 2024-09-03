import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  private apiUrl = 'http://localhost:3000'; // URL ของ Backend
  message: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  logout() {
    const token = localStorage.getItem('token');
    if (token){
      console.log("Token " , token);
      localStorage.removeItem('token');
      this.router.navigateByUrl("login");
      
    }
    else if (!token) {
      console.error('No token found');
      this.message = 'No token found. Please log in again.';
      return;
    }

    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${token}`,
    // });
  }
}
