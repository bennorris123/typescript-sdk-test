// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Relaxai from 'relaxai';

const client = new Relaxai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // skipped: tests are disabled for the time being
  test.skip('createCompletion: only required params', async () => {
    const responsePromise = client.chat.createCompletion({
      messages: [{ MultiContent: [{}], role: 'role' }],
      model: 'model',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createCompletion: required and optional params', async () => {
    const response = await client.chat.createCompletion({
      messages: [
        {
          MultiContent: [{ image_url: { detail: 'detail', url: 'url' }, text: 'text', type: 'type' }],
          role: 'role',
          content: 'content',
          function_call: { arguments: 'arguments', name: 'name' },
          name: 'name',
          reasoning_content: 'reasoning_content',
          refusal: 'refusal',
          tool_call_id: 'tool_call_id',
          tool_calls: [
            { function: { arguments: 'arguments', name: 'name' }, type: 'type', id: 'id', index: 0 },
          ],
        },
      ],
      model: 'model',
      chat_template_kwargs: {},
      frequency_penalty: 0,
      function_call: {},
      functions: [{ name: 'name', parameters: {}, description: 'description', strict: true }],
      logit_bias: { foo: 0 },
      logprobs: true,
      max_completion_tokens: 0,
      max_tokens: 0,
      metadata: { foo: 'string' },
      n: 0,
      parallel_tool_calls: {},
      prediction: { content: 'content', type: 'type' },
      presence_penalty: 0,
      reasoning_effort: 'reasoning_effort',
      response_format: {
        json_schema: { name: 'name', strict: true, description: 'description' },
        type: 'type',
      },
      seed: 0,
      stop: ['string'],
      store: true,
      stream: true,
      stream_options: { include_usage: true },
      temperature: 0,
      tool_choice: {},
      tools: [
        {
          type: 'type',
          function: { name: 'name', parameters: {}, description: 'description', strict: true },
        },
      ],
      top_logprobs: 0,
      top_p: 0,
      user: 'user',
    });
  });
});
