import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: '*' },
  });
  app.setGlobalPrefix('api');
  const options = new DocumentBuilder()
    .setTitle('Limpieza y Delicuencia app Backend API')
    .setDescription('Monolitic REST API')
    .setVersion('0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 8080);
}
bootstrap();
