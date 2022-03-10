import { FC, Dispatch, SetStateAction } from 'react'
import styles from '@/styles/components/editor/diff_editor.module.scss'
import FrontNavEditor from '@/components/molecules/editor/front/nav/editor';
import { RecoilState } from 'recoil';

type FrontNavAnswerEditorProps = {
  tab: { HTML?: 0; CSS?: 1; JS?: 2 },
  activeTab: RecoilState<0 | 1 | 2>,
  setDiffToggle: Dispatch<SetStateAction<boolean>>,
  setAnswerShow: Dispatch<SetStateAction<boolean>>,
  setDiffShow: Dispatch<SetStateAction<boolean>>,
  toggled: boolean,
  answerShow: boolean,
  diffShow: boolean,
};

const frontNavAnswerEditor: FC<FrontNavAnswerEditorProps> = (props) => {
  return (
    <div className={styles.answer_header}>
      <div className={styles.answer_navigation}>
        <FrontNavEditor
          tab={props.tab}
          activeTab={props.activeTab}
        />
      </div>
      <div className={styles.answer_diff_button}>
        <label className={styles.toggle_switch}>
          <input
            type='checkbox'
            checked={props.toggled}
            onChange={() => {
              props.setDiffToggle(!props.toggled);
              props.setAnswerShow(!props.answerShow);
              props.setDiffShow(!props.diffShow);
            }}/>
          <span className={styles.switch} />
        </label>
      </div>
    </div>
  )
};

export default frontNavAnswerEditor
