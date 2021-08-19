import React, { FC } from "react";
import Loader from "~components/loader";
import List from "~components/list";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import { IRepoModel } from "~components/search/types";
interface ITopRepositories {
  isFetching: boolean;
  topRepos: Array<IRepoModel>;
  handleNavigateToRepo: (url: string) => void;
}

const TopRepositories: FC<ITopRepositories> = ({
  isFetching,
  topRepos,
  handleNavigateToRepo,
}) => {
  const emptyListFallback = <span>This user has no public repositories</span>;

  return (
    <>
      <span className="label">Top repositories</span>
      {isFetching ? (
        <Loader size="2x" />
      ) : (
        <List
          customIcon={faExternalLinkAlt}
          items={topRepos}
          emptyListComponent={emptyListFallback}
          trackKeyBy="id"
          trackArgumentBy="html_url"
          trackNameBy="name"
          action={handleNavigateToRepo}
        />
      )}
    </>
  );
};

export default TopRepositories;
