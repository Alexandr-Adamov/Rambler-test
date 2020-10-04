import React from 'react';
import s from './Post.module.css';
import icon from './icon/love-or-like-heart-sketched-outlined-symbol.png';

const Posts = (props) => {
  const { data } = props;

  return (
    <div className={s.post_container}>
      {data.map((item) => (
        <div key={item.id} className={s.post_block}>
          <div className={s.post_wrapper}>
            <div className={s.header_container}>
              <div className={s.header_icon}>
                <div className={s.profilePic}>
                  <img key={item.id} alt="" src={item.assets.large_thumb.url} className={s.profile_pic__icon} />
                </div>
                <div className={s.post_title}>popular posts</div>
              </div>
              <div>3h</div>
            </div>
            <div className={s.content_photo}>
              <img key={item.id} alt="" src={item.assets.preview.url} className={s.icon} />
            </div>
            <div className={s.lickes_container}>
              <div role="presentation" onClick={() => { alert(item.id); }} className={s.lickes_icon_container}>
                <img className={s.lickes_icon} img alt="pic" src={icon} />
              </div>
              <div className={s.lickes_count}>
                {' '}
                {item.id}
                {' '}
              </div>
            </div>
            {item.description && <div className={s.description}>{item.description}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
