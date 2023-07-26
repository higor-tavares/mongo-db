//configure the database to be used
use messages_db
//list all collections
show collections;
//get all messages
db.messages.find({})
//delete trash from database
db.messages.deleteMany({ to: { $eq: "$1" }})