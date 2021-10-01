(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{34:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var a,r,o,i,c,s,p,l=n(0),u=n.n(l),d=n(8),h=n.n(d),g=(n(34),n(6)),b=n.n(g),x=n(17),f=n(9),m=n(10),j=n(11),v=n(13),w=n(12),O=n(7),y=n(2),k=n(3),S=k.a.div(a||(a=Object(y.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),I=k.a.div(r||(r=Object(y.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),C=k.a.div(o||(o=Object(y.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),M=n(1),q=document.querySelector("#modal-root"),L=function(t){Object(v.a)(n,t);var e=Object(w.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).handleKeyDown=function(e){"Escape"===e.code&&!0===t.props.state&&t.props.handleModal()},t.handleBackDropClick=function(e){e.currentTarget===e.target&&t.props.handleModal()},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(d.createPortal)(Object(M.jsx)(I,{onClick:this.handleBackDropClick,children:Object(M.jsx)(C,{children:Object(M.jsx)("img",{src:this.props.image,alt:""})})}),q)}}]),n}(l.Component),z=L,D=k.a.header(i||(i=Object(y.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),U=k.a.form(c||(c=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),E=k.a.button(s||(s=Object(y.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n  opacity: 1;\n  &label {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n}\n}\n"]))),F=k.a.input(p||(p=Object(y.a)(["\ndisplay: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n  font: inherit;\n  font-size: 18px;\n}\n"]))),R=function(t){var e=t.onSubmit;return Object(M.jsx)(D,{children:Object(M.jsxs)(U,{onSubmit:function(t){t.preventDefault(),e(t.target.elements.searchInput.value)},children:[Object(M.jsx)(E,{type:"submit"}),Object(M.jsx)(F,{name:"searchInput",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},T=n(16),B=n.n(T);B.a.defaults.baseURL="https://pixabay.com/api/";var P,K,A,J,_,H=function(){var t=Object(f.a)(b.a.mark((function t(e,n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.get("?q=".concat(e,"&page=").concat(n).concat("&key=22617397-addb084a927a6e55ecd24a84b").concat("&image_type=photo&orientation=horizontal&per_page=12"));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),W=k.a.li(P||(P=Object(y.a)(["\n border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),Y=k.a.img(K||(K=Object(y.a)(["\n width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover{\n      transform: scale(1.03);\n  cursor: zoom-in;\n  }\n"]))),G=function(t){var e=t.webformatURL,n=t.name,a=t.largeImage,r=t.onClick;return Object(M.jsx)(W,{onClick:function(){return r(a)},children:Object(M.jsx)(Y,{src:e,alt:n})})},N=k.a.ul(A||(A=Object(y.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),Q=function(t){var e=t.images,n=t.onImageClick;return Object(M.jsx)(N,{children:e.map((function(t){return Object(M.jsx)(G,{onClick:n,webformatURL:t.webformatURL,name:t.name,largeImage:t.largeImageURL},t.id)}))})},V=k.a.button(J||(J=Object(y.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100px;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n    &:focus, :hover {\n  background-color: #303f9f;\n}\n"]))),X=function(t){var e=t.onClick;return Object(M.jsx)(V,{type:"submit",onClick:function(t){return e(t)},children:"Load More"})},Z=(n(59),n(27)),$=n.n(Z),tt=k.a.div(_||(_=Object(y.a)(["\nmargin-right: auto;\nmargin-left: auto;\n"]))),et=function(){return Object(M.jsx)(tt,{children:Object(M.jsx)($.a,{type:"ThreeDots",color:"#6e89ec",height:80,width:80})})},nt=n(28);window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});var at="idle",rt="pending",ot="resolved",it="rejected",ct=function(t){Object(v.a)(n,t);var e=Object(w.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={images:[],searchInput:null,page:1,requestStatus:at,showModal:!1,largeImage:null},t.handleSearchInput=function(e){e!==t.state.searchInput&&(""===e.trim("")?O.b.error("Please, enter your querry"):t.setState({searchInput:e,page:1}))},t.handleLoadMore=function(e){e.preventDefault(),t.setState((function(t){return{page:t.page+1}}))},t.handleModal=function(e){t.state.largeImage!==e&&t.setState({largeImage:e}),t.setState((function(t){return{showModal:!t.showModal}}))},t}return Object(j.a)(n,[{key:"componentDidUpdate",value:function(){var t=Object(f.a)(b.a.mark((function t(e,n){var a,r,o,i,c,s,p,l,u,d,h;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=this.state,r=a.searchInput,o=a.page,(i=n.searchInput)===r){t.next=23;break}return t.prev=3,this.setState({requestStatus:rt,images:[],page:1}),t.next=7,H(r,o);case 7:if(c=t.sent,s=c.hits,p=c.total,l=s.length,this.setState({images:s}),0!==l){t.next=16;break}return this.setState({requestStatus:it}),Object(O.b)('Sorry, nothing have found by "'.concat(r,'"'),{icon:Object(M.jsx)(nt.a,{fill:"orange"})}),t.abrupt("return");case 16:O.b.success("You have found ".concat(p," images")),l<12?this.setState({requestStatus:it}):this.setState({requestStatus:ot}),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(3),console.log(t.t0.message);case 23:if(i!==r||n.page===o){t.next=38;break}return t.prev=24,this.setState({requestStatus:rt}),t.next=28,H(r,o);case 28:u=t.sent,d=u.hits,h=d.length,this.setState((function(t){return{images:[].concat(Object(x.a)(t.images),Object(x.a)(d))}})),h<12?this.setState({requestStatus:it}):this.setState({requestStatus:ot}),t.next=38;break;case 35:t.prev=35,t.t1=t.catch(24),console.log(t.t1.message);case 38:case"end":return t.stop()}}),t,this,[[3,20],[24,35]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.showModal,n=t.largeImage,a=this.state.requestStatus===ot,r=this.state.requestStatus===rt;return Object(M.jsxs)(S,{children:[Object(M.jsx)(O.a,{}),Object(M.jsx)(R,{onSubmit:this.handleSearchInput}),Object(M.jsx)(Q,{onImageClick:this.handleModal,images:this.state.images}),a&&Object(M.jsx)(X,{onClick:this.handleLoadMore}),r&&Object(M.jsx)(et,{}),e&&Object(M.jsx)(z,{image:n,handleModal:this.handleModal,state:e})]})}}]),n}(l.Component),st=ct,pt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),o(t),i(t)}))};h.a.render(Object(M.jsx)(u.a.StrictMode,{children:Object(M.jsx)(st,{})}),document.getElementById("root")),pt()}},[[80,1,2]]]);
//# sourceMappingURL=main.4d776c72.chunk.js.map