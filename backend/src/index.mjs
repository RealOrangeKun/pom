import { app } from "./app.mjs";
import config from "./config/config.mjs";



app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
})