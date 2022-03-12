import { FC } from 'react'
import ace from 'ace-builds/src-noconflict/ace';
ace.config.set("basePath", "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/");
ace.config.setModuleUrl('ace/mode/javascript_worker', "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js");
import ReactDiffViewer from "react-diff-viewer";
import { SourceContentType } from '@/components/organism/editor/front_editor';
import styles from '@/styles/components/molecules/editor/front/template.module.scss'

type DiffEditorProps = {
  mode: string,
  target: SourceContentType,
  diffShow: boolean,
};
const newStyles = {
  variables: {},
  codeFold: {
    fontWeight: 900,
  },
};

const diffEditor: FC<DiffEditorProps> = (props) => {
  if (props.diffShow) {
    return (
      <div className={styles.diff_editor}>
        <ReactDiffViewer
          styles={newStyles}
          oldValue={props.target.source}
          newValue={props.target.sampleSource}
          splitView={true}
          hideLineNumbers={true}
        />
      </div>
    )
  } else {
    return null
  }
};

export default diffEditor
