import React from 'react'
import { LinkIcon, PaperAirplaneIcon, RocketIcon, WorkflowIcon } from "@primer/octicons-react";
import { ActionList, Text } from "@primer/react/lib";
import { ActionListItemWrapper, ActionListLeadingVisualWrapper, ActionListTrailingVisualWrapper } from '../libs/primer/ActionListWrapper';

function PostTableOfContent() {
  return (
    <ActionList showDividers className="fixed top-5 right-0.5 p-3 border-2 border-amber-400 rounded-2xl m-4 w-12 overflow-hidden bg-amber-300" >
      <ActionListItemWrapper>
        <ActionListTrailingVisualWrapper><LinkIcon /></ActionListTrailingVisualWrapper>
        <Text>Item 1</Text>
        <ActionListLeadingVisualWrapper><RocketIcon /></ActionListLeadingVisualWrapper>
      </ActionListItemWrapper>
      <ActionListItemWrapper className="pl-1">
        <ActionListTrailingVisualWrapper><LinkIcon /></ActionListTrailingVisualWrapper>
        <Text>Item 2</Text>
        <ActionListLeadingVisualWrapper><PaperAirplaneIcon /></ActionListLeadingVisualWrapper>
      </ActionListItemWrapper>
      <ActionListItemWrapper>Item three</ActionListItemWrapper>
      <ActionListItemWrapper>Item 4</ActionListItemWrapper>
      <ActionListItemWrapper>Item 5</ActionListItemWrapper>
      <ActionListItemWrapper>Item 6</ActionListItemWrapper>
      <ActionListItemWrapper>Item 7</ActionListItemWrapper>
    </ActionList>
  )
}

export default PostTableOfContent