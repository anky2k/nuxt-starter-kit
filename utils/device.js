export const getDeviceType = userAgent => {
    let device = 'desktop';    
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) device = 'mobile';
    return device;
};

export const isMobile = device => device === 'mobile'