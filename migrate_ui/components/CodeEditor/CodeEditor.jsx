import React from "react"
import AceEditor from "react-ace"

import "ace-builds/src-noconflict/mode-yaml"
import "ace-builds/src-noconflict/theme-twilight"
import yaml from "js-yaml"

export default function CodeEditor({ defaultValue = "", name = "YAML Editor"}) {}