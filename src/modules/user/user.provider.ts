import { User } from './user.entity';
import { SequelizeProvider } from '../../common/constants';
import { Provider } from '@nestjs/common';

export const UserProvider: Provider[] = [
    {
        provide: SequelizeProvider.USER_TABLE,
        useValue: User
    }
];
