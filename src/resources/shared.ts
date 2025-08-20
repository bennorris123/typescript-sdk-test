// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface OpenAICompletionTokensDetails {
  accepted_prediction_tokens: number;

  audio_tokens: number;

  reasoning_tokens: number;

  rejected_prediction_tokens: number;
}

export interface OpenAIPromptTokensDetails {
  audio_tokens: number;

  cached_tokens: number;
}

export interface OpenAIUsage {
  completion_tokens: number;

  completion_tokens_details: OpenAICompletionTokensDetails;

  prompt_tokens: number;

  prompt_tokens_details: OpenAIPromptTokensDetails;

  total_tokens: number;
}
