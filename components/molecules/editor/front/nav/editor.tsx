import { useRecoilState, RecoilState } from 'recoil';
import { FC } from 'react';
import styles from '@/styles/components/molecules/editor/front/nav/template.module.scss'

type EditorNavProps = {
  tab: { HTML?: 0; CSS?: 1; JS?: 2 }
  activeTab: RecoilState<0 | 1 | 2>
};

type NavigationTab = 0 | 1 | 2 ;

const editorNav: FC<EditorNavProps>  = (props) => {
  const [active, changeActive] = useRecoilState(props.activeTab);

  const activeClass = (tab: number) => {
    return active === tab ? styles.active : '';
  };

  const navigationTab = (tab: NavigationTab, tabName: string) => {
    return (
      <a
        className={`${styles.link} ${activeClass(tab)}`}
        onClick={() => { changeActive(tab); }}
      >
        {tabName}
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
    <div className={styles.navigation}>
      <IndexHtmlTab/>
      <StyleSheetCssTab/>
      <ScriptJsTab/>
    </div>
  )
}

export default editorNav
