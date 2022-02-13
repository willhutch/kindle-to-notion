import { Parser, Notion } from "./models";

const parser = new Parser();
// const fs = require('fs');
const notion = new Notion();

(async () => {
  // parse clippings
  const clippings = parser.processClippings();
//     fs.writeFileSync("test.txt", new Buffer(clippings));

  // sync highlights (clippings) to notion
  await notion.syncHighlights(clippings);
})();
