(this["webpackJsonptodo-machine"]=this["webpackJsonptodo-machine"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(2),c=o.n(n),a=o(5),s=o.n(a),r=(o(15),o(7)),l=o(3),d=o(1),i=c.a.createContext(),j=function(e){var t=e.children,o=function(e,t){var o=Object(n.useState)(!1),c=Object(l.a)(o,2),a=c[0],s=c[1],r=Object(n.useState)(!1),d=Object(l.a)(r,2),i=d[0],j=d[1],u=Object(n.useState)(t),O=Object(l.a)(u,2),b=O[0],m=O[1];return Object(n.useEffect)((function(){j(!0),setTimeout((function(){try{var o,n=localStorage.getItem(e);n?o=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),o=t),m(o),j(!1)}catch(a){s(a)}}),5e3)}),[]),{item:b,saveItem:function(t){try{var o=JSON.stringify(t);localStorage.setItem(e,o),m(t)}catch(a){s(a)}},loading:i,error:a}}("TODOS_V1",[]),c=o.item,a=o.saveItem,s=o.loading,j=o.error,u=Object(n.useState)(""),O=Object(l.a)(u,2),b=O[0],m=O[1],x=Object(n.useState)(!1),p=Object(l.a)(x,2),f=p[0],h=p[1],T=c.filter((function(e){return!!e.completed})).length,g=c.length,v=c.filter((function(e){return e.text.toLowerCase().includes(b.toLowerCase())}));return Object(d.jsx)(i.Provider,{value:{error:j,loading:s,totalTodos:g,completedTodos:T,searchValue:b,setSearchValue:m,filterTodos:v,addTodo:function(e){var t=Object(r.a)(c);t.push({completed:!1,text:e}),a(t)},completeTodos:function(e){var t=c.findIndex((function(t){return t.text===e})),o=Object(r.a)(c);o[t].completed=!0,a(o)},deleteTodos:function(e){var t=c.findIndex((function(t){return t.text===e})),o=Object(r.a)(c);o.splice(t,1),a(o)},openModal:f,setOpenModal:h},children:t})},u=(o(17),function(){var e=Object(n.useContext)(i),t=e.totalTodos,o=e.completedTodos;return Object(d.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",o," de ",t>0?t:"0"," TODOs"]})}),O=(o(18),function(){var e=Object(n.useContext)(i),t=e.searchValue,o=e.setSearchValue;return Object(d.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:t,onChange:function(e){o(e.target.value)}})}),b=(o(19),function(e){var t=e.children;return Object(d.jsx)("ul",{children:t})}),m=(o(20),o(10)),x=o(9);console.log(x.a);var p=function(e){var t=e.type,o=e.onClick;return Object(d.jsxs)("span",{className:"Icon-container Icon-container--".concat(t),onClick:o,children:["completed"===t&&Object(d.jsx)(m.a,{}),"delete"===t&&Object(d.jsx)(x.a,{})]})},f=function(e){var t=e.text,o=e.completed,n=e.onComplete,c=e.deleteTodos;return Object(d.jsxs)("li",{className:"TodoItem",children:[Object(d.jsx)("span",{className:"Icon Icon-check ".concat(o&&"Icon-check--active"),onClick:n,children:Object(d.jsx)(p,{type:"completed"})}),Object(d.jsx)("p",{className:"TodoItem-p ".concat(o&&"TodoItem-p--complete"),children:t}),Object(d.jsx)("span",{className:"Icon Icon-delete",onClick:c,children:Object(d.jsx)(p,{type:"delete"})})]})},h=(o(21),function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),o=t[0],c=t[1],a=Object(n.useContext)(i),s=a.addTodo,r=a.setOpenModal;return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(o),r(!1)},children:[Object(d.jsx)("label",{children:"A\xf1ada alg\xfan TODO"}),Object(d.jsx)("textarea",{value:o,onChange:function(e){c(e.target.value)},placeholder:"Cortar la cebolla para el almuerzo"}),Object(d.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(d.jsx)("button",{type:"button",onClick:function(){r(!1)},className:"TodoForm-button TodoForm-button--cancel",children:"Cancelar"}),Object(d.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:"A\xf1adir"})]})]})}),T=(o(22),function(e){var t=e.setOpenModal,o=e.openModal;return Object(d.jsx)("button",{className:"CreateTodoButton",onClick:function(){t(!o)},children:"+"})}),g=(o(23),function(e){var t=e.children;return s.a.createPortal(Object(d.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}),v=(o(24),function(e){e.error;return Object(d.jsx)("p",{children:"Desesperate, hubo un error..."})}),C=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"LoadingTodo-container",children:[Object(d.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(d.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(d.jsx)("span",{className:"LoadingTodo-deleteIcon"})]}),Object(d.jsxs)("div",{className:"LoadingTodo-container",children:[Object(d.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(d.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(d.jsx)("span",{className:"LoadingTodo-deleteIcon"})]}),Object(d.jsxs)("div",{className:"LoadingTodo-container",children:[Object(d.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(d.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(d.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})]})},N=function(){return Object(d.jsx)("p",{children:"Crea tu primer TODO"})},I=function(){var e=Object(n.useContext)(i),t=e.error,o=e.loading,c=e.filterTodos,a=e.completeTodos,s=e.deleteTodos,r=e.openModal,l=e.setOpenModal;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(O,{}),Object(d.jsxs)(b,{children:[t&&Object(d.jsx)(v,{}),o&&Object(d.jsx)(C,{}),!o&&!c.length&&Object(d.jsx)(N,{}),c.map((function(e,t){return Object(d.jsx)(f,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},deleteTodos:function(){return s(e.text)}},t)}))]}),r&&Object(d.jsx)(g,{children:Object(d.jsx)(h,{})}),Object(d.jsx)(T,{setOpenModal:l,openModal:r})]})};var S=function(){return Object(d.jsx)(j,{children:Object(d.jsx)(I,{})})};s.a.render(Object(d.jsx)(S,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.798bbb9a.chunk.js.map