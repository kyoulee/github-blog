import BlogLayout from "@/components/post/postHeader";
import GlobalLayoutPageHeader from "@/components/global/GlobalPageHeader";
import { PageLayout, Stack, StateLabel } from "@primer/react/lib";

export default function Home() {
  return (
    <div className="bg-red-700 h-dvh w-full">naib
    
        <Stack direction="horizontal" align="center" wrap="wrap">
          <StateLabel status="issueOpened">Open</StateLabel>
          <StateLabel status="issueDraft">Draft</StateLabel>
          <StateLabel status="issueClosed">Closed</StateLabel>
          <StateLabel status="issueClosedNotPlanned">Closed</StateLabel>
          <StateLabel status="unavailable">Unavailable</StateLabel>
        </Stack>
        </div>
  );
}
