import React from "react";
import PageNavigation from "./PageNavigation";
import GiscusSetting from "../giscus/GiscusSetting";

type PostFooterProps = {
  slug: string[];
  id?: number;
};

function PostFooter(props: PostFooterProps) {
  return (
    <div>
      <PageNavigation slug={props.slug}/>
      <GiscusSetting id={props.id} />
    </div>
  );
}

export default PostFooter;
