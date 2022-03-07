import { FC } from 'react'
import AceEditor from 'react-ace';
import 'ace-builds'
import { useRecoilState, useRecoilValue, RecoilState } from 'recoil';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import styles from '@/styles/components/editor/template.module.scss'

type SourceEditorProps = {
  theme?: string;
  htmlSource: RecoilState<string>;
  cssSource: RecoilState<string>;
  jsSource: RecoilState<string>;
  tab: { HTML?: 0; CSS?: 1; JS?: 2 }
  activeTab: RecoilState<0 | 1 | 2>;
};

const MIN_LINE = 32;
const MAX_LINE = 32;
const DEFAULT_THEME = 'monokai';

const sourceEditor: FC<SourceEditorProps> = (props) => {
  const [html, changeHtml] = useRecoilState(props.htmlSource)
  const [css, changeCss] = useRecoilState(props.cssSource)
  const [js, changeJs] = useRecoilState(props.jsSource)
  const active = useRecoilValue(props.activeTab)

  const source =  {
    [props.tab.HTML]: {
      aceMode: 'html',
      source: html,
      change: changeHtml,
    },
    [props.tab.CSS]: {
      aceMode: 'css',
      source: css,
      change: changeCss,
    },
    [props.tab.JS]: {
      aceMode: 'javascript',
      source: js,
      change: changeJs,
    },
  }

  const target = source[active]
  const theme = props.theme || DEFAULT_THEME;

  return (
    <div className={styles.editor}>
      <AceEditor
        mode={target.aceMode}
        theme={theme}
        value={target.source}
        width={null}
        minLines={MIN_LINE}
        maxLines={MAX_LINE}
        readOnly={false}
        setOptions={{
          useWorker: false,
          tabSize: 2,
          enableBasicAutocompletion: true,
          fontSize: '12pt'
        }}
        onChange={value => {
          target.change(value)
        }}
        editorProps={{ $blockScrolling: true }}
        key={target.aceMode}
      />
      <div className={styles.editor_footer}>
        <button className={styles.editor_button_next}>
          結果を表示
        </button>
      </div>
    </div>
  );
};

export default sourceEditor
