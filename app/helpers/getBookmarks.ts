import { Bookmarks, Queries } from 'types'

import { BookmarksData } from "data";
const { bookmarks } = BookmarksData

export const getBookmarks = (query: Queries): Bookmarks[] => {
  const { searchInput, filterInput } = query

  if (!searchInput && !filterInput.length) return bookmarks;

  let filteredBookmarks: Bookmarks[] = []

  if (searchInput && filterInput.length) {
    filterInput.map(category => (
      filteredBookmarks = bookmarks.filter(ctg => ctg.category.includes(category))
    ))

    return filteredBookmarks.filter(bookmark => (bookmark.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))).flat()
  }

  if (searchInput) return bookmarks.filter((bookmark) => (
    bookmark.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
  )).flat()


  if (filterInput.length) return filterInput.map(category => (
    bookmarks.filter(ctg => ctg.category.includes(category))
  )).flat()

  return bookmarks
};

