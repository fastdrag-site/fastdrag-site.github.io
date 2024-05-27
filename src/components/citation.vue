<template>
    <a-typography-title class="title">Citation</a-typography-title>
    <div id="app">
      <div class="code-block">
        <pre><code>
            @misc{zhao2024fastdrag,
                  title={FastDrag: Manipulate Anything in One Step}, 
                  author={Xuanjia Zhao and Jian Guan and Congyi Fan and Dongli Xu and Youtian Lin and Haiwei Pan and Pengming Feng},
                  year={2024},
                  eprint={2405.15769},
                  archivePrefix={arXiv},
                  primaryClass={cs.CV}
            }
        </code></pre>
      </div>
    </div>
  </template>
  
  <style>
  .title {
    text-align: center;
  }
  .code-block {
    background-color: #f5f5f5;
    color: #4a4a4a;
    font-size: 14px;
    margin-left: 250px;
    margin-right: 250px;
    padding: 10px;
    overflow-x: auto; /* 横向滚动条，保证长代码不撑破容器 */
    border-radius: 10px;
    font-family: monospace;
    -webkit-font-smoothing: auto;
    white-space: pre-wrap; /* 保留空格和换行 */
  }
  </style>