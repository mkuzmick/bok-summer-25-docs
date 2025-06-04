### Why set up “concept-building playgrounds” in your AI workshop?

(You can call each station a **Conceptual Playground**—a bite-size, low-stakes space where participants *play first, formalize later*.)

| Key benefit                                              | What the research says                                                                                                                                                                                                                                                                                  | Why it matters for understanding LLMs                                                                                                                                                                                                                              |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Build accurate mental models before memorizing facts** | The *How People Learn* synthesis argues that new information only “sticks” when learners can attach it to an existing mental model; otherwise it becomes inert knowledge.([cradall.org][1])                                                                                                             | A five-minute romp in tiktokenizer lets novices *see* that the model’s “words” are numbered tokens. That anchor makes later explanations of context windows, embedding tables, or prompt engineering far less abstract.                                            |
| **Leverage active–constructive engagement**              | Interactive methods like Mazur’s Peer Instruction and Louis Deslauriers’s controlled study of physics classes consistently produce larger conceptual gains than lecture—even when students *feel* they learned less because effortful thinking is uncomfortable.([mazur.harvard.edu][2], [pnas.org][3]) | Asking participants to guess Semantle’s secret word (then watching the cosine-similarity score climb) is the AI analogue of Mazur’s clicker question: it forces them to grapple with the *geometry* of meaning instead of passively hearing about “vector spaces.” |
| **Exploit “productive failure” and low-stakes play**     | Kapur’s “productive failure” work shows that struggling with an unfamiliar problem first, then receiving instruction, yields deeper transfer than direct teaching alone.([boldscience.org][4])                                                                                                          | Letting users *fail* to predict how a weird emoji will tokenize—and then revealing the rule—makes the eventual explanation of byte-pair encoding memorable.                                                                                                        |
| **Surface misconceptions quickly**                       | Decades of research on intuitive physics (diSessa) and concept inventories reveal that misconceptions stay hidden until students make predictions and confront feedback.([asu.elsevierpure.com][5])                                                                                                     | Most novices assume the model “reads words.” Watching “supercalifragilisticexpialidocious” explode into a dozen tokens corrects that misconception in seconds.                                                                                                     |
| **Use simulations to condense complex phenomena**        | Studies on PhET interactive sims show they can out-perform hands-on labs for *conceptual* targets, because they strip away extraneous detail while preserving causal structure.([phet.colorado.edu][6])                                                                                                 | Tools like tiktokenizer are “PhET for NLP”: they foreground the causal chain (text → tokens → numbers) without diving into CUDA kernels or matrix calculus.                                                                                                        |
| **Close the expert–novice perception gap**               | Active-learning meta-analyses find novices often misjudge what helps them learn; structured play followed by reflection realigns intuition with reality.([en.wikipedia.org][7])                                                                                                                         | After a playground round, you can show API pricing tables in *tokens*, ask “Does this make more sense now?”, and watch the head-nods.                                                                                                                              |
| **Scale across disciplines**                             | Constructionist theory (Papert) and “computational thinking” frameworks show that manipulating concrete representations helps humanists as much as engineers.([files.eric.ed.gov][8])                                                                                                                   | A literature scholar can toy with Semantle’s similarity scores to feel why *metaphor* is a geometric neighbor relation; a sociologist can probe bias by testing token splits on names.                                                                             |

---

#### Pull-quote evidence you can cite in slides or a handout

* **Interactive engagement more than doubles conceptual gains.** Mazur’s multi-year data show normalized learning gains jumping from 0.23 to 0.48 when lectures are replaced by peer-discussion questions. ([mazur.harvard.edu][2])
* **Active classes beat lectures even when students *think* the opposite.** Deslauriers et al. (2019, *PNAS*) found higher exam scores in active sections despite lower “feeling of learning” ratings—a reminder to explain the value of effortful intuition-building. ([pnas.org][3])
* **“Productive failure” boosts far-transfer problem solving by ≈ 0.5 SD.** Kapur’s meta-analysis across 15 years shows that initial unguided exploration sets up deeper schema formation. ([boldscience.org][4])

---

### Designing your Conceptual Playgrounds

1. **Tiktokenizer Station — “Text → Numbers”**
   *Task:* Predict how a phrase will split, check, iterate.
   *Prompt for reflection:* “How would token length affect the price of a 1,000-word essay?”

2. **Semantle Station — “Vectors Have Neighborhoods”**
   *Task:* Cold-/hot-guess the secret word; plot guesses vs. similarity.
   *Reflection:* “What kind of words stayed cold even when they felt related? Why might the model see them as far apart?”

3. **Attention Heat-Map Station (BERTViz or similar)**
   *Task:* Paste a paragraph; toggle heads to see which words “look” at which.
   *Reflection:* “What surprises you about where attention flows?”

4. **Embedding Projector Fly-Through**
   *Task:* Drag clusters, color by POS or sentiment.
   *Reflection:* “Where do abstract concepts live compared to concrete nouns?”

---

### Bottom line

Conceptual Playgrounds are **fast, low-cost cognitive scaffolds**. They trade the impossible goal of teaching full linear-algebra fluency for the achievable goal of giving every instructor—whether in history, design, or computer science—a *working intuition* of how an LLM actually “sees” text. That intuition underpins more sophisticated, ethical, and creative classroom uses of AI.

[1]: https://cradall.org/sites/default/files/How%20People%20Learn-Brain_Mind_Experience_and%20School%20-%20Expanded%20Edition.pdf?utm_source=chatgpt.com "[PDF] How People Learn: Brain, Mind, Experience, and School"
[2]: https://mazur.harvard.edu/files/mazur/files/rep_538.pdf?utm_source=chatgpt.com "[PDF] Peer Instruction: - Making Science Engaging - Eric Mazur"
[3]: https://www.pnas.org/doi/10.1073/pnas.1821936116?utm_source=chatgpt.com "Measuring actual learning versus feeling of learning in response to ..."
[4]: https://boldscience.org/wp-content/uploads/2025/04/Productive-Failure.pdf?utm_source=chatgpt.com "[PDF] Productive Failure | BOLD"
[5]: https://asu.elsevierpure.com/en/publications/the-ontological-coherence-of-intuitive-physics?utm_source=chatgpt.com "The Ontological Coherence of Intuitive Physics"
[6]: https://phet.colorado.edu/en/research?utm_source=chatgpt.com "Research - PhET"
[7]: https://en.wikipedia.org/wiki/Active_learning?utm_source=chatgpt.com "Active learning"
[8]: https://files.eric.ed.gov/fulltext/EJ1212890.pdf?utm_source=chatgpt.com "[PDF] Integrating the Constructionist Learning Theory with Computational ..."
