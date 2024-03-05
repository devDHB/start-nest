import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// 유저가 보내는 내용
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
