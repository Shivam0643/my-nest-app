/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        {
            id: 1,
            name: "Shivam",
            age: 22
        },
        {
            id: 2,
            name: "Neha",
            age : 23
        },
    ]

    getAllStudents(){
        return this.students
    }

    getStudentsById(id: number){
        const student = this.students.find((s) => s.id === id);
        if(!student) throw new NotFoundException("Student not found");
        return student
    }

    //post
    createStudent(data: {name: string, age : number}){
        const newStudent = {
            id: Date.now(),
            ...data,
        };
        this.students.push(newStudent);
        return newStudent
    }

    //put
    updateStudent(id: number, data: {name: string, age : number}){
        const index = this.students.findIndex((s) => s.id === id);
        if(index === -1) throw new NotFoundException("Student not found!")
        this.students[index] = {id, ...data};
        return this.students[index]
    }

    //patch
    patchStudent(id: number, data: Partial<{name: string, age: number}>){
        const student = this.getStudentsById(id)
        Object.assign(student, data);
        return student;
    }

    //delete
    deleteStudent(id: number){
        const index = this.students.findIndex((s) => s.id === id);
        if(index === -1) throw new NotFoundException("Student not found!")
        const deleted = this.students.splice(index,1)
        return {messsage: 'Student Deleted', student: deleted[0]}
    }
}
