import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IUser, UserRole } from '@purple/interfaces';
import { Document } from 'mongoose';

@Schema()
export class User extends Document implements IUser {
	@Prop()
	displayName?: string;

	@Prop({ required: true })
	email: string;

	@Prop({ required: true })
	passwordHash: string;

	@Prop({ required: true, enum: UserRole, type: String, default: UserRole.Student })
	role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);