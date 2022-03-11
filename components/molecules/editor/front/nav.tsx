import { useRecoilState, RecoilState } from 'recoil';
import { FC } from 'react';
import styles from '@/styles/components/molecules/editor/front/template.module.scss'
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa"

type FrontNavProps = {
  tab: { HTML?: 0; CSS?: 1; JS?: 2 };
  activeTab: RecoilState<0 | 1 | 2>;
};

type NavigationTab = 0 | 1 | 2 ;

const frontNav: FC<FrontNavProps>  = (props) => {
  const [active, changeActive] = useRecoilState(props.activeTab);

  const activeClass = (tab: number) => {
    return active === tab ? styles.active : '';
  };

  const langIcon = (tab: number) => {
    switch (tab){
      case 0:
        return <FaHtml5 size={12} color={'orange'} className={styles.icons}/>;
      case 1:
        return <FaCss3 size={12} color={'skyblue'} className={styles.icons}/>;
      case 2:
        return <FaJs size={12} color={'yellow'} className={styles.icons}/>;
      default:
        console.log('iconsError');
    }
  };

  const navigationTab = (tab: NavigationTab, tabName: string) => {
    return (
      <a
        className={`${styles.link} ${activeClass(tab)}`}
        onClick={() => { changeActive(tab); }}
      >
        <span>{langIcon(tab)}{tabName}</span>
      </a>
    )
  }

  const IndexHtmlTab = () => {
    const tabName = 'index.html'
    return props.tab.HTML === 0 ? navigationTab(props.tab.HTML, tabName) : null
  }

  const StyleSheetCssTab = () => {
    const tabName = 'stylesheet.css'
    return props.tab.CSS === 1 ? navigationTab(props.tab.CSS, tabName) : null
  }

  const ScriptJsTab = () => {
    const tabName = 'script.js'
    return props.tab.JS === 2 ? navigationTab(props.tab.JS, tabName) : null
  }

  return (
    <>
      <div className={styles.navigation}>
        <div>
          <IndexHtmlTab/>
          <StyleSheetCssTab/>
          <ScriptJsTab/>
        </div>
      </div>
    </>
  )
}

export default frontNav
