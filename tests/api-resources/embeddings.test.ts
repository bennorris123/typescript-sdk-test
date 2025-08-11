// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RelaxaiTest from 'relaxai-test';

const client = new RelaxaiTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource embeddings', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.embeddings.create({ input: {}, model: 'model' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.embeddings.create({
      input: {},
      model: 'model',
      dimensions: 0,
      encoding_format: 'encoding_format',
      user: 'user',
    });
  });
});
