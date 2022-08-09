const model = require("../models");

// student add
exports.addStudent = async (req, res, next) => {
  try {
    await model.student.create({
      name: req.body.name,
      class: req.body.class,
      total_marks: req.body.total_marks,
    });
    res.status(200).json({ message: "Student add success" });
  } catch (err) {
    if (!err.statusCode) {
      err.message = "Internal Server Error !!";
      err.statusCode = 500;
    }
    next(err);
  }
};
// student update
exports.updateStudent = async (req, res, next) => {
  try {
    await model.student.update(
      {
        name: req.body.name,
        class: req.body.class,
        total_marks: req.body.total_marks,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Student update success" });
  } catch (err) {
    if (!err.statusCode) {
      err.message = "Internal Server Error !!";
      err.statusCode = 500;
    }
    next(err);
  }
};
// student delete
exports.deleteStudent = async (req, res, next) => {
  try {
    await model.student.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Student Delete success" });
  } catch (err) {
    if (!err.statusCode) {
      err.message = "Internal Server Error !!";
      err.statusCode = 500;
    }
    next(err);
  }
};
// get all students
exports.getAllStudent = async (req, res, next) => {
  try {
    const data = await model.student.findAll();
    res.status(200).json(data);
  } catch (err) {
    if (!err.statusCode) {
      err.message = "Internal Server Error !!";
      err.statusCode = 500;
    }
    next(err);
  }
};
// Teacher add
exports.addTeacher = async (req, res, next) => {
  try {
    await model.teacher.create({
      name: req.body.name,
      class: req.body.class,
    });
    res.status(200).json({ message: "Teacher add success" });
  } catch (err) {
    if (!err.statusCode) {
      err.message = "Internal Server Error !!";
      err.statusCode = 500;
    }
    next(err);
  }
};
// teacher update
exports.updateTeacher = async (req, res, next) => {
  try {
    await model.teacher.update(
      {
        name: req.body.name,
        class: req.body.class,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Teacher update success" });
  } catch (err) {
    if (!err.statusCode) {
      err.message = "Internal Server Error !!";
      err.statusCode = 500;
    }
    next(err);
  }
};
// student delete
exports.deleteTeacher = async (req, res, next) => {
  try {
    await model.teacher.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Teacher Delete success" });
  } catch (err) {
    if (!err.statusCode) {
      err.message = "Internal Server Error !!";
      err.statusCode = 500;
    }
    next(err);
  }
};
// get all teachers
exports.getAllTeacher = async (req, res, next) => {
  try {
    const data = await model.teacher.findAll();
    res.status(200).json(data);
  } catch (err) {
    if (!err.statusCode) {
      err.message = "Internal Server Error !!";
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.getPerc = async (req, res, next) => {
  try {
    const data = await model.student.findAll({
      where: { class: req.body.class },
    });
    let perc = 0;
    let max = 50 * data.length;
    let sum = 0;
    data.map((ele) => {
      sum = parseInt(ele.total_marks) + sum;
    });
    perc = (sum * 100) / max;
    res.status(200).json(perc);
  } catch (err) {
    if (!err.statusCode) {
      err.message = "Internal Server Error !!";
      err.statusCode = 500;
    }
    next(err);
  }
};
