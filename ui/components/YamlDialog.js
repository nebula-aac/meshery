import { useState } from "react"
import Editor from "@monaco-editor/react";

export default function CodeEditor({ config_file, language, theme }) {
  function handleEditorValidation(markers) {
    markers.forEach(marker => console.log("onValidate:", marker.message))
  }
  const [value] = useState(config_file || "")
  const [setYaml] = useState(false)

  const handleEditorChange = (_, data, yaml) => {
    setYaml(yaml)
  }

  const options = {
    minimap : { enabled : false }
  }

  return (
    <Editor
      height={"100vh"}
      width={"100%"}
      language={language || "yaml"}
      value={value}
      theme={theme}
      options={options}
      onChange={handleEditorChange}
      onValidate={handleEditorValidation}
    />
  )
}