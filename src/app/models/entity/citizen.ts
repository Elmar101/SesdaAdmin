import { Profile } from './profile';
import { Parameter } from './parameter';
import {DateType} from '../../theme/utils/date';

export interface Citizen extends Profile {
    firstName?: string;
    lastName?: string;
    fatherName?: string;
    birthDate?: DateType;
    gender?: number;
    pin?: string;
    country?: Parameter;
    city?: Parameter;
    address?: string;
    postCode?: string;
    phone?: Array<string>;
    email?: string;
}
