import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사를 위한 파이프
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 데코레이터가 없는 속성의 object를 거름. 아예 검사도 하지않음
      forbidNonWhitelisted: true, // 이상한 값의 요청을 막음
      transform: true, // 데이터를 원하는 타입으로 변환해줌
    }),
  );
  await app.listen(3000);
}
bootstrap();
