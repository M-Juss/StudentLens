import express from 'express'

import * as studentController from  '../controllers/studentController.js'

const router = express.Router()

router.get('/students', studentController.getStudents)

router.post('/students', studentController.createStudents)

export default router
