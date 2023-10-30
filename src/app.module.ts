import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersController} from './user.controller';
import {UsersService} from './Services/user.Service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
