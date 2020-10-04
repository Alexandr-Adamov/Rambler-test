import React, { useState, useEffect } from 'react';
import sstk from 'shutterstock-api';
import Posts from './Posts';

const PostContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        sstk.setAccessToken('v2/MjVYa214OHhjTzR1b1RaSERBeWwyckxidXFxaUNudGkvMjgyNDUwNzY2L2N1c3RvbWVyLzMvR2pUX0puc3Z4R3h3QmN3eFNISTBkTFMyN2V0NGlLV1Z1ZWpIOFlSWnNEVmh0Ykg1dFR2dW4xbU9HRERVLXZYam1tc2ZEYS1SeHhqU25yTjB3YWZIbG5aOGlkeUp6VWFDMFNnZVE0V0FCUE1ZbVp4MjhPOTgtRzJ1RTJzV0JTa1BsSTBVTVRrd2ViX2xkNHM2REVfYkpDazYzMWR3LVFldVFBdlB2ZnRCVE1jcFUtcWRtR3Z4enR1QUowLWI1Qlh4blRrR3J0bWZTbXJaSjJpVlNXclNDQQ');
        const imagesApi = new sstk.ImagesApi();
        const queryParams = {
          query: 'New York',
          sort: 'popular',
          orientation: 'horizontal',
        };
        const response = await imagesApi.searchImages(queryParams);
        setData(response.data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('error', e);
      }
    }
    fetchData();
  }, []);

  return (
    <Posts data={data} />
  );
};

export default PostContainer;
