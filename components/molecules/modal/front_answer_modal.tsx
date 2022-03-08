import { FC, Dispatch, SetStateAction } from 'react';
import styles from '@/styles/components/modal/front_answer_modal.module.scss'
import FrontAnswerEditor from '@/components/organism/editor/front_answer_editor'
import { RecoilState } from 'recoil';

type FrontAnswerModalProps = {
  show: boolean;
  setModalShow: Dispatch<SetStateAction<boolean>>
  tab: { HTML?: 0; CSS?: 1; JS?: 2 };
  activeTab: RecoilState<0 | 1 | 2>;
  mode: string;
  value: string;
};
// const TAB = { HTML: 0 } as const;
// const activeTab = atom<0 | 1 | 2>({ key: "active", default: TAB.HTML });

const switchModal = (
  show: boolean,
  setModalShow: Dispatch<SetStateAction<boolean>>,
  tab: { HTML?: 0; CSS?: 1; JS?: 2 },
  activeTab: RecoilState<0 | 1 | 2>,
  mode: string,
  value: string
) => {
  if (show) {
    return (
      <div className={styles.modal_screen}>
        <div
          className={styles.modal_content}
          onClick={(e) => e.stopPropagation()}
        >
          <FrontAnswerEditor
            tab={tab}
            activeTab={activeTab}
            mode={mode}
            value={value}
          />
          <p><button onClick={() => setModalShow(false)}>close</button></p>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

const frontAnswerModal: FC<FrontAnswerModalProps> = (props) => {
  return (
    <>
      {
        switchModal(
          props.show,
          props.setModalShow,
          props.tab,
          props.activeTab,
          props.mode,
          props.value,
        )
      }
    </>
  )
}

export default frontAnswerModal