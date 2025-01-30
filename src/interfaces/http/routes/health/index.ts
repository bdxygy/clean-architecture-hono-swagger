import { createRouter } from "~/interfaces/http/app";
import { healthRouteGet } from "./routes";
import { healthHandleGet } from "./handlers";

const healtRouter = createRouter();

healtRouter.openapi(healthRouteGet, healthHandleGet);

export default healtRouter;
