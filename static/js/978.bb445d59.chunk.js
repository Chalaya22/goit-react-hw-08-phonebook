"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[978],{5978:function(e,t,n){n.r(t),n.d(t,{Contacts:function(){return q},default:function(){return A}});var r=n(9434),a=n(2791),s=n(8174),c=n(6639),l=function(e){return e.contacts.contacts},o=function(e){return e.contacts.isLoading},i=function(e){return e.contacts.error},u=function(e){return e.contacts.filter},m=n(9439),d=n(5984),f="ContactForm_form__dhl+T",h="ContactForm_labelText__JB4h1",_="ContactForm_imputForm__qzGyq",p="ContactForm_buttonForm__RQPsC",x=n(184),j=function(){var e=(0,r.I0)(),t=(0,a.useState)(" "),n=(0,m.Z)(t,2),s=n[0],l=n[1],o=(0,a.useState)(" "),i=(0,m.Z)(o,2),u=i[0],j=i[1],b=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":l(r);break;case"number":j(r);break;default:return}};return(0,x.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={id:(0,d.x0)(),name:s,number:u};e((0,c.uK)(n)),l(" "),j(" ")},className:f,children:[(0,x.jsxs)("label",{children:[(0,x.jsx)("p",{className:h,children:"Name"}),(0,x.jsx)("input",{className:_,type:"text",name:"name",value:s,onChange:b,placeholder:"username: ",required:!0})]}),(0,x.jsxs)("label",{children:[(0,x.jsx)("p",{className:h,children:"Number"}),(0,x.jsx)("input",{className:_,type:"tel",name:"number",value:u,onChange:b,placeholder:"Enter number tel:",required:!0})]}),(0,x.jsx)("button",{className:p,type:"submit",children:"Add contact"})]})},b="ContactList_contactList__UFVCg",C="ContactElements_contactElements__XX5lQ",v="ContactElements_itemName__95nsE",N="ContactElements_itemNumber__+In2l",F="ContactElements_buttonForm__mRKFG",y=function(e){var t=e.id,n=e.name,r=e.number,a=e.onDelete;return(0,x.jsxs)("li",{className:C,children:[(0,x.jsxs)("span",{className:v,children:[" ",n,":"]}),(0,x.jsxs)("span",{className:N,children:[" ",r]}),(0,x.jsx)("button",{className:F,type:"button",onClick:function(){return a(t)},children:"Delay"})]},t)},E=function(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e.contacts.contacts})),n=(0,r.v9)((function(e){return e.filter.filter})),a=t.filter((function(e){return e.name.toLowerCase().includes(n.trim().toLowerCase())}));function s(t){e((0,c.zY)(t))}return(0,x.jsx)("ul",{className:b,children:a.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,x.jsx)(y,{name:n,id:t,number:r,onDelete:s},t)}))})},g=n(8881),w="LoaderPhone_styleLoader__8hJ6M",k=function(){return(0,x.jsx)("div",{className:w,children:(0,x.jsx)(g.fe,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})})},T=n(6895),L="Filter_filter__vxThR",S="Filter_filterTitle__5SDqd",D="Filter_filterImput__amMjC",I=function(){var e=(0,r.I0)(),t=(0,r.v9)(u);return(0,x.jsx)("div",{className:L,children:(0,x.jsxs)("label",{htmlFor:"filter",children:[(0,x.jsx)("p",{className:S,children:"FIND CONTACT BY NAME"}),(0,x.jsx)("input",{className:D,type:"text",name:"filter",id:"filter",value:t,onChange:function(t){e((0,T.c)(t.target.value))},placeholder:" Username: ",required:!0})]})})},q=function(){var e=(0,r.v9)(l),t=(0,r.v9)(o),n=(0,r.v9)(i),u=(0,r.I0)();return(0,a.useEffect)((function(){u((0,c.yF)())}),[u]),(0,a.useEffect)((function(){"ERR_BAD_REQUEST"!==n?n&&s.Am.error(n):s.Am.error("Sorry! There are some problems! Try again later.")}),[n]),(0,x.jsxs)("section",{className:"styledSection",children:[null!==n&&(0,x.jsxs)("p",{children:[" Ooops... ",n]}),t&&(0,x.jsx)(k,{}),(0,x.jsx)("h1",{className:"titlePhone",children:"Phonebook "}),(0,x.jsx)(j,{}),(0,x.jsx)("h2",{className:"titleContact",children:"Contacts"}),e.length>1&&(0,x.jsx)(I,{}),(0,x.jsx)(E,{})]})},A=q}}]);
//# sourceMappingURL=978.bb445d59.chunk.js.map