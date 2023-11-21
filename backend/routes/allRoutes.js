module.exports = (app)=>{
    app.use("/api/bundle",require("./BundleRoute"))
    app.use("/api/group",require("./GroupRoute"))
    app.use("/api/file",require("./FileRoute"))
    app.use("/api/resource",require("./ResourceRoute"))
    app.use("/api/auth",require("./authRoutes"))
}

