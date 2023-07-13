(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{474:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-微信登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-微信登录"}},[s._v("#")]),s._v(" 1. 微信登录")]),s._v(" "),t("ol",[t("li",[s._v("调用"),t("code",[s._v("wx.login(Object object)")]),t("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("接口地址"),t("OutboundLink")],1),s._v("拿到code，")]),s._v(" "),t("li",[s._v("将code传给后端，后端调"),t("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("auth.code2Session"),t("OutboundLink")],1),s._v("获取openid、session_key")]),s._v(" "),t("li",[s._v("登录成功、开发者自定义存储登录状态（用户无感）")])]),s._v(" "),t("h2",{attrs:{id:"_2-获取用户信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取用户信息"}},[s._v("#")]),s._v(" 2. 获取用户信息")]),s._v(" "),t("h3",{attrs:{id:"_2-1-只获取用户openid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-只获取用户openid"}},[s._v("#")]),s._v(" 2.1 只获取用户openid")]),s._v(" "),t("p",[s._v("调用"),t("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("wx.getUserInfo"),t("OutboundLink")],1),s._v("，拿到encryptedData，后端自行解密，解密成功后将openid返回给客户端。（用户无感）")]),s._v(" "),t("h3",{attrs:{id:"_2-2-获取昵称、头像、openid等更多信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-获取昵称、头像、openid等更多信息"}},[s._v("#")]),s._v(" 2.2 获取昵称、头像、openid等更多信息")]),s._v(" "),t("p",[s._v("调用"),t("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("wx.getUserProfile(Object object)"),t("OutboundLink")],1),s._v("，需弹出用户授权，同意后拿到encryptedData，发给后端进行解密。（用户有感）")]),s._v(" "),t("h3",{attrs:{id:"_2-3-微信获取用户信息接口调整"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-微信获取用户信息接口调整"}},[s._v("#")]),s._v(" 2.3 微信获取用户信息接口调整")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801",target:"_blank",rel:"noopener noreferrer"}},[s._v("小程序登录、用户信息相关接口调整说明"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"_3-获取用户手机号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-获取用户手机号"}},[s._v("#")]),s._v(" 3. 获取用户手机号")]),s._v(" "),t("ol",[t("li",[s._v("获取用户手机号需用户主动触发（"),t("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),t("OutboundLink")],1),s._v("）,拿到encryptedData（手机号加密数据）、iv")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("注意：")]),s._v(" 获取手机号需完成认证，开发阶段拿测试号可以走完完整流程")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("nut"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("button open"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"getPhoneNumber"')]),s._v(" @getphonenumber"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wxLogin"')]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"primary"')]),s._v(" style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width: 100%"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("获取手机号"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nut"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("button"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("wxLogin")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("res")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'获取手机号成功'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("登录拿到session_key")]),s._v(" "),t("li",[s._v("后端将encryptedData解密出手机号，返回给客户端")])]),s._v(" "),t("p",[t("strong",[s._v("参考：")]),s._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/qq_41021581/article/details/125932563",target:"_blank",rel:"noopener noreferrer"}},[s._v("微信小程序获取用户手机号"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"_4-关于解密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-关于解密"}},[s._v("#")]),s._v(" 4. 关于解密")]),s._v(" "),t("h3",{attrs:{id:"_4-1-sessionkey"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-sessionkey"}},[s._v("#")]),s._v(" 4.1 sessionKey")]),s._v(" "),t("ul",[t("li",[s._v("客户端获取到的用户信息、用户手机号等信息大部分都是加密数据"),t("code",[s._v("encryptedData")]),s._v("，需要后端解密后才能使用。")]),s._v(" "),t("li",[s._v("后端解密都需要sessionKey，前端登录完，换取的sessionKey可以存起来，需要的时候传给后端，不用每次用都得重新调用wx.login重新换取。")]),s._v(" "),t("li",[s._v("重新换取sessionKey后，上一个sessionKey可能会失效。")])]),s._v(" "),t("p",[t("strong",[s._v("sessionKey的验证")])]),s._v(" "),t("ul",[t("li",[s._v("每次向后端发送sessionKey前，可以先走"),t("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.checkSession.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("wx.checkSession"),t("OutboundLink")],1),s._v("是否还有效")])]),s._v(" "),t("h3",{attrs:{id:"_4-2-node版本解密demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-node版本解密demo"}},[s._v("#")]),s._v(" 4.2 node版本解密demo")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95:~:text=%E5%BE%AE%E4%BF%A1%E5%AE%98%E6%96%B9%E6%8F%90%E4%BE%9B%E4%BA%86%E5%A4%9A%E7%A7%8D%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%E7%9A%84%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81%EF%BC%88%EF%BC%88%E7%82%B9%E5%87%BB%E4%B8%8B%E8%BD%BD%EF%BC%89%E3%80%82%E6%AF%8F%E7%A7%8D%E8%AF%AD%E8%A8%80%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%8E%A5%E5%8F%A3%E5%90%8D%E5%AD%97%E5%9D%87%E4%B8%80%E8%87%B4%E3%80%82%E8%B0%83%E7%94%A8%E6%96%B9%E5%BC%8F%E5%8F%AF%E4%BB%A5%E5%8F%82%E7%85%A7%E7%A4%BA%E4%BE%8B%E3%80%82",target:"_blank",rel:"noopener noreferrer"}},[s._v("解密算法"),t("OutboundLink")],1),s._v(",根据官方提供的解密流程，提供了几个封装好的示例。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// demo.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" WXBizDataCrypt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./WXBizDataCrypt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" appId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wx4f4bc4dec97d474b'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" sessionKey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tiihtNczf5v6AKRyjwEUhQ=='")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" encryptedData "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" \n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CiyLU1Aw2KjvrjMdj8YKliAjtP4gsMZM'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'QmRzooG2xrDcvSnxIMXFufNstNGTyaGS'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'9uT5geRa0W4oTOb1WT7fJlAC+oNPdbB+'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3hVbJSRgv+4lGOETKUQz6OYStslQ142d'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NCuabNPGBzlooOmB231qMM85d2/fV6Ch'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'evvXvQP8Hkue1poOFtnEtpyxVLW1zAo6'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/1Xx1COxFvrc2d7UL/lmHInNlxuacJXw'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'u0fjpXfz/YqYzBIBzD6WUfTIF9GRHpOn'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Hz7saL8xz+W//FRAUid1OksQaQx4CMs'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8LOddcQhULW4ucetDf96JcR3g0gfRK4P'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C7E/r7Z6xNrXd2UIeorGj5Ef7b1pJAYB'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'6Y5anaHqZ9J6nKEBvB4DnNLIVWSgARns'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/8wR2SiRS7MNACwTyrGvt9ts8p12PKFd'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lqYTopNHR1Vf7XjfhQlVsAJdNiKdYmYV'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'oKlaRv85IfVunYzO0IKXsyl7JCUjCpoG'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'20f0a04COwfneQAGGwd5oa+T8yO5hzuy'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Db/XcxxmK01EpqOyuxINew=='")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" iv "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'r7BXXKkLb8qrSNn05n0qiA=='")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" pc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WXBizDataCrypt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("appId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sessionKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("decryptData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encryptedData "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" iv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'解密后 data: '")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解密后的数据为")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// data = {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//   "nickName": "Band",')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//   "gender": 1,')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//   "language": "zh_CN",')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//   "city": "Guangzhou",')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//   "province": "Guangdong",')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//   "country": "CN",')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//   "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/aSKcBBPpibyKNicHNTMM0qJVh8Kjgiak2AHWr8MHM4WgMEm7GFhsf8OYrySdbvAMvTsw3mo8ibKicsnfN5pRjl1p8HQ/0",')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//   "unionId": "ocMvos6NjeKLIBqg5Mr9QjxrP1FA",')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//   "watermark": {')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//     "timestamp": 1477314187,')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//     "appid": "wx4f4bc4dec97d474b"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   }")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// }")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br")])]),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// WXBizDataCrypt.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" crypto "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'crypto'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("WXBizDataCrypt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("appId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sessionKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("appId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" appId\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sessionKey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sessionKey\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WXBizDataCrypt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("decryptData")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("encryptedData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" iv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// base64 decode")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" sessionKey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Buffer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sessionKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'base64'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  encryptedData "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Buffer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encryptedData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'base64'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  iv "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Buffer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("iv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'base64'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解密")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" decipher "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" crypto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createDecipheriv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aes-128-cbc'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sessionKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" iv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置自动 padding 为 true，删除填充补位")]),s._v("\n    decipher"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAutoPadding")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" decoded "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" decipher"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("update")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encryptedData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'binary'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    decoded "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" decipher"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("final")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    decoded "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("decoded"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Illegal Buffer'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("decoded"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("watermark"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("appid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("appId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Illegal Buffer'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" decoded\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" WXBizDataCrypt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);