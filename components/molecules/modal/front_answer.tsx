import { FC, Dispatch, SetStateAction, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from '@/styles/components/molecules/modal/template.module.scss'
import FrontAnswerNav from '@/components/molecules/editor/front/answer_nav'
import FrontDiffNav from '@/components/molecules/editor/front/diff_nav'
const FrontDiffEditor = dynamic(import('@/components/molecules/editor/front/diff_editor'), { ssr: false })
const FrontAnswerEditor = dynamic(import('@/components/molecules/editor/front/answer_editor'), { ssr: false })

import { RecoilState } from 'recoil';
import { SourceContentType } from '@/components/organism/editor/front_editor';

type ModalFrontAnswerProps = {
  modalAnswerShow: boolean;
  setModalAnswerShow: Dispatch<SetStateAction<boolean>>;
  tab: { HTML?: 0; CSS?: 1; JS?: 2 };
  activeTab: RecoilState<0 | 1 | 2>;
  mode: string;
  target: SourceContentType;
};

const modalFrontAnswer: FC<ModalFrontAnswerProps> = (props) => {
  const [toggled, setDiffToggle] = useState(false);
  const [answerShow, setAnswerShow] = useState(true);
  const [diffShow, setDiffShow] = useState(false);

  const FrontAnswerHeader = () => {
    if(diffShow){
      return null
    } else {
      return (
        <div className={styles.editor_header}>
          <div className={styles.editor_header_content}>
            答え
          </div>
        </div>
      )
    }
  }

  if (props.modalAnswerShow) {
    return (
      <div className={styles.answer_modal_screen}>
        <div
          className={styles.answer_modal_content}
          onClick={(e) => e.stopPropagation()}
        >
          <FrontAnswerHeader/>
          <FrontAnswerNav
            tab={props.tab}
            activeTab={props.activeTab}
            setDiffToggle={setDiffToggle}
            setAnswerShow={setAnswerShow}
            setDiffShow={setDiffShow}
            toggled={toggled}
            answerShow={answerShow}
            diffShow={diffShow}
          />
          <FrontDiffNav
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
            <button onClick={() => props.setModalAnswerShow(false)}>
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

export default modalFrontAnswer