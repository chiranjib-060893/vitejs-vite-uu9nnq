import React, { useEffect, useState } from 'react';
import Homecards from './Homecards';
import HomeBanner from './Herobanner';

function Home() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  // const [bannerImage, setBannerImage] = useState(null);
  const handleClick = () => {
    setLoggedIn((prev) => setLoggedIn(!prev));
    console.log(isLoggedIn);
  };

  // const fetchBannerImage = () => {
  //   fetch(`https://api.unsplash.com/photos/random?client_id=${clientId}`)
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error('Network response failure');
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setBannerImage(data);
  //     })
  //     .catch((error) => console.error('Error Fectching Image', error));
  // };
  useEffect(() => {
    //  setBgColor(getBackgroundColor());
    // fetchBannerImage();
  }, []);
  return (
    <div
      style={{
        // backgroundColor: bgColor,
        // backgroundImage: `url(${bannerImage ? bannerImage.urls.regular : ''})`,
        width: '100%',
        height: '100%',
        color: 'white',
        padding: 0,
      }}
    >
      <HomeBanner imageId = "YaZY5TH50jQ" />
      
      <section className="text-xl flex text-gray">
        <p>Hello! I’m Chiranjib Bhattacharjee, a passionate Front End Developer
        with a knack for creating visually appealing and user-friendly web
        applications. With a strong foundation in HTML, CSS, and JavaScript, I
        specialize in building responsive and interactive websites that provide
        an exceptional user experience. My goal is to bridge the gap between
        design and technology, ensuring that every project I work on is both
        functional and aesthetically pleasing.</p>
        <img src=''/>
      </section>
      <section>
        {isLoggedIn ? (
          <h2>Hello, valued user! Happy to see you again 😊</h2>
        ) : (
          <h2>
            Welcome, visitor! Please log in to personalize your experience.
          </h2>
        )}
        <button onClick={handleClick}>
          {isLoggedIn ? 'Loggggggeddd' : 'Logggg please'}
        </button>
      </section>
      <section><Homecards/></section>
      {/* {bannerImage && (
        <div className="banner">
          <p className="reference">
            Background Photo by{' '}
            <a
              href={bannerImage.user.links.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              {bannerImage.user.name}
            </a>{' '}
            on Unsplash
          </p>
        </div>
      )} */}
    </div>
  );
}

export default Home;
