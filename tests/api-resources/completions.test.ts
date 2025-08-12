// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RelaxaiTest from 'relaxai-test';

const client = new RelaxaiTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource completions', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.completions.create({ model: 'model' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.completions.create({
      model: 'model',
      best_of: 0,
      echo: true,
      frequency_penalty: 0,
      logit_bias: { foo: 0 },
      logprobs: 0,
      max_tokens: 0,
      metadata: { foo: 'string' },
      n: 0,
      presence_penalty: 0,
      prompt: {},
      seed: 0,
      stop: ['string'],
      store: true,
      stream: true,
      stream_options: { include_usage: true },
      suffix: 'suffix',
      temperature: 0,
      top_p: 0,
      user: 'user',
    });
  });
});
