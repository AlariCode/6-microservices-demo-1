import { IsString } from 'class-validator';

export namespace AccountBuyCourse {
	export const topic = 'account.buy-course.query';

	export class Request {
		@IsString()
		userId: string;

		@IsString()
		courseId: string;
	}

	export class Response {
		paymentLink: string;
	}
}

