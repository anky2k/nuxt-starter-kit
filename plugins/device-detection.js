import { getDeviceType } from '../utils/device'

export default (context, inject) => {
    let UA = ''
    if(process.server) {
        const { req } = context;
        UA = req['headers']['user-agent']        
    }    
    if(process.client) {
        UA = navigator['userAgent']        
    }    
    inject('device', getDeviceType(UA))
}