import React, { useContext, useEffect, useState } from 'react'
import MenuCard from './MenuCard'
import Homesvg from '../../assets/home.svg'
import Subscription from '../../assets/subscription.svg'
import History from '../../assets/history.svg'
import PlayList from '../../assets/playList.svg'
import WatchLater from '../../assets/watchLater.svg'
import Liked from '../../assets/like.svg'
import Film from '../../assets/film.svg'
import ChevronRight from '../../assets/chevronRight.svg'
import Fire from '../../assets/fire.svg'
import Music from '../../assets/music.svg'
import Gaming from '../../assets/game.svg'
import Podcast from '../../assets/podcast.svg'
import Settings from '../../assets/settings.svg'
import Feedback from '../../assets/feedback.svg'
import Report from '../../assets/report.svg'
import Help from '../../assets/help.svg'
import { context } from '../../context/ContextProvider'
const Aside = () => {
  const {
    isAsideOpen,
    setIsAsideOpen,
    setCategoryId
  } = useContext(context);
  
     const main = [
      {
        icon: Homesvg,
        title: 'home',
        
      },
      {
        icon: Film,
        title: 'shorts',
        
      },
      {
        icon: Subscription,
        title: 'subscriptions',
        
      },
    ];
  
    const you = [
      {
        icon: History,
        title: 'history',
        
      },
      {
        icon: PlayList,
        title: 'playlists',
        
      },
      {
        icon: WatchLater,
        title: 'watch later',
        
      },
      {
        icon: Liked,
        title: 'liked videos',
        
      },
    ];
  
    const explore = [
      {
        icon: Fire,
        title: 'trending',
        
      },
      {
        icon: Music,
        title: 'music',
        catId: 10
      },
      {
        icon: Gaming,
        title: 'gaming',
        catId: 20
      },
      {
        icon: Podcast,
        title: 'podcast',
        
      },
    ];
  
    const aboutYoutube = [
      {
        icon: Settings,
        title: 'settings',
        
      },
      {
        icon: Help,
        title: 'help',
        
      },
      {
        icon: Report,
        title: 'report',
        
      },
      {
        icon: Feedback,
        title: 'feedback',
        
      },
    ];
  
  
  // const Mobile 
  function checkIsAsideOpen() {
    const screenWidth = window.screen.width;
    if (screenWidth < 617) {
      setIsAsideOpen(false);
    }
    else
      setIsAsideOpen(true);
  }
  let checkEventCall = false;
  useEffect(() => {
    window.addEventListener('resize', () => {
      checkEventCall = true;
      checkIsAsideOpen();
    });
    // when website first time load on browser
    if (!checkEventCall)
      checkIsAsideOpen();
  }, [])
  return (
    <div className={`${isAsideOpen ? 'block' : 'hidden'} aside px-4 w-60 overflow-y-scroll h-[calc(100dvh-70px)] custom-scrollbar shrink-0`}>
      <div className="main pb-4 border-b">
        {
          main.map((item) =>
            <MenuCard key={item.title} title={item.title} icon={item.icon} isActive={(item.title == 'home') ? true : false} />
          )
        }
      </div>
      {/* you */}
      <div className="you mt-2 pb-4 border-b">

        <div className={`cursor-default sm:cursor-pointer hover:bg-gray-200 flex items-center gap-1 px-6 py-2 rounded-lg`}>
          <h3 className={`capitalize `}>You</h3>
          <img className='w-6 h-6 translate-y-[2px]' src={ChevronRight} alt="" />
        </div>
        {
          you.map((item) =>
            <MenuCard key={item.title} title={item.title} icon={item.icon} />
          )
        }
      </div>
      {/* Explore */}
      <div className="explore mt-2 pb-4 border-b">

        <div className={`cursor-default px-6 py-2`}>
          <h3 className={`capitalize `}>Explore</h3>
        </div>

        {
          explore.map((item) =>
            <MenuCard key={item.title} title={item.title} icon={item.icon} />
          )
        }
      </div>
      {/* settings */}
      <div className="settings mt-2 pb-4 border-b">

        <div className={`cursor-default px-6 py-2`}>
          <h3 className={`capitalize `}>About</h3>
        </div>

        {
          aboutYoutube.map((item) =>
            <MenuCard key={item.title} title={item.title} icon={item.icon} />
          )
        }
      </div>
    </div>
  )
}

export default Aside