import {FC} from 'react'
import { RecoilState } from 'recoil';
import ShowPreview from '@/components/molecules/editor/preview/show_preview'
import SamplePreview from '@/components/molecules/editor/preview/sample_preview'

type FrontPreviewProps = {
  htmlSource?: RecoilState<string>;
  cssSource?: RecoilState<string>;
  jsSource?: RecoilState<string>;
  sampleHtmlSource?: string;
  sampleCssSource?: string;
  sampleJsSource?: string;
};

const frontPreview: FC<FrontPreviewProps> = (props) => {
  return (
    <>
      <ShowPreview
        htmlSource={props.htmlSource}
        cssSource={props.cssSource}
        jsSource={props.jsSource}
      />
      <SamplePreview
        sampleHtmlSource={props.sampleHtmlSource}
        sampleCssSource={props.sampleCssSource}
        sampleJsSource={props.sampleJsSource}
      />
    </>
  )
}

export default frontPreview
