import { Body, Controller } from '@nestjs/common';
import { AccountUserCourses, AccountUserInfo } from '@purple/contracts';
import { RMQValidate, RMQRoute } from 'nestjs-rmq';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Controller()
export class UserQueries {
	constructor(private readonly userRepository: UserRepository) {}

	@RMQValidate()
	@RMQRoute(AccountUserInfo.topic)
	async userInfo(@Body() { id }: AccountUserInfo.Request): Promise<AccountUserInfo.Response> {
		const user = await this.userRepository.findUserById(id);
		const profile = new UserEntity(user).getPublicProfile();
		return {
			profile
		};
	}

	@RMQValidate()
	@RMQRoute(AccountUserCourses.topic)
	async userCourses(@Body() { id }: AccountUserCourses.Request): Promise<AccountUserCourses.Response> {
		const user = await this.userRepository.findUserById(id);
		return {
			courses: user.courses
		};
	}
}
