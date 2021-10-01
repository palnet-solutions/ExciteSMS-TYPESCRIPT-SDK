/**
 * ExcitesmsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { SendSMS, sendSMSSchema } from '../models/sendSMS';
import { SendSMSRequest, sendSMSRequestSchema } from '../models/sendSMSRequest';
import { ViewAnSMS, viewAnSMSSchema } from '../models/viewAnSMS';
import { string } from '../schema';
import { BaseController } from './baseController';

export class MiscController extends BaseController {
  /**
   * Excite SMS SMS API allows you to send and receive SMS messages to and from any country in the world
   * through a REST API. Each message is identified by a unique random ID so that users can always check
   * the status of a message using the given endpoint.
   *
   * @param accept
   * @param body
   * @return Response from the API call
   */
  async sendSMS(
    accept: string,
    body: SendSMSRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SendSMS>> {
    const req = this.createRequest('POST', '/sms/send');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      body: [body, sendSMSRequestSchema],
    });
    req.header('Accept', mapped.accept);
    req.json(mapped.body);
    return req.callAsJson(sendSMSSchema, requestOptions);
  }

  /**
   * @param uid You can use Excite SMS's SMS API to retrieve information of an existing inbound or outbound
   *                      SMS message.  You only need to supply the unique message id that was returned upon creation
   *                      or receiving.
   * @return Response from the API call
   */
  async viewAnSMS(
    uid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ViewAnSMS>> {
    const req = this.createRequest('GET', '/sms');
    const mapped = req.prepareArgs({ uid: [uid, string()] });
    req.query('uid', mapped.uid);
    return req.callAsJson(viewAnSMSSchema, requestOptions);
  }
}