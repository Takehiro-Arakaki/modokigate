import { FC, Dispatch, SetStateAction } from 'react'
import styles from '@/styles/components/molecules/editor/front/template.module.scss'
import FrontNav from '@/components/molecules/editor/front/nav';
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
    <>
      <div className={styles.answer_header}>
        <div className={styles.answer_navigation}>
          <FrontNav
            tab={props.tab}
            activeTab={props.activeTab}
          />
        </div>
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
    </>
  )
};

export default frontNavAnswerEditor
