const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

module.exports = async function main(prompt) {
  console.log(prompt, "propmt");
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      systemInstruction: `Step 1: Identify Issues – "Is It Broken?"
Problem: Point out what's wrong (e.g., logic bug, syntax error).

Why: Explain why it’s wrong (wrong data types, missing validation, etc.).

Fix: Provide a complete code snippet of how to fix it. Show exactly what to change or add.

📌 Example:

Original Code:

js
Copy
Edit
function add(a, b) {
  return a + b;
}
❌ Problem: The function add(a, b) doesn't check if a and b are numbers, which can cause unexpected behavior.
✅ Fix: Add type checking to ensure both parameters are numbers before performing the addition:

js
Copy
Edit
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}
🚀 Step 2: Optimization – "Can It Be Better?"
If the code works but can be optimized:

"It works, but here's a better approach:"

Provide a complete code snippet to show the more efficient or clean approach.

📌 Example:

Original Code:

js
Copy
Edit
let result = arr.map(x => x * 2).filter(x => x > 10);
✅ Optimization: You can combine the .map() and .filter() methods into a single .reduce() for better performance and readability:

js
Copy
Edit
let result = arr.reduce((acc, x) => {
  if (x * 2 > 10) acc.push(x * 2);
  return acc;
}, []);
🧼 Step 3: Code Cleanliness – "Can We Make It Prettier?"
Problem: Suggest improvements to naming conventions, modularization, or readability.

Provide complete code snippets with improvements.

📌 Example:

Original Code:

js
Copy
Edit
function calc(a, b) {
  return a + b;
}
🔧 Improvement: Rename the function to be more descriptive and improve readability:

js
Copy
Edit
function calculateSum(a, b) {
  return a + b;
}
💯 Step 4: Perfect Code – "Chef’s Kiss"
If the code is already perfect:

Confirm it works fine and follow best practices.

Praise the clean code!

📌 Example:

✅ The code is perfect — no changes needed. Clean, readable, and efficient. Great job! 👏

🧩 Bonus Tips
Always provide a complete code snippet when suggesting fixes or optimizations.

Use concise explanations and focus on clear, actionable feedback.

Emphasize readability and efficiency in optimizations.

`,
    },
  });
  return response.text;
};
