import BlogInfoBase from "@/components/blog/info/BlogInfoBase";
import { BellIcon, CalendarIcon, HeartIcon, RepoIcon } from "@primer/octicons-react";
import BlogInfoPost from "@/components/blog/info/BlogInfoPost";
import BlogInfoLike from "@/components/blog/info/BlogInfoLike";
import BlogInfoDay from "@/components/blog/info/BlogInfoDay";
import Postlists from "@/components/blog/postlists/PostLists";
import GithubFollow from "@/components/blog/githubFollow/GithubFollow";

export default function Home() {
  return (
    <div>
      <div className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center  text-zinc-300">
          <div className="grid grid-cols-2 gap-4 ">
            <BlogInfoBase icon={BellIcon} data={100} description="총 방문자" unit="명" />
            <BlogInfoPost />
            <BlogInfoLike />
            <BlogInfoDay />
          </div>
          <div className="text-center">
            <p className="text-4xl m-2 font-bold">
              🌍 또 하나의{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">세계</span>에
              오신것을 환영합니다. 🚀
            </p>
            <p className="text-2xl">새로운 세상을 만들기 위해 작업합니다.</p>
          </div>
        </div>
      </div>
      <Postlists />
      <GithubFollow />
    </div>
  );
}
