import React, { useState, useEffect } from 'react';
import sstk from 'shutterstock-api';
import s from './PostContainer.module.css';

const PostContainer = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                sstk.setAccessToken('v2/MjVYa214OHhjTzR1b1RaSERBeWwyckxidXFxaUNudGkvMjgyNDUwNzY2L2N1c3RvbWVyLzMveHRHY3c5b2QtNVVoZHRoSm1xSncyTWVONG9TMktKdjE3VlZhTTZ3bnpJc0VkNkY3WFVVemNXTUhMX1ZmalZpNWh3X3RQUF9rVzhIc2Zrek83NnRZU3JkZENIMDBXTGxCM25HWHp3S290Z08yTlJvY1BMMzZRaUVYSjlGYkdfVGN0RG03ck1HM2E1TFVxWUFmSzNXYXp1Y3JLVl9QWUhXWTZDTEdXQi1aSUVBd0lySlBVeUdBY1NMQ0UwM0N5SXMtb2YtTWZXMDVScWZkOXdVbFdLd1NxQQ');
                const imagesApi = new sstk.ImagesApi();
                const queryParams = {
                    "query": "New York",
                    "sort": "popular",
                    "orientation": "horizontal"
                };
                const response = await imagesApi.searchImages(queryParams);
                console.log(response);
                setData(response.data)
            } catch (e) {
                console.error('error', e);
            }
        }
        fetchData();
    }, [])

    return (
        <div className={s.post_container}>
            {data.map(item => (
                <div key={item.id} className={s.post_block}>
                    <div className={s.post_wrapper}>
                        <div className={s.profilePic}>
                            <img key={item.id} alt="" src={item.assets.large_thumb.url} className={s.profile_pic__icon} />
                        </div>
                        <div>
                            <img key={item.id} alt="" src={item.assets.preview.url} className={s.icon} />
                        </div>
                        {item.description && <div className={s.description} >{item.description}</div>}
                    </div>

                </div>


                // <div key={item.node.id} className={s.post_block}>
                //     <div className={s.post_wrapper}>
                //         <div className={s.profilePic}>
                //             <img key={item.node.id} alt="" src={profilePic} className={s.profile_pic__icon} />
                //         </div>
                //         <div>
                //             <img key={item.node.id} alt="" src={item.node.display_url} className={s.icon} />
                //         </div>
                //         {item.node.edge_media_to_caption.edges.length && <div>{item.node.edge_media_to_caption.edges[0].node.text}</div>}
                //     </div>

                // </div>
            ))}
        </div>
    )
}

export default PostContainer;