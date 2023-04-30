import {Router} from "express";
import {UserService} from "../services/user.service";

const userService = new UserService();

export default () => {
    const router = Router();

    router.get("/", async (req, res) => {
        res.send(await userService.findAllUsers());
    });

    router.post("/", async (req, res) => {
        await userService.addUser(req.body);
        res.end();
    });

    router.put("/:id", async (req, res) => {
        await userService.updateUser(req.params.id, req.body);
        res.end();
    });

    router.delete("/:id", async (req, res) => {
        await userService.deleteUser(req.params.id);
        res.end();
    });

    return router;
};
