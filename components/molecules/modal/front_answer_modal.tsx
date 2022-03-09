import { FC, Dispatch, SetStateAction, useState } from 'react';
import styles from '@/styles/components/modal/front_answer_modal.module.scss'
import FrontAnswerEditorNav from '@/components/molecules/editor/navigation/front_answer_editor_nav'
import FrontAnswerEditor from '@/components/organism/editor/front_answer_editor'
import FrontAnswerDiffEditor from '@/components/organism/editor/front_answer_diff_editor'
import { RecoilState } from 'recoil';

type FrontAnswerModalProps = {
  show: boolean;
  setModalShow: Dispatch<SetStateAction<boolean>>
  tab: { HTML?: 0; CSS?: 1; JS?: 2 };
  activeTab: RecoilState<0 | 1 | 2>;
  mode: string;
  value: string;
};

const switchModal = (
  show: boolean,
  setModalShow: Dispatch<SetStateAction<boolean>>,
  tab: { HTML?: 0; CSS?: 1; JS?: 2 },
  activeTab: RecoilState<0 | 1 | 2>,
  mode: string,
  value: string,
  setDiffToggle: Dispatch<SetStateAction<boolean>>,
  setAnswerShow: Dispatch<SetStateAction<boolean>>,
  setDiffShow: Dispatch<SetStateAction<boolean>>,
  answerShow: boolean,
  diffShow: boolean,
  toggled: boolean,
) => {
  if (show) {
    return (
      <div className={styles.modal_screen}>
        <div
          className={styles.modal_content}
          onClick={(e) => e.stopPropagation()}
        >
          <FrontAnswerEditorNav
            tab={tab}
            activeTab={activeTab}
            setDiffToggle={setDiffToggle}
            setAnswerShow={setAnswerShow}
            setDiffShow={setDiffShow}
            toggled={toggled}
            answerShow={answerShow}
            diffShow={diffShow}
          />
          <FrontAnswerDiffEditor
            mode={mode}
            value={value}
            diffShow={diffShow}
          />
          <FrontAnswerEditor
            mode={mode}
            value={value}
            answerShow={answerShow}
          />
          <div>
            <button onClick={() => setModalShow(false)}>
              close
            </button>
          </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

const frontAnswerModal: FC<FrontAnswerModalProps> = (props) => {
  const [toggled, setDiffToggle] = useState(false);
  const [answerShow, setAnswerShow] = useState(true);
  const [diffShow, setDiffShow] = useState(true);

  return (
    <>
      {
        switchModal(
          props.show,
          props.setModalShow,
          props.tab,
          props.activeTab,
          props.mode,
          props.value,
          setDiffToggle,
          setAnswerShow,
          setDiffShow,
          answerShow,
          diffShow,
          toggled,
        )
      }
    </>
  )
}

export default frontAnswerModal