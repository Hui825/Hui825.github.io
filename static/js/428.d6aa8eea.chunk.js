"use strict";(self.webpackChunkcapstone_market=self.webpackChunkcapstone_market||[]).push([[428,184],{8516:function(e,t,n){n(2483);var s=n(6723);t.A=function(){return(0,s.jsx)("div",{style:{height:"400px",width:"100%"},children:(0,s.jsx)("iframe",{title:"map",src:"http://yourserver.com/\ucd98\ucc9c\uc911\uc559\uc2dc\uc7a5.html",width:"100%",height:"100%",frameBorder:"0",allowFullScreen:"","aria-hidden":"false",tabIndex:"0"})})}},8428:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var s=n(3029),r=n(2901),i=n(5501),c=n(2923),a=n(2483),o=n(1900),d=(n(4184),n(9891)),l=(n(8516),n(6723)),h=function(e){(0,i.A)(n,e);var t=(0,c.A)(n);function n(){var e;return(0,s.A)(this,n),(e=t.call(this)).state={words:{}},e}return(0,r.A)(n,[{key:"_get",value:function(){var e=this;fetch("".concat("https://python-db-practice-96823-default-rtdb.firebaseio.com/","/\uc9c0\uc5ed\ucd95\uc81c\uc815\ubcf4\ub370\uc774\ud130.json")).then((function(e){if(200!=e.status)throw new Error(e.statusText);return e.json()})).then((function(t){return e.setState({words:t})}))}},{key:"shouldComponentUpdate",value:function(e,t){return t.words!=this.state.words}},{key:"componentDidMount",value:function(){this._get()}},{key:"render",value:function(){var e=this;return(0,l.jsx)(o.A,{children:(0,l.jsx)("div",{children:Object.keys(this.state.words).map((function(t){var n=e.state.words[t];return(0,l.jsx)("div",{className:"section_fes",children:(0,l.jsxs)(d.N_,{to:"/festival/".concat(t),style:{textDecoration:"none"},children:[(0,l.jsx)("div",{className:"headerText",children:n.\ucd95\uc81c\uba85}),(0,l.jsx)("div",{className:"innerText",children:"\ub354\ubcf4\uae30"}),(0,l.jsx)("div",{className:"InnerText",children:n.\uac1c\ucd5c\uae30\uac04}),(0,l.jsx)("div",{className:"section__data",children:n.\ucd95\uc81c\uc720\ud615})]})},t)}))})})}}]),n}(a.Component)},4184:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var s=n(5544),r=n(2483),i=n(3376),c=n(1900),a=n(6572),o=n(6723),d=function(){var e=(0,i.g)().index,t=(0,r.useState)(null),n=(0,s.A)(t,2),d=n[0],l=n[1];return(0,r.useEffect)((function(){fetch("".concat("https://python-db-practice-96823-default-rtdb.firebaseio.com/","/\uc9c0\uc5ed\ucd95\uc81c\uc815\ubcf4\ub370\uc774\ud130/").concat(e,".json")).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(e){e?l(e):console.log("No data available for this index")})).catch((function(e){return console.error("Error fetching data:",e)}))}),[e]),(0,o.jsx)(c.A,{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"\ucd95\uc81c \uc0c1\uc138 \ud398\uc774\uc9c0"}),d?(0,o.jsxs)("div",{className:"main",children:[(0,o.jsx)("div",{className:"fesheader__text",children:d.\ucd95\uc81c\uba85}),(0,o.jsxs)("p",{children:["Festival ID: ",e]}),(0,o.jsxs)("div",{className:"fesphoto__inner",children:[(0,o.jsx)("img",{src:a}),(0,o.jsxs)("div",{className:"texts",children:[(0,o.jsxs)("div",{className:"text1",children:["\uac1c\ucd5c \uae30\uac04: ",d.\uac1c\ucd5c\uae30\uac04]}),(0,o.jsxs)("div",{className:"text2",children:["\ucd95\uc81c \uc720\ud615: ",d.\ucd95\uc81c\uc720\ud615]}),(0,o.jsx)("div",{className:"text3",children:"\uc624\uc2dc\ub294 \uae38"})]})]})]}):(0,o.jsx)("p",{children:"Loading..."})]})})}},6572:function(e,t,n){e.exports=n.p+"static/media/_menu01.e4f9f548680cc60b4924.png"}}]);
//# sourceMappingURL=428.d6aa8eea.chunk.js.map