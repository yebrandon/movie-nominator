(this["webpackJsonpmovie-nominator"]=this["webpackJsonpmovie-nominator"]||[]).push([[0],{117:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n(0),c=n.n(s),i=n(37),o=n.n(i),r=n(34),j=n(56),l=n(11),m=n(136),b=n(139),h=n(40),d=n.p+"static/media/logo.0655ad93.png",u=function(){var e=Object(s.useState)("searchmovies"),t=Object(r.a)(e,2),n=t[0],c=t[1],i=function(e,t){var n=t.name;c(n)};return Object(a.jsxs)(m.a,{children:[Object(a.jsx)(m.a.Item,{className:"borderless",children:Object(a.jsx)(b.a,{className:"logo-text",as:"h3",image:d,content:"The Shoppies"})}),Object(a.jsx)(m.a.Item,{as:j.b,name:"searchmovies",active:"searchmovies"===n,onClick:i,to:"/searchmovies",children:Object(a.jsx)("div",{className:"tab",children:"Search Movies"})}),Object(a.jsx)(m.a.Item,{as:j.b,name:"nominations",active:"nominations"===n,onClick:i,to:"/nominations",children:"Nominations"}),Object(a.jsx)(m.a.Menu,{position:"right",children:Object(a.jsx)(m.a.Item,{as:"a",href:"https://github.com/yebrandon/movie-nominator",children:Object(a.jsx)(h.a,{fitted:!0,size:"big",name:"github"})})})]})},O=n(96),v=n(137),x=n(120),f=n(134),p=n(135),N=function(e){var t=e.movies,n=e.setMovies,c=e.nominations,i=e.setNominations,o=Object(s.useState)(""),j=Object(r.a)(o,2),l=j[0],m=j[1],d=Object(s.useState)(""),u=Object(r.a)(d,2),N=u[0],g=u[1],S=function(){l?fetch("http://www.omdbapi.com/?apikey=78666194&type=movie&plot=short&s="+l).then((function(e){return e.json()})).then((function(e){console.log(e),"True"===e.Response?(n(e.Search),g()):"Too many results."===e.Error?g("Too many results, please use a more specific search!"):"Movie not found!"===e.Error?g("No results found, please try a different search!"):g("Something went wrong, please try again!")})):g("Please enter a valid search!")};return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(b.a,{className:"title",as:"h1",children:"Search for Movies"}),Object(a.jsx)(f.a,{className:"search-bar",icon:Object(a.jsx)(h.a,{name:"search",link:!0,onClick:S}),placeholder:"Search...",onChange:function(e){m(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&S()}}),Object(a.jsx)("p",{className:"error",children:N}),Object(a.jsx)(p.a,{section:!0}),Object(a.jsx)("div",{className:"card-list",children:function(){if(t.length>0)return t.map((function(e){return Object(a.jsxs)(v.a,{className:"movie-card",children:[Object(a.jsxs)(v.a.Content,{children:[Object(a.jsx)(v.a.Header,{children:e.Title}),Object(a.jsx)(v.a.Meta,{children:e.Year})]}),Object(a.jsx)(v.a.Content,{extra:!0,children:Object(a.jsx)("div",{children:Object(a.jsx)(x.a,{className:"add-button",disabled:c.includes(e),onClick:function(){i((function(t){return[].concat(Object(O.a)(t),[e])}))},basic:!0,color:"green",content:c.includes(e)?"Nominated!":"Nominate"})})})]})}))}()})]})},g=n(138),S=function(e){var t=e.nominations,n=e.setNominations;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(b.a,{className:"title",as:"h1",children:"Your Nominations"}),0===t.length?Object(a.jsx)(g.a,{className:"banner",icon:"search",header:"Get Started",content:'Go to the "Search Movies" tab and nominate some movies!'}):t.length>=5?Object(a.jsx)(g.a,{className:"banner",icon:"trophy",header:"Nice Job!",content:"You've nominated five movies!"}):void 0,Object(a.jsx)(p.a,{section:!0}),Object(a.jsx)("div",{className:"card-list",children:function(){if(t.length>0)return t.map((function(e){return Object(a.jsxs)(v.a,{className:"movie-card",children:[Object(a.jsxs)(v.a.Content,{children:[Object(a.jsx)(v.a.Header,{children:e.Title}),Object(a.jsx)(v.a.Meta,{children:e.Year}),Object(a.jsx)(v.a.Description,{children:e.Plot})]}),Object(a.jsx)(v.a.Content,{extra:!0,children:Object(a.jsx)("div",{children:Object(a.jsx)(x.a,{className:"remove-button",onClick:function(){n(t.filter((function(t){return t!==e})))},basic:!0,color:"red",content:"Remove Nomination"})})})]})}))}()})]})},C=(n(117),function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)([]),o=Object(r.a)(i,2),m=o[0],b=o[1];return Object(a.jsxs)(j.a,{children:[Object(a.jsx)(u,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/movie-nominator",render:function(){return Object(a.jsx)(N,{setMovies:c,movies:n,nominations:m,setNominations:b})}}),Object(a.jsx)(l.a,{path:"/movie-nominator/searchmovies",render:function(){return Object(a.jsx)(N,{setMovies:c,movies:n,nominations:m,setNominations:b})}}),Object(a.jsx)(l.a,{path:"/movie-nominator/searchmovies",render:function(){return Object(a.jsx)(S,{setMovies:c,movies:n,nominations:m,setNominations:b})}})]})]})}),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,141)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};n(118);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),M()}},[[119,1,2]]]);
//# sourceMappingURL=main.0a32cff7.chunk.js.map