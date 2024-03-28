const Category = require('./Category');

// const Comment = require('./Comment');

const Country = require('./Country');
const Item = require('./Item');
const Ratings = require('./Ratings');
const Snack = require('./Snack');
const User = require('./User');
const Snack_Country = require('./Snack_Country');
const Snack_Category = require('./Snack_Category')


//Each user belongs to one country
User.belongsTo(Country, {
    foreignKey: "country_id"
})
//Each country has many users
Country.hasMany(User, {
    foreignKey: "country_id"
})

//Each snack belongs to multiple Country
Snack.hasMany(Snack_Country, {
    foreignKey: "snack_id"
});
Snack_Country.belongsTo(Snack, {
    foreignKey: "snack_id"
})

//Each Country belongs to Multiple snacks
Country.hasMany(Snack_Country, {
    foreignKey: "country_id"
});
Snack_Country.belongsTo(Country, {
    foreignKey: "country_id"
})
//Each country hasMany snacks


//Each Category has many snacks
Category.hasMany(Snack_Category, {
    foreignKey: 'category_id'
})
Snack_Category.belongsTo(Category, {
    foreignKey: 'category_id'
})

//Each Snack belongs to many categories
Snack.hasMany(Snack_Category, {
    foreignKey: 'snack_id'
})
Snack_Category.belongsTo(Snack, {
    foreignKey: "snack_id"
})

//Each snack hasMany comments

// Snack.hasMany(Comment, {
//     foreignKey: "snack_id"
// })

//Each comment hasOne Snack 

// Comment.belongsTo(Snack, {
//     foreignKey: "snack_id"
// })


//Each User hasMany comments


// User.hasMany(Comment, {
//     foreignKey: "user_id"
// })

//Each Comment belongs to ONE user

// Comment.belongsTo(User, {
//     foreignKey: "user_id"
// })

//Each User hasMany ListItems
User.hasMany(Item, {
    foreignKey: "user_id"
})

Item.belongsTo(User, {
    foreignKey: "user_id"
})

Snack.belongsTo(User,{
    foreignKey: "user_id"
})

User.hasMany(Snack, {
    foreignKey: "user_id"
})



//Each rating has one user
Ratings.belongsTo(User, {
    foreignKey: "user_id"
})
//Each user has many ratings
User.hasMany(Ratings, {
    foreignKey: "user_id"
})
//Snacks have many ratings
Snack.hasMany(Ratings, {
    foreignKeys: "snack_id"
})

//Rating blongs to one snack
Ratings.belongsTo(Snack, {
    foreignKey: "snack_id"
})



//ITEM IS A THROUGH TABLE

User.belongsToMany(Snack, { through: Item });
Snack.belongsToMany(User, { through: Item });
//Snack_Country are a through table




module.exports = {Category, Country, Item, Ratings, Snack, User, Snack_Country, Snack_Category};

// Comment


