import * as express from 'express';
import * as mongoose from 'mongoose';
const HttpStatus = require('http-status-codes');
import * as _ from 'lodash';
import { ExpressError } from '../utils/express.error';

export function validateObjectId(req: express.Request, _res: express.Response, next: express.NextFunction) {
	const id = _.get(req, 'params.id');
	if (id && !mongoose.Types.ObjectId.isValid(id)) {
		return next(new ExpressError('The Id specified is invalid', HttpStatus.BAD_REQUEST));
	}

	next();
}
