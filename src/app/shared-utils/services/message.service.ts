import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {

  message: string;

  constructor() {
  }

  setMessage(message: string) {
    this.message = message;
  }

  getMessage(): string {
    return this.message;
  }

}
