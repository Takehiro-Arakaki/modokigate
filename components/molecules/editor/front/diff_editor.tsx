import { FC } from 'react'
import ace from 'ace-builds/src-noconflict/ace';
ace.config.set("basePath", "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/");
ace.config.setModuleUrl('ace/mode/javascript_worker', "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js");
import { diff as DiffEditor } from 'react-ace';
import { SourceContentType } from '@/components/organism/editor/front_editor';
import styles from '@/styles/components/molecules/editor/front/template.module.scss'

type DiffEditorProps = {
  mode: string,
  target: SourceContentType,
  diffShow: boolean,
};

const diffEditor: FC<DiffEditorProps> = (props) => {
  if (props.diffShow) {
    return (
      <div className={styles.diff_editor}>
        <DiffEditor
          value={[props.target.source, props.target.sampleSource]}
          mode={props.mode}
          enableLiveAutocompletion
          highlightActiveLine
          showGutter
          showPrintMargin={false}
          wrapEnabled
          readOnly
          width={null}
          height='630px'
          theme='monokai'
          setOptions={{
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            fontSize: '12pt',
            readOnly: true,
            tabSize: 2,
          }}
        />
      </div>
    )
  } else {
    return null
  }
};

export default diffEditor
