import { useRecoilValue, RecoilState } from 'recoil'
import { FC } from 'react';
import { setTimerSource } from '@/foundations/setTimerSource';
import styles from '@/styles/components/molecules/editor/preview/template.module.scss'

type ShowPreviewProps = {
  htmlSource?: RecoilState<string>;
  cssSource?: RecoilState<string>;
  jsSource?: RecoilState<string>;
};

const createFrontTemplate = (html: string, css: string, js: string) =>
  `<!doctype html>
    <html>
      <head>
        <meta charset='utf-8'>
        <title>playground</title>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>`

const showPreview: FC<ShowPreviewProps> = (props) => {
  const html = useRecoilValue(props.htmlSource)
  const css = props.cssSource ? useRecoilValue(props.cssSource) : '' ;
  const js = props.jsSource ? useRecoilValue(props.jsSource) : '' ;

  const source = createFrontTemplate(html, css, js)
  const sourceArray = [html, css, js]
  const setSource = setTimerSource(source, sourceArray)

  return (
    <>
      <div className={styles.preview}>
        <div className={styles.preview_tab}>
          プレビュー
        </div>
        <div className={styles.preview_content}>
          <iframe
            sandbox='allow-scripts'
            srcDoc={setSource}
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default showPreview