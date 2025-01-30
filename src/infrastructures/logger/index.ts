import winston from "winston";

const createLogger = (logLevel: string) =>
  winston.createLogger({
    level: logLevel,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
    ),
    transports: [
      new winston.transports.Console(),
      // new winston.transports.File({ filename: "error.log", level: "error" }),
    ],
    exceptionHandlers: [
      // new winston.transports.File({ filename: "exceptions.log" }),
    ],
    rejectionHandlers: [
      // new winston.transports.File({ filename: "rejections.log" }),
    ],
  });

export default createLogger;
export type logger = ReturnType<typeof createLogger>;
