'use client'

import { PageLayout } from "@primer/react";
import React from 'react';


export function PageLayoutHeaderWrapper(props: React.ComponentProps<typeof PageLayout.Header>) {
  return <PageLayout.Header {...props} />;
}

export function PageLayoutContentWrapper(props: React.ComponentProps<typeof PageLayout.Content>) {
  return <PageLayout.Content {...props} />;
}

export default function PageLayoutFooterWrapper(props: React.ComponentProps<typeof PageLayout.Footer>) {
  return <PageLayout.Footer {...props} />;
}