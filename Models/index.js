const Category = require('./Category');

// const Comment = require('./Comment');

const Country = require('./Country');
//const Item = require('./Item');
const Ratings = require('./Ratings');
const Snack = require('./Snack');
const User = require('./User');
const Snack_Country = require('./Snack_Country');
const Snack_Category = require('./Snack_Category');
const Like = require('./Like');
const WishList = require('./Wish-List');


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

//User and list item relation
User.hasMany(WishList, {
    foreignKey: "user_id"
})
WishList.belongsTo(User, {
    foreignKey: "user_id"
})

//Snack and user relations
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


//Snack and Ratings relations
Snack.hasMany(Ratings, {
    foreignKeys: "snack_id"
})
Ratings.belongsTo(Snack, {
    foreignKey: "snack_id"
})

//Like and User relation
Like.belongsTo(User, {
    foreignKey: "user_id"
})
User.hasMany(Like, {
    foreignKey: "user_id"
})

//Like and snack relation
Like.belongsTo(Snack, {
    foreignKey: "snack_id"
})
Snack.hasMany(Like, {
    foreignKey: "snack_id"
})


//ITEM IS A THROUGH TABLE

//User.belongsToMany(Snack, { through: WishList });
//Snack.belongsToMany(User, { through: WishList });

//Item snack relations
WishList.belongsTo(Snack, {
    foreignKey: "snack_id"
})
Snack.hasMany(WishList, {
    foreignKey: "snack_id"
})

//Item user relations
User.hasMany(WishList, {
    foreignKey: "user_id"
})
WishList.belongsTo(User, {
    foreignKey: "user_id"
})

//join table for User Lists
// Snack.belongsToMany(User, {through: WishList });
// User.belongsToMany(Snack, {through: WishList });

User.belongsToMany(Snack, { 
    through: WishList,
    as: 'FavouriteSnacks' 
});

Snack.belongsToMany(User, {
    through: WishList,
    as: 'FavouriteSnacks' 
});


module.exports = {Category, Country, Ratings, Snack, User, Snack_Country, Snack_Category, Like, WishList};



