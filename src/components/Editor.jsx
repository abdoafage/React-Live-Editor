import React, { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";

const Editor = ({
  nameWindow,
  setVal,
  Val,
  Extensions,
  Theme,
  Styles = {},
}) => {
  return (
    <div
      className="bg-slate-900 flex-grow"
      style={{
        width: "400px",
      }}
    >
      <div className="text-white p-2 pl-4 font-bold">{nameWindow}</div>
      <CodeMirror
        className="w-full h-full"
        value={Val}
        style={Styles}
        height="165px"
        
        theme={Theme}
        extensions={Extensions}
        onChange={setVal}
      />
    </div>
  );
};

export default Editor;
