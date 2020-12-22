(this["webpackJsonpbudget-app"]=this["webpackJsonpbudget-app"]||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),s=t.n(a),i=t(9),o=t.n(i),r=(t(15),t(16),t(3)),u=t(2),j=t(5),l=t(19),x=t(8),m=function(e,n){switch(n.type){case"ADD_INCOME":return Object(u.a)(Object(u.a)({},e),{},{incomeTransactions:[n.payload].concat(Object(x.a)(e.incomeTransactions))});case"ADD_EXPENSE":return Object(u.a)(Object(u.a)({},e),{},{expenseTransactions:[n.payload].concat(Object(x.a)(e.expenseTransactions))});case"DELETE_TRANSACTION":return Object(u.a)(Object(u.a)({},e),{},{incomeTransactions:e.incomeTransactions.filter((function(e){return e.id!==n.payload})),expenseTransactions:e.expenseTransactions.filter((function(e){return e.id!==n.payload}))});default:return e}},d={incomeTransactions:JSON.parse(localStorage.getItem("incomeTransactions"))||[],expenseTransactions:JSON.parse(localStorage.getItem("expenseTransactions"))||[]},p=Object(a.createContext)(d),b=function(e){var n=e.children,t=Object(a.useReducer)(m,d),s=Object(j.a)(t,2),i=s[0],o=s[1];Object(a.useEffect)((function(){localStorage.setItem("incomeTransactions",JSON.stringify(i.incomeTransactions)),localStorage.setItem("expenseTransactions",JSON.stringify(i.expenseTransactions))}));return Object(c.jsx)(p.Provider,{value:{incomeTransactions:i.incomeTransactions,expenseTransactions:i.expenseTransactions,deleteTransaction:function(e){o({type:"DELETE_TRANSACTION",payload:e})},addIncome:function(e){o({type:"ADD_INCOME",payload:e})},addExpense:function(e){o({type:"ADD_EXPENSE",payload:e})}},children:n})};var O=function(){var e=Object(a.useContext)(p),n=e.addIncome,t=e.addExpense,s=Object(a.useState)({incomeText:"",incomeAmount:0}),i=Object(j.a)(s,2),o=i[0],x=i[1],m=o.incomeText,d=o.incomeAmount,b=Object(a.useState)({expenseText:"",expenseAmount:0}),O=Object(j.a)(b,2),h=O[0],f=O[1],T=h.expenseText,v=h.expenseAmount,N=function(e){f(Object(u.a)(Object(u.a)({},h),{},Object(r.a)({},e.target.name,e.target.value)))},g=function(e){x(Object(u.a)(Object(u.a)({},o),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(c.jsxs)("div",{className:"form-wrapper",children:[Object(c.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),""!==m){var t={id:Object(l.a)(),incomeText:m,incomeAmount:1*d};n(t),x({incomeText:"",incomeAmount:0})}},children:Object(c.jsxs)("div",{className:"input-group income",children:[Object(c.jsx)("input",{type:"text",name:"incomeText",value:m,placeholder:"Add Income...",autoComplete:"off",onChange:g}),Object(c.jsx)("input",{type:"number",name:"incomeAmount",value:d,placeholder:"Amount",autoComplete:"off",onChange:g}),Object(c.jsx)("input",{type:"submit",value:"Submit"})]})}),Object(c.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),""!==T){var n={id:Object(l.a)(),expenseText:T,expenseAmount:1*v};t(n),f({expenseText:"",expenseAmount:0})}},children:Object(c.jsxs)("div",{className:"input-group expense",children:[Object(c.jsx)("input",{type:"text",name:"expenseText",value:T,placeholder:"Add Expense...",autoComplete:"off",onChange:N}),Object(c.jsx)("input",{type:"number",name:"expenseAmount",value:v,placeholder:"Amount",autoComplete:"off",onChange:N}),Object(c.jsx)("input",{type:"submit",value:"Submit"})]})})]})};var h=function(){var e=Object(a.useContext)(p),n=e.incomeTransactions,t=e.expenseTransactions,s=n.map((function(e){return e.incomeAmount})),i=t.map((function(e){return e.expenseAmount})),o=s.reduce((function(e,n){return e+n}),0).toFixed(2),r=i.reduce((function(e,n){return e+n}),0).toFixed(2);return Object(c.jsxs)("div",{className:"balance",children:[Object(c.jsx)("h2",{children:"Your Balance"}),Object(c.jsxs)("h3",{children:["$",(o-r).toFixed(2)]}),Object(c.jsxs)("div",{className:"income-expense",children:[Object(c.jsxs)("div",{className:"plus",children:[Object(c.jsx)("h3",{children:"Income"}),Object(c.jsxs)("p",{children:["+$",o]})]}),Object(c.jsxs)("div",{className:"minus",children:[Object(c.jsx)("h3",{children:"Expenses"}),Object(c.jsxs)("p",{children:["-$",r]})]})]})]})},f=function(e){var n=e.expenseTransaction,t=Object(a.useContext)(p).deleteTransaction;return Object(c.jsxs)("li",{className:"transaction",children:[Object(c.jsx)("span",{className:"transaction-text",children:n.expenseText}),Object(c.jsxs)("span",{className:"transaction-amount",children:["$",n.expenseAmount]}),Object(c.jsx)("button",{onClick:function(){return t(n.id)},className:"delete-btn",children:Object(c.jsx)("i",{className:"fas fa-trash"})})]})};var T=function(){var e=Object(a.useContext)(p).expenseTransactions;return console.log(e),Object(c.jsxs)("div",{className:"transactions transactions-expense",children:[Object(c.jsx)("h2",{children:"Transaction History"}),Object(c.jsx)("ul",{className:"transaction-list",children:e.map((function(e){return Object(c.jsx)(f,{expenseTransaction:e},e.id)}))})]})},v=function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{children:"Budget App"})})};var N=function(e){var n=e.incomeTransaction,t=Object(a.useContext)(p).deleteTransaction;return Object(c.jsxs)("li",{className:"transaction",children:[Object(c.jsx)("span",{className:"transaction-text",children:n.incomeText}),Object(c.jsxs)("span",{className:"transaction-amount",children:["$",n.incomeAmount]}),Object(c.jsx)("button",{onClick:function(){return t(n.id)},className:"delete-btn",children:Object(c.jsx)("i",{className:"fas fa-trash"})})]})};var g=function(){var e=Object(a.useContext)(p).incomeTransactions;return console.log(e),Object(c.jsxs)("div",{className:"transactions transactions-income",children:[Object(c.jsx)("h2",{children:"Transaction History"}),Object(c.jsx)("ul",{className:"transaction-list",children:e.map((function(e){return Object(c.jsx)(N,{incomeTransaction:e},e.id)}))})]})};var A=function(){return Object(c.jsx)(b,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"app-wrapper",children:[Object(c.jsx)(v,{}),Object(c.jsx)(h,{}),Object(c.jsx)(g,{}),Object(c.jsx)(T,{}),Object(c.jsx)(O,{})]})})})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),s(e),i(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root")),C()}},[[17,1,2]]]);
//# sourceMappingURL=main.5d12af3e.chunk.js.map