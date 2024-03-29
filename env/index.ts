import * as dotenv from 'dotenv';
import { resolve } from 'path';

import { getOsEnv } from '../src/common/utils';
import { parse } from '../src/common/utils/db';

class Index {
  nodeEnv: string = '';
  isProduction: boolean = false;
  isDevelopment: boolean = true;
  isTest: boolean = false;

  port: string = '';
  host: string = '';

  dbURI: any;
  mongoURI: string = '';

  load() {
    this.nodeEnv = process.env.NODE_ENV || 'production';
    this.isProduction = process.env.NODE_ENV === 'production';
    this.isDevelopment = process.env.NODE_ENV === 'development';
    this.isTest = process.env.NODE_ENV === 'test';
    this.port = getOsEnv('PORT', process.env['PORT']);
    this.host = getOsEnv('HOST', process.env['HOST']);
    this.dbURI = parse(getOsEnv('DB_URI'));
    this.mongoURI = getOsEnv('MONGO_URI');
  }
}

export let index = new Index();

(() => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  const envPath = resolve(`${__dirname}/../env`);
  const path = resolve(`${envPath}/.env`);

  const envFound = dotenv.config({ path });

  if (envFound.error) {
    console.error("couldn't find .env file");
  }
  index.load();
})();
