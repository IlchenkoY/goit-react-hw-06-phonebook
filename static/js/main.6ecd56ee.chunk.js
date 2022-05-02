(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{36:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,l=n(0),s=n.n(l),d=n(11),b=n.n(d),p=n(2),u=n(20),x=n(3),j=n(14),m=n(6),h=n(21),f=n.n(h),g=Object(j.b)({name:"contacts",initialState:{items:[],filter:""},reducers:{addcontact:function(e,t){e.items.push({id:t.payload.id,name:t.payload.name,number:t.payload.number})},setFilter:function(e,t){e.filter=t.payload},deleteContact:function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload}))}}}),O=g.actions,y=O.addcontact,w=O.setFilter,v=O.deleteContact,k=g.reducer,C=Object(x.b)({contacts:k}),E={key:"root",storage:f.a},F=Object(m.g)(E,C),N=Object(j.a)({reducer:F,middleware:function(e){return e({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})}}),S=Object(m.h)(N),A=N,z=(n(36),function(e){return e.contacts.items}),I=function(e){return e.contacts.filter},L=function(e){var t=z(e),n=I(e);return t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.number.includes(n)}))},P=n(8),B=n(22),M=n.n(B),J=n(4),Z=n(5),q=Z.a.button(a||(a=Object(J.a)(["\n  border: none;\n  outline: none;\n  border-radius: 50px;\n  padding: 8px 10px;\n  margin-top: 10px;\n  margin-left: auto;\n  background-color: #f44336;\n  color: white;\n  font-weight: 500;\n  &:hover {\n    cursor: pointer;\n    transition: all 0.3s ease 0s;\n    transform: translateY(-2px);\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),\n      0 17px 50px 0 rgba(0, 0, 0, 0.19);\n  }\n"]))),Y=Z.a.form(r||(r=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: #e6d8b4;\n  padding: 10px;\n  width: 100%;\n  border-radius: 4px;\n  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 1px 3px rgba(0, 0, 0, 0.12);\n"]))),D=Z.a.input(c||(c=Object(J.a)(["\n  width: 550px;\n  margin: 10px 0 30px 0;\n"]))),R=n(1),T=function(){var e=Object(l.useState)(""),t=Object(P.a)(e,2),n=t[0],a=t[1],r=Object(l.useState)(""),c=Object(P.a)(r,2),i=c[0],o=c[1],s=Object(p.c)(z),d=Object(p.b)(),b=function(e){switch(e.target.name){case"name":a(e.target.value);break;case"number":o(e.target.value);break;default:return}},u=function(){a(""),o("")};return Object(R.jsxs)(Y,{onSubmit:function(e){e.preventDefault(),s.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts")):(d(y({name:n,number:i,id:M.a.generate()})),u())},children:[Object(R.jsxs)("label",{children:["Name",Object(R.jsx)(D,{type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:b,required:!0})]}),Object(R.jsxs)("label",{children:["Number",Object(R.jsx)(D,{type:"tel",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:b,required:!0})]}),Object(R.jsx)(q,{type:"submit",children:"Add contact"})]})},V=["title","titleId"];function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},X.apply(this,arguments)}function $(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function _(e,t){var n=e.title,a=e.titleId,r=$(e,V);return l.createElement("svg",X({id:"Layer_1",style:{enableBackground:"new 0 0 64 64"},viewBox:"0 0 64 64",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":a},r),n?l.createElement("title",{id:a},n):null,i||(i=l.createElement("style",{type:"text/css"},"\n\t.st0{fill:#fff;}\n")),o||(o=l.createElement("g",null,l.createElement("g",{id:"Icon-Trash",transform:"translate(232.000000, 228.000000)"},l.createElement("polygon",{className:"st0",id:"Fill-6",points:"-207.5,-205.1 -204.5,-205.1 -204.5,-181.1 -207.5,-181.1    "}),l.createElement("polygon",{className:"st0",id:"Fill-7",points:"-201.5,-205.1 -198.5,-205.1 -198.5,-181.1 -201.5,-181.1    "}),l.createElement("polygon",{className:"st0",id:"Fill-8",points:"-195.5,-205.1 -192.5,-205.1 -192.5,-181.1 -195.5,-181.1    "}),l.createElement("polygon",{className:"st0",id:"Fill-9",points:"-219.5,-214.1 -180.5,-214.1 -180.5,-211.1 -219.5,-211.1    "}),l.createElement("path",{className:"st0",d:"M-192.6-212.6h-2.8v-3c0-0.9-0.7-1.6-1.6-1.6h-6c-0.9,0-1.6,0.7-1.6,1.6v3h-2.8v-3     c0-2.4,2-4.4,4.4-4.4h6c2.4,0,4.4,2,4.4,4.4V-212.6",id:"Fill-10"}),l.createElement("path",{className:"st0",d:"M-191-172.1h-18c-2.4,0-4.5-2-4.7-4.4l-2.8-36l3-0.2l2.8,36c0.1,0.9,0.9,1.6,1.7,1.6h18     c0.9,0,1.7-0.8,1.7-1.6l2.8-36l3,0.2l-2.8,36C-186.5-174-188.6-172.1-191-172.1",id:"Fill-11"})))))}var G,H,K,Q,U,W=l.forwardRef(_),ee=(n.p,function(e){var t=e.id,n=e.name,a=e.number,r=Object(p.b)();return Object(R.jsxs)(R.Fragment,{children:[n,": ",a,Object(R.jsx)(q,{type:"button",onClick:function(){return r(v(t))},children:Object(R.jsx)(W,{width:"25",height:"25"})})]})}),te=Z.a.ul(G||(G=Object(J.a)(["\n  background-color: #e6d8b4;\n  margin-top: 10px;\n  padding: 10px;\n  width: 100%;\n  border-radius: 4px;\n  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 1px 3px rgba(0, 0, 0, 0.12);\n"]))),ne=Z.a.li(H||(H=Object(J.a)(["\n  display: flex;\n  align-items: flex-end;\n"]))),ae=function(){var e=Object(p.c)(L);return Object(R.jsx)(te,{children:e.map((function(e){var t=e.id,n=e.name,a=e.number;return Object(R.jsx)(ne,{children:Object(R.jsx)(ee,{name:n,number:a,id:t})},t)}))})},re=Z.a.label(K||(K=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: #e6d8b4;\n  padding: 10px;\n  width: 100%;\n  border-radius: 4px;\n  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 1px 3px rgba(0, 0, 0, 0.12);\n"]))),ce=Z.a.input(Q||(Q=Object(J.a)(["\n  width: 550px;\n  margin: 10px 0 30px 0;\n"]))),ie=function(){var e=Object(p.c)(I),t=Object(p.b)();return Object(R.jsxs)(re,{children:["Find contacts by name or number",Object(R.jsx)(ce,{type:"text",name:"filter",onChange:function(e){return t(w(e.target.value))},value:e})]})},oe=Z.a.div(U||(U=Object(J.a)(["\n  width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),le=function(e){var t=e.children;return Object(R.jsx)(oe,{children:t})},se=function(){var e=Object(p.c)(z),t=Object(p.c)(L);return Object(R.jsxs)(le,{children:[Object(R.jsx)("h1",{children:"Phonebook"}),Object(R.jsx)(T,{}),Object(R.jsx)("h2",{children:"Contacts"}),e.length>0?Object(R.jsx)(ie,{}):Object(R.jsx)("p",{children:"You have no contacts yet"}),t.length>0&&Object(R.jsx)(ae,{})]})};b.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(p.a,{store:A,children:Object(R.jsx)(u.a,{loading:null,persistor:S,children:Object(R.jsx)(se,{})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.6ecd56ee.chunk.js.map