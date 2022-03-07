import { FC } from 'react'
import styles from '@/styles/components/editor/template.module.scss'

type EditorFooterProps = {
};

const onAnswerButton = () => {

}

const onNextButton = () => {

}

const editorFooter: FC<EditorFooterProps> = (props) => {
  return (
    <div className={styles.editor_footer}>
      <div className={styles.editor_answer_button_content}>
        <button
          className={styles.editor_answer_button}
          onClick={onAnswerButton}
        >
          答えをみる
        </button>
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
