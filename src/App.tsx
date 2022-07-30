import { useEffect } from 'react'
import { callPrinter } from 'call-printer'
import { download } from './utils'
import { getTemplate, PRESETTPL } from './template'
import './App.scss'

function App() {
  useEffect(() => {
    window.mdEditor = new window.tui.Editor({
      el: document.querySelector('#MdEditor'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '100%',
      language: 'zh_CN',
      placeholder: '请输入正文...',
      usageStatistics: false,
      exts: ['scrollFollow', 'colorSyntax'],
      // events: { change: updatePreview },
    })
    const mdtext = window.localStorage.getItem('mdtext') || PRESETTPL
    window.mdEditor.setValue(mdtext)
  }, [])

  const downloadMD = () => {
    download('resume-template.MD', window.mdEditor.getValue())
  }
  const makepdf = () => {
    const content = document.querySelectorAll('.tui-editor-contents')[0]
    const tpl = getTemplate(content.innerHTML)
    console.log('tpl--->', tpl)
    callPrinter(tpl)
  }
  const saveMd = () => {
    window.localStorage.setItem('mdtext', window.mdEditor.getValue())
    alert('已保存至localstorage')
  }
  return (
    <div className='App'>
      <div className='Container'>
        <div className='SideBar'>
          <img src='https://avatars.githubusercontent.com/u/18440746' alt='' />
          <div className='SideMenu'>
            <div onClick={makepdf}>打印pdf</div>
            <div onClick={downloadMD}>下载md</div>
            <div onClick={saveMd}>本地存储</div>
          </div>
        </div>

        <div className='WorkingBox'>
          <div id='MdEditor'></div>
        </div>
      </div>
    </div>
  )
}

export default App
