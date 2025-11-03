import React from 'react'
import { LinkIcon, PaperAirplaneIcon, RocketIcon, WorkflowIcon } from "@primer/octicons-react";
import { ActionList, Text } from "@primer/react/lib";

function PostTableOfContent() {
  return (
    <ActionList showDividers className="fixed top-5 right-0.5 p-3 border-2 border-amber-400 rounded-2xl m-4 w-12 overflow-hidden bg-amber-300" >
      <ActionList.Item>
        <ActionList.TrailingVisual><LinkIcon /></ActionList.TrailingVisual>
        <Text>Item 1</Text>
        <ActionList.LeadingVisual><RocketIcon /></ActionList.LeadingVisual>
      </ActionList.Item>
      <ActionList.Item className="pl-1">
        <ActionList.TrailingVisual><LinkIcon /></ActionList.TrailingVisual>
        <Text>Item 2</Text>
        <ActionList.LeadingVisual><PaperAirplaneIcon /></ActionList.LeadingVisual>
      </ActionList.Item>
      <ActionList.Item>Item three</ActionList.Item>
      <ActionList.Item>Item 4</ActionList.Item>
      <ActionList.Item>Item 5</ActionList.Item>
      <ActionList.Item>Item 6</ActionList.Item>
      <ActionList.Item>Item 7</ActionList.Item>
    </ActionList>
  )
}

export default PostTableOfContent