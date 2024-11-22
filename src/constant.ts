// 私有元素属性
export interface WujieConfig {
  APP: 'wujie-app' | string
  APP_ID: 'data-shadow-id' | string
  SCRIPT_ID: 'data-shadow-script-id' | string
  DATA_FLAG: 'data-shadow-flag' | string
  CONTAINER_POSITION_DATA_FLAG: 'data-container-position-flag' | string
  CONTAINER_OVERFLOW_DATA_FLAG: 'data-container-overflow-flag' | string
  LOADING_DATA_FLAG: 'data-loading-flag' | string
  DATA_ATTACH_CSS_FLAG: 'data-shadow-attach-css-flag' | string
}

// 定义了太多的私有变量，需要整理为一个统一的对象, 然后通过函数暴露出去, 顺便实现可自定义配置
export const WUJIE_CONFIG: WujieConfig = {
  APP: 'wujie-app',
  APP_ID: 'data-shadow-id',
  SCRIPT_ID: 'data-shadow-script-id',
  DATA_FLAG: 'data-shadow-flag',
  CONTAINER_POSITION_DATA_FLAG: 'data-container-position-flag',
  CONTAINER_OVERFLOW_DATA_FLAG: 'data-container-overflow-flag',
  LOADING_DATA_FLAG: 'data-loading-flag',
  DATA_ATTACH_CSS_FLAG: 'data-shadow-attach-css-flag',
}

export function mergeConfig(config?: WujieConfig) {
  return Object.assign(WUJIE_CONFIG, config || {})
}

// 需要使用的某些固定变量
export const WUJIE_IFRAME_CLASS = 'shadow_iframe'
export const WUJIE_ALL_EVENT = '_shadow_all_event'
export const WUJIE_SHADE_STYLE = 'position: fixed; z-index: 2147483647; visibility: hidden; inset: 0px; backface-visibility: hidden;'
export const WUJIE_LOADING_STYLE = 'position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; z-index:1;'
export const WUJIE_LOADING_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="30px" viewBox="0 0 24 30">
<rect x="0" y="13" width="4" height="5" fill="#909090">
  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
</rect>
<rect x="10" y="13" width="4" height="5" fill="#909090">
  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
</rect>
<rect x="20" y="13" width="4" height="5" fill="#909090">
  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
</rect>
</svg>`

// 提醒类
export const WUJIE_TIPS_NO_URL = 'url参数为空'
export const WUJIE_TIPS_RELOAD_DISABLED = '子应用调用reload无法生效'
export const WUJIE_TIPS_STOP_APP = '此报错可以忽略，iframe主动中断主应用代码在子应用运行'
export const WUJIE_TIPS_STOP_APP_DETAIL = `${WUJIE_TIPS_STOP_APP}`
export const WUJIE_TIPS_NO_SUBJECT = '事件订阅数量为空'
export const WUJIE_TIPS_NO_FETCH = 'window上不存在fetch属性，需要自行polyfill'
export const WUJIE_TIPS_NOT_SUPPORTED = '当前浏览器不支持无界，子应用将采用iframe方式渲染'
export const WUJIE_TIPS_SCRIPT_ERROR_REQUESTED = '脚本请求出现错误'
export const WUJIE_TIPS_CSS_ERROR_REQUESTED = '样式请求出现错误'
export const WUJIE_TIPS_HTML_ERROR_REQUESTED = 'html请求出现错误'
export const WUJIE_TIPS_REPEAT_RENDER = '无界组件短时间重复渲染了两次，可能存在性能问题请检查代码'
export const WUJIE_TIPS_NO_SCRIPT = '目标Script尚未准备好或已经被移除'
export const WUJIE_TIPS_GET_ELEMENT_BY_ID = '不支持document.getElementById()传入特殊字符，请参考document.querySelector文档'
export const WUJIE_TIPS_INIT_REPEAT = '无界已完成初始化，不再重复初始化'
