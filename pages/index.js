import  useSWR from 'swr'

export default function App(props){
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data } = useSWR("/api", fetcher, {fallbackData: props, refreshInterval: 30000})
    var posts = data.blogia;

    console.log(posts);

    return(
      <div>
        <h2>PostID: {posts[0].id}</h2>
        <h1>{posts[0].title}</h1>
      </div>
    )
}

export async function getStaticProps(){
	const { blogiaSource } = require("../lib/helpers")
	return { props: (await blogiaSource()), revalidate: 1 }
}
