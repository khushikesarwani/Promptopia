import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
   <h1 className="head_text text-center">Discover & Share
   <br className="max-md:hidden"></br>
   <span className="orange_gradient text-center">Ai Powered Prompts</span>
   </h1>
   <p className="desc text-center">Lorem ipsum dolor, sit amet 
   consectetur adipisicing elit. Itaque
    totam saepe reiciendis officia. Tempora
    </p>
    <Feed />
    </section>
  )
}

export default Home