// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Models extends APIResource {
  /**
   * Get the details of the given model
   */
  retrieve(model: string, options?: RequestOptions): APIPromise<Model> {
    return this._client.get(path`/v1/models/${model}`, options);
  }

  /**
   * List all the available models
   */
  list(options?: RequestOptions): APIPromise<ModelListResponse> {
    return this._client.get('/v1/models', options);
  }
}

export interface Model {
  id: string;

  created: number;

  httpHeader: { [key: string]: Array<string> };

  object: string;

  owned_by: string;

  parent: string;

  permission: Array<Model.Permission>;

  root: string;
}

export namespace Model {
  export interface Permission {
    id: string;

    allow_create_engine: boolean;

    allow_fine_tuning: boolean;

    allow_logprobs: boolean;

    allow_sampling: boolean;

    allow_search_indices: boolean;

    allow_view: boolean;

    created: number;

    group: unknown;

    is_blocking: boolean;

    object: string;

    organization: string;
  }
}

export interface ModelListResponse {
  data: Array<Model>;

  httpHeader: { [key: string]: Array<string> };
}

export declare namespace Models {
  export { type Model as Model, type ModelListResponse as ModelListResponse };
}
