import winston from "winston";
import { format } from "logform";

const alignedWithColorsAndTime = format.combine(
  format.colorize(),
  format.timestamp(),
  format.align(),
  format.printf((info) => `${info.level} ${info.timestamp}:  ${info.message}`)
);

export const logger = winston.createLogger({
  level: "debug",
  transports: [
    new winston.transports.Console({ format: alignedWithColorsAndTime }),
  ],
});
