const {Router} = require("express");
const pool = require("../db");
const { error } = require("console");

const controllers = require("../controller/controller")

const router = Router();

router.get("/", controllers.getAllTodos);


router.post('/sequilize', controllers.getCreateTodosSequilze)

router.get('/sequilize/get/all', controllers.getAllTodosSequilze)

module.exports =  router;  



