(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{5825:function(t,e,n){"use strict";n.d(e,{L:function(){return a}});var a=new(n(9857)._k)({supportedChainIds:[137]})},1743:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var a=n(4713),s=n(7294);function i(t){var e=(0,a.Ge)(),n=e.library,i=e.chainId,r=(0,s.useState)(""),u=r[0],p=r[1];return(0,s.useEffect)((function(){if(n&&"string"===typeof t){var e=!1;return n.lookupAddress(t).then((function(t){e||"string"!==typeof t||p(t)})).catch((function(){})),function(){e=!0,p("")}}}),[n,t,i]),u}},7868:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var a=n(266),s=n(7757),i=n.n(s),r=n(2003),u=n.n(r),p=n(7294);function o(){var t,e=(0,p.useRef)(),s=(0,p.useState)(),r=s[0],o=s[1];function c(){return(c=(0,a.Z)(i().mark((function t(){var a,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(54).then(n.bind(n,8054)).then((function(t){return t.default}));case 2:s=t.sent,e.current=new s,null==(a=e.current)||a.startOnboarding();case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,p.useEffect)((function(){function t(){return(t=(0,a.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()({timeout:1e3,mustBeMetaMask:!0});case 2:e=t.sent,o(!!e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){t.apply(this,arguments)})()}),[]),{startOnboarding:function(){return c.apply(this,arguments)},stopOnboarding:function(){null!=e&&e.current&&e.current.stopOnboarding()},isMetaMaskInstalled:r,isWeb3Available:null==(t=window)?void 0:t.ethereum}}},7081:function(t,e,n){"use strict";n.r(e),n.d(e,{abi:function(){return m}});var a=n(266),s=n(7757),i=n.n(s),r=n(4713),u=n(9857),p=n(7114),o=n(6076),c=n(7294),y=n(5825),l=n(1743),f=n(7868),m=[{inputs:[{internalType:"bytes32",name:"stampHash",type:"bytes32"},{internalType:"bytes32",name:"nameHash",type:"bytes32"}],name:"insertTimeStamp",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"data",outputs:[{internalType:"uint256",name:"totalStamps",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"fileNameHashes",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"fileOwners",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getNewStamps",outputs:[{components:[{internalType:"bytes32",name:"hash",type:"bytes32"},{internalType:"uint256",name:"timestamp",type:"uint256"}],internalType:"struct TimeStampHash.Hash[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"stampHash",type:"bytes32"}],name:"getOwner",outputs:[{internalType:"address",name:"_owner",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"nameHash",type:"bytes32"}],name:"getTimeStampByNameHash",outputs:[{components:[{internalType:"bytes32",name:"hash",type:"bytes32"},{internalType:"uint256",name:"timestamp",type:"uint256"}],internalType:"struct TimeStampHash.Hash",name:"stampHash",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}];e.default=function(t){var e=t.triedToEagerConnect,n=t.data,s=(0,r.Ge)(),d=s.active,b=s.error,h=s.activate,w=(s.chainId,s.account),v=s.setError,T=(0,f.Z)(),M=T.isMetaMaskInstalled,g=T.isWeb3Available,k=T.startOnboarding,E=T.stopOnboarding;function H(){return(H=(0,a.Z)(i().mark((function t(){var e,a,s,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),e=new p.Q(window.ethereum),a=e.getSigner(),s=new o.CH("0xBfE9f09743aE9476Fee480cA9dDd6f9e34b58bB2",m,a),t.next=6,s.getOwner(n.dataHash);case 6:r=t.sent,console.log(r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var _=(0,c.useState)(!1),O=_[0],C=_[1];(0,c.useEffect)((function(){(d||b)&&(C(!1),E())}),[d,b,E]);(0,l.Z)(w);return b?null:e?"string"!==typeof w?c.createElement("div",null,g?c.createElement("button",{disabled:O,onClick:function(){C(!0),h(y.L,void 0,!0).catch((function(t){t instanceof u.ab?C(!1):v(t)}))}},M?"Connect to MetaMask":"Connect to Wallet"):c.createElement("button",{onClick:k},"Install Metamask")):c.createElement("button",{onClick:function(){return H.apply(this,arguments)}},"Get Owner"):null}},7511:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/CheckHash",function(){return n(7081)}])}},function(t){t.O(0,[121,294,888,774,179],(function(){return e=7511,t(t.s=e);var e}));var e=t.O();_N_E=e}]);