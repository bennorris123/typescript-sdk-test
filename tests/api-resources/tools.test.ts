// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RelaxaiTest from 'relaxai-test';

const client = new RelaxaiTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tools', () => {
  // skipped: tests are disabled for the time being
  test.skip('scrap: only required params', async () => {
    const responsePromise = client.tools.scrap({ query: 'query', urls: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('scrap: required and optional params', async () => {
    const response = await client.tools.scrap({ query: 'query', urls: ['string'] });
  });
});
