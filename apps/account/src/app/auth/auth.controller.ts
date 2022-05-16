import { Body, Controller } from '@nestjs/common';
import { AccountLogin, AccountRegister } from '@purple/contracts';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
	constructor(
		private readonly authService: AuthService
	) {}

	@RMQValidate()
	@RMQRoute(AccountRegister.topic)
	async register(@Body() dto: AccountRegister.Request): Promise<AccountRegister.Response> {
		return this.authService.register(dto);
	}

	@RMQValidate()
	@RMQRoute(AccountLogin.topic)
	async login(@Body() { email, password }: AccountLogin.Request): Promise<AccountLogin.Response> {
		const { id } = await this.authService.validateUser(email, password);
		return this.authService.login(id);
	}
}
