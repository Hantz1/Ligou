import dashboard from '../../assets/image/icons/dashboard.png'
import shop from '../../assets/image/icons/shop.png'
import report from '../../assets/image/icons/report.png'
import team from '../../assets/image/icons/team.png'
import order from '../../assets/image/icons/order.png'
import settings from '../../assets/image/icons/settings.png'
import help from '../../assets/image/icons/help.png'

export const menus= [
    {
        id: 1,
        path: '/',
        titre: 'Dashboard',
        image: dashboard
    },
    {
        id: 2,
        path: '/products',
        titre: 'Products',
        image: shop
    },
    {
        id: 3,
        path: '/order',
        titre: 'Orders',
        image: order
    },
    {
        id: 4,
        path: '/team',
        titre: 'Team',
        image: team
    },
    {
        id: 5,
        path: '/reports',
        titre: 'Reports',
        image: report
    },
    {
        id: 6,
        path: '/settings',
        titre: 'Settings',
        image: settings
    },
    {
        id: 7,
        path: '/help',
        titre: 'Help',
        image: help
    }
]
