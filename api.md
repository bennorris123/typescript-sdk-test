# Relaxai

Types:

- <code><a href="./src/resources/top-level.ts">HealthResponse</a></code>

Methods:

- <code title="get /v1/health">client.<a href="./src/index.ts">health</a>() -> string</code>

# Shared

Types:

- <code><a href="./src/resources/shared.ts">OpenAICompletionTokensDetails</a></code>
- <code><a href="./src/resources/shared.ts">OpenAIPromptTokensDetails</a></code>
- <code><a href="./src/resources/shared.ts">OpenAIUsage</a></code>

# Chat

Types:

- <code><a href="./src/resources/chat.ts">ChatCompletionMessage</a></code>
- <code><a href="./src/resources/chat.ts">ChatCompletionRequest</a></code>
- <code><a href="./src/resources/chat.ts">ChatCompletionResponse</a></code>
- <code><a href="./src/resources/chat.ts">ContentFilterResults</a></code>
- <code><a href="./src/resources/chat.ts">FunctionCall</a></code>
- <code><a href="./src/resources/chat.ts">FunctionDefinition</a></code>
- <code><a href="./src/resources/chat.ts">StreamOptions</a></code>

Methods:

- <code title="post /v1/chat/completions">client.chat.<a href="./src/resources/chat.ts">createCompletion</a>({ ...params }) -> ChatCompletionResponse</code>

# Embeddings

Types:

- <code><a href="./src/resources/embeddings.ts">EmbeddingRequest</a></code>
- <code><a href="./src/resources/embeddings.ts">EmbeddingResponse</a></code>

Methods:

- <code title="post /v1/embeddings">client.embeddings.<a href="./src/resources/embeddings.ts">createEmbedding</a>({ ...params }) -> EmbeddingResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">Model</a></code>
- <code><a href="./src/resources/models.ts">ModelList</a></code>

Methods:

- <code title="get /v1/models">client.models.<a href="./src/resources/models.ts">listModels</a>() -> ModelList</code>
- <code title="get /v1/models/{model}">client.models.<a href="./src/resources/models.ts">retrieveModel</a>(model) -> Model</code>
