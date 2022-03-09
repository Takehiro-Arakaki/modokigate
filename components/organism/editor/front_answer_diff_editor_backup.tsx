import { FC, Dispatch, SetStateAction } from 'react'
import styles from '@/styles/components/editor/diff_editor.module.scss'
import FrontEditorNav from '@/components/molecules/editor/navigation/front_editor_nav';
import { RecoilState } from 'recoil';
import ace from 'ace-builds/src-noconflict/ace';
ace.config.set("basePath", "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/");
ace.config.setModuleUrl('ace/mode/javascript_worker', "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js");
import { diff as DiffEditor } from 'react-ace';

type FrontAnswerEditorDiffProps = {
  tab: { HTML?: 0; CSS?: 1; JS?: 2 },
  activeTab: RecoilState<0 | 1 | 2>,
  mode: string,
  value: string,
  setDiffToggle: Dispatch<SetStateAction<boolean>>,
  setAnswerShow: Dispatch<SetStateAction<boolean>>,
  setDiffShow: Dispatch<SetStateAction<boolean>>,
  toggled: boolean,
  answerShow: boolean,
  diffShow: boolean,
};

const toggleSwitch = (
  setDiffToggle: Dispatch<SetStateAction<boolean>>,
  setAnswerShow: Dispatch<SetStateAction<boolean>>,
  setDiffShow: Dispatch<SetStateAction<boolean>>,
  toggled: boolean,
  answerShow: boolean,
  diffShow: boolean,
) => {
  return (
    <label className={styles.toggle_switch}>
      <input
        type='checkbox'
        checked={toggled}
        onChange={() => {
          setDiffToggle(!toggled);
          setAnswerShow(!answerShow);
          setDiffShow(!diffShow);
        }}/>
      <span className={styles.switch} />
    </label>
  )
}

const frontAnswerDiffEditor: FC<FrontAnswerEditorDiffProps> = (props) => {
  if (props.diffShow) {
    return (
      <div className={styles.answer_header}>
        <div className={styles.answer_navigation}>
          <FrontEditorNav
            tab={props.tab}
            activeTab={props.activeTab}
          />
        </div>
        <div className={styles.answer_diff_button}>
          {
            toggleSwitch(
              props.setDiffToggle,
              props.setAnswerShow,
              props.setDiffShow,
              props.toggled,
              props.answerShow,
              props.diffShow,
            )
          }
        </div>
      </div>
    )
  } else {
    return (
      <>
        <div className={styles.answer_header}>
          <div className={styles.answer_navigation}>
            <FrontEditorNav
              tab={props.tab}
              activeTab={props.activeTab}
            />
          </div>
          <div className={styles.answer_diff_button}>
            {
              toggleSwitch(
                props.setDiffToggle,
                props.setAnswerShow,
                props.setDiffShow,
                props.toggled,
                props.answerShow,
                props.diffShow,
              )
            }
          </div>
        </div>
        <DiffEditor
          value={[props.value, props.value]}
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
      </>
    )
  }
};

export default frontAnswerDiffEditor
