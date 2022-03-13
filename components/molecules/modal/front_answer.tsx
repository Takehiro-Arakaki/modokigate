import { FC, Dispatch, SetStateAction, useState, useEffect, useLayoutEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from '@/styles/components/molecules/modal/template.module.scss'
import FrontAnswerNav from '@/components/molecules/editor/front/answer_nav'
import FrontDiffNav from '@/components/molecules/editor/front/diff_nav'
import Loading from '@/components/atoms/loading'
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


const handlerAnswerClose = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  setModalAnswerShow: (v: boolean) => void,
  handlerAnswer: (v: boolean) => void,
  handlerToggle:  (v: SetStateAction<boolean>) => void,
  handlerDiff:  (v: SetStateAction<boolean>) => void,
) => {
  event.stopPropagation();
  setModalAnswerShow(false);
  handlerAnswer(true);
  handlerToggle(false);
  handlerDiff(false);
}

const modalFrontAnswer: FC<ModalFrontAnswerProps> = (props) => {
  const [answerShow, setAnswerShow] = useState(true);
  const [toggled, setDiffToggle] = useState(false);
  const [diffShow, setDiffShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const handlerModalAnswer = (v: boolean) => { props.setModalAnswerShow(v) }
  const handlerAnswer = (v: boolean) => { setAnswerShow(v) }
  const handlerToggle = (v: boolean) => { setDiffToggle(v) }
  const handlerDiff = (v: boolean) => { setDiffShow(v) }

  useEffect(() => {
    async () => { setLoading(false) };
  }, [])

  const FrontAnswerHeader = () => {
    if(diffShow){
      return null
    } else {
      return (
        <div className={styles.editor_header}>
          答え
        </div>
      )
    }
  }

  // if (props.modalAnswerShow && loading) {
  //   return (
  //     <div className={styles.answer_modal_screen}>
  //       <div className={styles.answer_modal_content}>
  //         <Loading/>
  //       </div>
  //     </div>
  //   )
  // }

  if (props.modalAnswerShow) {
    return (
      <div className={styles.answer_modal_screen}>
        <div className={styles.answer_modal_content}>
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
          <div className={styles.answer_close_button_content}>
            <button
              className={styles.answer_close_button}
              onClick={(event) => handlerAnswerClose(
                event,
                handlerModalAnswer,
                handlerAnswer,
                handlerToggle,
                handlerDiff,
              )}>
              close
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null;
}

export default modalFrontAnswer