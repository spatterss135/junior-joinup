const router = require("express").Router();
const db = require("../models");
const { Op } = require("sequelize");

// Get all users and their created_projects
router.get("/", async (req, res) => {
  const allUsersWithCreatedProjects = await db.User.findAll({
    include: [
      {
        model: db.Project,
        as: "created_projects",
      },
    ],
  });
  res.json(allUsersWithCreatedProjects);
});

// Get specific user and all projects they are participating in. This is includes projects that they created.
router.get("/specific/:id", async (req, res) => {
  const userProjectIdObjects = await db.UserProject.findAll({
    where: { user_id: req.params.id },
  });
  const projectIdArray = userProjectIdObjects.map((project) => {
    return project.project_id;
  });
  const projectRoleArray = userProjectIdObjects.map((project) => {
    return project.role;
});
  const userProjects = await db.Project.findAll({
    where: {
      id: { [Op.or]: projectIdArray },
    },
  });
  userProjectsWithRoleIncluded = userProjects.map((project, index)=> {
    return {
        ...project.dataValues,
        role: projectRoleArray[index]
    }
  })
  const user = await db.User.findOne({where: {id: req.params.id}})
  const userAndProjects = {...user.dataValues, projects: userProjectsWithRoleIncluded}
  res.json(userAndProjects);
});

// Delete a user and all projects they have created.
router.delete("/:id", async (req, res) => {
  db.User.destroy({ where: { id: req.params.id } });
  res.json("Done");
});

module.exports = router;
