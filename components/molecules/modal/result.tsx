import { FC, Dispatch, SetStateAction, useState } from 'react';
import styles from '@/styles/components/molecules/modal/template.module.scss'

type ModalResultProps = {
  modalResultShow: boolean;
  setModalResultShow: Dispatch<SetStateAction<boolean>>;
};

const modalResult: FC<ModalResultProps> = (props) => {
  if (props.modalResultShow) {
    return (
      <div className={styles.result_modal_screen}>
        <div
          className={styles.result_modal_content}
          onClick={(e) => e.stopPropagation()}
        >
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default modalResult