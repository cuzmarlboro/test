import request from '@/service';

// 获取用户个人信息
const getUserInfo = () => request('/user/info', 'GET', {});

export { getUserInfo };
