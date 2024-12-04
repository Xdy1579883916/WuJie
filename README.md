# @dy-kit/wujie

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![License][license-src]][license-href]

### 修改自腾讯[无界](https://wujie-micro.github.io/doc/), 提供了初始化函数 (至少需要在 startApp 之前完成初始化，否则，使用默认配置)
```javascript
import { init } from '@dy-kit/wujie'

// 现在你需要尽早在项目中调用 init 函数
init({
  APP: 'wujie-app',
  APP_ID: 'data-shadow-id',
  SCRIPT_ID: 'data-shadow-script-id',
  DATA_FLAG: 'data-shadow-flag',
  CONTAINER_POSITION_DATA_FLAG: 'data-container-position-flag',
  CONTAINER_OVERFLOW_DATA_FLAG: 'data-container-overflow-flag',
  LOADING_DATA_FLAG: 'data-loading-flag',
  DATA_ATTACH_CSS_FLAG: 'data-shadow-attach-css-flag',
})
```

### 定义vue组件使用
```vue
<script>
import {defineComponent, h} from 'vue'
import {bus, startApp} from "@dy-kit/wujie";

export default defineComponent({
  name: "WuJie",
  props: {
    width: {type: String, default: ""},
    height: {type: String, default: ""},
    name: {type: String, default: ""},
    loading: {type: HTMLElement, default: undefined},
    url: {type: String, default: ""},
    sync: {type: Boolean, default: false},
    prefix: {type: Object, default: undefined},
    alive: {type: Boolean, default: false},
    props: {type: Object, default: undefined},
    replace: {type: Function, default: undefined},
    fetch: {type: Function, default: undefined},
    fiber: {type: Boolean, default: true},
    degrade: {type: Boolean, default: false},
    plugins: {type: Array, default: null},
    beforeLoad: {type: Function, default: null},
    beforeMount: {type: Function, default: null},
    afterMount: {type: Function, default: null},
    beforeUnmount: {type: Function, default: null},
    afterUnmount: {type: Function, default: null},
    activated: {type: Function, default: null},
    deactivated: {type: Function, default: null},
    loadError: {type: Function, default: null}
  },
  data() {
    return {
      destroy: null,
      startAppQueue: Promise.resolve(),
    };
  },
  mounted() {
    bus.$onAll(this.handleEmit);
    this.execStartApp();
    this.$watch(
        () => this.name + this.url,
        () => this.execStartApp()
    );
  },
  methods: {
    handleEmit(event, ...args) {
      this.$emit(event, ...args);
    },
    execStartApp() {
      this.startAppQueue = this.startAppQueue.then(async () => {
        try {
          this.destroy = await startApp({
            name: this.name,
            url: this.url,
            el: this.$refs.wujie,
            loading: this.loading,
            alive: this.alive,
            fetch: this.fetch,
            props: this.props,
            replace: this.replace,
            sync: this.sync,
            prefix: this.prefix,
            fiber: this.fiber,
            degrade: this.degrade,
            plugins: this.plugins,
            beforeLoad: this.beforeLoad,
            beforeMount: this.beforeMount,
            afterMount: this.afterMount,
            beforeUnmount: this.beforeUnmount,
            afterUnmount: this.afterUnmount,
            activated: this.activated,
            deactivated: this.deactivated,
            loadError: this.loadError
          });
        } catch (error) {
          console.log(error);
        }
      });
    },
  },
  unmounted() {
    bus.$offAll(this.handleEmit);
  },
  render() {
    return h("div", {
      style: {
        width: this.width,
        height: this.height,
      },
      ref: "wujie",
    });
  },
})
</script>

```

## License

[MIT](./LICENSE) License © 2024-PRESENT [XiaDeYu](https://github.com/Xdy1579883916)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@dy-kit/wujie?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@dy-kit/wujie
[npm-downloads-src]: https://img.shields.io/npm/dm/@dy-kit/wujie?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@dy-kit/wujie
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@dy-kit/wujie?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@dy-kit/wujie
[license-src]: https://img.shields.io/github/license/Xdy1579883916/wujie.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/Xdy1579883916/WuJie/blob/main/LICENSE
