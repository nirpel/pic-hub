class Image {
    constructor(fileName, caption, categories, location, isFavorite, isPrivate) {
        this.fileName = fileName;
        this.caption = caption;
        this.categories = categories;
        this.location = location;
        this.isFavorite = isFavorite;
        this.isPrivate = isPrivate;
    }
}

module.exports = Image;