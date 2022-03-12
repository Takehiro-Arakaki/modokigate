import { FC } from 'react'
import 'ace-builds'
import { RecoilState } from 'recoil';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import AceEditor from 'react-ace';
import { SourceContentType } from '@/components/organism/editor/front_editor';

type SourceEditorProps = {
  tab: { HTML?: 0; CSS?: 1; JS?: 2 };
  activeTab: RecoilState<0 | 1 | 2>;
  target: SourceContentType;
  theme?: string;
};

const MIN_LINE = 31;
const MAX_LINE = 31;
const DEFAULT_THEME = 'monokai';

const sourceEditor: FC<SourceEditorProps> = (props) => {
  const theme = props.theme || DEFAULT_THEME;

  return (
    <>
      <AceEditor
        className='front_editor'
        mode={props.target.aceMode}
        theme={theme}
        value={props.target.source}
        width={null}
        minLines={MIN_LINE}
        maxLines={MAX_LINE}
        readOnly={false}
        showPrintMargin={false}
        setOptions={{
          tabSize: 2,
          fontSize: '12pt',
        }}
        onChange={value => {
          props.target.change(value)
        }}
        editorProps={{ $blockScrolling: true }}
        key={props.target.aceMode}
      />
    </>
  );
};

export default sourceEditor
