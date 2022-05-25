import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ScheduleModule } from '@nestjs/schedule';
import { RMQModule } from 'nestjs-rmq';
import { getJWTConfig } from './configs/jwt.config';
import { getRMQConfig } from './configs/rmq.config';
import { AuthController } from './controllers/auth.controller';
import { UserController } from './controllers/user.controller';

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: 'envs/.api.env', isGlobal: true }),
		RMQModule.forRootAsync(getRMQConfig()),
		JwtModule.registerAsync(getJWTConfig()),
		PassportModule,
		ScheduleModule.forRoot()
	],
	controllers: [AuthController, UserController]
})
export class AppModule {}
