// NEW
if (process.env.NODE_ENV === 'development' && process.client) {
    const { worker } = require('../mock/browser')
    worker.start()
}