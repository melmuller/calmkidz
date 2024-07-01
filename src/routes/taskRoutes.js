const { Router } = require("express");
const router = Router();

const { storeTask, buscandoCom } = require("../controller/taskController");

router.post("/store/task", storeTask);

router.get("/buscandoPosts", buscandoCom);

module.exports = router;