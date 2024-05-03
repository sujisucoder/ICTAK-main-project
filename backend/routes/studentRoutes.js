const express = require("express");
const router = express.Router();
const {registerStudent,loginStudent, addComment} = require("../controllers/studentController");
const {getAllProjects,createProject } = require("../controllers/projectController");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Student Routes
router.post('/register', registerStudent);
router.post('/login', loginStudent);
router.post('/add-comment/:id', addComment);

// Project Routes
router.get('/get-projects', getAllProjects);
router.post('/create-project', createProject);

module.exports = router;
