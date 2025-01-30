import { createApp } from "./app";
import healtRouter from "./routes/health";

const app = createApp();

app.route("/health", healtRouter);

export default app;
