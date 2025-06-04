**tiktokenizer**
Drop in a sentence, and tiktokenizer cracks it apart into the *tokens*—tiny chunks of characters—that GPT-style models actually see. Each token comes with the numeric ID the model looks up in its embedding matrix, so you can watch “ChatGPT” convert prose into a chain of numbers before it thinks about meaning. Play for a few minutes and you’ll notice that common words become single tokens while rarer strings shatter into smaller pieces; emojis and “weird” Unicode get especially fragmented. Participants walk away with an intuition that LLMs don’t “read words,” they juggle fixed-length IDs, and that token length—not character or word count—drives context-window limits and API costs. ([tiktokenizer.vercel.app][1], [cookbook.openai.com][2])

**Semantle**
Semantle is Wordle on philosophy grad-school mode: instead of colored letters, you get a “semantic similarity” score between your guess and a hidden target word. Those scores come from the cosine distance of word vectors in a pre-trained embedding space, so every “hotter/colder” hint is literally a vector math measurement. As players triangulate toward the secret word, they feel how language models represent meaning as positions in a high-dimensional landscape where *cat* is closer to *dog* than to *justice*. The game exposes two key ideas: (1) small vector shifts can mean big conceptual jumps, and (2) relationships like analogy or metaphor emerge from geometry, not dictionaries. ([semantle.com][3], [legacy.semantle.com][4])

---

### More hands-on mini-labs to spark “A-ha!” moments

| Tool                                 | What learners experience                                                                                                   | Core AI concept surfaced                                                                             |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **TensorFlow Embedding Projector**   | Fly through 3-D point clouds of word or sentence vectors, color-code by label, and manually cluster them.                  | Embeddings and the geometry of meaning. ([projector.tensorflow.org][5])                              |
| **BERTViz (Attention Visualizer)**   | Paste text and watch animated lines show which tokens attend to which across layers/heads.                                 | Self-attention as dynamic “spotlights” that the model moves around each token. ([github.com][6])     |
| **Transformer Explainer (Poloclub)** | Step through a tiny GPT that predicts the next word while you toggle residual connections and see probability shifts live. | How stacking layers, residuals, and attention combine to generate text. ([poloclub.github.io][7])    |
| **OpenAI Tokenizer Playground**      | Similar to tiktokenizer but official; lets users test where context limits hit and compare models’ token splits.           | Practical sense of context windows and model-specific tokenization rules. ([platform.openai.com][8]) |

Any two or three of these stations, mixed with tiktokenizer and Semantle, give your grad-student instructors a concrete, playful feel for the math under the magic—perfect prep for teaching in the age of AI.

[1]: https://tiktokenizer.vercel.app/?utm_source=chatgpt.com "Tiktokenizer"
[2]: https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken?utm_source=chatgpt.com "How to count tokens with Tiktoken - OpenAI Cookbook"
[3]: https://semantle.com/?utm_source=chatgpt.com "Semantle | Daily Word Guessing Game"
[4]: https://legacy.semantle.com/?utm_source=chatgpt.com "Semantle"
[5]: https://projector.tensorflow.org/?utm_source=chatgpt.com "Embedding projector"
[6]: https://github.com/jessevig/bertviz?utm_source=chatgpt.com "BertViz: Visualize Attention in NLP Models (BERT, GPT2, BART, etc.)"
[7]: https://poloclub.github.io/transformer-explainer/?utm_source=chatgpt.com "LLM Transformer Model Visually Explained"
[8]: https://platform.openai.com/tokenizer?utm_source=chatgpt.com "OpenAI API: Tokenizer"
