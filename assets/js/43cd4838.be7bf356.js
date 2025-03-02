"use strict";(self.webpackChunkevent_bus_docs=self.webpackChunkevent_bus_docs||[]).push([[184],{5418:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"core-concepts","title":"Core Concepts","description":"The Event Bus Library is built around several key concepts that work together to provide a flexible and powerful event management system.","source":"@site/docs/core-concepts.md","sourceDirName":".","slug":"/core-concepts","permalink":"/EDA-event-bus/docs/core-concepts","draft":false,"unlisted":false,"editUrl":"https://github.com/adiyy2001/EDA-event-bus/tree/main/projects/event-bus-docs/docs/core-concepts.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/EDA-event-bus/docs/getting-started"},"next":{"title":"EventBusService","permalink":"/EDA-event-bus/docs/api/event-bus-service"}}');var i=s(4848),r=s(8453);const o={sidebar_position:3},l="Core Concepts",c={},d=[{value:"Events",id:"events",level:2},{value:"Event Categories",id:"event-categories",level:2},{value:"Strategies",id:"strategies",level:2},{value:"Middleware",id:"middleware",level:2},{value:"Queues",id:"queues",level:2},{value:"Subscription Model",id:"subscription-model",level:2}];function a(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"core-concepts",children:"Core Concepts"})}),"\n",(0,i.jsx)(n.p,{children:"The Event Bus Library is built around several key concepts that work together to provide a flexible and powerful event management system."}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(n.p,{children:"Events are the core data structures in the Event Bus. They represent something that has happened in your application that other components might be interested in."}),"\n",(0,i.jsx)(n.p,{children:"An event consists of:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"name"}),": The event identifier (e.g., 'user",":login","', 'data",":loaded","')"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"timestamp"}),": When the event occurred"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"payload"}),": The data associated with the event"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"category"}),": The classification of the event (DOMAIN, SYSTEM, USER)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"metadata"}),": Optional additional information about the event"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"correlationId"}),": Optional ID for tracking related events"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"aggregateId"}),": Optional ID for domain aggregates"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"version"}),": Optional version number for evolving events"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"priority"}),": Optional priority level for processing order"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"event-categories",children:"Event Categories"}),"\n",(0,i.jsx)(n.p,{children:"Events are classified into three main categories:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Domain Events"}),": Represent something significant that happened in your business domain (e.g., 'order",":created","', 'payment",":processed","')"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"System Events"}),": Related to the application infrastructure (e.g., 'cache",":invalidated","', 'config",":updated","')"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"User Events"}),": Triggered by user interactions (e.g., 'button",":clicked","', 'form",":submitted","')"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"strategies",children:"Strategies"}),"\n",(0,i.jsx)(n.p,{children:"The Event Bus implements the Strategy pattern to provide different behaviors for event propagation. Each strategy determines how events are routed to subscribers."}),"\n",(0,i.jsx)(n.p,{children:"Some key strategies include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Stateless"}),": Basic event propagation with no state maintained"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Stateful"}),": Maintains event history and can replay past events"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Broadcast"}),": Sends events to all subscribers regardless of event type"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Multicast"}),": Sends events to all subscribers of the specific event type"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Unicast"}),": Sends events to a single subscriber (first, random, or round-robin)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Debounce"}),": Delays event processing and coalesces multiple events into one"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Throttle"}),": Limits the rate at which events are processed"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pattern Matching"}),": Routes events based on name pattern matching"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Priority"}),": Processes events based on their priority level"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Round Robin"}),": Distributes events across subscribers in sequence"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Persisted"}),": Stores events for resilience and later processing"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"middleware",children:"Middleware"}),"\n",(0,i.jsx)(n.p,{children:"Middleware components process events before they reach subscribers. They can perform tasks like:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Logging"}),": Recording event information"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Validation"}),": Ensuring events have valid payloads"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Error Handling"}),": Managing exceptions during event processing"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"queues",children:"Queues"}),"\n",(0,i.jsx)(n.p,{children:"The Event Bus supports different queuing mechanisms:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FIFO Queue"}),": Processes events in the order they were received"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Priority Queue"}),": Processes events based on their priority level"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"subscription-model",children:"Subscription Model"}),"\n",(0,i.jsx)(n.p,{children:"The Event Bus uses RxJS Observables for its subscription model, providing:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type Safety"}),": Generic types for event payloads"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Filtering"}),": Ability to filter events before processing"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Lifecycle Management"}),": Easy subscription cleanup"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"One-time Subscriptions"}),": Subscribe to an event just once"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In the following sections, we'll explore each of these concepts in more detail with practical examples."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);