
import {
  handleCors,
  handleBodyRequestParsing,
  handleHelmet,
  handleCompression
} from "./common";

import { handleAPIDocs } from "./apiDocs";

export default [
  handleCors,
  handleHelmet,
  handleBodyRequestParsing,
  handleCompression,
  handleAPIDocs
];