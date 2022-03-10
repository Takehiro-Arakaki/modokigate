import { FC } from 'react'
import 'ace-builds'
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import AceEditor from 'react-ace';
import styles from '@/styles/components/editor/template.module.scss'
import { SourceContentType } from '@/components/organism/editor/front_editor';

type AnswerEditorProps = {
  theme?: string;
  mode: string;
  target: SourceContentType,
  answerShow: boolean;
};
const MIN_LINE = 32;
const MAX_LINE = 32;
const DEFAULT_THEME = 'monokai';

const answerEditor: FC<AnswerEditorProps> = (props) => {
  const theme = props.theme || DEFAULT_THEME;
  if (props.answerShow) {
    return (
      <>
        <div className={styles.editor}>
          <AceEditor
            mode={props.mode}
            theme={theme}
            value={props.target.sampleSource}
            width={null}
            minLines={MIN_LINE}
            maxLines={MAX_LINE}
            readOnly={true}
            showPrintMargin={false}
            setOptions={{
              useWorker: false,
              tabSize: 2,
              enableBasicAutocompletion: true,
              fontSize: '12pt'
            }}
            editorProps={{ $blockScrolling: true }}
            key={props.mode}
          />
        </div>
      </>
    )
  } else {
    return null;
  }
};

export default answerEditor
