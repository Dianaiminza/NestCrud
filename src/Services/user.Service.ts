import { Injectable } from '@nestjs/common';
import {User} from '../Interfaces/user.Interface';

@Injectable()
export class UsersService {
  private readonly cats: User[] = [];

  create(cat: User) {
    this.cats.push(cat);
  }

  findAll(): User[] {
    return this.cats;
  }
}