import { FC, useState } from 'react'
import styles from '@/styles/components/molecules/editor/template.module.scss'
import ModalFrontAnswer from '@/components/molecules/modal/front_answer';
import { RecoilState } from 'recoil';
import { SourceContentType } from '@/components/organism/editor/front_editor';

type EditorFooterProps = {
  tab: { HTML?: 0; CSS?: 1; JS?: 2 };
  activeTab: RecoilState<0 | 1 | 2>;
  mode: string;
  target: SourceContentType;
};
const onAnswerButton = () => {

}

const onNextButton = () => {

}

const editorFooter: FC<EditorFooterProps> = (props) => {
  const [show, setModalShow] = useState(false)

  return (
    <div className={styles.editor_footer}>
      <div className={styles.editor_answer_button_content}>
        <button
          className={styles.editor_answer_button}
          onClick={() => setModalShow(true)}
        >
          答えをみる
        </button>
        <ModalFrontAnswer
          show={show}
          setModalShow={setModalShow}
          tab={props.tab}
          activeTab={props.activeTab}
          mode={props.mode}
          target={props.target}
        />
      </div>
      <div className={styles.editor_next_button_content}>
        <button
          className={styles.editor_next_button}
          onClick={onNextButton}
        >
          結果を表示
        </button>
      </div>
    </div>
  );
};

export default editorFooter
