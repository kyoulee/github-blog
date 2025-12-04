"use client"

import React from 'react'
import { ActionList } from "@primer/react/lib";

export function ActionListItemWrapper(props: React.ComponentProps<typeof ActionList.Item>) {
  return <ActionList.Item {...props} />;
}

export function ActionListTrailingVisualWrapper(props: React.ComponentProps<typeof ActionList.TrailingVisual>) {
  return <ActionList.TrailingVisual {...props} />;
}

export function ActionListLeadingVisualWrapper(props: React.ComponentProps<typeof ActionList.LeadingVisual>) {
  return <ActionList.LeadingVisual {...props} />;
}


ActionList.LeadingVisual