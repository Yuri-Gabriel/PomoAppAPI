import { PartialType } from '@nestjs/mapped-types';
import { CreateTimerDto } from './create-timer.dto';

export class UpdateTimerDto extends PartialType(CreateTimerDto) {}
