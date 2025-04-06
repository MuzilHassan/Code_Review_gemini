import Prism, { highlight, languages } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

import "prismjs/components/prism-jsx";
import { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
function App() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const [review, setReview] = useState("");
  const getReview = async () => {
    const response = await axios.post(
      "http://localhost:4000/ai",
      { code: code },
      {
        headers: {
          "Content-Type": "application/json", // Make sure to send JSON
        },
      }
    );
    if (response.status != 200) throw new Error("some thing went wrong");
    setReview(response.data.data);
  };
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  console.log(review);
  return (
    <main className="w-full h-[100vh] flex gap-2 p-4">
      <div className="w-full  relative rounded-md shadow-xl overflow-hidden">
        {/* <pre className="  h-full !m-0 !p-0">
          <code className="!m-0 !p-0 language-javascript"> */}
        <Editor
          value={code}
          onValueChange={(newCode) => setCode(newCode)}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            height: "100%",
            overflow: "auto",
            backgroundColor: "#2d2d2d",
            color: "#f8f8f2",
            border: "1px solid #3e3e3e",
            outline: "none",
          }}
        />
        {/* </code>
        </pre> */}
        <button
          className=" absolute bottom-2 right-0 border border-black text-white shadow-md bg-black"
          onClick={getReview}
        >
          Review
        </button>
      </div>
      <div className=" w-full rounded-md shadow-xl p-1 ">
        <Markdown>{review}</Markdown>
      </div>
    </main>
  );
}

export default App;
