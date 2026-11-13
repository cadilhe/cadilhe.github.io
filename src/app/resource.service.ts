import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private email = 'carlos.cadilhe@gmail.com';

  getEmail(): string {
    return this.email;
  }

  getEmailUrl(): string {
    return `mailto:${this.email}`;
  }

  getLinkedInUrl(): string {
    return 'https://www.linkedin.com/in/cadilhe/';
  }

  getGithubUrl(): string {
    return 'https://github.com/cadilhe';
  }

  getStackoverflowUrl(): string {
    return 'https://kanimambo.net';
  }
}
