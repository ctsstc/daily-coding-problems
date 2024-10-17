import { assertEquals } from "@std/assert";
import { dirname, fromFileUrl } from "jsr:@std/path";
import { Daily1851 } from "./daily-1851.ts";

const currentDirectory = dirname(fromFileUrl(import.meta.url));

Deno.test(async function example() {
  const exampleExpectation = await Deno.readTextFile(
    `${currentDirectory}/daily-1851-example.txt`
  );

  assertEquals(Daily1851("thisisazigzag", 4), exampleExpectation);
});
