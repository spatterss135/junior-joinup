const router = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize');




router.get('/', async (req, res) => {
    const allProjects = await db.Project.findAll({
        include: [{
            model: db.User,
            as: 'creator'
        }]
    });
    res.json(allProjects);
})




module.exports = router