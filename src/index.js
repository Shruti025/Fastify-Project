const fastify = require('fastify')({
    logger: true
})
// database
const mongoose = require('mongoose')

// db connection
mongoose.connect("mongodb://mongo:AcxD4b2JDOdJT1aknjGr@containers-us-west-27.railway.app:5857")
.then(() => console.log('Mongo connection is working!'))
.catch(err => console.log(err))

fastify.get('/' , async(request, reply) => {
    return {user: 'Hello User!'}
})

const start = async () => {
    try{
        await fastify.listen(3000)
        fastify.log.info('Fastify works!')
    }
    catch (error){

    }
}

start()