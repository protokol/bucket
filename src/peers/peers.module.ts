import { Module } from "@nestjs/common";
import { PeersController } from "./peers.controller";
import { PeersService } from "./peers.service";

@Module({
	controllers: [PeersController],
	providers: [PeersService],
})
export class PeersModule {}
