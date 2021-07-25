class Image {
    constructor(fileName, caption, categories, location, isFavorite, isPrivate) {
        this.fileName = fileName;
        this.caption = caption || null;
        this.categories = categories || [];
        this.location = location || null;
        this.isFavorite = isFavorite || false;
        this.isPrivate = isPrivate || false;
    }
}

module.exports = Image;