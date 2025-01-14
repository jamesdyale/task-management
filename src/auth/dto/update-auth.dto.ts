import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './auth-credentials.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
