const express = require("express");
const router = express.Router();
const api = require("../controller");

router.post("/student/add", api.addStudent); //student
router.put("/student/update/:id", api.updateStudent); // update
router.delete("/student/delete/:id", api.deleteStudent); //delete
router.get("/student/getAll", api.getAllStudent);

router.post("/teacher/add", api.addTeacher);
router.put("/teacher/update/:id", api.updateTeacher);
router.delete("/teacher/delete/:id", api.deleteTeacher);
router.get("/teacher/getAll", api.getAllTeacher);

router.post("/teacher/getPerc", api.getPerc); // body class

module.exports = router;
