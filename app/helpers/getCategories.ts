import { BookmarksData } from "data";
const { bookmarks } = BookmarksData


export const getCategories = () => {
  let categories:string[] = []

  bookmarks.map(bookmark => categories.push(bookmark.category))

  return [ ...new Set(categories)]
};
