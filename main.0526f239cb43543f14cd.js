(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,a){},QfWi:function(e,t,a){"use strict";a.r(t);a("lYjL"),a("uQK7"),a("lmye"),a("x3Br"),a("L1EO");var o,n=[{title:"123",article:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",date:"321",comments:[{comment:"coment-politics"},{comment:"coment-politics"}],category:"politics"},{title:"123",article:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",date:"321",comments:[{comment:"coment-politics"},{comment:"coment"},{comment:"coment-politics"}],category:"politics"},{title:"123",article:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",date:"321",comments:[{comment:"coment-car"},{comment:"coment-car"},{comment:"coment-car"}],category:"car"},{title:"123",article:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",date:"321",comments:[{comment:"coment-car"},{comment:"coment-car"},{comment:"coment-car"}],category:"car"},{title:"123",article:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",date:"321",comments:[{comment:"coment-car"},{comment:"coment-car"},{comment:"coment-car"}],category:"car"},{title:"123",article:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",date:"321",comments:[{comment:"coment-lifestyle"},{comment:"coment-lifestyle"},{comment:"coment-lifestyle"}],category:"lifestyle"}],i=a("qjg4"),r=a.n(i),c=document.querySelector(".user-form"),l=document.querySelector("input.name"),m=document.querySelector("input.surname"),s=document.querySelector("select.oll-news"),u=document.querySelector("div.news"),p=function(e){var t=document.createElement("div");t.textContent=""+e,c.after(t)};o=n.map((function(e){return e.category})).filter((function(e,t,a){return a.indexOf(e)===t})),s.innerHTML=o.reduce((function(e,t,a){return e+'<option value = "'+t+'">'+t+"</option>"}),'<option value = ""></option>');var d=function(e){var t=e.reduce((function(e,t){return e+r()(t)}),"");u.innerHTML=t},g=function(){return n.filter((function(e){return s.value===e.category}))};s.addEventListener("change",(function(e){localStorage.setItem("category",""+e.target.value),d(g())})),c.addEventListener("submit",(function(e){e.preventDefault(),localStorage.setItem("userName",l.value+" "+m.value);var t=localStorage.getItem("userName");p(t),l.value="",m.value=""}));localStorage.getItem("userName")&&p(localStorage.getItem("userName")),localStorage.getItem("category")&&(s.value=localStorage.getItem("category"),d(g()))},qjg4:function(e,t,a){var o=a("mp5j");e.exports=(o.default||o).template({1:function(e,t,a,o,n){var i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <li class="news-article__comments-item">'+e.escapeExpression(e.lambda(null!=t?i(t,"comment"):t,t))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,a,o,n){var i,r,c=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,m=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<article class="news-article">\r\n  <h2 class="news-article__title">'+m("function"==typeof(r=null!=(r=s(a,"title")||(null!=t?s(t,"title"):t))?r:l)?r.call(c,{name:"title",hash:{},data:n,loc:{start:{line:2,column:34},end:{line:2,column:45}}}):r)+'</h2>\r\n  <p class="news-article__article">'+m("function"==typeof(r=null!=(r=s(a,"article")||(null!=t?s(t,"article"):t))?r:l)?r.call(c,{name:"article",hash:{},data:n,loc:{start:{line:3,column:35},end:{line:3,column:48}}}):r)+'</p>\r\n  <p class="news-article__data">'+m("function"==typeof(r=null!=(r=s(a,"date")||(null!=t?s(t,"date"):t))?r:l)?r.call(c,{name:"date",hash:{},data:n,loc:{start:{line:4,column:32},end:{line:4,column:42}}}):r)+'</p>\r\n  <ul class="news-article__comments-list">\r\n'+(null!=(i=s(a,"each").call(c,null!=t?s(t,"comments"):t,{name:"each",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n,loc:{start:{line:6,column:6},end:{line:8,column:13}}}))?i:"")+"  </ul>\r\n</article>"},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.0526f239cb43543f14cd.js.map