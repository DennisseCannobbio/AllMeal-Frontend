import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'ri-dashboard-line',
        link: ''
    },
    {
        id: 2,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'ri-pencil-ruler-2-line',
        isUiElement: true,
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/',
                parentId: 2
            },
            {
                id: 4,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/',
                parentId: 2
            },
            {
                id: 5,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '/',
                parentId: 2
            },
            {
                id: 6,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '/',
                parentId: 2
            },
            {
                id: 7,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '/',
                parentId: 2
            },
            {
                id: 8,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '/',
                parentId: 2
            },
            {
                id: 9,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '/',
                parentId: 2
            },
            {
                id: 10,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '/',
                parentId: 2
            },
            {
                id: 11,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: '/',
                parentId: 2
            },
            {
                id: 12,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '/',
                parentId: 3
            },
            {
                id: 13,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: '/',
                parentId: 2
            },
            {
                id: 17,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/',
                parentId: 2
            },
            {
                id: 18,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/',
                parentId: 2
            },
            {
                id: 19,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '/',
                parentId: 2
            },
            {
                id: 20,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/',
                parentId: 2
            }
        ]
    },
    {
        id: 21,
        label: 'MENUITEMS.APPS.TEXT',
        icon: 'ri-apps-2-line',
        subItems: [
            {
                id: 22,
                label: 'MENUITEMS.CALENDAR.TEXT',
                link: '/',
                parentId: 21
            },
            {
                id: 23,
                label: 'MENUITEMS.CHAT.TEXT',
                link: '/',
                parentId: 21
            },
            {
                id: 24,
                label: 'MENUITEMS.EMAIL.TEXT',
                subItems: [
                    {
                        id: 25,
                        label: 'MENUITEMS.EMAIL.LIST.INBOX',
                        link: '/',
                        parentId: 24
                    },
                    {
                        id: 26,
                        label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                        link: '/',
                        parentId: 24
                    }
                ]
            },
            {
                id: 27,
                label: 'MENUITEMS.ECOMMERCE.TEXT',
                subItems: [
                    {
                        id: 28,
                        label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
                        link: '/',
                        parentId: 27
                    },
                    {
                        id: 30,
                        label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
                        link: '/',
                        parentId: 27
                    },
                    {
                        id: 31,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
                        link: '/',
                        parentId: 27
                    },
                    {
                        id: 32,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CART',
                        link: '/',
                        parentId: 27
                    },
                    {
                        id: 33,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
                        link: '/',
                        parentId: 27
                    },
                    {
                        id: 34,
                        label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
                        link: '/',
                        parentId: 27
                    },
                    {
                        id: 35,
                        label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
                        link: '/',
                        parentId: 27
                    },
                ]
            },
            {
                id: 36,
                label: 'MENUITEMS.KANBAN.TEXT',
                link: '/',
            }
        ]
    },
    {
        id: 37,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        icon: 'ri-stack-line',
        subItems: [
            {
                id: 38,
                label: 'MENUITEMS.FORMS.TEXT',
                subItems: [
                    {
                        id: 39,
                        label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                        link: '/',
                        parentId: 38
                    },
                    {
                        id: 40,
                        label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                        link: '/',
                        parentId: 38
                    },
                    {
                        id: 41,
                        label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                        link: '/',
                        parentId: 38
                    },
                    {
                        id: 42,
                        label: 'MENUITEMS.FORMS.LIST.EDITOR',
                        link: '/',
                        parentId: 38
                    },
                    {
                        id: 43,
                        label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                        link: '/',
                        parentId: 38
                    },
                    {
                        id: 44,
                        label: 'MENUITEMS.FORMS.LIST.WIZARD',
                        link: '/',
                        parentId: 38
                    },
                    {
                        id: 45,
                        label: 'MENUITEMS.FORMS.LIST.MASK',
                        link: '/',
                        parentId: 38
                    }
                ]
            },
            {
                id: 46,
                label: 'MENUITEMS.TABLES.TEXT',
                subItems: [
                    {
                        id: 47,
                        label: 'MENUITEMS.TABLES.LIST.BASIC',
                        link: '/',
                        parentId: 46
                    },
                    {
                        id: 48,
                        label: 'MENUITEMS.TABLES.LIST.ADVANCED',
                        link: '/',
                        parentId: 46
                    }
                ]
            },
            {
                id: 48,
                label: 'MENUITEMS.CHARTS.TEXT',
                subItems: [
                    {
                        id: 49,
                        label: 'MENUITEMS.CHARTS.LIST.APEX',
                        link: '/',
                        parentId: 48
                    },
                    {
                        id: 50,
                        label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                        link: '/',
                        parentId: 48
                    },
                    {
                        id: 51,
                        label: 'MENUITEMS.CHARTS.LIST.ECHART',
                        link: '/',
                        parentId: 48
                    }
                ]
            },
            {
                id: 52,
                label: 'MENUITEMS.ICONS.TEXT',
                subItems: [
                    {
                        id: 53,
                        label: 'MENUITEMS.ICONS.LIST.REMIX',
                        link: '/',
                        parentId: 52
                    },
                    {
                        id: 54,
                        label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                        link: '/',
                        parentId: 52
                    },
                    {
                        id: 55,
                        label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                        link: '/',
                        parentId: 52
                    },
                    {
                        id: 56,
                        label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                        link: '/',
                        parentId: 52
                    }
                ]
            },
            {
                id: 57,
                label: 'MENUITEMS.MAPS.TEXT',
                icon: 'ri-map-pin-line',
                subItems: [
                    {
                        id: 58,
                        label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                        link: '/',
                        parentId: 57
                    },
                    {
                        id: 59,
                        label: 'Leaflet Maps',
                        link: '/',
                        parentId: 57
                    },
                ]
            }
        ]
    },
    {
        id: 58,
        label: 'MENUITEMS.PAGES.TEXT',
        icon: 'ri-file-copy-2-line',
        subItems: [
            {
                id: 59,
                label: 'MENUITEMS.AUTHENTICATION.TEXT',
                icon: 'ri-account-circle-line',
                subItems: [
                    {
                        id: 60,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                        link: '/',
                        parentId: 59
                    },
                    {
                        id: 61,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                        link: '/',
                        parentId: 59
                    },
                    {
                        id: 62,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                        link: '/',
                        parentId: 59
                    },
                    {
                        id: 63,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                        link: '/',
                        parentId: 59
                    }
                ]
            },
            {
                id: 64,
                label: 'MENUITEMS.UTILITY.TEXT',
                icon: 'ri-profile-line',
                subItems: [
                    {
                        id: 65,
                        label: 'MENUITEMS.UTILITY.LIST.STARTER',
                        link: '/',
                        parentId: 64
                    },
                    {
                        id: 66,
                        label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                        link: '/',
                        parentId: 64
                    },
                    {
                        id: 67,
                        label: 'MENUITEMS.UTILITY.LIST.COOMINGSOON',
                        link: '/',
                        parentId: 64
                    },
                    {
                        id: 68,
                        label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                        link: '/',
                        parentId: 64
                    },
                    {
                        id: 69,
                        label: 'MENUITEMS.UTILITY.LIST.FAQS',
                        link: '/',
                        parentId: 64
                    },
                    {
                        id: 70,
                        label: 'MENUITEMS.UTILITY.LIST.PRICING',
                        link: '/',
                        parentId: 64
                    },
                    {
                        id: 71,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                        link: '/',
                        parentId: 64
                    },
                    {
                        id: 72,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                        link: '/',
                        parentId: 64
                    },
                ]
            },
        ]
    }
];

