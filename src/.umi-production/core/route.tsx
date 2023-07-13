// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/workplace","name":"workplace","icon":"smile","parentId":"ant-design-pro-layout","id":"1"},"2":{"path":"/user","layout":false,"id":"2"},"3":{"name":"login","path":"/user/login","parentId":"2","id":"3"},"4":{"path":"/client-manage","name":"client-manage","icon":"crown","parentId":"ant-design-pro-layout","id":"4"},"5":{"path":"list","name":"list","parentId":"4","id":"5"},"6":{"path":"detail/:id","name":"detail","hideInMenu":true,"parentId":"4","id":"6"},"7":{"path":"/employee-manage","name":"employee-manage","icon":"crown","parentId":"ant-design-pro-layout","id":"7"},"8":{"path":"list","name":"list","parentId":"7","id":"8"},"9":{"path":"attendance/:id","name":"attendance","hideInMenu":true,"parentId":"7","id":"9"},"10":{"path":"performance","name":"performance","parentId":"7","id":"10"},"11":{"path":"/order-manage","name":"order-manage","icon":"crown","parentId":"ant-design-pro-layout","id":"11"},"12":{"path":"list","name":"list","parentId":"11","id":"12"},"13":{"path":"/device-manage","name":"device-manage","icon":"crown","parentId":"ant-design-pro-layout","id":"13"},"14":{"path":"list","name":"list","parentId":"13","id":"14"},"15":{"path":"/","redirect":"./Workplace","parentId":"ant-design-pro-layout","id":"15"},"16":{"path":"*","layout":false,"id":"16"},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import(/* webpackChunkName: "p__Workplace__index" */'@/pages/Workplace/index.tsx')),
'2': React.lazy(() => import( './EmptyRoute')),
'3': React.lazy(() => import(/* webpackChunkName: "p__User__Login__index" */'@/pages/User/Login/index.tsx')),
'4': React.lazy(() => import( './EmptyRoute')),
'5': React.lazy(() => import(/* webpackChunkName: "p__Client__index" */'@/pages/Client/index.tsx')),
'6': React.lazy(() => import(/* webpackChunkName: "p__Client__detail" */'@/pages/Client/detail.tsx')),
'7': React.lazy(() => import( './EmptyRoute')),
'8': React.lazy(() => import(/* webpackChunkName: "p__Employee__index" */'@/pages/Employee/index.tsx')),
'9': React.lazy(() => import(/* webpackChunkName: "p__Employee__attendance" */'@/pages/Employee/attendance.tsx')),
'10': React.lazy(() => import(/* webpackChunkName: "p__Employee__Performance__index" */'@/pages/Employee/Performance/index.tsx')),
'11': React.lazy(() => import( './EmptyRoute')),
'12': React.lazy(() => import(/* webpackChunkName: "p__Order__index" */'@/pages/Order/index.tsx')),
'13': React.lazy(() => import( './EmptyRoute')),
'14': React.lazy(() => import(/* webpackChunkName: "p__Device__index" */'@/pages/Device/index.tsx')),
'15': React.lazy(() => import( './EmptyRoute')),
'16': React.lazy(() => import(/* webpackChunkName: "p__404" */'@/pages/404.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "t__plugin-layout__Layout" */'D:/Microsoft VS Code/code/smart-appliance-admin/src/.umi-production/plugin-layout/Layout.tsx')),
},
  };
}