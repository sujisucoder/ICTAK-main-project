const Project = require('../models/projectModel');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createProject = async (req, res) => {
    const { title, imageUrl, description, summary, overview, technologies, teamSize, duration } = req.body;

    // Check if all required fields are provided
    if (!title || !imageUrl || !description || !summary || !overview || !technologies || !teamSize || !duration) {
        return res.status(400).json({ message: "All required fields must be provided." });
    }

    const project = new Project({
        title,
        imageUrl,
        description,
        summary,
        overview,
        technologies,
        teamSize,
        duration
    });

    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.getProjectDetails = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        console.log(req.params.id);
        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }
        res.status(200).json({ success: true, project });
    } catch (error) {
        next(error);
    }
};

