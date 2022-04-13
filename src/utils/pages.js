export const getPagesCount = (itemsCount, limit) => {
    const pagesCount = Math.ceil(itemsCount / limit);
    return pagesCount;
}

export const getPages = (pagesCount) => {
    let pages = [];
    for (let i = 0; i < pagesCount; i ++)
        pages.push(i + 1);
    return pages;
}