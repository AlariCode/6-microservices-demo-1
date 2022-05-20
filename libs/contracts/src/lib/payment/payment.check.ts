import { IsString } from 'class-validator';

export type PaymentStatus = 'canceled' | 'success' | 'porgress';

export namespace PaymentCheck {
	export const topic = 'payment.check.query';

	export class Request {
		@IsString()
		courseId: string;

		@IsString()
		userId: string;
	}

	export class Response {
		status: PaymentStatus;
	}
}

