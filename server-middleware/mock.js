// let mockServerEnabled = false
// import { server } from '../mock/server'

export default function (req, res, next) {
    // if(process.env.MOCK === 'true' && !mockServerEnabled) {        
    //     server.listen()
    //     console.log('running in mock mode')
    //     mockServerEnabled = true
    // }

    next();
  }