(this.webpackJsonptoken_pdk=this.webpackJsonptoken_pdk||[]).push([[0],{18:function(e,t,n){e.exports={idoWarper:"ido_idoWarper__15LEE",imgWarper:"ido_imgWarper__22HXI",logo:"ido_logo__ZNEG0",createAt:"ido_createAt__E5mfV",button:"ido_button__11xKR",pdkSougou:"ido_pdkSougou__Vi3-E"}},51:function(e,t,n){},55:function(e,t){},70:function(e,t,n){"use strict";n.r(t);var c=n(11),r=n.n(c),i=n(41),s=n.n(i),a=(n(51),n(2)),d=n.n(a),o=n(17),j=n(31),b=n(9),u=n(16),l=n.p+"static/media/king.ba2765b1.jpg",h=n.p+"static/media/question.eff49360.jpg",p=n.p+"static/media/pdk-sougou.b47b2efc.png",O=n.p+"static/media/pdk.5dcce691.svg",v=n.p+"static/media/pay.8e68b2df.gif",x=n(18),f=n.n(x),E=function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_accounts"});case 2:if(0!==(t=e.sent).length){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",t[0]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(d.a.mark((function e(t,n,c){var r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.sendTransaction(c);case 3:return r=e.sent,e.next=6,n.waitForTransaction(r.hash,3,12e4);case 6:return i=e.sent,e.abrupt("return",i);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,c){return e.apply(this,arguments)}}(),w={myAddr:"0x3A3c02343A6Aa33fF7a6E5da01c1d532CDc52643"},_=n(5);window.ethers=u.a;var k=function(e,t){switch(t.type){case"SET_isWeb3":return Object(b.a)(Object(b.a)({},e),{},{isWeb3:t.isWeb3});case"SET_isEnabled":return Object(b.a)(Object(b.a)({},e),{},{isEnabled:t.isEnabled});case"SET_account":return Object(b.a)(Object(b.a)({},e),{},{account:t.account});case"SET_provider":return Object(b.a)(Object(b.a)({},e),{},{provider:t.provider});case"SET_network":return Object(b.a)(Object(b.a)({},e),{},{network:t.network});case"SET_signer":return Object(b.a)(Object(b.a)({},e),{},{signer:t.signer});case"SET_balance":return Object(b.a)(Object(b.a)({},e),{},{balance:t.balance});default:throw new Error("Unhandled action ".concat(t.type," in web3Reducer"))}},m=function(e,t){switch(t.type){case"SET_isConnecting":return Object(b.a)(Object(b.a)({},e),{},{isConnecting:t.isConnecting});default:throw new Error("Unhandled action ".concat(t.type," in dappReducer"))}},T={isConnecting:!1},y={isWeb3:!1,isEnabled:!1,account:u.a.constants.AddressZero,provider:null,signer:null,network:null,balance:"0"};var S=function(){var e=Object(c.useReducer)(k,y),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(c.useReducer)(m,T),s=Object(j.a)(i,2),a=s[0],b=s[1];window.web3State=n,window.dappState=a,Object(c.useEffect)((function(){"undefined"!==typeof ethereum?r({type:"SET_isWeb3",isWeb3:!0}):r({type:"SET_isWeb3",isWeb3:!1})}),[]),Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:(t=e.sent)?(r({type:"SET_isEnabled",isEnabled:!0}),r({type:"SET_account",account:t})):r({type:"SET_isEnabled",isEnabled:!1});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n.isWeb3&&e()}),[n.isWeb3]),Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:t=e.sent,r({type:"SET_isEnabled",isEnabled:!0}),r({type:"SET_account",account:t[0]}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r({type:"SET_account",account:u.a.constants.AddressZero}),r({type:"SET_isEnabled",isEnabled:!1});case 12:return e.prev=12,b({type:"SET_isConnecting",isConnecting:!1}),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();n.isWeb3&&a.isConnecting&&!n.isEnabled&&e()}),[n.isWeb3,a.isConnecting,n.isEnabled]),Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(d.a.mark((function e(){var t,c,i,s,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new u.a.providers.Web3Provider(window.ethereum),r({type:"SET_provider",provider:t}),c=t.getSigner(),r({type:"SET_signer",signer:c}),e.next=7,t.getNetwork();case 7:return i=e.sent,r({type:"SET_network",network:i}),e.next=11,t.getBalance(n.account);case 11:s=e.sent,a=u.a.utils.formatEther(s),r({type:"SET_balance",balance:a}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),r({type:"SET_network",network:y.network}),r({type:"SET_balance",balance:y.balance});case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();n.isEnabled&&n.account!==u.a.constants.AddressZero&&e()}),[n.isEnabled,n.account]);var x=function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.balance<.011)){e.next=3;break}return alert("\u4e0d\u591f\u8db3\u591f\u7684HT\u6253\u6b3e"),e.abrupt("return");case 3:return t={to:w.myAddr,value:u.a.utils.parseEther(String("0.011"))},e.prev=4,e.next=7,g(n.signer,n.provider,t);case 7:e.sent?alert("\u6210\u529f\u4e86\uff0c\u8c22\u8c22"):alert("\u5931\u8d25\u4e86"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),alert(JSON.stringify(e.t0));case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:f.a.idoWarper,children:[Object(_.jsxs)("div",{className:f.a.imgWarper,children:[Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:l,alt:"king"})}),Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:h,alt:"king"})})]}),Object(_.jsxs)("div",{children:[Object(_.jsxs)("section",{children:[Object(_.jsx)("h3",{children:"\u53d1\u884c\u4ec0\u4e48\u5e01"}),Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:O,alt:"",className:f.a.logo})}),Object(_.jsx)("div",{children:"\u5373\u5c06\u53d1\u884c\u4e00\u4e2a\u6570\u5b57\u8d27\u5e01\uff0c\u4f46\u662f\u4e3a\u4e86\u7fa4\u4f17\u7684\u53c2\u4e0e\u611f\uff08\u6253\u94b1\uff09\uff0c\u5c31\u7b80\u5355\u7c97\u66b4\u8bd5\u8bd5\u52df\u8d44\u3002"}),Object(_.jsx)("div",{children:"\u8fd9\u4e2a\u5e01\u53eb\u505aPDK\uff0c\u6682\u4e14\u5b9a\u4e49\u4e3a\uff1a\u8dd1\u5f97\u5feb\u3002"}),Object(_.jsx)("div",{children:"\u770b\u56fe\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5c06\u5b83\u5b9a\u4e49\u4e3a\u5176\u4ed6\u540d\u5b57\u3002"}),Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:p,alt:"",className:f.a.pdkSougou})})]}),Object(_.jsxs)("section",{children:[Object(_.jsx)("h3",{children:"\u5173\u4e8e\u8fd9\u4e2a\u5e01"}),Object(_.jsx)("div",{children:"\u76ee\u524d\u8be5\u5e01\u5c1a\u672a\u53d1\u884c\uff0c\u5408\u7ea6\u5730\u5740\u4e5f\u8fd8\u6ca1\u6709\uff0c\u7b49\u540e\u671f\u53d1\u884c\u4e86\uff0c\u4f1a\u5728\u8fd9\u91cc\u516c\u5e03\u3002"}),Object(_.jsx)("div",{children:"\u5047\u5982\u73b0\u6709PDK\u8fd9\u4e2a\u5e01\uff0c\u90fd\u4e0d\u662f\u8fd9\u91cc\u9762\u63d0\u5230\u7684PDK\u3002"}),Object(_.jsx)("div",{children:"\u53d1\u884c\u603b\u989d\u4e3a1\u4e07\u4ebf\u4e2a\uff08\u4e0a\u9650\uff09\uff1f\u8fd8\u662f\u4e00\u4ebf\u4e2a\uff08\u4e0b\u9650\uff09\uff1f\u592a\u591a0\u4e86\u6709\u70b9\u770b\u4e0d\u8fc7\u6765\u3002"}),Object(_.jsx)("div",{children:"\u53d1\u884c\u4e2a\u6570\u4e3a1\u4ebf\u81f3\u4e00\u4e07\u4ebf\u4e2a\u4e4b\u95f4\uff0c\u7531\u793e\u533a\u8ba8\u8bba\u51b3\u5b9a\u3002"})]}),Object(_.jsxs)("section",{children:[Object(_.jsx)("h3",{children:"\u52df\u8d44\u91d1\u989d"}),Object(_.jsx)("div",{children:"\u6700\u4f4e\u76ee\u6807\u662f\u7b79\u59071HT\u3002"}),Object(_.jsx)("div",{children:"\u6700\u9ad8\u76ee\u6807\uff1a\u65e0\u3002"}),Object(_.jsx)("div",{children:"\u5982\u679c\u52df\u8d44\u9ad8\u4e8e\u4e24\u500dHT\uff0c\u90a3\u4e48\u5f00\u53d1\u8005\u5c06\u622a\u75591HT\u6700\u4e3a\u6700\u521d\u7684\u4e70\u57df\u540d\u8d39\u7528\uff08\u5047\u5982\u540e\u671f\u4e70\u7684\u8bdd\uff09\u3002"}),Object(_.jsx)("div",{children:"\u6bcf\u6b21\u52df\u8d44\u91d1\u989d\u4e3a0.011HT\uff0c\u4e0d\u7b49\u4e8e\u8fd9\u4e2a\u91d1\u989d\u7684\uff0c\u5c06\u5f53\u6210\u65e0\u507f\u6350\u8d60\uff0c\u7531\u793e\u533a\u51b3\u5b9a\u5982\u4f55\u4f7f\u7528\u3002"}),Object(_.jsx)("div",{children:"\u6bcf\u4e2a\u8d26\u53f7\u6ca1\u6709\u9650\u5236\u6253\u591a\u5c11\u6b21\uff0c\u591a\u6b21\u6253\u5c06\u8bb0\u5f55\u4e3a\u4e00\u6b21\u3002"}),Object(_.jsx)("div",{children:"\u5269\u4f59HT\u5c06\u6263\u9664\u624b\u7eed\u8d39\u548c50%\u7684\u5e01\u52a0\u5165LP\u6c60\uff0c"}),Object(_.jsx)("div",{children:"\u5e76\u4e14\u9a6c\u4e0a\u5c06LP\u6c60\u6253\u5230\u9ed1\u6d1e\u5730\u5740\uff0c\u8fd9\u91cc\u662f\u9a6c\u4e0a\u6253\u5230\u9ed1\u6d1e\u3002"}),Object(_.jsx)("div",{children:"\u5047\u5982\u52df\u8d44\u91d1\u989d\u8fc7\u5927\uff0c\u4f8b\u5982\u5927\u4e8e1000HT\uff08\u6b64\u5904\u5c1a\u672a\u51b3\u5b9alp\u4e0a\u9650\uff09\uff0c"}),Object(_.jsx)("div",{children:"\u90a3\u4e48\u6700\u591a\u5c061000HT\u653e\u5165LP\u6c60\u5b50\uff0c\u5269\u4f59\u7684\u90e8\u5206\u540c\u6837\u7531\u793e\u533a\u51b3\u5b9a\u5982\u4f55\u4f7f\u7528\u3002"}),Object(_.jsx)("div",{children:"\u5bf9\u4e8e\u6bcf\u4e2a\u53c2\u4e0e\u6253\u6b3e\u7684\u8d26\u53f7\uff0c\u5c06\u5728\u8be5\u5e01\u53d1\u884c\u7684\u65f6\u5019\uff0c\u8c61\u5f81\u6027\u7ed9\u6bcf\u4e2a\u4eba\u62531\u4e2aPDK\u3002"}),Object(_.jsx)("div",{children:"\u53cd\u6b63\u52df\u8d44\u7684\u90a3\u4e2a0.011HT\u80af\u5b9a\u80fd\u4e70\u4e0d\u5c11\u7684\uff0c\u4e0d\u8981\u671f\u671b\u52df\u8d44\u7684\u5e01\u80fd\u5356\u56de\u672c\u3002"})]}),Object(_.jsxs)("section",{children:[Object(_.jsx)("h3",{children:"\u52df\u8d44\u5931\u8d25\uff1f"}),Object(_.jsx)("div",{children:"\u5982\u679c\u6700\u540e\u52df\u96c6\u5931\u8d25\uff0c\u5c06\u6bcf\u4eba\u52df\u96c6\u76840.01\u539f\u8def\u6253\u56de\uff0c0.001\u4f5c\u4e3a\u624b\u7eed\u8d39\u3002"}),Object(_.jsx)("div",{children:"\u52a0\u5165\u6ca1\u4efb\u4f55\u4eba\u53c2\u4e0e\u8fd9\u4e2a\u52df\u8d44\uff0c\u90a3\u8fd9\u4e2a\u5e01\u8fd8\u662f\u4e0d\u53d1\u884c\u4e86\u3002"}),Object(_.jsx)("div",{children:"\u4e3a\u5565\u52df\u8d44\u5931\u8d25\u5c31\u4e0d\u53d1\u884c\uff1f\u56e0\u4e3a\u5982\u679c\u6ca1\u6709\u4eba\u77e5\u9053\uff0c\u90a3\u8fd9\u4e2a\u53d1\u884c\u4e86\u4e5f\u6ca1\u7528\u3002"}),Object(_.jsxs)("div",{children:["\u5982\u679c\u4f60\u6350\u8d60\u540e\u53c8\u53cd\u6094\u4e86\uff0c\u8bf7\u5728\u6dfb\u52a0LP\u4e4b\u524d\u90ae\u7bb1\u8054\u7cfb\u3002",Object(_.jsx)("br",{}),"\u5f00\u53d1\u8005\u5c06\u6263\u9664\u624b\u7eed\u8d39\u4e4b\u540e\u539f\u8def\u6253\u56de\u3002"]})]}),Object(_.jsxs)("section",{children:[Object(_.jsx)("h3",{children:"\u6709\u6ca1\u6709\u5ba1\u8ba1\uff1f"}),Object(_.jsx)("div",{children:"\u6ca1\u6709\u3002"}),Object(_.jsx)("div",{children:"\u8fd9\u4efd\u4ee3\u7801\u5c06\u76f4\u63a5fork\u67d0\u4e2a\u901a\u7f29\u5e01\u7684\u65b9\u5f0f\u6765\u53d1\u884c\u3002"}),Object(_.jsx)("div",{children:"\u76ee\u524d\u501f\u9274\u7684\u706b\u5e01\u94fe\u7684DOG\uff0c\u4f46\u662f\u4f1a\u53bb\u6389\u4ea4\u6613\u91cc\u9762\u52a0\u6d41\u52a8\u6c60\u7684\u884c\u4e3a\u3002"}),Object(_.jsx)("div",{children:"\u9884\u671f\u662f\u901a\u7f29+\u6301\u6709\u5c31\u5206\u7ea2\u673a\u5236\u3002"})]}),Object(_.jsxs)("section",{children:[Object(_.jsx)("h3",{children:"\u8fd9\u4e2a\u5e01\u7684\u610f\u4e49\uff1f"}),Object(_.jsx)("div",{children:"\u53ef\u80fd\u53ea\u662f\u4e00\u4e2a\u6e38\u620f\u3002"}),Object(_.jsx)("div",{children:"\u6309\u7167\u7406\u8bba\u6765\u8bf4\uff0c\u53ea\u8981\u6211\u8dd1\u5f97\u8db3\u591f\u5feb\uff0c\u5e84\u5bb6\u4f1a\u4e0d\u4f1a\u5272\u5230\u6211\u3002"}),Object(_.jsx)("div",{children:"\u5982\u679c\u4f60\u662f\u7b2c\u4e00\u4e2a\u8dd1\u8fdb\u53bb\u7684\uff0c\u90a3\u4e48\u4f60\u5c31\u662f\u5e84\u5bb6\u3002"}),Object(_.jsx)("div",{children:"\u4f46\u662f\uff0c\u8c01\u4f1a\u7b11\u5230\u6700\u540e\u5462\uff1f"}),Object(_.jsx)("div",{children:"\u5047\u5982\u5168\u90e8\u4eba\u90fd\u8dd1\u4e86\uff0c\u90a3\u4e48\u6ca1\u8dd1\u7684\u90a3\u4e2a\u5c31\u662f\u5e84\u5bb6\u4e86\u3002"}),Object(_.jsx)("div",{children:"\u8fd9\u65f6\u5019\u9700\u8981\u4f60\u91cd\u65b0\u5ba3\u4f20\u5b83\u3002"}),Object(_.jsx)("div",{children:"\u8fd9\u5c06\u751f\u751f\u4e0d\u606f\u3002"})]}),Object(_.jsxs)("section",{children:[Object(_.jsx)("h3",{children:"\u6240\u4ee5"}),Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:v,alt:"pay"})}),Object(_.jsx)("br",{}),Object(_.jsxs)("div",{children:["\u6253\u6b3e\u5230: ",w.myAddr]}),n.isEnabled&&null!==n.network&&n.account!==u.a.constants.AddressZero&&Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{children:["\u4f60\u7684\u4f59\u989d: ",n.balance,"HT"]}),Object(_.jsx)("br",{}),Object(_.jsx)("div",{className:f.a.button,onClick:x,children:"\u6253\u6b3e 0.011 HT"})]}),!n.isEnabled&&Object(_.jsx)("div",{className:f.a.button,onClick:function(){n.isEnabled||b({type:"SET_isConnecting",isConnecting:!0})},children:"\u94fe\u63a5\u94b1\u5305"})]})]}),Object(_.jsxs)("div",{className:f.a.createAt,children:["\u6b64\u4fe1\u606f\u521b\u5efa\u4e8e\uff1a2021\u5e7404\u670822\u65e5\u3002",Object(_.jsx)("br",{}),"\u5982\u6709\u7591\u95ee\uff0c\u54a8\u8be2\uff1a tokenpdk@gmial.com"]})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(S,{})}),document.getElementById("root")),W()}},[[70,1,2]]]);
//# sourceMappingURL=main.7820a8bf.chunk.js.map