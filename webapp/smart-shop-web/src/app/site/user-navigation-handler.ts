import { User, RoleName } from './user';

export function dashboardUrl(user: User){
    const redirectUrl = [];
    switch(user.role.name) {
        case RoleName.ROLE_USER: 
         redirectUrl.push('user');
         break;
        case RoleName.ROLE_ADMIN:
            redirectUrl.push('admin');
            break;
        case RoleName.ROLE_MANAGER:
            redirectUrl.push('manager');
            break;
        case RoleName.ROLE_SUPER_USER:
            redirectUrl.push('super-user');
            break;
        default:
            return;
    }
    redirectUrl.push('dashboard');
    return redirectUrl;
}