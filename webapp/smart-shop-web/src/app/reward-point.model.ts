import { User } from './site/user';

export interface RewardPoint {
    id?: number;
    user: User;
    point: number;
}