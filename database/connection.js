const {Sequelize, DataTypes} =require("sequelize")



const sequelize = new Sequelize("postgresql://postgres.xjzuywnjwqrufivkxbbg:heybeautifulkxakhabar@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")


sequelize.authenticate()
.then(()=>{
console.log("Authentication successful")
})
.catch((e)=>{
    console.log("Error", e)
})


const db ={}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books =  require("./models/book.Model")(sequelize,DataTypes)
//require("./models/book.Model")



// migrate code ho yo chai hai 
sequelize.sync({alter : false}).then(()=>{
    console.log("Migrate vayo hai tw 🚀")
})
module.exports = db