import { FC, useState, Dispatch, SetStateAction } from 'react'
import styles from '@/styles/components/molecules/editor/template.module.scss'
import ModalFrontAnswer from '@/components/molecules/modal/front_answer';
import ModalResult from '@/components/molecules/modal/result';
import { RecoilState } from 'recoil';
import { SourceContentType, SourceType } from '@/components/organism/editor/front_editor';

type EditorFooterProps = {
  tab: { HTML?: 0; CSS?: 1; JS?: 2 };
  activeTab: RecoilState<0 | 1 | 2>;
  mode: string;
  source: SourceType;
  target: SourceContentType;
};

const handerAnswerShow = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  setModalAnswerShow: Dispatch<SetStateAction<boolean>>
) => {
  e.stopPropagation();
  setModalAnswerShow(true)

}

const editorFooter: FC<EditorFooterProps> = (props) => {
  const [modalAnswerShow, setModalAnswerShow] = useState(false)
  const [modalResultShow, setModalResultShow] = useState(false)

  return (
    <div className={styles.editor_footer}>
      <div className={styles.editor_answer_button_content}>
        <button
          className={styles.editor_answer_button}
          onClick={(e) => handerAnswerShow(e, setModalAnswerShow)}
        >
          答えをみる
        </button>
        <ModalFrontAnswer
          modalAnswerShow={modalAnswerShow}
          setModalAnswerShow={setModalAnswerShow}
          tab={props.tab}
          activeTab={props.activeTab}
          mode={props.mode}
          target={props.target}
        />
      </div>
      <div className={styles.editor_next_button_content}>
        <button
          className={styles.editor_next_button}
          onClick={() => setModalResultShow(true)}
        >
          結果を表示
        </button>
      </div>
      <div>
        <ModalResult
          modalResultShow={modalResultShow}
          setModalResultShow={setModalResultShow}
          source={props.source}
        />
      </div>
    </div>
  );
};

export default editorFooter
