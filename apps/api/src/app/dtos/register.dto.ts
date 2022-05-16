import { IsEmail, IsString, IsOptional } from 'class-validator';

export class RegisterDto {
	@IsEmail()
	email: string;

	@IsString()
	password: string;

	@IsOptional()
	@IsString()
	displayName?: string;
}