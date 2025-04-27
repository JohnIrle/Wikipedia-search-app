// SPDX-FileCopyrightText: 2019 John Irle
//
// SPDX-License-Identifier: MIT

import { rest } from "msw";

export const handlers = [
  rest.get("https://en.wikipedia.org/w/api.php", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        query: {
          14892: {
            pageid: 14892,
            ns: 0,
            title: "Intelligence quotient",
            index: 10,
            extract:
              "An intelligence quotient (IQ) is a total score derived from a set of standardized tests or subtests designed to assess human intelligence.",
            contentmodel: "wikitext",
            pagelanguage: "en",
            pagelanguagehtmlcode: "en",
            pagelanguagedir: "ltr",
            touched: "2022-02-22T16:24:33Z",
            lastrevid: 1070670945,
            length: 160964,
            fullurl: "https://en.wikipedia.org/wiki/Intelligence_quotient",
            editurl:
              "https://en.wikipedia.org/w/index.php?title=Intelligence_quotient&action=edit",
            canonicalurl: "https://en.wikipedia.org/wiki/Intelligence_quotient",
            thumbnail: {
              source:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Raven_Matrix.svg/100px-Raven_Matrix.svg.png",
              width: 100,
              height: 100,
            },
            pageimage: "Raven_Matrix.svg",
          },
          29090: {
            pageid: 29090,
            ns: 0,
            title: "Software testing",
            index: 3,
            extract:
              "Software testing is the act of examining the artifacts and the behavior of the software under test by validation and verification.",
            contentmodel: "wikitext",
            pagelanguage: "en",
            pagelanguagehtmlcode: "en",
            pagelanguagedir: "ltr",
            touched: "2022-02-21T19:05:52Z",
            lastrevid: 1072404730,
            length: 95358,
            fullurl: "https://en.wikipedia.org/wiki/Software_testing",
            editurl:
              "https://en.wikipedia.org/w/index.php?title=Software_testing&action=edit",
            canonicalurl: "https://en.wikipedia.org/wiki/Software_testing",
          },
        },
      })
    );
  }),
];
