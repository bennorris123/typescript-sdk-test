// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ChatAPI from './chat';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Completions extends APIResource {
  /**
   * Creates a completion for the given model
   *
   * @deprecated
   */
  create(body: CompletionCreateParams, options?: RequestOptions): APIPromise<CompletionCreateResponse> {
    return this._client.post('/v1/completions', { body, ...options });
  }
}

export interface CompletionCreateResponse {
  id: string;

  choices: Array<CompletionCreateResponse.Choice>;

  created: number;

  httpHeader: { [key: string]: Array<string> };

  model: string;

  object: string;

  usage: ChatAPI.Usage;
}

export namespace CompletionCreateResponse {
  export interface Choice {
    finish_reason: string;

    index: number;

    logprobs: Choice.Logprobs;

    text: string;
  }

  export namespace Choice {
    export interface Logprobs {
      text_offset: Array<number>;

      token_logprobs: Array<number>;

      tokens: Array<string>;

      top_logprobs: Array<{ [key: string]: number }>;
    }
  }
}

export interface CompletionCreateParams {
  model: string;

  best_of?: number;

  echo?: boolean;

  frequency_penalty?: number;

  logit_bias?: { [key: string]: number };

  logprobs?: number;

  max_tokens?: number;

  metadata?: { [key: string]: string };

  n?: number;

  presence_penalty?: number;

  prompt?: unknown;

  seed?: number;

  stop?: Array<string>;

  store?: boolean;

  stream?: boolean;

  stream_options?: ChatAPI.StreamOptions;

  suffix?: string;

  temperature?: number;

  top_p?: number;

  user?: string;
}

export declare namespace Completions {
  export {
    type CompletionCreateResponse as CompletionCreateResponse,
    type CompletionCreateParams as CompletionCreateParams,
  };
}
