import Giscus from "@giscus/react";
import config from "@/../config.json";

type GiscusSettingProps = {
  id?: string;
  ogTitle: string;
};

export default function GiscusSetting({ id, ogTitle }: GiscusSettingProps) {
  const repoString = (config.githubId + "/" + config.githubRepo) as `${string}/${string}`;

  return (
    <Giscus
      id="comments"
      repo={repoString}
      repoId="R_kgDOP6oxlA"
      category="Posts"
      categoryId="DIC_kwDOP6oxlM4CxaAh"
      mapping="specific"
      term={id || ogTitle}
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="eager"
    />
  );
}