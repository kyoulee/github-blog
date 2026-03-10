"use client";

import { PageHeader, RelativeTime, Stack, StateLabel, Text } from "@primer/react";
import TypeText from "../libs/text/TypeText";
import BlackBoard from "../libs/board/BlackBoard";
import config from "@/../config.json";
import { StackItem } from "@primer/react/lib/Stack/Stack";
import { ChevronDownIcon } from "@primer/octicons-react";

function BlogHeader() {
  return (
    <PageHeader role="banner" className="h-dvh w-full relative">
      <BlackBoard />
      <PageHeader.TitleArea hidden variant="large" className="w-full h-1.5">
        <PageHeader.Title as="h1">Github Blog by kyoulee</PageHeader.Title>
      </PageHeader.TitleArea>
      <PageHeader.Description>
        <Stack direction="vertical" gap="condensed" className="w-full h-full text-center">
          <StackItem>
            <StateLabel status="pullOpened">Records of a New World</StateLabel>
          </StackItem>
          <StackItem>
            <RelativeTime prefix="" date={new Date("2020-01-02T00:00:00Z")} />
          </StackItem>
          <StackItem>
            <TypeText className="text-5xl w-full" texts={config.BlogMessages}></TypeText>
          </StackItem>
          <StackItem>
            <Text>---------- Line ----------</Text>
          </StackItem>
          <StackItem>
            <Text>Story Of My Life</Text>
          </StackItem>
          <StackItem align="center">
            <ChevronDownIcon size={32} className="border-2 rounded-4xl" />
          </StackItem>
        </Stack>
      </PageHeader.Description>
    </PageHeader>
  );
}

export default BlogHeader;
