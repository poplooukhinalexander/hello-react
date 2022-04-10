import { useMemo } from "react";

export const useSortedPosts = (posts, sortBy) => {
    const sortedPosts = useMemo(() => {
        console.log(`Sort by ${sortBy}`);
        if (sortBy)
          return [...posts].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
        return posts;
      }, [sortBy, posts]);
    
    return sortedPosts;
}

export const useSortedAndFilteredPosts = (posts, sortBy, searchBy) => {
    const sortedPosts = useSortedPosts(posts, sortBy);
    const sortedAndFilteredPosts = useMemo(() => {
        console.log(`Search by ${searchBy}`);
        if (searchBy)
          return sortedPosts.filter(p => 
            p.title.toLowerCase().includes(searchBy.toLowerCase()) 
              || p.body.toLowerCase().includes(searchBy.toLowerCase()));
        return sortedPosts;
      }, [searchBy, sortedPosts]);

    return sortedAndFilteredPosts;
}