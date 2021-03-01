import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Square Meter API',
    description: 'API to get price the square meter',
    version: '1.0.0'
  },
  servers: [{
    url: '/api',
    description: 'Principal Service'
  }],
  tags: [{
    name: 'square-meter',
    description: 'APIs related to square meter price'
  }],
  paths,
  schemas,
  components
}
