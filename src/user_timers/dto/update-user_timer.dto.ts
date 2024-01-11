import { PartialType } from '@nestjs/mapped-types';
import { CreateUserTimerDto } from './create-user_timer.dto';

export class UpdateUserTimerDto extends PartialType(CreateUserTimerDto) {}
