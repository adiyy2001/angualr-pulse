"use strict";(self.webpackChunkevent_bus_docs=self.webpackChunkevent_bus_docs||[]).push([[131],{761:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>g,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"api/middleware/logging","title":"Logging Middleware","description":"The Logging Middleware provides detailed event logging capabilities for the Event Bus. It helps with debugging, monitoring, and auditing of events flowing through your application.","source":"@site/docs/api/middleware/logging.md","sourceDirName":"api/middleware","slug":"/api/middleware/logging","permalink":"/EDA-event-bus/docs/api/middleware/logging","draft":false,"unlisted":false,"editUrl":"https://github.com/adiyy2001/EDA-event-bus/tree/main/projects/event-bus-docs/docs/api/middleware/logging.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Logging Middleware","permalink":"/EDA-event-bus/docs/api/middleware/overview"},"next":{"title":"Basic Usage Examples","permalink":"/EDA-event-bus/docs/api/examples/basic-usage"}}');var o=i(4848),s=i(8453);const g={sidebar_position:2},l="Logging Middleware",r={},a=[{value:"Features",id:"features",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Custom Logger",id:"custom-logger",level:2},{value:"Example Output",id:"example-output",level:2},{value:"Logging Levels",id:"logging-levels",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"logging-middleware",children:"Logging Middleware"})}),"\n",(0,o.jsx)(n.p,{children:"The Logging Middleware provides detailed event logging capabilities for the Event Bus. It helps with debugging, monitoring, and auditing of events flowing through your application."}),"\n",(0,o.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Configurable log levels (INFO, DEBUG, ERROR)"}),"\n",(0,o.jsx)(n.li,{children:"Customizable output destination"}),"\n",(0,o.jsx)(n.li,{children:"Detailed event metadata logging"}),"\n",(0,o.jsx)(n.li,{children:"Operation tracking (emit, subscribe, unsubscribe)"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export interface LoggingConfig {\n  enableLogging: boolean;\n  logLevels: Array<'INFO' | 'DEBUG' | 'ERROR'>;\n  output: 'console' | 'custom';\n  customLogger?: (message: string, level: string, data: any) => void;\n}\n\nexport const DEFAULT_LOGGING_CONFIG: LoggingConfig = {\n  enableLogging: true,\n  logLevels: ['INFO', 'DEBUG', 'ERROR'],\n  output: 'console',\n};\n\nexport const LOGGING_CONFIG = new InjectionToken<LoggingConfig>('LOGGING_CONFIG');\n\n@Injectable()\nexport class LoggingMiddleware {\n  private config: LoggingConfig;\n\n  constructor(@Optional() @Inject(LOGGING_CONFIG) config: LoggingConfig) {\n    this.config = config || DEFAULT_LOGGING_CONFIG;\n  }\n\n  handle(\n    eventType: string,\n    eventData: any,\n    operation: 'emit' | 'subscribe' | 'unsubscribe' | 'receive' | 'schedule',\n    level: 'INFO' | 'DEBUG' | 'ERROR' = 'INFO'\n  ): void {\n    if (!this.config.enableLogging || !this.config.logLevels.includes(level)) {\n      return;\n    }\n\n    const timestamp = new Date().toISOString();\n    const message = `[${timestamp}] [${level}] [EventBus] [${operation}] ${eventType}`;\n\n    if (this.config.output === 'console') {\n      switch (level) {\n        case 'ERROR':\n          console.error(message, eventData);\n          break;\n        case 'DEBUG':\n          console.debug(message, eventData);\n          break;\n        default:\n          console.log(message, eventData);\n      }\n    } else if (this.config.output === 'custom' && this.config.customLogger) {\n      this.config.customLogger(message, level, eventData);\n    }\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(n.p,{children:"You can customize the logging behavior by providing a custom configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"const customLoggingConfig: LoggingConfig = {\n  enableLogging: true,\n  logLevels: ['INFO', 'ERROR'], // Exclude DEBUG logs\n  output: 'console',\n};\n\n@NgModule({\n  imports: [\n    EventBusModule\n  ],\n  providers: [\n    { provide: LOGGING_CONFIG, useValue: customLoggingConfig }\n  ]\n})\nexport class AppModule { }\n"})}),"\n",(0,o.jsx)(n.h2,{id:"custom-logger",children:"Custom Logger"}),"\n",(0,o.jsx)(n.p,{children:"You can implement a custom logger by setting the output to 'custom' and providing a customLogger function:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"const customLoggingConfig: LoggingConfig = {\n  enableLogging: true,\n  logLevels: ['INFO', 'DEBUG', 'ERROR'],\n  output: 'custom',\n  customLogger: (message, level, data) => {\n    // Send logs to a logging service, analytics, or storage\n    myLoggingService.log({\n      message,\n      level,\n      data,\n      timestamp: new Date(),\n      source: 'EventBus'\n    });\n  }\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example-output",children:"Example Output"}),"\n",(0,o.jsx)(n.p,{children:"When an event is emitted:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'[2023-06-15T14:22:45.123Z] [INFO] [EventBus] [emit] user:login {"payload":{"userId":"123","username":"john_doe"},"timestamp":1623763365123}\n'})}),"\n",(0,o.jsx)(n.p,{children:"When a subscription is created:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'[2023-06-15T14:22:40.987Z] [INFO] [EventBus] [subscribe] user:login {"listener":"function"}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"logging-levels",children:"Logging Levels"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"INFO"}),": General information about event flow (default)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"DEBUG"}),": Detailed information for debugging purposes"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"ERROR"}),": Error conditions that occur during event processing"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The Logging Middleware is automatically used by all strategies to ensure consistent logging throughout the Event Bus."})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>g,x:()=>l});var t=i(6540);const o={},s=t.createContext(o);function g(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:g(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);