import BlogInfoBase from "@/components/blog/info/BlogInfoBase";
import { Stack, StateLabel } from "@primer/react/lib";

import { BellIcon} from "@primer/octicons-react";
import BlogInfoPost from "@/components/blog/info/BlogInfoPost";
import BlogInfoLike from "@/components/blog/info/BlogInfoLike";
import BlogInfoDay from "@/components/blog/info/BlogInfoDay";

export default function Home() {
  return (
    <div>
    <Stack>
      <BlogInfoBase icon={BellIcon} data={100} description="총 방문자" unit="명" />
      <BlogInfoPost />
      <BlogInfoLike />
      <BlogInfoDay />
    </Stack>
    </div>
  );
}