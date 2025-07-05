import { query } from "../db.js";

export const getStudents = async() => {
    const {rows} = await query('SELECT * FROM student_details')
    return rows;
}

export const createStudents = async(studentDeets) => {
    const {id, name, course, year, semester, status} = studentDeets
    const {rows} = await query('INSERT INTO student_details (id, name, course, year, semester, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [id, name, course, year, semester, status]
    );

    return rows[0]
}

