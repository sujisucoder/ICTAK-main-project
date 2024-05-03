const Student = require("../models/studentModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Project = require("../models/projectModel");


exports.registerStudent = async (req, res) => {
    try {
        const studentData = req.body;
        const newStudent = await Student.create(studentData);
        res.status(200).send({ message: "Student registered successfully", student: newStudent });
    } catch (error) {
        console.error("Error registering student:", error);
        res.status(500).send({ error: "Failed to register student" });
    }
};

exports.loginStudent = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    try {
        const student = await Student.findOne({ email });

        if (!student) {
            res.json({ message: 'Student not found' });
            return;
        }

        const passwordMatch = await bcrypt.compare(password, student.password);

        if (passwordMatch) {
            let payload = { email: email, pwd: password };
            let token = jwt.sign(payload, 'studentapp');
            res.send({ message: 'Login success', token: token });
        } else {
            res.json({ message: 'Login failed' });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Failed to login" });
    }
};



exports.addComment = async (req, res, next) => {
  const { comment } = req.body;
  try {
    const postComment = await Project.findByIdAndUpdate(req.params.id, {
      $push: { comments: { text: comment, postedBy: req.user._id } }
    },
    { new: true }
    ).populate('comments.postedBy', 'name email');
    res.status(200).json({
      success: true,
      post: postComment
    });
  } catch (error) {
    next(error);
  }
};