import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Provider } from '@nestjs/common';
import { User } from '../entity/User';
import { SequelizeProvider } from '../../../common/constants';

const sequelizeOptions: SequelizeOptions = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? Number.parseInt(process.env.DB_PORT) : 9001,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'example',
  database: process.env.DB || 'dev_db',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    freezeTableName: true,
    underscored: true,
  },
};

export const sequelizeProvider: Provider[] = [
  {
    provide: SequelizeProvider.SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(sequelizeOptions);
      sequelize.addModels([User]);
      await sequelize.sync({ force: false });
      return sequelize;
    },
  },
];
