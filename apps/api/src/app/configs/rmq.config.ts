import { ConfigModule, ConfigService } from '@nestjs/config';
import { IRMQServiceAsyncOptions } from 'nestjs-rmq';

export const getRMQConfig = (): IRMQServiceAsyncOptions => ({
	inject: [ConfigService],
	imports: [ConfigModule],
	useFactory: (configService: ConfigService) => ({
		exchangeName: configService.get('AMQP_EXCHANGE') ?? '',
		connections: [
			{
				login: configService.get('AMQP_USER') ?? '',
				password: configService.get('AMQP_PASSWORD') ?? '',
				host: configService.get('AMQP_HOSTNAME') ?? ''
			}
		],
		prefetchCount: 32,
		serviceName: 'purple-account'
	})
})