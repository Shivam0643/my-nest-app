/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Student } from './students.schema';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor (private readonly studentService: StudentsService){}

    @Post()
    async addStudent(@Body() data: Partial<Student>){
        return this.studentService.createStudent(data)
    }

    @Get()
    async getStudents(){
        return this.studentService.getAllStudents();
    }

    @Get(':id')
    async getStudent(@Param('id') id: string){
        return this.studentService.getStudentsById(id);
    }

    @Put(':id')
    async updateStudent(
        @Param('id') id:string,
        @Body() data: Partial<Student>,
    ){
        return this.studentService.updateStudent(id, data)
    }
    @Patch(':id')
    async patchStudent(
        @Param('id') id:string,
        @Body() data: Partial<Student>,
    ){
        return this.studentService.patchStudent(id, data)
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id: string){
        return this.studentService.deleteStudent(id)
    }
}
