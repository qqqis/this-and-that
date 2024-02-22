import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';

import { index } from '../env/index';

async function start() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const env = index;
    app.setGlobalPrefix('/api/v1');
    app.use(helmet());

    process.on('SIGTERM', function () {
        return app.close().then(() => process.exit(1));
    });

    process.on('SIGINT', function () {
        return app.close().then(() => process.exit(1));
    });

    const port = env.port || 3000;

    await app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}

start();
