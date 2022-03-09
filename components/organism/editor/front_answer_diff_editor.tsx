import { FC, Dispatch, SetStateAction } from 'react'
import ace from 'ace-builds/src-noconflict/ace';
ace.config.set("basePath", "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/");
ace.config.setModuleUrl('ace/mode/javascript_worker', "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js");
import { diff as DiffEditor } from 'react-ace';

type FrontAnswerEditorDiffProps = {
  mode: string,
  value: string,
  diffShow: boolean,
};

const frontAnswerDiffEditor: FC<FrontAnswerEditorDiffProps> = (props) => {
  if (props.diffShow) {
    return null
  } else {
    return (
      <DiffEditor
        value={[props.value, props.value]}
        mode={props.mode}
        enableBasicAutocompletion
        enableLiveAutocompletion
        highlightActiveLine
        showGutter
        showPrintMargin={false}
        wrapEnabled
        readOnly
        width='100%'
        height='700px'
        theme='monokai'
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          fontSize: '12pt',
          readOnly: true,
          tabSize: 2,
        }}
      />
    )
  }
};

export default frontAnswerDiffEditor
