import { IsNumber, IsOptional, IsString } from 'class-validator';

// 유저가 보내는 내용
export class CreateMovieDto {
  // 검증을 위한 데코레이터
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
