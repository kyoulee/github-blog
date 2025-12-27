'use client'

import { Header } from "@primer/react";
import React from 'react';


export function HeaderItemWrapper(props: React.ComponentProps<typeof Header.Item>) {
  return <Header.Item {...props} />;
}

export function HeaderLinkWrapper(props: React.ComponentProps<typeof Header.Link>) {
  return <Header.Link {...props} />;
}
