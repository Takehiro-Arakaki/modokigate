import { FC } from 'react'
import AceEditor from 'react-ace';
import 'ace-builds'
import { useRecoilState, useRecoilValue, RecoilState, SetterOrUpdater } from 'recoil';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import EditorFooter from '@/components/molecules/editor/footer';

type SourceEditorProps = {
  theme?: string;
  htmlSource: RecoilState<string>;
  cssSource: RecoilState<string>;
  jsSource: RecoilState<string>;
  sampleHtmlSource: string;
  sampleCssSource?: string;
  sampleJsSource?: string;
  tab: { HTML?: 0; CSS?: 1; JS?: 2 };
  activeTab: RecoilState<0 | 1 | 2>;
};

type SourceType = {[key: number]: SourceContentType}
type SourceContentType = {
  aceMode: string;
  source: string;
  sampleSource: string;
  change: SetterOrUpdater<string>;
}

const MIN_LINE = 32;
const MAX_LINE = 32;
const DEFAULT_THEME = 'monokai';

const sourceEditor: FC<SourceEditorProps> = (props) => {
  const [html, changeHtml] = useRecoilState(props.htmlSource)
  const [css, changeCss] = useRecoilState(props.cssSource)
  const [js, changeJs] = useRecoilState(props.jsSource)
  const active = useRecoilValue(props.activeTab)

  const source: SourceType =  {
    [props.tab.HTML]: {
      aceMode: 'html',
      source: html,
      sampleSource: props.sampleHtmlSource,
      change: changeHtml,
    },
    [props.tab.CSS]: {
      aceMode: 'css',
      source: css,
      sampleSource: props.sampleCssSource,
      change: changeCss,
    },
    [props.tab.JS]: {
      aceMode: 'javascript',
      source: js,
      sampleSource: props.sampleJsSource,
      change: changeJs,
    },
  }

  const target = source[active]
  const theme = props.theme || DEFAULT_THEME;

  return (
    <>
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
      <EditorFooter
        tab={props.tab}
        activeTab={props.activeTab}
        mode={target.aceMode}
        value={target.sampleSource}
      />
    </>
  );
};

export default sourceEditor
