(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(15),c=t.n(a),o=t(3),i=t(4),u=t(2),s=function(e){var n=e.nameFilter,t=e.handleNameFilter;return Object(r.jsxs)("div",{children:["filter shown with: ",Object(r.jsx)("input",{value:n,onChange:t})]})},d=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,c=e.newNumber,o=e.handleNumberChange;return Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:t,onChange:a})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:c,onChange:o})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},l={listStyle:"none",paddingLeft:0},b=function(e){var n=e.persons,t=e.nameFilter,a=e.handlePersonDelete;return Object(r.jsx)("ul",{style:l,children:n.filter((function(e){return e.name.match(new RegExp(t,"gi"))})).map((function(e){return Object(r.jsxs)("li",{children:[e.name," ",e.number,Object(r.jsx)("button",{onClick:function(){return a(e)},children:"delete"})]},e.name)}))})},j=t(5),f=t.n(j),h="/api/persons",m={getAll:function(){return f.a.get(h).then((function(e){return e.data}))},create:function(e){return f.a.post(h,e).then((function(e){return e.data}))},remove:function(e){return f.a.delete("".concat(h,"/").concat(e))},update:function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))}},O=function(e){var n=e.notification,t={color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},a={info:t,error:Object(o.a)(Object(o.a)({},t),{},{color:"red"})};return null===n.message?null:Object(r.jsx)("div",{style:a[n.type],children:n.message})},p=function(){var e=Object(u.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(u.useState)(""),l=Object(i.a)(c,2),j=l[0],f=l[1],h=Object(u.useState)(""),p=Object(i.a)(h,2),g=p[0],v=p[1],x=Object(u.useState)(""),w=Object(i.a)(x,2),y=w[0],N=w[1],C=Object(u.useState)({message:null,type:null}),S=Object(i.a)(C,2),k=S[0],F=S[1];Object(u.useEffect)((function(){m.getAll().then((function(e){a(e)}))}),[]);var P=function(e,n){F({message:e,type:n}),setTimeout((function(){F({message:null})}),2e3)},A={nameFilter:y,handleNameFilter:function(e){return N(e.target.value)}},D={addPerson:function(e){e.preventDefault();var n={name:j,number:g};if(t.some((function(e){return e.name===n.name}))){var r=t.filter((function(e){return e.name===n.name}))[0],c="".concat(r.name," is already added to phonebook, replace the old number with a new one?");window.confirm(c)&&m.update(r.id,n).then((function(e){a(t.map((function(n){return n.id!==r.id?n:e}))),P("Changed ".concat(e.name,"'s number"),"info")})).catch((function(e){P(e.response.data.error,"error")}))}else m.create(n).then((function(e){a(t.concat(e)),P("Added ".concat(e.name),"info")})).catch((function(e){P(e.response.data.error,"error")}));f(""),v("")},newName:j,handleNameChange:function(e){return f(e.target.value)},newNumber:g,handleNumberChange:function(e){return v(e.target.value)}},E={persons:t,nameFilter:y,handlePersonDelete:function(e){window.confirm("Delete ".concat(e.name))&&m.remove(e.id).then((function(){a(t.filter((function(n){return n.id!==e.id})))})).catch((function(){P("Information of ".concat(e.name," has already been removed from the server"),"error"),a(t.filter((function(n){return n.id!==e.id})))}))}};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(O,{notification:k}),Object(r.jsx)(s,Object(o.a)({},A)),Object(r.jsx)("h3",{children:"Add a new"}),Object(r.jsx)(d,Object(o.a)({},D)),Object(r.jsx)("h3",{children:"Numbers"}),Object(r.jsx)(b,Object(o.a)({},E))]})};c.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.65650983.chunk.js.map