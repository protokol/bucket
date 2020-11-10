import { Module } from "@nestjs/common";
import { PeersModule } from "./peers/peers.module";

@Module({
	imports: [PeersModule],
})
export class AppModule {}
