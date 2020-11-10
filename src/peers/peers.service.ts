import { Injectable } from "@nestjs/common";
import { Peer } from "./peers.interface";

@Injectable()
export class PeersService {
	private readonly peers: Peer[] = [];

	create(peer: Peer) {
		return this.peers.push(peer);
	}

	findAll(): Peer[] {
		return this.peers;
	}

	findMany(network: string): Peer[] {
		return this.peers.filter((p) => p.network === network);
	}
}
