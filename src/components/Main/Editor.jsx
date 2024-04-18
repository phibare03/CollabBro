import React, { useCallback, useState } from 'react';
import Navbar from '../Code/edit/Navbar';
import CodeMirror from "@uiw/react-codemirror";
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import Result from '../Code/edit/Result';
import Navigation from './Navigation';

function Editor() {
  const [html_edit, setHtml_Edit] = useState('');
  const [css_edit, setCss_Edit] = useState('');
  const [js_edit, setJs_Edit] = useState('');

  const onChangeHtml = useCallback((value) => {
    setHtml_Edit(value);
  }, []);

  const onChangeCss = useCallback((value) => {
    setCss_Edit(value);
  }, []);

  const onChangeJavaScript = useCallback((value) => {
    setJs_Edit(value);
  }, []);

  const srcCode = `
    <html>
    <body>${html_edit}</body>
    <style>${css_edit}</style>
    <script>${js_edit}</script>
    </html>
  `;

  return (
    <div>
      <Navigation />
      <Navbar />
      <Navbar />
      <div className="p-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white p-2">HTML</h2>
            <CodeMirror
              className="text-lg border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 p-2 text-left" // Add text-left class here
              value={html_edit}
              height="342px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>
          <div className="bg-gray-900 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white p-2">CSS</h2>
            <CodeMirror
              className="text-lg border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 p-2 text-left" // Add text-left class here
              value={css_edit}
              height="342px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>
          <div className="bg-gray-900 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white p-2">JavaScript</h2>
            <CodeMirror
              className="text-lg border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 p-2 text-left" // Add text-left class here
              value={js_edit}
              height="342px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJavaScript}
            />
          </div>
        </div>
        <Result srcCode={srcCode} />
      </div>
    </div>
  );
}

export default Editor;
