import { useGetFollowers, useGetFollowing } from "@/lib/ract-query/queriesAndMutation";

type FollowButtonProps = {
    targetUserId: string;
    postlength: number;
  };

const FollowStats = ({ targetUserId, postlength }: FollowButtonProps) => {
    const { data: followers, isPending, error } = useGetFollowers(targetUserId);
    const { data: following, isPending: isLoadingFollowing, error:error1 } = useGetFollowing(targetUserId);

  console.log(following)

  if (isPending) return <p>Loading followers...</p>;
  if (isLoadingFollowing) return <p>Loading following...</p>;
  if (error) return <p>Error loading followers</p>;
  if (error1) return <p>Error loading followers</p>;

  const followersCount = followers ? followers.length : 0;

  const followingCount = following ? following.length : 0;

  console.log(followers);

  return (
    <div className="flex gap-8 mt-10 items-center justify-center xl:justify-start flex-wrap z-20">
        <div className="flex-center gap-2">
            <p className="small-semibold lg:body-bold text-primary-500">{postlength}</p>
            <p className="small-medium lg:base-medium text-light-2">Posts</p>
        </div>
        <div className="flex-center gap-2">
            <p className="small-semibold lg:body-bold text-primary-500">{followersCount}</p>
            <p className="small-medium lg:base-medium text-light-2">Followers</p>
        </div>
        <div className="flex-center gap-2">
            <p className="small-semibold lg:body-bold text-primary-500">{followingCount}</p>
            <p className="small-medium lg:base-medium text-light-2">Following</p>
        </div>
    </div>
    
  )
}

export default FollowStats