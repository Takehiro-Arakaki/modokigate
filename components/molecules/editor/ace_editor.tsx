import { useMemo } from 'react'
import AceEditor from 'react-ace';
import 'ace-builds'

export type EditorProps = {
  lan: string;
  value: string;
  readOnly: boolean;
  onChange?: (content: string) => void;
  theme?: string;
};

const MIN_LINE = 10;
const MAX_LINE = 50;
const DEFAULT_THEME = 'monokai';

const textEditor = (props: EditorProps) => {
  const theme = props.theme || DEFAULT_THEME;

  // load theme
  useMemo(() => {
    try {
      require(`ace-builds/src-noconflict/theme-${theme}`);
    } catch (e) {
      console.log(`error new theme(${theme}): ${e}`);
    }
  }, [props.theme]);

  // load mode
  useMemo(() => {
    if (props.lan == null) {
      return;
    }
    try {
      require(`ace-builds/src-noconflict/mode-${props.lan}`);
    } catch (e) {
      console.log(`error new mode(${props.lan}): ${e}`);
    }
  }, [props.lan]);

  const onChange: (string) => void = props.onChange ? props.onChange : () => {};

  if (props.readOnly) {
    return (
      <AceEditor
        mode={props.lan}
        theme={theme}
        value={props.value}
        width={null} // nullにしておくとwidthを外から変えられる
        minLines={MIN_LINE}
        maxLines={MAX_LINE}
        readOnly={true}
        focus={false}
        highlightActiveLine={false}
        enableBasicAutocompletion={false}
        setOptions={{
          useWorker: false,
          tabSize: 2,
        }}
      />
    );
  } else {
    return (
      <AceEditor
        mode={props.lan}
        theme={theme}
        value={props.value}
        width={null}
        minLines={MIN_LINE}
        maxLines={MAX_LINE}
        readOnly={false}
        enableBasicAutocompletion={true}
        onChange={onChange}
        setOptions={{
          useWorker: false,
          tabSize: 2,
        }}
      />
    );
  }
};

export default textEditor
