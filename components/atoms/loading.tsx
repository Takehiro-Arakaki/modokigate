import { FC } from 'react';
import styles from '@/styles/components/atoms/template.module.scss'

const loading: FC<{}> = () => {
  return <div className={styles.loader}>Loading...</div>;
};

export default loading