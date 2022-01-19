enum colorsEnum {
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
  BLUE = 'blue',
  PURPLE = 'purple'
}

type ProjectSkillType = {
  id: string,
  name: string,
  imageHref: string,
  markdownContent: string,
  color: colorsEnum
}

const projects: ProjectSkillType[] = [
  // {
  //   id: 'hboi',
  //   name: 'HBO-I',
  //   imageHref: '/hboi.png',
  //   markdownContent: 'testing',
  //   color: colorsEnum.BLUE
  // },
  // {
  //   id: 'yourmonthlyplaylist',
  //   name: 'Your Monthly Playlist',
  //   imageHref: '/yourmonthlyplaylist.png',
  //   markdownContent: 'testing playlistz',
  //   color: colorsEnum.PURPLE
  // },
  // {
  //   id: 'portfolio',
  //   name: 'Portfolio',
  //   imageHref: '/meandmydad.jpeg',
  //   markdownContent: 'portfolio content',
  //   color: colorsEnum.YELLOW
  // },
  // {
  //   id: 'cv',
  //   name: 'Curriculum Vitea',
  //   imageHref: '/cv.png',
  //   markdownContent: 'Curriculum Vitae is this very website right here. I wanted to host my CV on my own domain so I could show off some of my skills within docker, HTML and CSS. You can view the source code here',
  //   color: colorsEnum.BLUE
  // }
]

const skills: ProjectSkillType[] = []

export { projects, skills }
