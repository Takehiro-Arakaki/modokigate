import { FC } from 'react'

type AnswerEditorNavProps = {
  diffShow: boolean,
};

const frontAnswerHeader: FC<AnswerEditorNavProps> = (props) => {
  if(props.diffShow){
    return null
  } else {
    return (
      <div>答え</div>
    )
  }
};

export default frontAnswerHeader
