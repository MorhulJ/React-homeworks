import { Component } from 'react'
import './App1.css'  

type FootballClubProps = {
  clubName: string
  city: string
  creationDate: string
  membersCount: number
}

type ClubAchievementsProps = {
  medals: string[]
  trophys: string[]
  goasl: number
}

type TeamCompsProps = {
  teammates: string[]
}

type ClubData = FootballClubProps & ClubAchievementsProps & TeamCompsProps

const styleClasses = ['style-blue', 'style-orange', 'style-green']

const getRandomClass = () => {
  return styleClasses[Math.floor(Math.random() * styleClasses.length)]
}

export const clubs: ClubData[] = [
  {
    clubName: "Dynamo Kyiv",
    city: "Kyiv",
    creationDate: "1927-03-13",
    membersCount: 35,
    medals: ["Gold 2020", "Silver 2021", "Bronze 2022"],
    trophys: ["League Cup", "Super Cup"],
    goasl: 87,
    teammates: [
      "Valentin Morgun",
      "Oleksandr Karavaev",
      "Kristian Bilovar",
      "Aliou Thiare",
      "Vladyslav Dubinchak",
      "Volodymyr Brazhko",
      "Oleksandr Pikhalyonok",
      "Mykola Shaparenko",
      "Nazar Voloshyn",
      "Vladislav Blanuta",
      "Shola Ogundana"
    ]
  },
  {
    clubName: "Real Madrid",
    city: "Madrid",
    creationDate: "1902-03-06",
    membersCount: 25,
    medals: ["Champions League 2022", "La Liga 2024", "La Liga 2025"],
    trophys: ["Copa del Rey", "Supercopa de España"],
    goasl: 112,
    teammates: [
      "Thibaut Courtois",
      "Trent Alexander-Arnold",
      "Éder Militão",
      "Dean Huijsen",
      "Marc Cucurella",
      "Jude Bellingham",
      "Eduardo Camavinga",
      "Federico Valverde",
      "Vinícius Júnior",
      "Kylian Mbappé",
      "Rodrygo"
    ]
  },
  {
    clubName: "FC Barcelona",
    city: "Barcelona",
    creationDate: "1899-11-29",
    membersCount: 25,
    medals: ["La Liga 2025", "Copa del Rey 2025", "Supercopa 2025"],
    trophys: ["Supercopa de España"],
    goasl: 98,
    teammates: [
      "Joan García",
      "João Cancelo",
      "Alejandro Balde",
      "Pau Cubarsí",
      "Jules Koundé",
      "Gavi",
      "Pedri",
      "Fermín López",
      "Lamine Yamal",
      "Raphinha",
      "Gabriel Jesus"
    ]
  }
]

export class FootballClub extends Component<FootballClubProps> {
  render() {
    return (
    <div className={getRandomClass()}>
      <h1>{this.props.clubName}</h1>
      <p>City: {this.props.city}</p>
      <p>Creation Date: {this.props.creationDate}</p>
      <p>Members count: {this.props.membersCount}</p>
    </div>
  )
  }
}

export class ClubAchievements extends Component<ClubAchievementsProps> {
  render() {
    return (
    <div className={getRandomClass()}>
      <h2>Club stats</h2>
      <h4>Medals</h4>
      <ul>
        {this.props.medals.map((medal, index) => <li key={index}>{medal}</li>)}
      </ul>
      <h4>Trophys</h4>
      <ul>
        {this.props.trophys.map((trophy, index) => <li key={index}>{trophy}</li>)}
      </ul>
      <h4>Goals scored: {this.props.goasl}</h4>
    </div>
  )
  }
  
}

export class TeamComps extends Component<TeamCompsProps> {
  render() {
    return (
    <div className={getRandomClass()}>
      <h2>Team Composition</h2>
      <ul>{this.props.teammates.map((teammate, index) => <li key={index}>{teammate}</li>)}</ul>
    </div>
  )
  }
}