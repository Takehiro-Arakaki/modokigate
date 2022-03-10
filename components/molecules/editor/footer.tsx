import { FC, useState } from 'react'
import styles from '@/styles/components/editor/template.module.scss'
import FrontAnswerModal from '@/components/molecules/modal/front_answer_modal';
import { RecoilState } from 'recoil';

type EditorFooterProps = {
  mode: string;
  value: string;
  tab: { HTML?: 0; CSS?: 1; JS?: 2 };
  activeTab: RecoilState<0 | 1 | 2>;
  sampleHtmlSource: string;
  sampleCssSource?: string;
  sampleJsSource?: string;
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
        <FrontAnswerModal
          show={show}
          setModalShow={setModalShow}
          tab={props.tab}
          activeTab={props.activeTab}
          mode={props.mode}
          value={props.value}
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
