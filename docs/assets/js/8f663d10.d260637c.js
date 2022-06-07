"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[174],{8841:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=t(8427),a=t(4397),o=(t(2784),t(876)),i=["components"],c={sidebar_position:7,sidebar_label:"run sources and lanes"},s="Source runners",u={unversionedId:"api/run-source",id:"api/run-source",title:"Source runners",description:"Please note that all these functions were introduced and should work only",source:"@site/docs/api/7-run-source.md",sourceDirName:"api",slug:"/api/run-source",permalink:"/react-async-states/docs/api/run-source",draft:!1,editUrl:"https://github.com/incepter/react-async-states/edit/main/packages/docs/docs/api/7-run-source.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"run sources and lanes"},sidebar:"tutorialSidebar",previous:{title:"useRun & useRunLane",permalink:"/react-async-states/docs/api/use-run"},next:{title:"React 18+",permalink:"/react-async-states/docs/api/concurrent-mode"}},p={},l=[{value:"<code>runSource</code>",id:"runsource",level:2},{value:"<code>runSourceLane</code>",id:"runsourcelane",level:2},{value:"<code>runpSource</code>",id:"runpsource",level:2},{value:"<code>runpSourceLane</code>",id:"runpsourcelane",level:2}],d={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"source-runners"},"Source runners"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please note that all these functions were introduced and ",(0,o.kt)("strong",{parentName:"p"},"should work")," only\nat module level or in effects or event handlers, they should never be called\nduring render."))),(0,o.kt)("h2",{id:"runsource"},(0,o.kt)("inlineCode",{parentName:"h2"},"runSource")),(0,o.kt)("p",null,"This function runs a ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," received as first argument with the rest parameters.\nAnd returns the abort function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import {createSource, runSource} from "react-async-states";\n\nconst source = createSource(key, producer, config);\n\n// highlight-next-line\nrunSource(source, ...args);\n\n// definition\nexport function runSource<T>(src: AsyncStateSource<T>, ...args): AbortFn {\n  // impl\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"runSource")," after ",(0,o.kt)("inlineCode",{parentName:"p"},"createSource")," will result in the component if rendered\nimmediately receiving a ",(0,o.kt)("inlineCode",{parentName:"p"},"pending")," status, thus, if used with ",(0,o.kt)("inlineCode",{parentName:"p"},"read()")," and\ninside a ",(0,o.kt)("inlineCode",{parentName:"p"},"Suspense")," boundary, will suspend the current tree. If used also\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"lazy")," components, will result on fetching data and code in parallel."))),(0,o.kt)("h2",{id:"runsourcelane"},(0,o.kt)("inlineCode",{parentName:"h2"},"runSourceLane")),(0,o.kt)("p",null,"This function runs a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/use-async-state#lane"},"lane")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"source"),"\nreceived as first argument with the rest parameters.\nAnd returns the abort function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {createSource, runSourceLane} from \"react-async-states\";\n\nconst source = createSource(key, producer, config);\n\n// highlight-next-line\nrunSourceLane(source, 'lane-id', ...args);\n\n// definition\nexport function runSourceLane<T>(src: AsyncStateSource<T>, lane: string | undefined, ...args): AbortFn {\n  // impl\n}\n")),(0,o.kt)("h2",{id:"runpsource"},(0,o.kt)("inlineCode",{parentName:"h2"},"runpSource")),(0,o.kt)("p",null,"This function runs the ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," received as first argument with the rest parameters.\nAnd it returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<State<T>>")," to its resolve."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import {createSource, runpSource} from "react-async-states";\n\nconst source = createSource(key, producer, config);\n\n// highlight-next-line\nrunpSource(source, ...args)\n  .then(state => {\n    \n  });\n\n// definition\nexport function runpSource<T>(src: AsyncStateSource<T>, ...args): Promise<State<T>> {\n  return runpSourceLane(src, undefined, ...args);\n}\n')),(0,o.kt)("h2",{id:"runpsourcelane"},(0,o.kt)("inlineCode",{parentName:"h2"},"runpSourceLane")),(0,o.kt)("p",null,"This function runs a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/use-async-state#lane"},"lane")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"source"),"\nreceived as first argument with the rest parameters.\nAnd it returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<State<T>>")," to its resolve."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import {createSource, runpSourceLane} from "react-async-states";\n\nconst source = createSource(key, producer, config);\n\n// highlight-next-line\nrunpSourceLane(source, laneId, ...args)\n  .then(state => {\n    \n  });\n\n// definition\nexport function runpSourceLane<T>(src: AsyncStateSource<T>, lane: string | undefined, ...args): Promise<State<T>> {\n  // impl\n}\n')))}m.isMDXComponent=!0},876:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);