import { Test, TestingModule } from "@nestjs/testing";
import { PeersController } from "./peers.controller";
import { Peer } from "./peers.interface";
import { PeersService } from "./peers.service";

describe("PeersController", () => {
	let peersController: PeersController;
	let peersService: PeersService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [PeersController],
			providers: [PeersService],
		}).compile();

		peersController = module.get<PeersController>(PeersController);
		peersService = module.get<PeersService>(PeersService);
	});

	it("should be defined", () => {
		expect(peersController).toBeDefined();
	});

	describe("findAll", () => {
		it("should return an array of peers", async () => {
			const result: Peer[] = [
				{
					port: 2,
					network: "Bombay",
					ip: "127.0.0.1",
				},
			];
			jest.spyOn(peersService, "findAll").mockImplementation(() => result);

			expect(await peersController.findAll()).toBe(result);
		});
	});
});
