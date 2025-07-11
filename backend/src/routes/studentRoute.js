import express from 'express'

import * as studentController from  '../controllers/studentController.js'

const router = express.Router()

router.get('/students', studentController.getStudents)

router.get('/students/:id', studentController.getSelectedStudent)

router.post('/students', studentController.createStudent)

router.put('/students/:id', studentController.updateStudent)

router.delete('/students/:id', studentController.deleteStudent)

router.get('/students/search', studentController.searchStudent)

export default router
