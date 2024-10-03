import { MenuItem } from './menu.model';
export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'Dashboard',
        icon: 'ri-dashboard-line',
        link: ''
    },

      {
        id: 2,
        label: 'Mantención',
        // isTitle: true,
        // link: 'menus',
        subItems: [
            {
                id: 3,
                label: 'Mantenedor Menus',
                link: '/menus',
                parentId: 2
            },
            {
              id: 3,
              label: 'Mantenedor Pedidos',
              link: '/pedidos',
              parentId: 2
          },
        ]
    },

    {
      id: 3,
      label: 'Slack',
      // isTitle: true,
      // link: 'menus',
      subItems: [
          {
              id: 4,
              label: 'Enviar Menú/s',
              link: '/slack/sendmenu',
              parentId: 3
          },
          {
            id: 5,
            label: 'Respuestas Usuarios',
            link: '/slack/responses',
            parentId: 3
        },
      ]
  },
]
// export const MENU: MenuItem[] = [
//     {
//         id: 1,
//         label: 'MENUITEMS.MENU.TEXT',
//         isTitle: true
//     },
//     {
//         id: 2,
//         label: 'MENUITEMS.DASHBOARDS.TEXT',
//         icon: 'ri-dashboard-line',
//         badge: {
//             variant: 'success',
//             text: 'MENUITEMS.DASHBOARDS.BADGE',
//         },
//         link: '/'
//     },
//     {
//         id: 3,
//         label: 'MENUITEMS.CALENDAR.TEXT',
//         icon: 'ri-calendar-2-line',
//         link: '/'
//     },
//     {
//         id: 4,
//         label: 'MENUITEMS.CHAT.TEXT',
//         icon: 'ri-chat-1-line',
//         link: '/'
//     },
//     {
//         id: 5,
//         label: 'MENUITEMS.ECOMMERCE.TEXT',
//         icon: 'ri-store-2-line',
//         subItems: [
//             {
//                 id: 6,
//                 label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
//                 link: '/',
//                 parentId: 5
//             },
//             {
//                 id: 7,
//                 label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
//                 link: '/',
//                 parentId: 5
//             },
//             {
//                 id: 8,
//                 label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
//                 link: '/',
//                 parentId: 5
//             },
//             {
//                 id: 9,
//                 label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
//                 link: '/',
//                 parentId: 5
//             },
//             {
//                 id: 10,
//                 label: 'MENUITEMS.ECOMMERCE.LIST.CART',
//                 link: '/',
//                 parentId: 5
//             },
//             {
//                 id: 11,
//                 label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
//                 link: '/',
//                 parentId: 5
//             },
//             {
//                 id: 12,
//                 label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
//                 link: '/',
//                 parentId: 5
//             },
//             {
//                 id: 13,
//                 label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
//                 link: '/',
//                 parentId: 5
//             },
//         ]
//     },
//     {
//         id: 14,
//         label: 'MENUITEMS.EMAIL.TEXT',
//         icon: 'ri-mail-send-line',
//         subItems: [
//             {
//                 id: 15,
//                 label: 'MENUITEMS.EMAIL.LIST.INBOX',
//                 link: '/',
//                 parentId: 14
//             },
//             {
//                 id: 16,
//                 label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
//                 link: '/',
//                 parentId: 14
//             }
//         ]
//     },
//     {
//         id: 15,
//         label: 'MENUITEMS.KANBAN.TEXT',
//         icon: 'ri-artboard-2-line',
//         link: '/'
//     },
//     {
//         id: 16,
//         isLayout: true
//     },
//     {
//         id: 17,
//         label: 'MENUITEMS.PAGES.TEXT',
//         isTitle: true
//     },
//     {
//         id: 18,
//         label: 'MENUITEMS.AUTHENTICATION.TEXT',
//         icon: 'ri-account-circle-line',
//         subItems: [
//             {
//                 id: 19,
//                 label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
//                 link: '/',
//                 parentId: 18
//             },
//             {
//                 id: 20,
//                 label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
//                 link: '/',
//                 parentId: 18
//             },
//             {
//                 id: 21,
//                 label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
//                 link: '/',
//                 parentId: 18
//             },
//             {
//                 id: 22,
//                 label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
//                 link: '/',
//                 parentId: 18
//             }
//         ]
//     },
//     {
//         id: 23,
//         label: 'MENUITEMS.UTILITY.TEXT',
//         icon: 'ri-profile-line',
//         subItems: [
//             {
//                 id: 24,
//                 label: 'MENUITEMS.UTILITY.LIST.STARTER',
//                 link: '/',
//                 parentId: 23
//             },
//             {
//                 id: 25,
//                 label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
//                 link: '/',
//                 parentId: 23
//             },
//             {
//                 id: 26,
//                 label: 'MENUITEMS.UTILITY.LIST.COOMINGSOON',
//                 link: '/',
//                 parentId: 23
//             },
//             {
//                 id: 27,
//                 label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
//                 link: '/',
//                 parentId: 23
//             },
//             {
//                 id: 28,
//                 label: 'MENUITEMS.UTILITY.LIST.FAQS',
//                 link: '/',
//                 parentId: 23
//             },
//             {
//                 id: 29,
//                 label: 'MENUITEMS.UTILITY.LIST.PRICING',
//                 link: '/',
//                 parentId: 23
//             },
//             {
//                 id: 30,
//                 label: 'MENUITEMS.UTILITY.LIST.ERROR404',
//                 link: '/',
//                 parentId: 23
//             },
//             {
//                 id: 31,
//                 label: 'MENUITEMS.UTILITY.LIST.ERROR500',
//                 link: '/',
//                 parentId: 23
//             },
//         ]
//     },
//     {
//         id: 32,
//         label: 'MENUITEMS.COMPONENTS.TEXT',
//         isTitle: true
//     },
//     {
//         id: 33,
//         label: 'MENUITEMS.UIELEMENTS.TEXT',
//         icon: 'ri-pencil-ruler-2-line',
//         subItems: [
//             {
//                 id: 34,
//                 label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
//                 link: '/',
//                 parentId: 33
//             },
//             {
//                 id: 35,
//                 label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
//                 link: '/',
//                 parentId: 33
//             },
//             {
//                 id: 36,
//                 label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
//                 link: '/',
//                 parentId: 33
//             },
//             {
//                 id: 37,
//                 label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
//                 link: '/',
//                 parentId: 33
//             },
//             {
//                 id: 38,
//                 label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
//                 link: '/',
//                 parentId: 33
//             },
//             {
//                 id: 39,
//                 label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
//                 link: '/',
//                 parentId: 33
//             },
//             {
//                 id: 40,
//                 label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
//                 link: '/',
//                 parentId: 33
//             },
//             {
//                 id: 41,
//                 label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
//                 link: '/',
//                 parentId: 33
//             },
//             {
//                 id: 42,
//                 label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
//                 link: '/',
//                 parentId: 33
//             },
//             {
//                 id: 43,
//                 label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
//                 link: '/',
//                 parentId: 33
//             },
//             {
//                 id: 44,
//                 label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
//                 link: '/',
//                 parentId: 33
//             },
//             {
//                 id: 45,
//                 label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
//                 link: '/',
//                 parentId: 33
//             },
//             {
//                 id: 46,
//                 label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
//                 link: '/',
//                 parentId: 33
//             },
//             {
//                 id: 47,
//                 label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
//                 link: '/',
//                 parentId: 33
//             },
//             {
//                 id: 48,
//                 label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
//                 link: '/',
//                 parentId: 33
//             },
//         ]
//     },
//     {
//         id: 49,
//         label: 'MENUITEMS.FORMS.TEXT',
//         icon: 'ri-eraser-fill',
//         badge: {
//             variant: 'danger',
//             text: '8'
//         },
//         subItems: [
//             {
//                 id: 50,
//                 label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
//                 link: '/',
//                 parentId: 49
//             },
//             {
//                 id: 51,
//                 label: 'MENUITEMS.FORMS.LIST.VALIDATION',
//                 link: '/',
//                 parentId: 49
//             },
//             {
//                 id: 52,
//                 label: 'MENUITEMS.FORMS.LIST.ADVANCED',
//                 link: '/',
//                 parentId: 49
//             },
//             {
//                 id: 53,
//                 label: 'MENUITEMS.FORMS.LIST.EDITOR',
//                 link: '/',
//                 parentId: 49
//             },
//             {
//                 id: 54,
//                 label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
//                 link: '/',
//                 parentId: 49
//             },
//             {
//                 id: 55,
//                 label: 'MENUITEMS.FORMS.LIST.WIZARD',
//                 link: '/',
//                 parentId: 49
//             },
//             {
//                 id: 56,
//                 label: 'MENUITEMS.FORMS.LIST.MASK',
//                 link: '/',
//                 parentId: 49
//             },
//         ]
//     },
//     {
//         id: 57,
//         label: 'MENUITEMS.TABLES.TEXT',
//         icon: 'ri-table-2',
//         subItems: [
//             {
//                 id: 58,
//                 label: 'MENUITEMS.TABLES.LIST.BASIC',
//                 link: '/',
//                 parentId: 57
//             },
//             {
//                 id: 59,
//                 label: 'MENUITEMS.TABLES.LIST.ADVANCED',
//                 link: '/',
//                 parentId: 57
//             }
//         ]
//     },
//     {
//         id: 60,
//         label: 'MENUITEMS.CHARTS.TEXT',
//         icon: 'ri-bar-chart-line',
//         subItems: [
//             {
//                 id: 61,
//                 label: 'MENUITEMS.CHARTS.LIST.APEX',
//                 link: '/',
//                 parentId: 60
//             },
//             {
//                 id: 61,
//                 label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
//                 link: '/',
//                 parentId: 60
//             },
//             {
//                 id: 62,
//                 label: 'MENUITEMS.CHARTS.LIST.ECHART',
//                 link: '/',
//                 parentId: 60
//             }
//         ]
//     },
//     {
//         id: 63,
//         label: 'MENUITEMS.ICONS.TEXT',
//         icon: 'ri-brush-line',
//         subItems: [
//             {
//                 id: 64,
//                 label: 'MENUITEMS.ICONS.LIST.REMIX',
//                 link: '/',
//                 parentId: 63
//             },
//             {
//                 id: 65,
//                 label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
//                 link: '/',
//                 parentId: 63
//             },
//             {
//                 id: 66,
//                 label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
//                 link: '/',
//                 parentId: 63
//             },
//             {
//                 id: 67,
//                 label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
//                 link: '/',
//                 parentId: 63
//             }
//         ]
//     },
//     {
//         id: 68,
//         label: 'MENUITEMS.MAPS.TEXT',
//         icon: 'ri-map-pin-line',
//         subItems: [
//             {
//                 id: 69,
//                 label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
//                 link: '/',
//                 parentId: 68
//             },
//             {
//                 id: 70,
//                 label: 'Leaflet Maps',
//                 link: '/',
//                 parentId: 68
//             },
//         ]
//     },
//     {
//         id: 69,
//         label: 'MENUITEMS.MULTILEVEL.TEXT',
//         icon: 'ri-share-line',
//         subItems: [
//             {
//                 id: 70,
//                 label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
//                 link: 'javascript: void(0);',
//                 parentId: 69
//             },
//             {
//                 id: 71,
//                 label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
//                 parentId: 69,
//                 subItems: [
//                     {
//                         id: 72,
//                         label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
//                         link: 'javascript: void(0);',
//                         parentId: 71,
//                     },
//                     {
//                         id: 73,
//                         label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
//                         link: 'javascript: void(0);',
//                         parentId: 71,
//                     }
//                 ]
//             },
//         ]
//     }
// ];
