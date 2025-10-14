import React, { useState, useMemo } from 'react';

// faq.jsx
// Drop this file into a Next.js pages/ or app/ route as a React component.
// Written in plain JSX (no TypeScript). Tailwind CSS classes are used for styling.

const FAQ_DATA = [
  { id: 'what-is-prompt-engineering', q: 'What is prompt engineering?', a: 'Prompt engineering is the practice of designing and refining inputs (prompts) sent to a language model to produce useful, reliable, and safe outputs. It involves choosing wording, structure, examples, and system instructions to guide model behavior.', tags: ['basics', 'definition'] },
  { id: 'system-vs-user', q: 'What is the difference between system, user, and assistant messages?', a: 'System messages set high-level behavior (role, tone, rules). User messages are the user’s request. Assistant messages are model outputs and can be used as examples. Use system messages for non-negotiable rules and user messages for task details.', tags: ['roles'] },
  { id: 'few-shot-examples', q: 'When and how should I use few-shot examples?', a: 'Few-shot prompting includes input-output examples to show the desired format or reasoning. Use it to enforce formatting or show edge cases. Keep examples concise and representative.', tags: ['techniques','few-shot'] },
  { id: 'temperature', q: 'What does temperature do and how should I choose it?', a: 'Temperature controls randomness. Lower values (0–0.3) produce deterministic outputs; higher values (0.7–1.0) increase creativity. For code or math choose low temperature; for brainstorming, increase it.', tags: ['parameters'] },
  { id: 'token-limits', q: 'How do token limits and context windows affect prompting?', a: 'Context windows limit the total text (prompt + conversation + response) the model can process. Keep prompts concise, use retrieval for large contexts, and chunk long inputs.', tags: ['limitations','context'] },
  { id: 'chain-of-thought', q: 'What is chain-of-thought prompting and when to use it?', a: 'Chain-of-thought (CoT) asks the model to reveal intermediate reasoning steps. It can improve complex reasoning but increases token usage—use it when stepwise justification is needed.', tags: ['reasoning'] },
  { id: 'debugging-prompts', q: 'How do I debug prompts when the model gives poor outputs?', a: 'Simplify the prompt, add explicit constraints, include examples, vary parameters, and compare outputs. Ask the model to explain failures to diagnose issues.', tags: ['workflow','debugging'] },
  { id: 'safety-and-bias', q: 'How do I reduce harmful, biased, or unsafe outputs?', a: 'Add explicit safety instructions in the system prompt, implement post-generation checks, use filters, and include human review for high-risk outputs.', tags: ['safety','ethics'] },
  { id: 'prompt-templates', q: 'What are good prompt template patterns?', a: 'Patterns: Instruction + format constraints + examples, Step-by-step decomposition, Role-play ("You are an expert"), and Retrieve-then-generate. Always specify the expected output format.', tags: ['patterns','templates'] },
  { id: 'evaluation-metrics', q: 'How should I evaluate prompt quality?', a: 'Combine automated checks (exact-match, task-specific tests) with human evaluation for correctness and usefulness. Create unit tests for edge cases and track regressions.', tags: ['evaluation'] },
  { id: 'cost-optimization', q: 'How can I optimize prompts to reduce API cost?', a: 'Shorten prompts, use concise examples, cache deterministic outputs, lower temperature for shorter responses, and use cheaper model variants for non-critical tasks.', tags: ['cost','optimization'] },
  { id: 'prompt-chaining', q: 'What is prompt chaining and why use it?', a: 'Prompt chaining splits a complex task into stages (extract → transform → generate). It improves clarity, debugging, and reuse when single-shot prompts fail or exceed context limits.', tags: ['architecture','chaining'] },
];

export default function FAQ() {
  const [query, setQuery] = useState('');
  const [activeId, setActiveId] = useState(null);
  const [selectedTag, setSelectedTag] = useState('all');

  const allTags = useMemo(() => {
    const s = new Set();
    FAQ_DATA.forEach((f) => f.tags.forEach((t) => s.add(t)));
    return ['all', ...Array.from(s)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_DATA.filter((entry) => {
      const matchesTag = selectedTag === 'all' || entry.tags.includes(selectedTag);
      const matchesQuery = !q || entry.q.toLowerCase().includes(q) || entry.a.toLowerCase().includes(q);
      return matchesTag && matchesQuery;
    });
  }, [query, selectedTag]);

  function toggleAccordion(id) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  function copyToClipboard(text) {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        // Lightweight feedback — replace with toast in production
        alert('Copied to clipboard');
      }).catch(() => alert('Copy failed'));
    } else {
      alert('Clipboard not available');
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Prompt Engineering — FAQ</h1>
        <p className="text-sm text-gray-600">Practical Q&amp;A for building prompts in Next.js apps.</p>
      </header>

      <div className="flex gap-3 items-center mb-4">
        <input
          type="search"
          placeholder="Search questions or answers..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-3 rounded border border-gray-200 focus:outline-none"
        />
        <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)} className="p-3 border rounded">
          {allTags.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        {filtered.map((item) => (
          <div key={item.id} className="border rounded-lg p-4">
            <button className="w-full text-left" onClick={() => toggleAccordion(item.id)}>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{item.q}</h3>
                <span className="text-sm text-gray-500">{activeId === item.id ? '−' : '+'}</span>
              </div>
            </button>

            {activeId === item.id && (
              <div className="mt-3 text-sm text-gray-700">
                <p>{item.a}</p>
                <div className="mt-3 flex gap-2">
                  <button onClick={() => copyToClipboard(item.a)} className="px-3 py-1 border rounded text-sm">Copy</button>
                </div>
              </div>
            )}
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 p-6">No results found for your search.</p>
        )}
      </div>

      <footer className="mt-8 text-xs text-gray-500">Tip: Keep prompts explicit and test iteratively.</footer>
    </div>
  );
}
