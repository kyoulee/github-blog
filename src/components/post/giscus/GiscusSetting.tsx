"use client"

import Giscus from "@giscus/react";
import config from "@/../config.json";
import { githubRepoRegex, giscusRepoIdRegex, giscusCategoryIdRegex } from "@/types/regex"
import GiscusError from "./GiscusError";

type GiscusSettingProps = {
  id?: number;
};

function GiscusSetting({ id }: GiscusSettingProps) {
  const giscusRepo = config.githubId + '/' + config.githubRepo as `${string}/${string}`;
  const giscusRepoId = config.giscusRepoId;
  const giscusCategory = config.giscusCategory;
  const giscusCategoryId = config.giscusCategoryId;

  if (!githubRepoRegex.test(giscusRepo)) {
    const errorMessage = `Giscus config error: 'repo' format is invalid. Received: '${giscusRepo}'.`;
    console.error(errorMessage);
    return <GiscusError message={errorMessage} />
  }

  if (!giscusRepoId || !giscusRepoIdRegex.test(giscusRepoId)) {
    const errorMessage = `Giscus config error: 'repoId' is missing or has an invalid format. Check config.json.`;
    console.error(errorMessage);
    return <GiscusError message={errorMessage} />
  }

  if (!giscusCategoryId || !giscusCategoryIdRegex.test(giscusCategoryId)) {
    const errorMessage = `Giscus config error: 'categoryId' is missing or has an invalid format. Check config.json.`;
    console.error(errorMessage);
    return <GiscusError message={errorMessage} />
  }

  if (!giscusCategory || giscusCategory.trim().length === 0) {
    const errorMessage = `Giscus config error: 'category' name is missing. Check config.json.`;
    console.error(errorMessage);
    return <GiscusError message={errorMessage} />
  }

  return (
    <Giscus
      id="comments"
      repo={giscusRepo}
      repoId={giscusRepoId}
      category={giscusCategory}
      categoryId={giscusCategoryId}
      mapping="number"
      term={id?.toString() || "1"}
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="eager"
    />
  );
}

export default GiscusSetting