/**
 * ExcitesmsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, nullable, object, Schema, string } from '../schema';

export interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

export const linkSchema: Schema<Link> = object({
  url: ['url', nullable(string())],
  label: ['label', string()],
  active: ['active', boolean()],
});