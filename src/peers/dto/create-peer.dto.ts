import { Exclude } from "class-transformer";
import { IsInt, IsString } from "class-validator";

export class CreatePeerDto {
	@IsString()
	readonly ip: string;

	@IsInt()
	readonly port: number;

	@IsString()
	@Exclude({ toPlainOnly: true })
	readonly network: string;
}
