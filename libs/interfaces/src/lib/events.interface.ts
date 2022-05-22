export interface IDomainEvent {
	topic: string;
	data: unknown;
}