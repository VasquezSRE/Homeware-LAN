(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),l=a(98),o=a(100),s=a(53),c=a.n(s);function i(e){var t=e.sidebar;return 0===t.items.length?null:r.a.createElement("div",{className:Object(l.a)(c.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:c.a.sidebarItemTitle},t.title),r.a.createElement("ul",{className:c.a.sidebarItemList},t.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},r.a.createElement(o.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))}))))}},106:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(s){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),o};e.exports=n,e.exports.default=n},107:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},108:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),o=a(100),s=a(98),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(22).a,theme:c};function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},g=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},h=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=u({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=u({},a,{backgroundColor:null}),r};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var f=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?h(e.theme,e.language):void 0;return t.themeDict=a})),m(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=u({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),m(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},s=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(s))}})),m(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=u({},y(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,s=[],c=[s];o>-1;){for(;(l=n[o]++)<r[o];){var i=void 0,m=t[o],u=a[o][l];if("string"==typeof u?(m=o>0?m:["plain"],i=u):(m=g(m,u.type),u.alias&&(m=g(m,u.alias)),i=u.content),"string"==typeof i){var h=i.split(p),y=h.length;s.push({types:m,content:h[0]});for(var f=1;f<y;f++)d(s),c.push(s=[]),s.push({types:m,content:h[f]})}else o++,t.push(m),a.push(i),n.push(0),r.push(i.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return d(s),c}(void 0!==o?t.tokenize(n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),v=a(106),b=a.n(v),k=a(107),E=a.n(k),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},N=a(109),O=a(99),T=function(){var e=Object(O.useThemeConfig)().prism,t=Object(N.a)().isDarkTheme,a=e.theme||j,n=e.darkTheme||a;return t?n:a},x=a(54),w=a.n(x),_=/{([\d,-]+)}/,P=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},C=/(?:title=")(.*)(?:")/,L=function(e){var t=e.children,a=e.className,o=e.metastring,c=Object(O.useThemeConfig)().prism,m=Object(r.useState)(!1),u=m[0],p=m[1],d=Object(r.useState)(!1),g=d[0],h=d[1];Object(r.useEffect)((function(){h(!0)}),[]);var y=Object(r.useRef)(null),v=[],k="",j=T();if(Array.isArray(t)&&(t=t.join("")),o&&_.test(o)){var N=o.match(_)[1];v=E()(N).filter((function(e){return e>0}))}o&&C.test(o)&&(k=o.match(C)[1]);var x=a&&a.replace(/language-/,"");!x&&c.defaultLanguage&&(x=c.defaultLanguage);var L=t.replace(/\n$/,"");if(0===v.length&&void 0!==x){for(var B,I="",S=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}}(x),D=t.replace(/\n$/,"").split("\n"),A=0;A<D.length;){var R=A+1,F=D[A].match(S);if(null!==F){switch(F.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=R+",";break;case"highlight-start":B=R;break;case"highlight-end":I+=B+"-"+(R-1)+","}D.splice(A,1)}else A+=1}v=E()(I),L=D.join("\n")}var M=function(){b()(L),p(!0),setTimeout((function(){return p(!1)}),2e3)};return l.a.createElement(f,Object(n.a)({},i,{key:String(g),theme:j,code:L,language:x}),(function(e){var t,a=e.className,r=e.style,o=e.tokens,c=e.getLineProps,i=e.getTokenProps;return l.a.createElement(l.a.Fragment,null,k&&l.a.createElement("div",{style:r,className:w.a.codeBlockTitle},k),l.a.createElement("div",{className:w.a.codeBlockContent},l.a.createElement("div",{tabIndex:0,className:Object(s.a)(a,w.a.codeBlock,"thin-scrollbar",(t={},t[w.a.codeBlockWithTitle]=k,t))},l.a.createElement("div",{className:w.a.codeBlockLines,style:r},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=c({line:e,key:t});return v.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return l.a.createElement("span",Object(n.a)({key:t},i({token:e,key:t})))})))})))),l.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(w.a.copyButton),onClick:M},u?"Copied":"Copy")))}))},B=a(7),I=(a(55),a(56)),S=a.n(I),D=function(e){return function(t){var a,n=t.id,r=Object(B.a)(t,["id"]),o=Object(O.useThemeConfig)().navbar.hideOnScroll;return n?l.a.createElement(e,r,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",(a={},a[S.a.enhancedAnchor]=!o,a)),id:n}),r.children,l.a.createElement("a",{className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):l.a.createElement(e,r)}},A=a(57),R=a.n(A),F={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?l.a.createElement(L,e):l.a.createElement("code",e):t},a:function(e){return l.a.createElement(o.a,e)},pre:function(e){return l.a.createElement("div",Object(n.a)({className:R.a.mdxCodeBlock},e))},h1:D("h1"),h2:D("h2"),h3:D("h3"),h4:D("h4"),h5:D("h5"),h6:D("h6")};t.a=F},111:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(98),o=a(101),s=a(24),c=a(100),i=a(108),m=a(102),u=a(58),p=a.n(u),d=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){var t,a,n,u,g,h=e.children,y=e.frontMatter,f=e.metadata,v=e.truncated,b=e.isBlogPostPage,k=void 0!==b&&b,E=f.date,j=f.permalink,N=f.tags,O=f.readingTime,T=y.author,x=y.title,w=y.image,_=y.keywords,P=y.author_url||y.authorURL,C=y.author_title||y.authorTitle,L=y.author_image_url||y.authorImageURL,B=Object(m.a)(w,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,_&&_.length&&r.a.createElement("meta",{name:"keywords",content:_.join(",")}),w&&r.a.createElement("meta",{property:"og:image",content:B}),w&&r.a.createElement("meta",{property:"twitter:image",content:B}),w&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+x})),r.a.createElement("article",{className:k?void 0:"margin-bottom--xl"},(t=k?"h1":"h2",a=E.substring(0,10).split("-"),n=a[0],u=d[parseInt(a[1],10)-1],g=parseInt(a[2],10),r.a.createElement("header",null,r.a.createElement(t,{className:Object(l.a)("margin-bottom--sm",p.a.blogPostTitle)},k?x:r.a.createElement(c.a,{to:j},x)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:E,className:p.a.blogPostDate},u," ",g,", ",n," ",O&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(O)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},L&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:P,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:L,alt:T})),r.a.createElement("div",{className:"avatar__intro"},T&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:P,target:"_blank",rel:"noreferrer noopener"},T)),r.a.createElement("small",{className:"avatar__subtitle"},C)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(o.a,{components:i.a},h)),(N.length>0||v)&&r.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),N.map((function(e){var t=e.label,a=e.permalink;return r.a.createElement(c.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),v&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:f.permalink,"aria-label":"Read more about "+x},r.a.createElement("strong",null,"Read More"))))))}},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(103),o=a(111),s=a(100),c=a(105);t.default=function(e){var t=e.metadata,a=e.items,n=e.sidebar,i=t.allTagsPath,m=t.name,u=t.count;return r.a.createElement(l.a,{title:'Posts tagged "'+m+'"',description:'Blog | Tagged "'+m+'"',wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(c.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,u," ",function(e,t){return e>1?t+"s":t}(u,"post"),' tagged with "',m,'"'),r.a.createElement(s.a,{href:i},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},a.map((function(e){var t=e.content;return r.a.createElement(o.a,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.a.createElement(t,null))})))))))}}}]);