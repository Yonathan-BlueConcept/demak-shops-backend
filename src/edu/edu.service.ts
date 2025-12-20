import { Injectable } from '@nestjs/common';
import { studentDetail } from './dto/student_deatil';

@Injectable()
export class EduService {
  sendStudentDetail(studentDetail: studentDetail) {
    console.log("Student Detail Received:", studentDetail); 
    return {msg:"successful"};
  }

 
}
