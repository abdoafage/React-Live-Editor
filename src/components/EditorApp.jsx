import React, { useCallback, useState } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { useEffect } from "react";
import Editor from "./Editor";

function EditorApp() {
  const widthEditor = "auto";
  const [cssVal, setCssVal] = useState("");
  const [htmlVal, setHtmlVal] = useState("");
  const [jsVal, setJsVal] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>
          ${htmlVal}
          <script>${jsVal}</script>
        </body>
        <style>${cssVal}</style>
      </html>
      `);
    }, 500);
    return () => clearTimeout(timeout);
  }, [cssVal, htmlVal, jsVal]);
  return (
    <div className="w-full h-96 flex">
      <div className="h-screen flex flex-col">
        <Editor
          nameWindow={"Html"}
          Extensions={[
            html({
              autoCloseTags: true,
              matchClosingTags: true,
              extraTags: true,
              extraGlobalAttributes: true,
            }),
          ]}
          Theme="dark"
          Val={htmlVal}
          setVal={setHtmlVal}
        />
        <Editor
          nameWindow={"Css"}
          Extensions={[css()]}
          Theme="dark"
          Val={cssVal}
          setVal={setCssVal}
        />
        <Editor
          nameWindow={"Js"}
          Extensions={[javascript()]}
          Theme="dark"
          Val={jsVal}
          setVal={setJsVal}
        />
      </div>
      <div className="border-1 border-black w-full h-screen">
        <iframe
          className="iframe"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default EditorApp;
