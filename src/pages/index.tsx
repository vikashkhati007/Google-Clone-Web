import HomeBody from "../../components/HomeBody"
import Footer from "../../components/footer"
import Header from "../../components/header"
import response from "../../Response";

const Index = () => {
  console.log(response.items);

  return (
    <>
      <Header display="block"/>
      <HomeBody/>
      <Footer/>
    </>
  )
}

export default Index
