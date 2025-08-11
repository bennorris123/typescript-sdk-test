// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ChatAPI from './chat';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Embeddings extends APIResource {
  /**
   * Creates an embedding vector representing the input text.
   */
  create(body: EmbeddingCreateParams, options?: RequestOptions): APIPromise<EmbeddingCreateResponse> {
    return this._client.post('/v1/embeddings', { body, ...options });
  }
}

export interface EmbeddingCreateResponse {
  data: Array<EmbeddingCreateResponse.Data>;

  httpHeader: { [key: string]: Array<string> };

  model: string;

  object: string;

  usage: ChatAPI.Usage;
}

export namespace EmbeddingCreateResponse {
  export interface Data {
    embedding: Array<number>;

    index: number;

    object: string;
  }
}

export interface EmbeddingCreateParams {
  input: unknown;

  model: string;

  dimensions?: number;

  encoding_format?: string;

  user?: string;
}

export declare namespace Embeddings {
  export {
    type EmbeddingCreateResponse as EmbeddingCreateResponse,
    type EmbeddingCreateParams as EmbeddingCreateParams,
  };
}
