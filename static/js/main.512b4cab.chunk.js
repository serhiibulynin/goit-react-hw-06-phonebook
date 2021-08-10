(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={ContactListItem:"ContactListItem_ContactListItem__2dqPH",completed:"ContactListItem_completed__3szFw",ContactListButton:"ContactListItem_ContactListButton__a7uzF"}},16:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__3v8df"}},36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a,o=n(0),c=n.n(o),r=n(8),i=n.n(r),s=n(5),u=n(13),l=n(7),d=n(14),m=n(15),b=n(21),j=n(19),h=n(3),p=n(38),f={addContact:Object(h.b)("contacts/add",(function(t,e){return{payload:{id:Object(p.a)(),name:t,number:e}}})),removeContact:Object(h.b)("contacts/remove"),changeFilter:Object(h.b)("contacts/changeFilter")},O=n(6),C=n.n(O),v=n(1),F=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.nameInputId=Object(p.a)(),t.numberInputId=Object(p.a)(),t.handleChangeInput=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(l.a)({},a,o))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,o=n.number;if(t.props.contacts.map((function(t){return t.name.toLowerCase()})).includes(a.toLowerCase()))return alert("".concat(a," is already in contacts"));console.log("contacts",a),t.props.onSubmit(a,o),t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsxs)("form",{className:C.a.FormEditor,onSubmit:this.handleSubmit,children:[Object(v.jsxs)("label",{className:C.a.FormEditorLabel,htmlFor:this.nameInputId,children:["Name",Object(v.jsx)("input",{className:C.a.FormEditorInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChangeInput,id:this.nameInputId})]}),Object(v.jsxs)("label",{className:C.a.FormEditorLabel,htmlFor:this.numberInputId,children:["Number",Object(v.jsx)("input",{className:C.a.FormEditorInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChangeInput,id:this.numberInputId})]}),Object(v.jsx)("button",{className:C.a.FormEditorButton,type:"submit",children:"Add contact"})]})]})}}]),n}(o.Component),x=Object(s.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e,n){return t(f.addContact(e,n))}}}))(F),_=n(12),g=n.n(_),I=function(t){var e=t.contact,n=t.onRemoveContact;return Object(v.jsxs)("li",{className:g.a.ContactListItem,children:[e.name+":"+e.number,Object(v.jsx)("button",{className:g.a.ContactListButton,type:"button",name:"delete",onClick:function(){return n(e.id)},children:"delete"})]})},L=n(16),E=n.n(L),y=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},k=Object(s.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:y(n,a)}}),(function(t){return{onRemoveContact:function(e){return t(f.removeContact(e))}}}))((function(t){var e=t.contacts,n=t.onRemoveContact;return Object(v.jsxs)(v.Fragment,{children:[e.length>0&&Object(v.jsx)("h2",{children:"Contacts"}),Object(v.jsx)("ul",{className:E.a.ContactList,children:e.map((function(t){return Object(v.jsx)(I,{contact:t,onRemoveContact:n},t.id)}))})]})})),N=Object(s.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(f.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(v.jsxs)("label",{children:["Find contacts by name",Object(v.jsx)("input",{type:"text",value:e,onChange:n})]})})),w=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(x,{}),Object(v.jsx)(N,{}),Object(v.jsx)(k,{})]})},A=n(17),z=n.n(A),B=n(4),S=n(18),R=n.n(S),q=n(20),J=n(2),T=Object(h.c)([],(a={},Object(l.a)(a,f.addContact,(function(t,e){var n=e.payload;return[].concat(Object(q.a)(t),[n])})),Object(l.a)(a,f.removeContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),Z=Object(h.c)("",Object(l.a)({},f.changeFilter,(function(t,e){return e.payload}))),M=Object(J.b)({items:T,filter:Z}),P={key:"contacts",storage:R.a,blacklist:["filter"]},D=Object(h.a)({reducer:{contacts:Object(B.g)(P,M)},middleware:function(t){return t({serializableCheck:{ignoredActions:[B.a,B.f,B.b,B.c,B.d,B.e]}}).concat(z.a)},devTools:!1}),G={store:D,persistor:Object(B.h)(D)};n(35),n(36);i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(s.a,{store:G.store,children:Object(v.jsx)(u.a,{loading:null,persistor:G.persistor,children:Object(v.jsx)(w,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={FormEditor:"ContactForm_FormEditor__178G_",FormEditorLabel:"ContactForm_FormEditorLabel__1ffaz",FormEditorInput:"ContactForm_FormEditorInput__fv8K8",TaskEditorinput:"ContactForm_TaskEditorinput__2pf8N",FormEditorButton:"ContactForm_FormEditorButton__3v_cA"}}},[[37,1,2]]]);
//# sourceMappingURL=main.512b4cab.chunk.js.map