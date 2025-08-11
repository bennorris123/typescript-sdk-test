// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RelaxaiTest } from '../client';

export abstract class APIResource {
  protected _client: RelaxaiTest;

  constructor(client: RelaxaiTest) {
    this._client = client;
  }
}
