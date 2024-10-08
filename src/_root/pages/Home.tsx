import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { Models } from "appwrite";
import AllUsers from "./AllUsers";
import { useGetRecentPosts } from "@/lib/ract-query/queriesAndMutation";

const Home = () => {
  const { data: posts, isPending: isPostLoading } = useGetRecentPosts();
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">
            Cosa si dice nello spogliatoio
          </h2>
          {isPostLoading && !posts ? (
              <Loader/>
            ) :
            (
              <ul className="flex flex-col flex-1 gap-9 w-full">{posts?.documents.map((post: Models.Document) => {
                  return (
                      <PostCard key={post.caption} post ={post} />
                  )
                })}
              </ul>
            )
          }
        </div>
      </div>
      <AllUsers/>
    </div>
  )
}

export default Home