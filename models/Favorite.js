module.exports = (sequelize, DataTypes) => {
    const Favorite = sequelize.define('Favorite', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        posterPath: DataTypes.STRING,
        title: DataTypes.STRING,
        releaseDate: DataTypes.DATE,
        originalLanguage: DataTypes.STRING,
        voteCount: DataTypes.INTEGER,
        voteAverage: DataTypes.FLOAT,
        overview: DataTypes.TEXT,
        movieID: DataTypes.INTEGER,
        sessionID: DataTypes.STRING
    },
        // {
        //   classMethods: {
        //     associate: function(models) {
        //       User.hasMany(models.Task)
        //     }
        //   }
        // }
    );

    return Favorite;
};