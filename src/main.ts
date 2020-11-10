import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());

	const options = new DocumentBuilder()
		.setTitle("Protokol Bucket")
		.setDescription("Decentralized Temporary Storage Engine")
		.setVersion("1.0")
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup("docs", app, document);

	await app.listen(40000);
	console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
