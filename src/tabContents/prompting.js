
const prompting = () => {
    const concepts = [
        {
            title: "Prompt crafting",
            sample: "Example: 'Translate the following English text to French: Hello, how are you?'"
        },
        {
            title: "Few-shot learning",
            sample: "Example: 'Translate the following English to French. English: Hello. French: Bonjour. English: Thank you. French: Merci. English: Good morning.'"
        },
        {
            title: "Zero-shot learning",
            sample: "Example: 'Translate 'Goodbye' into French.'"
        },
        {
            title: "Temperature",
            sample: "Example: 'Generate a creative story. [Temperature: 0.8]'"
        },
        {
            title: "Top-p sampling",
            sample: "Example: 'Write a poem with top-p = 0.9.'"
        },
        {
            title: "Max tokens",
            sample: "Example: 'Summarize this article in 100 tokens or fewer.'"
        },
        {
            title: "Stop sequences",
            sample: "Example: 'Generate text until the word “END” appears.'"
        },
        {
            title: "Prompt tokenization",
            sample: "Example: 'Understand how your prompt is split: 'Hello world' becomes ['Hello', ' world']."
        },
        {
            title: "Bias and variance tradeoff",
            sample: "Example: 'Generate a precise but potentially biased answer or a more creative, varied one.'"
        },
        {
            title: "Model context length",
            sample: "Example: 'Summarize this document (2000 tokens), noting that the model context is 4096 tokens.'"
        },
        {
            title: "System vs user prompts",
            sample: "Example: 'System: You are a math tutor. User: Explain how to solve quadratic equations.'"
        },
        {
            title: "Contextual priming",
            sample: "Example: 'Continue the conversation about quantum computing we discussed earlier.'"
        },
        {
            title: "Instruct-based prompting",
            sample: "Example: 'Explain the concept of recursion step-by-step.'"
        },
        {
            title: "Role prompting",
            sample: "Example: 'You are a history professor. Explain World War II.'"
        },
        {
            title: "Chain-of-thought prompting",
            sample: "Example: 'Solve 245 + 378. First, add 5 and 8, then carry the 1…'"
        },
        {
            title: "Refinement techniques",
            sample: "Example: 'Explain recursion, and refine the explanation until it’s very simple.'"
        },
        {
            title: "Multi-turn conversation handling",
            sample: "Example: 'User: Tell me about the solar system. User: Now, focus on Mars.'"
        },
        {
            title: "Modality-specific prompts",
            sample: "Example: 'Generate Python code that prints “Hello, World!”.'"
        },
        {
            title: "Token limitations",
            sample: "Example: 'Make sure this summary fits within the model’s token limit (e.g., 4096 tokens).'"
        },
        {
            title: "Response length management",
            sample: "Example: 'Generate a one-paragraph summary of this article.'"
        },
        {
            title: "Repetition handling",
            sample: "Example: 'Avoid repeating the same sentence in the response.'"
        },
        {
            title: "Attention focus",
            sample: "Example: 'Summarize the second paragraph of the article only.'"
        },
        {
            title: "Ambiguity reduction",
            sample: "Example: 'Explain the Python function `len()`, focusing on lists, not strings.'"
        },
        {
            title: "Input conditioning",
            sample: "Example: 'Ensure all URLs in the input are fully expanded.'"
        },
        {
            title: "NLP principles",
            sample: "Example: 'Use NLP parsing to identify the subject of the sentence.'"
        },
        {
            title: "Prompt chaining",
            sample: "Example: 'First, explain sorting. Then, demonstrate bubble sort.'"
        },
        {
            title: "Data preloading",
            sample: "Example: 'Here is the dataset, now analyze the distribution of values.'"
        },
        {
            title: "Negative prompting",
            sample: "Example: 'Generate a description of Paris without mentioning the Eiffel Tower.'"
        },
        {
            title: "Output formatting",
            sample: "Example: 'List the main points in bullet format.'"
        },
        {
            title: "Semantic consistency",
            sample: "Example: 'Summarize the article, ensuring it matches the original meaning.'"
        },
        {
            title: "Prompt brevity",
            sample: "Example: 'Explain recursion briefly.'"
        },
        {
            title: "Personality control",
            sample: "Example: 'Explain relativity in a friendly and casual tone.'"
        },
        {
            title: "Task-specific tokens",
            sample: "Example: 'Generate a SQL query for a SELECT operation on this dataset.'"
        },
        {
            title: "Language model limitations",
            sample: "Example: 'Write a short novel (note the token limit may cut off longer outputs).'"
        },
        {
            title: "Multi-modal prompts",
            sample: "Example: 'Describe the image and generate a caption for it.'"
        },
        {
            title: "Model fine-tuning vs. prompting",
            sample: "Example: 'Is this task best handled by prompt engineering or model fine-tuning?'"
        },
        {
            title: "Exploration vs. exploitation",
            sample: "Example: 'Generate 5 creative ideas (exploration) vs. Generate the most logical idea (exploitation).'"
        },
        {
            title: "Instruction-following capabilities",
            sample: "Example: 'Follow these instructions exactly: Reverse the string 'Hello.''"
        },
        {
            title: "Heuristic prompting",
            sample: "Example: 'Generate a summary, adjusting prompt format if output quality is low.'"
        },
        {
            title: "Interactivity and dynamic responses",
            sample: "Example: 'Ask follow-up questions if the user asks for clarification.'"
        },
        {
            title: "Prompt fallbacks",
            sample: "Example: 'If the first response is incorrect, retry with more examples.'"
        },
        {
            title: "Error-correction prompting",
            sample: "Example: 'Find and correct the error in this Python code snippet.'"
        },
        {
            title: "Bias mitigation",
            sample: "Example: 'Generate an unbiased summary of a political article.'"
        },
        {
            title: "Knowledge distillation",
            sample: "Example: 'Condense this 10-page report into a one-paragraph summary.'"
        },
        {
            title: "Prompt conditioning",
            sample: "Example: 'Provide an overview of quantum mechanics, focusing on particle theory.'"
        },
        {
            title: "API rate limiting considerations",
            sample: "Example: 'Optimize the use of prompts within API rate limits for high-volume tasks.'"
        },
        {
            title: "Context window management",
            sample: "Example: 'Break down a long document into sections to fit within the context window.'"
        },
        {
            title: "Task decomposition",
            sample: "Example: 'Break down a project into smaller sub-tasks using sequential prompts.'"
        },
        {
            title: "Hyperparameter tuning",
            sample: "Example: 'Adjust temperature and max tokens to fine-tune output quality.'"
        },
        {
            title: "Creative task prompting",
            sample: "Example: 'Write a fictional story about an alien encounter on Mars.'"
        },
        {
            title: "Meta-prompting",
            sample: "Example: 'Generate a prompt that will lead to a detailed analysis of climate change.'"
        },
        {
            title: "LLM Semantic Correlation",
            sample: "Example: 'Identify how 'machine learning' and 'deep learning' relate in a semantic network.'"
        },
        {
            title: "Structured Prompts",
            sample: "Example: 'Generate a report with the following sections: Introduction, Methods, Results, Conclusion.'"
        }
    ];

    return (
        <ul>
            {concepts.map((concept, index) => (
                <li key={index}>
                    <strong>{concept.title}:</strong> {concept.sample}
                </li>
            ))}
        </ul>
    );
};

export default prompting;
