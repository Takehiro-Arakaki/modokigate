import { FC } from "react";
import styles from '@/styles/components/editor/preview/template.module.scss'

type SamplePreviweProps = {
  sampleHtmlSource?: string;
  sampleCssSource?: string;
  sampleJsSource?: string;
};

const createSampleFrontTemplate = (html: string, css: string, js: string) =>
  `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>playground</title>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>`

const samplePreview: FC<SamplePreviweProps> = (props) => {
  const html = props.sampleHtmlSource ?  props.sampleHtmlSource : "" ;
  const css = props.sampleCssSource ?  props.sampleCssSource : "" ;
  const js = props.sampleJsSource ?  props.sampleJsSource : "" ;

  const source = createSampleFrontTemplate(html, css, js)

  return (
    <div className={styles.sample_preview}>
      <iframe
        sandbox="allow-scripts"
        srcDoc={source}
      ></iframe>
    </div>
  )
}

export default samplePreview