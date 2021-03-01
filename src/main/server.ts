import 'module-alias/register'
import app from './config/app'
import env from '@/main/config/env'

app.listen(env.port, () => console.log(`
        ################################################
            🏁  Server listening on port: ${env.port} 🏁 
        ################################################`))
