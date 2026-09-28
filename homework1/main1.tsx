import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {FootballClub, ClubAchievements, TeamComps, clubs} from './App1.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='container'>
      {clubs.map(club => (
        <article key={club.clubName} className={`team-card`}>
          <FootballClub 
            clubName={club.clubName} 
            city={club.city} 
            creationDate={club.creationDate} 
            membersCount={club.membersCount} 
          />
          <ClubAchievements 
            medals={club.medals} 
            trophys={club.trophys} 
            goasl={club.goasl} 
          />
          <TeamComps teammates={club.teammates} />
        </article>
      ))}
    </div>
  </StrictMode>
)
