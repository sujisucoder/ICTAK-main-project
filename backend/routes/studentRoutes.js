const express = require("express");
const router = express.Router();
const {registerStudent,loginStudent, addComment, addLike, removeLike } = require("../controllers/studentController");
const {getAllProjects,createProject, getProjectDetails  } = require("../controllers/projectController");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Student Routes
router.post('/register', registerStudent);
router.post('/login', loginStudent);
router.post('/add-comment/:id', addComment);

// Project Routes
router.get('/get-projects', getAllProjects);
router.post('/create-project', createProject);
router.get('/project-details/:id', getProjectDetails);


module.exports = router;
