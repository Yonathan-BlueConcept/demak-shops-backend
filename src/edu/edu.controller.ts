import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EduService } from './edu.service';
import { studentDetail } from './dto/student_deatil';

@Controller('edu')
export class EduController {
  constructor(private readonly eduService: EduService) {}

  @Post('student-detail')
  sendtudentDetail(@Body() studentDetal: studentDetail) {
    return this.eduService.sendStudentDetail(studentDetal);
  }

}
