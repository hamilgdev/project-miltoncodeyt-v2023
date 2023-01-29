'use client';

import { useState, useEffect } from 'react';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { Bookmarks, Categories, Queries } from 'types';
import { getBookmarks, getCategories } from 'helpers';
import {
  BookmarkControls,
  BookmarkCard,
  WithoutResultCard,
  Loading
} from 'components';

import { BookmarksData } from 'data';
const { title, description } = BookmarksData;

export const BookmarksSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [bookmarks, setBookmarks] = useState<Bookmarks[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [loading, setLoading] = useState(true);

  const queryParam = searchParams.get('q');
  const [queryBookmark, handleQueryBookmark] = useState<Queries>({
    searchInput: queryParam || '',
    filterInput: []
  });
  const { searchInput } = queryBookmark;

  // load bookmarks
  useEffect(() => {
    setBookmarks(getBookmarks(queryBookmark));
    setLoading(false);
  }, [queryBookmark]);

  // load categories
  useEffect(() => {
    let categories: string[] = getCategories();
    let categoriesCopy: Categories[] = [];

    categories.map((category) =>
      categoriesCopy.push({
        category,
        checked: false
      })
    );

    setCategories(categoriesCopy);
  }, []);

  // search control
  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchInput === '') return router.push(`${pathname}`);
    router.push(`${pathname}?q=${searchInput}`);
  };

  const handleInputChange: any = ({ target }: any) => {
    handleQueryBookmark({
      ...queryBookmark,
      [target.name]: target.value
    });
  };

  // filter control
  const handleCategory = ({ target }: any) => {
    let categoriesCopy: Categories[] = [...categories];
    let checkedCategories: string[] = [];

    // toggle checked category
    categoriesCopy.filter((ctg) => ctg.category === target.name)[0].checked =
      target.checked;

    // collect checked categories
    categoriesCopy
      .filter((ctg) => ctg.checked === true)
      .map((ctg) => checkedCategories.push(ctg.category));

    setCategories(categoriesCopy);
    handleQueryBookmark({
      ...queryBookmark,
      filterInput: [...checkedCategories]
    });
  };

  return (
    <section className='mb-16 min-h-screen'>
      <div className='pt-8 bg-color-green-500-alpha-15 rounded-[var(--border-radius-semi)] text-center animate__animated animate__fadeIn'>
        <div className='l-container'>
          <h2 className='title-section'>{title}</h2>
          <p className='description-section'>{description}</p>

          <div className='flex flex-col mt-12 sm:flex-row sm:gap-4'>
            <BookmarkControls
              searchInput={searchInput}
              categories={categories}
              handleCategory={handleCategory}
              handleSearch={handleSearch}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className='l-container animate__animated animate__fadeInUp'>
        {loading ? (
          <div className='flex gap-2 w-full flex-col justify-center items-center py-4 bg-color-black-500-alpha-50'>
            <Loading />
          </div>
        ) : !bookmarks.length ? (
          <div className='flex gap-2 w-full flex-col justify-center items-center py-4 bg-color-black-500-alpha-50'>
            <WithoutResultCard />
          </div>
        ) : null}

        <div className='my-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {bookmarks.map(({ id, title, category, icon, image, url }) => (
            <BookmarkCard
              key={id}
              title={title}
              category={category}
              icon={icon}
              image={image}
              url={url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
