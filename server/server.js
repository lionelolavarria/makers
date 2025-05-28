require('dotenv').config()
const app = require('./src/app')
const { sequelize } = require('./src/config/database')

const PORT = process.env.PORT || 5000

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))
})
