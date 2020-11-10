import {
	Body,
	ClassSerializerInterceptor,
	Controller,
	DefaultValuePipe,
	Get,
	Param,
	Post,
	UseInterceptors,
	ValidationPipe,
} from "@nestjs/common";
import { TransformInterceptor } from "src/common/transform.interceptor";
import { CreatePeerDto } from "./dto/create-peer.dto";
import { Peer } from "./peers.interface";
import { PeersService } from "./peers.service";

@Controller("peers")
export class PeersController {
	constructor(private readonly peersService: PeersService) {}

	@Post()
	async create(@Body(new ValidationPipe({ transform: true })) createPeerDto: CreatePeerDto) {
		this.peersService.create(createPeerDto);
	}

	@Get()
	@UseInterceptors(TransformInterceptor, ClassSerializerInterceptor)
	async findAll(): Promise<Peer[]> {
		return this.peersService.findAll();
	}

	@Get(":network")
	async findMany(
		@Param("network", new DefaultValuePipe("core"))
		network: string,
	): Promise<Peer[]> {
		return this.peersService.findMany(network);
	}
}
