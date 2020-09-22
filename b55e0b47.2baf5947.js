(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{142:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return c}));var a=t(2),i=t(6),o=(t(0),t(182)),r={id:"with-global-settings",title:"Global Settings",sidebar_label:"WithGlobalSettings"},l={unversionedId:"usages/init/with-global-settings",id:"usages/init/with-global-settings",isDocsHomePage:!1,title:"Global Settings",description:"You can configure some global settings for the AutoMapper instance.",source:"@site/docs/usages/init/with-global-settings.md",slug:"/usages/init/with-global-settings",permalink:"/docs/next/usages/init/with-global-settings",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/usages/init/with-global-settings.md",version:"current",sidebar_label:"WithGlobalSettings",sidebar:"docs",previous:{title:"Profile",permalink:"/docs/next/usages/init/add-profile"},next:{title:"Initialize",permalink:"/docs/next/usages/init/initialize"}},p=[],s={rightToc:p};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can configure some ",Object(o.b)("strong",{parentName:"p"},"global settings")," for the ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper")," instance.\nTo configure the ",Object(o.b)("strong",{parentName:"p"},"global settings"),", call ",Object(o.b)("inlineCode",{parentName:"p"},"withGlobalSettings()")," on the ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper"),". ",Object(o.b)("inlineCode",{parentName:"p"},"withGlobalSettings()")," expects a ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapperGlobalSettings")," as its argument."),Object(o.b)("p",null,"The following settings can be set at the global level:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sourceNamingConvention"),": ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/usages/features/naming-convention"}),"NamingConvention")," to be used on ALL Source models"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"destinationNamingConvention"),": ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/usages/features/naming-convention"}),"NamingConvention")," to be used on ALL Destination models"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"useUndefined"),": A flag to let ",Object(o.b)("inlineCode",{parentName:"li"},"AutoMapper")," knows to use ",Object(o.b)("inlineCode",{parentName:"li"},"undefined")," instead of ",Object(o.b)("inlineCode",{parentName:"li"},"null")," for empty values. Default to: ",Object(o.b)("inlineCode",{parentName:"li"},"false")," which ",Object(o.b)("inlineCode",{parentName:"li"},"AutoMapper")," will use ",Object(o.b)("inlineCode",{parentName:"li"},"null")," for empty values"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"skipUnmappedAssertion"),": A flag to let ",Object(o.b)("inlineCode",{parentName:"li"},"AutoMapper")," knows whether it should assert unmapped properties in ",Object(o.b)("inlineCode",{parentName:"li"},"Mappings")," on ",Object(o.b)("inlineCode",{parentName:"li"},"map()")," operations. Default to: ",Object(o.b)("inlineCode",{parentName:"li"},"false")," which ",Object(o.b)("inlineCode",{parentName:"li"},"AutoMapper")," will assert and throw an error if there are unmapped properties on the ",Object(o.b)("inlineCode",{parentName:"li"},"Destination")," model.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"skipUnmappedAssertion")," will have ",Object(o.b)("strong",{parentName:"p"},"no")," effect on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/usages/mapping-configuration/for-member/map-with"}),"MapWith"),". All ",Object(o.b)("inlineCode",{parentName:"p"},"mapWith()")," operations will always ",Object(o.b)("strong",{parentName:"p"},"skip")," assertions.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"throwError"),": A flag to let ",Object(o.b)("inlineCode",{parentName:"li"},"AutoMapper")," knows if it should throw exceptions on ",Object(o.b)("strong",{parentName:"li"},"Duplicate Profiles/Mapping"),". Default to ",Object(o.b)("inlineCode",{parentName:"li"},"true"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.withGlobalSettings({\n  sourceNamingConvention: PascalCaseNamingConvention,\n  destinationNamingConvention: CamelCaseNamingConvention,\n  useUndefined: true,\n  skipUnmappedAssertion: true,\n  throwError: false\n});\n")),Object(o.b)("p",null,"These ",Object(o.b)("strong",{parentName:"p"},"global settings")," will be applied to ALL ",Object(o.b)("inlineCode",{parentName:"p"},"Mappings")," on the ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper")," instance. By default, both ",Object(o.b)("inlineCode",{parentName:"p"},"sourceNamingConvention")," and ",Object(o.b)("inlineCode",{parentName:"p"},"destinationNamingConvention")," are ",Object(o.b)("inlineCode",{parentName:"p"},"CamelCaseNamingConvention"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"interface AutoMapperGlobalSettings {\n  useUndefined?: boolean;\n  skipUnmappedAssertion?: boolean;\n  sourceNamingConvention?: Constructible<NamingConvention>;\n  destinationNamingConvention?: Constructible<NamingConvention>;\n  throwError?: boolean;\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We will learn more about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/usages/features/naming-convention"}),"NamingConvention")," in a later section.")))}c.isMDXComponent=!0},182:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),c=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=c(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=c(t),m=a,d=b["".concat(r,".").concat(m)]||b[m]||u[m]||o;return t?i.a.createElement(d,l(l({ref:n},s),{},{components:t})):i.a.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);