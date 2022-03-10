import { FC, Dispatch, SetStateAction, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from '@/styles/components/modal/front_answer_modal.module.scss'
import FrontAnswerEditorNav from '@/components/molecules/editor/front/navigation/answer_editor_nav'
const FrontDiffEditor = dynamic(import('@/components/molecules/editor/front/diff_editor'), { ssr: false })
const FrontAnswerEditor = dynamic(import('@/components/molecules/editor/front/answer_editor'), { ssr: false })

import { RecoilState } from 'recoil';
import { SourceContentType } from '@/components/organism/editor/front_editor';

type FrontAnswerModalProps = {
  show: boolean;
  setModalShow: Dispatch<SetStateAction<boolean>>
  tab: { HTML?: 0; CSS?: 1; JS?: 2 };
  activeTab: RecoilState<0 | 1 | 2>;
  mode: string;
  target: SourceContentType;
};

const frontAnswerModal: FC<FrontAnswerModalProps> = (props) => {
  const [toggled, setDiffToggle] = useState(false);
  const [answerShow, setAnswerShow] = useState(true);
  const [diffShow, setDiffShow] = useState(true);

  if (props.show) {
    return (
      <div className={styles.modal_screen}>
        <div
          className={styles.modal_content}
          onClick={(e) => e.stopPropagation()}
        >
          <FrontAnswerEditorNav
            tab={props.tab}
            activeTab={props.activeTab}
            setDiffToggle={setDiffToggle}
            setAnswerShow={setAnswerShow}
            setDiffShow={setDiffShow}
            toggled={toggled}
            answerShow={answerShow}
            diffShow={diffShow}
          />
          <FrontDiffEditor
            mode={props.mode}
            target={props.target}
            diffShow={diffShow}
          />
          <FrontAnswerEditor
            mode={props.mode}
            target={props.target}
            answerShow={answerShow}
          />
          <div>
            <button onClick={() => props.setModalShow(false)}>
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

export default frontAnswerModal