export const Logout = () => {
    if(!localStorage.getItem('userLoggedIn')) return

    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('accessToken');
}