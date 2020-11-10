import { IsInt, IsString } from "class-validator";

export class CreatePeerDto {
	@IsString()
	readonly ip: string;

	@IsInt()
	readonly port: number;

	@IsString()
	readonly network: string;
}
