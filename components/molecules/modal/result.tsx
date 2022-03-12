import { FC, Dispatch, SetStateAction, useEffect } from 'react';
import styles from '@/styles/components/molecules/modal/template.module.scss'
import { SourceType } from '@/components/organism/editor/front_editor';

type ModalResultProps = {
  modalResultShow: boolean;
  setModalResultShow: Dispatch<SetStateAction<boolean>>;
  source: SourceType;
};

const modalResult: FC<ModalResultProps> = (props) => {
  const inspectAnswer = () => {
    const source = props.source
    const resultArry = []

    for(const i in source) {
      resultArry.push(source[i].source === source[i].sampleSource)
    }
    const inspectionResult = resultArry.includes(false)
    return inspectionResult
  }

  if (props.modalResultShow && !inspectAnswer) {
    return (
      <div className={styles.result_modal_screen}>
        <div
          className={styles.result_modal_content}
          onClick={(e) => e.stopPropagation()}
        >
        </div>
      </div>
    )
  } else if(props.modalResultShow) {
    return (
      <div className={styles.result_modal_screen}>
        <div
          className={styles.result_modal_content}
          onClick={(e) => e.stopPropagation()}
        >
          {/* <div className='acediff'>
          </div> */}
        </div>
      </div>
    )
  } else {
    return null
  };
};

export default modalResult