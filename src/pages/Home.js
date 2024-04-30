import {React, useState, useEffect } from 'react';
import Topcard from '../Components/Topcard';
import Bottomcard from '../Components/Bottomcard';
import Pagination from '../Components/Pagination';

function Home() {
  const [topStories, setTopStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const topStoryIds = await response.json();
        const storyRequests = topStoryIds.map(id =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res) => {
            return res.json()
          })
        );
        const storiesData = await Promise.all(storyRequests);
        setTopStories(storiesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTopStories();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStories = topStories.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container'>
      <Topcard />
      <div className='bottom-cards'>
        {currentStories.map((story, index) => (
          <Bottomcard key={story.id} title={story.title} url={story.url} number={indexOfFirstItem + index + 1} by={story.by} score={story.score} />
        ))}
      </div>
      <Pagination itemsPerPage={itemsPerPage} totalItems={topStories.length} paginate={paginate} />
    </div>
  );
}

export default Home;