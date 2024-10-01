import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(5000, () => console.log("Server Open and Connected To Database"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map