import orphan from "./index";
import { equal } from "assert";

it("should remove orphans", () => {
  equal(
    orphan(`hello world this is a somewhat long sentence`),
    `hello world this is a somewhat long\u00A0$1sentence`
  );
});
