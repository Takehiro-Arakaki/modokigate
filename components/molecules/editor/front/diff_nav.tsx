import { FC } from 'react'
import styles from '@/styles/components/molecules/editor/front/template.module.scss'

type AnswerEditorNavProps = {
  diffShow: boolean,
};

const frontAnswerHeader: FC<AnswerEditorNavProps> = (props) => {
  if(props.diffShow){
    return (
      <div className={styles.diff_nav}>
        <div className={styles.diff_nav_content}>
          自分のコード
        </div>
        <div className={styles.diff_nav_content_hoge}>
          答え
        </div>
      </div>
    )
  } else {
    return null
  }
};

export default frontAnswerHeader
