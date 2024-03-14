import {create,get,get1,update,remove} from "../controlles/user.controller"

const userRoutes= app =>{
    app.post("/user",create);
    app.get("/users",get)
    app.get("/user/:id",get1)
    app.put("/user/:id",update)
    app.delete("/user/:id",remove)
}

export default userRoutes;

