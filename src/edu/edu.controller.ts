import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EduService } from './edu.service';
import { studentDetail } from './dto/student_deatil';
import { studentAction } from './dto/student_action';
@Controller('edu')
export class EduController {
  constructor(private readonly eduService: EduService) {}

  @Post('student-detail')
  sendtudentDetail(@Body() studentDetail: studentDetail) {
    return this.eduService.sendStudentDetail(studentDetail);
  }
}
