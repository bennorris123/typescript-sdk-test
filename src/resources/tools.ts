// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Tools extends APIResource {
  /**
   * Scrap the given URL and return the text content.
   */
  scrap(body: ToolScrapParams, options?: RequestOptions): APIPromise<ToolScrapResponse> {
    return this._client.post('/v1/tools/scrap', { body, ...options });
  }
}

export type ToolScrapResponse = Array<ToolScrapResponse.ToolScrapResponseItem>;

export namespace ToolScrapResponse {
  export interface ToolScrapResponseItem {
    /**
     * Error message if scraping failed
     */
    error: string;

    markdown: string;

    summarize: string;

    title: string;

    url: string;
  }
}

export interface ToolScrapParams {
  query: string;

  urls: Array<string>;
}

export declare namespace Tools {
  export { type ToolScrapResponse as ToolScrapResponse, type ToolScrapParams as ToolScrapParams };
}
