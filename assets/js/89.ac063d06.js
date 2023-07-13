(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{412:function(s,a,t){"use strict";t.r(a);var e=t(4),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"node-sass、sass-loader、sass什么关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-sass、sass-loader、sass什么关系"}},[s._v("#")]),s._v(" node-sass、sass-loader、sass什么关系")]),s._v(" "),a("p",[s._v("  sass-loader用来将sass文件转换为css，是封装给webpack用的，webpack通过sass-loader来调用node-sass，底层编译还要靠ruby-sass（已废弃） / node-sass（目前默认） / dart-sass（官方推荐），通俗来讲就是前者依赖于后者。")]),s._v(" "),a("h2",{attrs:{id:"loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[s._v("#")]),s._v(" loader")]),s._v(" "),a("p",[s._v("  绝大部分loader都是对现有工具的封装，主要作用是负责协调。 如sass-loader是为了配合webpack构建过程工作，最后将sass编译成css的还是node-sass（或dart-sass），这也就是为什么sass-loader依赖于node-sass的原因。"),a("br"),s._v("\n  再比如babel-loader与babel，stylus-loader与stylus，sass-loader与sass，vue-cli与vue都是相同道理。")]),s._v(" "),a("h2",{attrs:{id:"dart-sass与node-sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dart-sass与node-sass"}},[s._v("#")]),s._v(" dart-sass与node-sass")]),s._v(" "),a("p",[s._v("  dart-sass与node-sass是一个东西，都是用来将sass编译成css的工具。 dart-sass是用dart语言写的，不依赖于node。")]),s._v(" "),a("h2",{attrs:{id:"抛弃node-sass-拥抱dart-sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抛弃node-sass-拥抱dart-sass"}},[s._v("#")]),s._v(" 抛弃node-sass，拥抱dart-sass")]),s._v(" "),a("p",[s._v("  node-sass与node版本相关联，耦合度太高，node升级或降级都可能导致node-sass无法正常运行，需要先把之前node-sass卸载掉，再装适合的版本，这是一件很糟糕的事情。"),a("br"),s._v("\n  而dart-sass就没有这个问题，官方也推荐使用dart-sass,所以新项目直接使用sass就好。")]),s._v(" "),a("h2",{attrs:{id:"优先选择less"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优先选择less"}},[s._v("#")]),s._v(" 优先选择less")]),s._v(" "),a("p",[s._v("  虽然sass比less强大，比如（sass可以自定义函数等）但less已经够用了。而且常用语法基本一致。"),a("br"),s._v("\n  项目中css预处理器更换less后，环境相对更简单，不会出现因为node版本引发的一些问题。")]),s._v(" "),a("p",[a("strong",[s._v("参考：")])]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/885894f9f110",target:"_blank",rel:"noopener noreferrer"}},[s._v("less和sass简单对比"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"dart-sass安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dart-sass安装"}},[s._v("#")]),s._v(" dart-sass安装")]),s._v(" "),a("h3",{attrs:{id:"npm安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm安装"}},[s._v("#")]),s._v(" npm安装")]),s._v(" "),a("p",[s._v("执行"),a("code",[s._v("npm install sass -D")]),s._v("，npm上开始包名为dart-sass，后来改名叫sass了，这个版本的sass是dart-sass的一个分发版本 (distribution)，不过被编译成了纯 JavaScript 语言，所以虽然是dart写的但并不需要装dart环境。")]),s._v(" "),a("h3",{attrs:{id:"homebrew安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#homebrew安装"}},[s._v("#")]),s._v(" homebrew安装")]),s._v(" "),a("p",[a("code",[s._v("brew install sass/sass/sass")])]),s._v(" "),a("p",[s._v("通过以上任意一种方式安装后，都可以执行"),a("code",[s._v("sass --version")]),s._v("查看版本。")]),s._v(" "),a("h2",{attrs:{id:"node-sass安装报错-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-sass安装报错-解决方案"}},[s._v("#")]),s._v(" node-sass安装报错，解决方案")]),s._v(" "),a("h3",{attrs:{id:"_1-考虑版本问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-考虑版本问题"}},[s._v("#")]),s._v(" 1.考虑版本问题")]),s._v(" "),a("p",[s._v("查看本地node版本是否符合当前node-sass运行条件，不符合的话，更换"),a("a",{attrs:{href:"https://www.npmjs.com/package/node-sass",target:"_blank",rel:"noopener noreferrer"}},[s._v("node-sass版本"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall node-sass "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" node-sass@x.x.x "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("看下面版本可以看到，想装node-sass4.x.x只能在node14环境下，此时我们就要将node版本改为14，再重装依赖，或者将依赖的node-sass版本进行升级。"),a("br"),s._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/NeverStop1024/images-store@main/blog/wmTVtv_hBdVr5.png",alt:"wmTVtv_hBdVr5"}})]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("devDependencies")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"node-sass"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^4.14.1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_2-注意paython2环境问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-注意paython2环境问题"}},[s._v("#")]),s._v(" 2.注意paython2环境问题")]),s._v(" "),a("p",[s._v("node-sass高版本需要paython2环境")]),s._v(" "),a("h3",{attrs:{id:"_3-更换下载源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-更换下载源"}},[s._v("#")]),s._v(" 3.更换下载源")]),s._v(" "),a("p",[s._v("换成淘宝下载源，重新安装")]),s._v(" "),a("h3",{attrs:{id:"_4-是否为m1芯片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-是否为m1芯片"}},[s._v("#")]),s._v(" 4.是否为m1芯片")]),s._v(" "),a("p",[s._v("m1芯片貌似装不上node-sass，执行"),a("code",[s._v("npm install node-sass@npm:sass")]),s._v("安装\n这句话意思是安装node-sass，但版本是npm上的sass，简单来说，相当于"),a("code",[s._v("npm install sass")]),s._v("，然后把sass重命名叫node-sass了，最后工作的工具sass。")]),s._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("ol",[a("li",[s._v("dart-sass 不支持/deep/，要改成::v-deep")]),s._v(" "),a("li",[s._v("node-sass最好不要装全局,因为每个项目依赖的版本可能不同,"),a("code",[s._v("-D")]),s._v("装到项目开发依赖中")])])])}),[],!1,null,null,null);a.default=r.exports}}]);