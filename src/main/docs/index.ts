import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Property Value API',
    description: 'API to get value the property',
    version: '1.0.0'
  },
  servers: [{
    url: '/api',
    description: 'Principal Service'
  }],
  tags: [{
    name: 'property-value',
    description: 'APIs related to property value'
  }],
  paths,
  schemas,
  components
}
