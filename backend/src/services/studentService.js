import { query } from "../db.js";

export const getStudents = async() => {
    const {rows} = await query('SELECT * FROM student_details')
    return rows;
}