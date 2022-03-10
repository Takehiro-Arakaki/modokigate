import { FC } from 'react'
import styles from '@/styles/components/molecules/editor/front/template.module.scss'

type AnswerEditorNavProps = {
  diffShow: boolean,
};

const frontAnswerHeader: FC<AnswerEditorNavProps> = (props) => {
  if(props.diffShow){
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
};

export default frontAnswerHeader
