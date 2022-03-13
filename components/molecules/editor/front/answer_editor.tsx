import { FC } from 'react'
import 'ace-builds'
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import AceEditor from 'react-ace';
import { SourceContentType } from '@/components/organism/editor/front_editor';

type FrontAnswerEditorProps = {
  theme?: string;
  mode: string;
  target: SourceContentType,
  answerShow: boolean;
};
const MIN_LINE = 31;
const MAX_LINE = 31;
const DEFAULT_THEME = 'monokai';

const frontAnswerEditor: FC<FrontAnswerEditorProps> = (props) => {
  const theme = props.theme || DEFAULT_THEME;
  if (props.answerShow) {
    return (
      <>
        <AceEditor
          className='answer_editor'
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
            fontSize: '11pt'
          }}
          editorProps={{ $blockScrolling: true }}
          key={props.mode}
        />
      </>
    )
  }

  return null;
};

export default frontAnswerEditor
