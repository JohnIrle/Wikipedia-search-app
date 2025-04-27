// SPDX-FileCopyrightText: 2019 John Irle
//
// SPDX-License-Identifier: MIT

import { setupServer } from "msw/node";
import { handlers } from "./handlers"

export const server = setupServer(...handlers);
