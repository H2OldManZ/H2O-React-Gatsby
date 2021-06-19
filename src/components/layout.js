import * as React from 'react'
import { Link} from 'gatsby'


const Layout = ({ pageTitle, children, data }) => {
  const curPage = data.contentfulPage.name
  const navs = data.allContentfulNavbar.nodes
  const navbar = []

  for (let x = 0; x < navs.length; x++) {

    if (navs[x].contentfulchildren != null){

      navbar.push(<li key={navs[x].name}>{navs[x].name}</li>)

      for (let i = 0; i < navs[x].contentfulchildren.length; i++) {

        if (curPage === navs[x].contentfulchildren[i]){
          navbar.push(<ul><li key={navs[x].contentfulchildren[i]}><Link to={navs[x].links[i]} >{navs[x].contentfulchildren[i]  + " - Active"}</Link></li></ul>)
        }else{

          navbar.push(<ul><li key={navs[x].contentfulchildren[i]}><Link to={navs[x].links[i]} >{navs[x].contentfulchildren[i]}</Link></li></ul>)
        } 
      }
    } else {
      if (curPage === navs[x].name){
      navbar.push(<li key={navs[x].name}><Link to={navs[x].links[0]} >{navs[x].name + " - Active"}</Link></li>)
    } else{
      navbar.push(<li key={navs[x].name}><Link to={navs[x].links[0]} >{navs[x].name}</Link></li>)
    }
    }

  }

  return (
    <main>
      <title>{pageTitle}</title>
      <nav>
        <ul> 
          {navbar}
        </ul>
      </nav>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  )
}




export default Layout