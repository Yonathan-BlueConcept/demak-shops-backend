import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    // Memory Usage Logger
    // setInterval(() => {
    //   const memoryUsage = process.memoryUsage();
    //   console.log('Memory Usage:', {
    //     rss: `${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB`,
    //     heapTotal: `${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`,
    //     heapUsed: `${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`,
    //     external: `${(memoryUsage.external / 1024 / 1024).toFixed(2)} MB`,
    //   });
    // }, 5000); // Logs memory usage every 5 seconds
  
  await app.listen(process.env.PORT || 3015);
}
bootstrap();
