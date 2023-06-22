import { useRef, useEffect } from "react"
import { EditorView } from "codemirror"
import { styled } from "@mui/material"
import * as y from "yjs";
// import { WebsocketProvider } from "y-websocket"
// import LanguageSupport from "@codemirror/stream-parser"
// import { StreamLanguage } from "@codemirror/stream-parser"
// import yamlMode from "@codemirror/legacy-modes/mode/yaml"

const EditorContainer = styled("div")({
    height: "100%",
    width: "100%"
})

export const Editor = ({ config_file, updateHandler }) => {
    const editorRef = useRef(null)

    /*
    useEffect(() => {
        if (editorRef.current) {
            const ydoc = new y.Doc();
            // const provider = new WebsocketProvider('wss://your-yjs-provider-url');
            const yText = ydoc.getText('codemirror');
            // yText.insert(0, config_file);

            // const yaml = new LanguageSupport(StreamLanguage.define(yamlMode.yaml))

            const extensions = [
                // ySyncPlugin(provider, yText),
                // yUndoPlugin(),
                // yHistoryPlugin()
            ];

            const view = new EditorView({
                state: {
                    doc: yText,
                    extensions: [extensions]
                },
                parent: editorRef.current
            })

            view.update([])
            view.focus()

            view.dispatch({
                effects: [yText.bind(view.state)]
            })
            
            view.dom.addEventListener('keydown', (event) => {
                if (event.key === 's' && (event.ctrlKey || event.metaKey)) {
                    event.preventDefault();
                    updateHandler();
                }
            });
        }
    }, []);
    */

    return <EditorContainer ref={editorRef} />;
};