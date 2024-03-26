const Category = require('./Category');
const Comment = require('./Comment');
const Country = require('./Country');
const Item = require('./Item');
const Ratings = require('./Ratings');
const Snack = require('./Snack');
const User = require('./User');
const Snack_Countries = require('./Snack_Countries');
const Snack_Category = require('./Snack_Category')


//Each user belongs to one country
User.belongsTo(Country, {
    include: "country_id"
})
//Each country has many users
Country.hasMany(User, {
    include: "country_id"
})

//Each snack belongs to multiple countries
Snack.belongsToMany(Country, {
    through: Snack_Countries
});

//Each Country belongs to Multiple snacks
Country.belongsToMany(Snack, {
    through: Snack_Countries
});

//Each country hasMany snacks


//Each Category has many snacks
Category.belongsToMany(Snack, {
    through: 'Snack_Category'
})

//Each Snack belongs to many categories
Snack.belongsToMany(Category, {
    through: 'Snack_Category'
})

//Each snack hasMany comments

Snack.hasMany(Comment, {
    include: "snack_id"
})

//Each comment hasOne Snack 
Comment.belongsTo(Snack, {
    include: "snack_id"
})

//Each User hasMany comments
User.hasMany(Comment, {
    include: "user_id"
})

//Each Comment belongs to ONE user
Comment.belongsTo(User, {
    include: "user_id"
})

//Each User hasMany ListItems
User.hasMany(Item, {
    include: "user_id"
})

Snack.belongsTo(User,{
    include: "user_id"
})

User.hasMany(Snack, {
    include: "user_id"
})



//Each rating has one user
Ratings.belongsTo(User, {
    include: "user_id"
})
//Each user has many ratings
User.hasMany(Ratings, {
    include: "user_id"
})
//Snacks have many ratings
Snack.hasMany(Ratings, {
    includes: "snack_id"
})

//Rating blongs to one snack
Ratings.belongsTo(Snack, {
    include: "snack_id"
})

//ITEM IS A THROUGH TABLE
//Snack_Countries are a through table



module.exports = {Category, Comment, Country, Item, Ratings, Snack, User, Snack_Countries, Snack_Category};