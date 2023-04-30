import {Router} from "express";

export default () => {
    const router = Router();

    router.get("/:name", (req, res) => {
        res.send(`Hello, ${req.params.name}!`);
    });

    return router;
};