/**
 * ExcitesmsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, nullable, object, Schema, string } from '../schema';
import { Data1, data1Schema } from './data1';

export interface ViewAnSMS {
  status: string;
  message: string | null;
  data: Data1;
}

export const viewAnSMSSchema: Schema<ViewAnSMS> = object({
  status: ['status', string()],
  message: ['message', nullable(string())],
  data: ['data', lazy(() => data1Schema)],
});
