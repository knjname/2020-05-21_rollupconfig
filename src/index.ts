import { a } from "./utils/a";
import "./index.css";
export * from "./utils/b";
export { ClassA } from "./utils/a";
import { drop } from "lodash";
import preval from "preval.macro";

export const foobar: string =
  "asdf" +
  a +
  drop +
  preval`module.exports = [... Array(100)].map((_, i) => (i%3?"":"Fizz")+(i%5?"":"Buzz")||i ).join()`;
