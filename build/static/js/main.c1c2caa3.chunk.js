(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{107:function(e,t,i){},108:function(e,t,i){},140:function(e,t,i){},141:function(e,t,i){},152:function(e,t,i){},170:function(e,t,i){},183:function(e,t,i){},185:function(e,t,i){"use strict";i.r(t);var a=i(0),s=i(32),c=i.n(s),l=(i(140),i(29)),n=i(15),r=(i(141),i(235)),o=i(114),d=i.n(o),j=i(116),b=i.n(j),h=i(117),v=i.n(h),p=i(74),m=i.n(p),u=i(1);function x(){const[e,t]=Object(a.useState)(!1),i=Object(n.f)();return window.addEventListener("scroll",(()=>{let e=window.scrollY;t(e>=50)})),Object(u.jsx)(l.a,{children:Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:e?"header active ":"header",children:Object(u.jsxs)(r.a,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(u.jsx)("h1",{style:{cursor:"pointer"},onClick:()=>{window.scrollY>=0&&window.scrollTo({top:0,behavior:"smooth"})},children:"Movieflix"}),Object(u.jsxs)("ul",{className:"header__items",children:[Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{className:e?"a active ":"a",to:"/",onClick:()=>i.push("/"),children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{className:e?"a active ":"a",to:"/movies",onClick:()=>{i.push("/movies")},children:"Movies"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{className:e?"a active ":"a",to:"/series",onClick:()=>{i.push("/series")},children:"TV Shows"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{className:e?"a active ":"a",to:"/search",onClick:()=>{i.push("/search")},style:{marginRight:"0"},children:"Search"})})]}),Object(u.jsxs)("ul",{className:"header__bottom",children:[Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{className:e?"a active ":"a",to:"/",onClick:()=>i.push("/"),children:Object(u.jsx)(d.a,{})})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{className:e?"a active ":"a",to:"/movies",onClick:()=>{i.push("/movies")},children:Object(u.jsx)(b.a,{})})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{className:e?"a active ":"a",to:"/series",onClick:()=>{i.push("/series")},children:Object(u.jsx)(v.a,{})})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{className:e?"a active ":"a",to:"/search",onClick:()=>{i.push("/search")},style:{marginRight:"0"},children:Object(u.jsx)(m.a,{})})})]})]})})})})}const O="https://image.tmdb.org/t/p/w300",g="https://image.tmdb.org/t/p/original",_="https://api.themoviedb.org/3",f="205cebadb659f10935a047f6a32e5daa",y="https://www.movienewz.com/img/films/poster-holder.jpg",k="https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",w=` ${_}/trending/movie/day?api_key=${f}`,N=`${_}/movie/top_rated?api_key=${f}&language=en-US&page=1`,$=`${_}/trending/tv/day?api_key=${f}`,S=`${_}/tv/top_rated?api_key=${f}&language=en-US&page=1`,C=`https://api.themoviedb.org/3/discover/movie?api_key=${f}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=`,I=`https://api.themoviedb.org/3/discover/tv?api_key=${f}&language=en-US&sort_by=popularity.desc&page=`;i(152);var U=i(24),M=i.n(U),T=(i(170),i(52)),B=i.n(T),F=(i(107),i(251)),E=i(250),P=i(245),G=i(118),L=i(121),z=i.n(L),R=i(255);const W={position:"absolute",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",height:"100%",bgcolor:"#000000eb",p:0},Y={playerVars:{autoplay:1}};function H(e){let{data:t,title:i,id:s,type:c}=e;const[l,n]=a.useState(!1),[r,o]=a.useState(""),d=()=>{n(!1)};return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(E.a,{style:{color:"white"},onClick:()=>{(async()=>{var e;const{data:t}=await M.a.get(`https://api.themoviedb.org/3/${c}/${s}/videos?api_key=205cebadb659f10935a047f6a32e5daa&language=en-US`);o(null===(e=t.results[0])||void 0===e?void 0:e.key)})(),n(!0)},children:"Watch Trailer"}),Object(u.jsx)(P.a,{hideBackdrop:!0,open:l,onClose:d,"aria-labelledby":"child-modal-title","aria-describedby":"child-modal-description",style:{background:"#000000eb"},children:Object(u.jsxs)(R.a,{sx:{...W},children:[Object(u.jsx)(G.a,{videoId:r,opts:Y,className:"videoPlayer"}),Object(u.jsx)(E.a,{onClick:d,children:Object(u.jsx)(z.a,{style:{width:"3em",height:"2em",color:"red"},className:"childModal__close"})})]})})]})}const D={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",height:"70%",p:0};function J(e){let{children:t,title:i,overview:s,poster:c,backgroundImg:l,data:n,type:r,id:o}=e;const[d,j]=a.useState(!1);return Object(u.jsxs)("div",{children:[Object(u.jsx)(E.a,{style:{color:"white"},onClick:()=>{j(!0)},children:t}),Object(u.jsx)(P.a,{open:d,onClose:()=>j(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",style:{background:"#131313f2"},children:Object(u.jsxs)(F.a,{sx:D,children:[Object(u.jsx)("div",{className:"banner",style:{backgroundSize:"cover",backgroundImage:l?`url(${g}/${l})`:k,backgroundPosition:"center,center",height:"100%",objectFit:"cover"}}),Object(u.jsx)("div",{className:"banner__layout"}),Object(u.jsxs)("div",{className:"modal__content",children:[Object(u.jsx)("img",{className:"modal__poster",src:c?`${O}/${c}`:O,alt:i}),Object(u.jsxs)("div",{className:"modal__details",children:[Object(u.jsx)("h1",{className:"modal__title",children:i}),Object(u.jsxs)("p",{className:"modal__overview",children:[s," "]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"btn",children:Object(u.jsx)(H,{id:o,type:r,title:i})})})]})]})]})})]})}function V(e){let{title:t,fetchUrl:i,type:s}=e;const[c,l]=Object(a.useState)([]),[n,r]=Object(a.useState)(!1),o=`${i}`;return Object(a.useEffect)((()=>{(async()=>{const{data:e}=await M.a.get(`${i}`);l(e.results)})()}),[o]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:t}),Object(u.jsx)("div",{className:"t",children:c.map((e=>Object(u.jsx)(J,{title:(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_title)||(null===e||void 0===e?void 0:e.name),poster:`${(null===e||void 0===e?void 0:e.poster_path)||(null===e||void 0===e?void 0:e.backdrop_path)}`,backgroundImg:`${(null===e||void 0===e?void 0:e.backdrop_path)||(null===e||void 0===e?void 0:e.poster_path)}`,overview:`${null===e||void 0===e?void 0:e.overview}`,id:null===e||void 0===e?void 0:e.id,type:s,children:Object(u.jsxs)("div",{className:"trending__card",children:[Object(u.jsxs)("div",{className:"trending__component ",children:[Object(u.jsx)("img",{className:"trending__poster",src:`${O}/${(null===e||void 0===e?void 0:e.poster_path)||(null===e||void 0===e?void 0:e.backdrop_path)}`,alt:""}),Object(u.jsx)("div",{className:"trending__layout",children:Object(u.jsx)(B.a,{style:{width:"4rem",height:"4rem"}})})]}),Object(u.jsx)("div",{className:"trending__title",children:(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_title)||(null===e||void 0===e?void 0:e.name)})]})},e.id)))})]})}function q(e){let{title:t,key:i,overview:a,poster:s,backgroundImg:c,id:l,media_type:n}=e;return Object(u.jsxs)("div",{style:{marginBottom:"1rem"},children:[Object(u.jsx)("div",{className:"banner",style:{backgroundSize:"cover",backgroundImage:c?`url(${g}/${c})`:k,backgroundPosition:"center,center",height:"100%",objectFit:"cover"}}),Object(u.jsx)("div",{className:"banner__layout"}),Object(u.jsx)("div",{className:"banner__content",children:Object(u.jsxs)(r.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(u.jsxs)("div",{className:"movie__details",children:[Object(u.jsx)("h1",{className:"movie__title",children:"undefined"===t?"Loading...":t}),Object(u.jsxs)("p",{className:"movie__overview",children:["undefined"===a?"Loading...":a," "]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"btn",children:Object(u.jsx)(H,{id:l,type:n,children:"Watch Trailer"})})})]}),Object(u.jsx)("img",{className:"movie__poster",src:s?`${O}/${s}`:"Loading...",alt:t})]})})]})}i(183);function A(){const[e,t]=Object(a.useState)(!1);return window.addEventListener("scroll",(()=>{let e=window.scrollY;t(e>=50)})),Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("div",{className:"footer__background",style:{backgroundSize:"cover",backgroundImage:"url(https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/ed1cb962-411d-4e43-bad2-33f07ae8e341/IN-en-20211108-popsignuptwoweeks-perspective_alpha_website_large.jpg",backgroundPosition:"center,center",height:"100%",objectFit:"cover"}}),Object(u.jsx)("div",{className:"footer__layout"}),Object(u.jsxs)("div",{className:"footer__content",children:[Object(u.jsx)("h1",{className:"footer__title",onClick:()=>{window.scrollY>=0&&window.scrollTo({top:0,behavior:"smooth"})},children:"Movieflix"}),Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://sandeep-badeti.netlify.app/",target:"_blank",rel:"noopener noreferrer",children:"Portfolio"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://github.com/sandeepbadeti-17",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.linkedin.com/in/sandeep-badeti-56b3b520b/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://twitter.com/Sandeep17347946?s=09%20",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://instagram-clone-by-sb.netlify.app/",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://instagram-clone-by-sb.netlify.app/",target:"_blank",rel:"noopener noreferrer",children:"Instagram_Clone"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://bill-cash.netlify.app/",target:"_blank",rel:"noopener noreferrer",children:"Bill Cash"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://palindrome-date.netlify.app/",target:"_blank",rel:"noopener noreferrer",children:"Palindrome"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://codesandbox.io/u/Sandeep-17-bot",target:"_blank",rel:"noopener noreferrer",children:"CodeSandBox"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://hashnode.com/@Code-Sandeep",children:"Hashnode"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Corporate Information"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Contact Us"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Speed Test"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Legal Notices"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Only on Movieflix"})})]})})]})]})}function K(){const[e,t]=Object(a.useState)([]);return Object(a.useEffect)((()=>{(async()=>{const{data:e}=await M.a.get(`${_}/trending/movie/day?api_key=${f}`);t(e.results[Math.floor(Math.random()*e.results.length)-1])})()}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"trending",children:[Object(u.jsx)(q,{title:`${(null===e||void 0===e?void 0:e.original_title)||(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)}`,backgroundImg:`${(null===e||void 0===e?void 0:e.backdrop_path)||(null===e||void 0===e?void 0:e.poster_path)}`,poster:`${(null===e||void 0===e?void 0:e.poster_path)||(null===e||void 0===e?void 0:e.backdrop_path)}`,overview:`${null===e||void 0===e?void 0:e.overview}`,media_type:`${null===e||void 0===e?void 0:e.media_type}`,id:`${null===e||void 0===e?void 0:e.id}`}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(r.a,{children:Object(u.jsx)(V,{title:"Trending Movies",fetchUrl:w,type:"movie"})})}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(r.a,{children:Object(u.jsx)(V,{title:"TopRated Movies",fetchUrl:N,type:"movie"})})}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(r.a,{children:Object(u.jsx)(V,{title:"Trending Show",type:"tv",fetchUrl:$})})}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(r.a,{children:Object(u.jsx)(V,{title:"TopRated Shows",type:"tv",fetchUrl:S})})}),Object(u.jsx)(A,{})]})})}var Q=i(244);function X(e){let{selectedGenres:t,setSelectedGenres:i,genres:s,setGenres:c,type:l,setpage:n}=e;return Object(a.useEffect)((()=>((async()=>{const{data:e}=await M.a.get(`https://api.themoviedb.org/3/genre/${l}/list?api_key=205cebadb659f10935a047f6a32e5daa&language=en-US`);c(e.genres)})(),()=>{c({})})),[]),Object(u.jsxs)("div",{children:[t.map((e=>Object(u.jsx)(Q.a,{style:{margin:2},label:e.name,color:"primary",clickable:!0,size:"small",onDelete:()=>(e=>{i(t.filter((t=>t.id!==e.id))),c([...s,e]),console.log([...s,e]),n(1)})(e)},e.id))),s&&s.map((e=>Object(u.jsx)(Q.a,{style:{margin:2},label:e.name,clickable:!0,size:"small",onClick:()=>(e=>{i([...t,e]),c(s.filter((t=>t.id!==e.id))),n(1)})(e)},e.id)))]})}var Z=e=>{if(e.length<1)return"";return e.map((e=>e.id)).reduce(((e,t)=>e+","+t))},ee=(i(108),i(246));function te(e){let{title:t,fetchUrl:i,type:s}=e;const[c,l]=Object(a.useState)([]),[n,o]=Object(a.useState)([]),[d,j]=Object(a.useState)([]),[b,h]=Object(a.useState)(),[v,p]=Object(a.useState)(),m=Z(d),x=async()=>{const{data:e}=await M.a.get(`https://api.themoviedb.org/3/discover/${s}?api_key=205cebadb659f10935a047f6a32e5daa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${b}&with_genres=${m}`);l(e.results),console.log(e.results),p(e.total_pages)};return Object(a.useEffect)((()=>(x(),()=>{x()})),[m,b]),Object(u.jsxs)("div",{className:"movies",children:[Object(u.jsxs)(r.a,{children:[Object(u.jsx)("h3",{children:t}),Object(u.jsx)(X,{selectedGenres:d,setSelectedGenres:j,genres:n,setGenres:o,setpage:h,type:"movie"})]}),Object(u.jsx)("div",{className:"movie__card",children:c.map((e=>Object(u.jsxs)(J,{title:(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_title)||(null===e||void 0===e?void 0:e.name),poster:`${(null===e||void 0===e?void 0:e.poster_path)||(null===e||void 0===e?void 0:e.backdrop_path)}`,backgroundImg:`${(null===e||void 0===e?void 0:e.backdrop_path)||(null===e||void 0===e?void 0:e.poster_path)}`,overview:`${null===e||void 0===e?void 0:e.overview}`,type:s,id:`${null===e||void 0===e?void 0:e.id}`,children:[console.log(null===e||void 0===e?void 0:e.id),Object(u.jsxs)("div",{className:"trending__card",children:[Object(u.jsxs)("div",{className:"trending__component ",children:[Object(u.jsx)("img",{className:"trending__poster",src:(null===e||void 0===e?void 0:e.poster_path)?`${O}/${(null===e||void 0===e?void 0:e.poster_path)||(null===e||void 0===e?void 0:e.backdrop_path)}`:y,alt:""}),Object(u.jsx)("div",{className:"trending__layout",children:Object(u.jsx)(B.a,{style:{width:"4rem",height:"4rem"}})})]}),Object(u.jsx)("span",{className:"trending__title",children:(null===e||void 0===e?void 0:e.original_title)||(null===e||void 0===e?void 0:e.original_name)||(null===e||void 0===e?void 0:e.name)})]})]},e.id)))}),Object(u.jsx)(ee.a,{hidePrevButton:!0,hideNextButton:!0,className:"pagination",onChange:e=>{return t=e.target.textContent,h(t),void window.scroll(0,0);var t},setpage:b,count:v,color:"primary"})]})}var ie=i(243),ae=i(247),se=i(252);function ce(){const[e,t]=Object(a.useState)(0),[i,s]=Object(a.useState)(""),[c,l]=Object(a.useState)(),[n,o]=Object(a.useState)(),[d,j]=Object(a.useState)(),b=async()=>{try{const{data:t}=await M.a.get(`https://api.themoviedb.org/3/search/${e?"tv":"movie"}?api_key=205cebadb659f10935a047f6a32e5daa&language=en-US&query=${i}&page=${c}&include_adult=false`);o(t.results),j(t.total_pages)}catch(t){console.log(t)}};return Object(a.useEffect)((()=>(window.scroll(0,0),b(),()=>{b()})),[e,c]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(r.a,{children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{style:{display:"flex",maxWidth:"800px",margin:"auto",padding:"5rem 0 2rem 0"},children:[Object(u.jsx)(ie.a,{id:"outlined-basic",label:"Search",variant:"outlined",style:{flex:"1",background:"grey",color:"white",marginRight:"0.2rem"},onChange:e=>s(e.target.value)}),Object(u.jsx)(E.a,{onClick:b,variant:"contained",children:Object(u.jsx)(m.a,{})})]}),Object(u.jsxs)(ae.a,{value:e,indicatorColor:"primary",textColor:"primary",onChange:(e,i)=>{t(i),l(1)},style:{display:"flex",justifyContent:"center",maxWidth:"800px",margin:"auto"},children:[Object(u.jsx)(se.a,{style:{width:"50%",color:"white"},label:"Search Movies"}),Object(u.jsx)(se.a,{style:{width:"50%",color:"white"},label:"Search Series"})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"movie__card",children:n&&n.map((t=>Object(u.jsx)(J,{title:(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.original_title)||(null===t||void 0===t?void 0:t.name),poster:`${(null===t||void 0===t?void 0:t.poster_path)||(null===t||void 0===t?void 0:t.backdrop_path)}`,backgroundImg:`${(null===t||void 0===t?void 0:t.backdrop_path)||(null===t||void 0===t?void 0:t.poster_path)}`,overview:`${null===t||void 0===t?void 0:t.overview}`,type:""+(e?"tv":"movie"),id:`${null===t||void 0===t?void 0:t.id}`,children:Object(u.jsxs)("div",{className:"trending__card",children:[Object(u.jsxs)("div",{className:"trending__component ",children:[Object(u.jsx)("img",{className:"trending__poster",src:(null===t||void 0===t?void 0:t.poster_path)?`${O}/${(null===t||void 0===t?void 0:t.poster_path)||(null===t||void 0===t?void 0:t.backdrop_path)}`:y,alt:""}),Object(u.jsx)("div",{className:"trending__layout",children:Object(u.jsx)(B.a,{style:{width:"4rem",height:"4rem"}})})]}),Object(u.jsx)("span",{className:"trending__title",children:(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.original_title)||(null===t||void 0===t?void 0:t.name)})]})},t.id)))}),d>1&&Object(u.jsx)(ee.a,{hidePrevButton:!0,hideNextButton:!0,className:"pagination",onChange:e=>(e=>{l(e),window.scroll(0,0)})(e.target.textContent),setpage:c,count:d,color:"secondary"})]})]}),Object(u.jsx)(A,{})]})}function le(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"movies__list",style:{padding:"5rem 0"},children:Object(u.jsx)(te,{title:"Movies",type:"movie",fetchUrl:C})}),Object(u.jsx)(A,{})]})}function ne(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"movies__list",children:Object(u.jsx)(te,{title:"Tv Shows",type:"tv",fetchUrl:I})}),Object(u.jsx)(A,{})]})}function re(){return Object(u.jsxs)(l.a,{children:[Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(x,{})}),Object(u.jsxs)(n.c,{children:[Object(u.jsx)(n.a,{exact:!0,path:"/",children:Object(u.jsx)(K,{})}),Object(u.jsx)(n.a,{path:"/movies",children:Object(u.jsx)("div",{className:"mv",children:Object(u.jsx)(le,{type:"movie"})})}),Object(u.jsx)(n.a,{path:"/series",children:Object(u.jsx)("div",{className:"mv",children:Object(u.jsx)(ne,{})})}),Object(u.jsx)(n.a,{path:"/search",children:Object(u.jsxs)("div",{className:"mv",children:[Object(u.jsx)(ce,{})," "]})})]})]})}const oe=document.getElementById("root");c.a.render(Object(u.jsx)(a.StrictMode,{children:Object(u.jsx)(re,{})}),oe)}},[[185,1,2]]]);
//# sourceMappingURL=main.c1c2caa3.chunk.js.map