import { useRecoilState, RecoilState } from "recoil";
import { FC } from "react";

type HtmlTemplateNavProps = {
  tab: { HTML?: 0; CSS?: 1; JS?: 2 }
  activeTab: RecoilState<0 | 1 | 2>
};

type NavigationTab = 0 | 1 | 2 ;

const htmlTemplateNav: FC<HtmlTemplateNavProps>  = (props) => {
  const [active, changeActive] = useRecoilState(props.activeTab);

  const activeClass = (tab: number) => {
    return active === tab ? "is-active" : "";
  };

  const NavigationTab = (tab: NavigationTab, tabName: string) => {
    return (
      <a
        className={`playground-nav__link ${activeClass(tab)}`}
        onClick={() => { changeActive(tab); }}
      >
        {tabName}
      </a>
    )
  }

  const IndexHtmlTab = () => {
    const tabName = "index.html"
    return props.tab.HTML === 0 ? NavigationTab(props.tab.HTML, tabName) : null
  }

  const StyleSheetCssTab = () => {
    const tabName = "stylesheet.css"
    return props.tab.CSS === 1 ? NavigationTab(props.tab.CSS, tabName) : null
  }

  const ScriptJsTab = () => {
    const tabName = "script.js"
    return props.tab.JS === 2 ? NavigationTab(props.tab.JS, tabName) : null
  }

  return (
    <div className="playground-nav">
      <IndexHtmlTab/>
      <StyleSheetCssTab/>
      <ScriptJsTab/>
    </div>
  )
}

export default htmlTemplateNav
