import { query } from "../db.js";

export const getStudents = async() => {
    const {rows} = await query('SELECT * FROM student_details')
    return rows;
}

export const createStudent = async(studentDeets) => {
    const {id, name, course, year, semester, status} = studentDeets
    const {rows} = await query('INSERT INTO student_details (id, name, course, year, semester, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [id, name, course, year, semester, status]
    );

    return rows[0]
}

export const updateStudent = async(studentDeets, studentId) => {
    const {name, course, year, semester, status} = studentDeets
    const {rows} = await query('UPDATE student_details SET name = $1, course = $2, year = $3, semester = $4, status = $5 WHERE id = $6 RETURNING *', [name, course, year, semester, status, studentId]
    );

    return rows[0]
}

export const deleteStudent = async(studentId) => {
    const { rowCount } = await query('DELETE from student_details WHERE id = $1 RETURNING *', [studentId]
    );

    return rowCount > 0
}


