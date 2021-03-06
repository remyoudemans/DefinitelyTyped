// Type definitions for express-async-wrap 1.0.0
// Project: https://github.com/Greenfields/express-async-wrap
// Definitions by: Remy Oudemans <https://github.com/remyoudemans>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="express-serve-static-core" />

import { NextFunction } from 'connect';
import { Response, RequestHandler, ErrorRequestHandler, Request } from 'express-serve-static-core';

declare function asyncWrap<ReqType extends Request, ResType extends Response>(
    handler: (req: ReqType, res: ResType, next: NextFunction) => Promise<void>
  ): RequestHandler;

declare function asyncWrap<ReqType extends Request, ResType extends Response>(
    handler: (err: any, req: ReqType, res: ResType, next: NextFunction) => Promise<void>,
  ): ErrorRequestHandler;

export = asyncWrap;
