import BlogInfoBase from "@/components/blog/info/BlogInfoBase";
import { Stack, StateLabel } from "@primer/react/lib";

import { BellIcon} from "@primer/octicons-react";

export default function Home() {
  return (
    <div>
    <Stack>
      <BlogInfoBase icon={BellIcon} data={100} description="총 방문자" unit="명" />
    </Stack>
    </div>
  );
}