// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ChatAPI from './chat';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Chat extends APIResource {
  /**
   * Creates a chat completion for the given model
   */
  createCompletion(
    body: ChatCreateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<ChatCreateCompletionResponse> {
    return this._client.post('/v1/chat/completions', { body, ...options });
  }
}

export interface ChatCompletionMessage {
  MultiContent: Array<ChatCompletionMessage.MultiContent>;

  role: string;

  content?: string;

  function_call?: FunctionCall;

  name?: string;

  reasoning_content?: string;

  refusal?: string;

  tool_call_id?: string;

  tool_calls?: Array<ChatCompletionMessage.ToolCall>;
}

export namespace ChatCompletionMessage {
  export interface MultiContent {
    image_url?: MultiContent.ImageURL;

    text?: string;

    type?: string;
  }

  export namespace MultiContent {
    export interface ImageURL {
      detail?: string;

      url?: string;
    }
  }

  export interface ToolCall {
    function: ChatAPI.FunctionCall;

    type: string;

    id?: string;

    index?: number;
  }
}

export interface ContentFilterResults {
  hate?: ContentFilterResults.Hate;

  jailbreak?: ContentFilterResults.Jailbreak;

  profanity?: ContentFilterResults.Profanity;

  self_harm?: ContentFilterResults.SelfHarm;

  sexual?: ContentFilterResults.Sexual;

  violence?: ContentFilterResults.Violence;
}

export namespace ContentFilterResults {
  export interface Hate {
    filtered: boolean;

    severity?: string;
  }

  export interface Jailbreak {
    detected: boolean;

    filtered: boolean;
  }

  export interface Profanity {
    detected: boolean;

    filtered: boolean;
  }

  export interface SelfHarm {
    filtered: boolean;

    severity?: string;
  }

  export interface Sexual {
    filtered: boolean;

    severity?: string;
  }

  export interface Violence {
    filtered: boolean;

    severity?: string;
  }
}

export interface FunctionCall {
  arguments?: string;

  name?: string;
}

export interface FunctionDefinition {
  name: string;

  parameters: unknown;

  description?: string;

  strict?: boolean;
}

export interface Usage {
  completion_tokens: number;

  completion_tokens_details: Usage.CompletionTokensDetails;

  prompt_tokens: number;

  prompt_tokens_details: Usage.PromptTokensDetails;

  total_tokens: number;
}

export namespace Usage {
  export interface CompletionTokensDetails {
    accepted_prediction_tokens: number;

    audio_tokens: number;

    reasoning_tokens: number;

    rejected_prediction_tokens: number;
  }

  export interface PromptTokensDetails {
    audio_tokens: number;

    cached_tokens: number;
  }
}

export interface ChatCreateCompletionResponse {
  id: string;

  choices: Array<ChatCreateCompletionResponse.Choice>;

  created: number;

  httpHeader: { [key: string]: Array<string> };

  model: string;

  object: string;

  system_fingerprint: string;

  usage: Usage;

  prompt_filter_results?: Array<ChatCreateCompletionResponse.PromptFilterResult>;
}

export namespace ChatCreateCompletionResponse {
  export interface Choice {
    finish_reason: string;

    index: number;

    message: ChatAPI.ChatCompletionMessage;

    content_filter_results?: ChatAPI.ContentFilterResults;

    logprobs?: Choice.Logprobs;
  }

  export namespace Choice {
    export interface Logprobs {
      content: Array<Logprobs.Content>;
    }

    export namespace Logprobs {
      export interface Content {
        token: string;

        logprob: number;

        top_logprobs: Array<Content.TopLogprob>;

        bytes?: string;
      }

      export namespace Content {
        export interface TopLogprob {
          token: string;

          logprob: number;

          bytes?: string;
        }
      }
    }
  }

  export interface PromptFilterResult {
    index: number;

    content_filter_results?: ChatAPI.ContentFilterResults;
  }
}

export interface ChatCreateCompletionParams {
  messages: Array<ChatCompletionMessage>;

  model: string;

  chat_template_kwargs?: unknown;

  frequency_penalty?: number;

  function_call?: unknown;

  functions?: Array<FunctionDefinition>;

  logit_bias?: { [key: string]: number };

  logprobs?: boolean;

  max_completion_tokens?: number;

  max_tokens?: number;

  metadata?: { [key: string]: string };

  n?: number;

  parallel_tool_calls?: unknown;

  prediction?: ChatCreateCompletionParams.Prediction;

  presence_penalty?: number;

  reasoning_effort?: string;

  response_format?: ChatCreateCompletionParams.ResponseFormat;

  seed?: number;

  stop?: Array<string>;

  store?: boolean;

  stream?: boolean;

  stream_options?: ChatCreateCompletionParams.StreamOptions;

  temperature?: number;

  tool_choice?: unknown;

  tools?: Array<ChatCreateCompletionParams.Tool>;

  top_logprobs?: number;

  top_p?: number;

  user?: string;
}

export namespace ChatCreateCompletionParams {
  export interface Prediction {
    content: string;

    type: string;
  }

  export interface ResponseFormat {
    json_schema?: ResponseFormat.JsonSchema;

    type?: string;
  }

  export namespace ResponseFormat {
    export interface JsonSchema {
      name: string;

      strict: boolean;

      description?: string;
    }
  }

  export interface StreamOptions {
    include_usage?: boolean;
  }

  export interface Tool {
    type: string;

    function?: ChatAPI.FunctionDefinition;
  }
}

export declare namespace Chat {
  export {
    type ChatCompletionMessage as ChatCompletionMessage,
    type ContentFilterResults as ContentFilterResults,
    type FunctionCall as FunctionCall,
    type FunctionDefinition as FunctionDefinition,
    type Usage as Usage,
    type ChatCreateCompletionResponse as ChatCreateCompletionResponse,
    type ChatCreateCompletionParams as ChatCreateCompletionParams,
  };
}
