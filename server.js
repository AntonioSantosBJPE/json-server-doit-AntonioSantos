const cors = require("cors");
const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3333;

app.db = router.db;

const rules = auth.rewriter({
  "/users*": "/600/users$1",
  "/tasks*": "/600/tasks$1",
  "/tokenAuth": "/440/tokenAuth$1",
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
