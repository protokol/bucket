import { Injectable } from "@nestjs/common";
import { Peer } from "./peers.interface";

@Injectable()
export class PeersService {
	private readonly peers: Peer[] = [];

	create(peer: Peer) {
		this.peers.push(peer);
	}

	findAll(): Peer[] {
		return this.peers;
	}
}
