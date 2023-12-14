import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Radhesh!';
  }
  getPost(): string {
    return 'this is post response';
  }
}
