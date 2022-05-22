import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.model';
import { UserRepository } from './repositories/user.repository';
import { UserCommands } from './user.commands';
import { UserEventEmiiter } from './user.event-immiter';
import { UserQueries } from './user.queries';
import { UserService } from './user.service';

@Module({
	imports: [MongooseModule.forFeature([
		{ name: User.name, schema: UserSchema }
	])],
	providers: [UserRepository, UserEventEmiiter, UserService],
	exports: [UserRepository],
	controllers: [UserCommands, UserQueries],
})
export class UserModule {}
