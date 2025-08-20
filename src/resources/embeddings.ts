// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Embeddings extends APIResource {
  /**
   * Creates an embedding vector representing the input text.
   */
  createEmbedding(
    body: EmbeddingCreateEmbeddingParams,
    options?: RequestOptions,
  ): APIPromise<EmbeddingResponse> {
    return this._client.post('/v1/embeddings', { body, ...options });
  }
}

export interface EmbeddingRequest {
  input: unknown;

  model: string;

  dimensions?: number;

  encoding_format?: string;

  user?: string;
}

export interface EmbeddingResponse {
  data: Array<EmbeddingResponse.Data>;

  httpHeader: { [key: string]: Array<string> };

  model: string;

  object: string;

  usage: Shared.OpenAIUsage;
}

export namespace EmbeddingResponse {
  export interface Data {
    embedding: Array<number>;

    index: number;

    object: string;
  }
}

export interface EmbeddingCreateEmbeddingParams {
  input: unknown;

  model: string;

  dimensions?: number;

  encoding_format?: string;

  user?: string;
}

export declare namespace Embeddings {
  export {
    type EmbeddingRequest as EmbeddingRequest,
    type EmbeddingResponse as EmbeddingResponse,
    type EmbeddingCreateEmbeddingParams as EmbeddingCreateEmbeddingParams,
  };
}
