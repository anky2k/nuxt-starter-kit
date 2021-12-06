export default (context) => {
    if (process.client && context.env.MOCK_MODE === 'true') {
        const { worker } = require('../mock/browser.js')
        worker.start()
    }    
}


