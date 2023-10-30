import { Controller, Get,Req,Res, Post,Header,HttpStatus,Param,Body } from '@nestjs/common';
import { Request } from 'express';
import {CreateUserDto} from './dbo/CreateUserDto';
import { Response } from 'express';
import { UsersService } from './Services/user.Service';
import { User } from './Interfaces/user.Interface';

@Controller('users')
export class UsersController {
  constructor(private catsService: UsersService) {}

  @Post()
  async create(@Body() createCatDto: CreateUserDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.catsService.findAll();
  }
}