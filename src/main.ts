import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { PostgresDBExceptionsFilter } from './common/errors/postgresdb.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT!!;
  const logger = new Logger();

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));
  app.use(cookieParser());
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  });

  app.useGlobalFilters(new PostgresDBExceptionsFilter());

  const config = new DocumentBuilder()
    .setTitle('Hackathon API')
    .setDescription('The Hackathon API description')
    .addBearerAuth()
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(PORT, () => logger.log(`Server is running on http://localhost:${PORT}/api`));
}
bootstrap();
