import { FC } from 'react'
import ace from 'ace-builds/src-noconflict/ace';
ace.config.set("basePath", "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/");
ace.config.setModuleUrl('ace/mode/javascript_worker', "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js");
import { diff as DiffEditor } from 'react-ace';
import { SourceContentType } from '@/components/organism/editor/front_editor';

type DiffEditorProps = {
  mode: string,
  target: SourceContentType,
  diffShow: boolean,
};

const diffEditor: FC<DiffEditorProps> = (props) => {
  if (props.diffShow) {
    return (
      <DiffEditor
        value={[props.target.source, props.target.sampleSource]}
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
  } else {
    return null
  }
};

export default diffEditor
