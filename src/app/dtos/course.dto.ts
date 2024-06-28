import {LessonDto} from "./lesson.dto";

export interface CourseDto {
  id?: number;
  title: string;
  description: string;
  instructorId: number;
  lessons: LessonDto[];
}
