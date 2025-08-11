# Chat

Types:

- <code><a href="./src/resources/chat.ts">ChatCompletionMessage</a></code>
- <code><a href="./src/resources/chat.ts">ContentFilterResults</a></code>
- <code><a href="./src/resources/chat.ts">FunctionCall</a></code>
- <code><a href="./src/resources/chat.ts">FunctionDefinition</a></code>
- <code><a href="./src/resources/chat.ts">StreamOptions</a></code>
- <code><a href="./src/resources/chat.ts">Usage</a></code>
- <code><a href="./src/resources/chat.ts">ChatCreateCompletionResponse</a></code>

Methods:

- <code title="post /v1/chat/completions">client.chat.<a href="./src/resources/chat.ts">createCompletion</a>({ ...params }) -> ChatCreateCompletionResponse</code>

# Completions

Types:

- <code><a href="./src/resources/completions.ts">CompletionCreateResponse</a></code>

Methods:

- <code title="post /v1/completions">client.completions.<a href="./src/resources/completions.ts">create</a>({ ...params }) -> CompletionCreateResponse</code>

# Embeddings

Types:

- <code><a href="./src/resources/embeddings.ts">EmbeddingCreateResponse</a></code>

Methods:

- <code title="post /v1/embeddings">client.embeddings.<a href="./src/resources/embeddings.ts">create</a>({ ...params }) -> EmbeddingCreateResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /v1/health">client.health.<a href="./src/resources/health.ts">check</a>() -> string</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">Model</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v1/models/{model}">client.models.<a href="./src/resources/models.ts">retrieve</a>(model) -> Model</code>
- <code title="get /v1/models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
