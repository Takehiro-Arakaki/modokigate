import { FC } from 'react'
import AceEditor from 'react-ace';
import 'ace-builds'
import FrontEditorNav from '@/components/molecules/editor/navigation/front_editor_nav'
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import styles from '@/styles/components/editor/template.module.scss'
import { RecoilState } from 'recoil';

type FrontAnswerEditorProps = {
  theme?: string;
  tab: { HTML?: 0; CSS?: 1; JS?: 2 };
  activeTab: RecoilState<0 | 1 | 2>;
  mode: string;
  value: string;
};
const MIN_LINE = 32;
const MAX_LINE = 32;
const DEFAULT_THEME = 'monokai';

const frontAnswerEditor: FC<FrontAnswerEditorProps> = (props) => {
  const theme = props.theme || DEFAULT_THEME;

  return (
    <>
      <FrontEditorNav
        tab={props.tab}
        activeTab={props.activeTab}
      />
      <div className={styles.editor}>
        <AceEditor
          mode={props.mode}
          theme={theme}
          value={props.value}
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
  );
};

export default frontAnswerEditor
