import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopRepositories from "./TopRepositories";
import { useUserDetails, useUserRepos } from "~components/search/queries";
import Loader from "~components/loader";
import { getTop5Repos } from "~helpers/Utils";

import { IRepoModel } from "~components/search/types";
interface IUserDetails {
  setSelectedUserLogin: Dispatch<SetStateAction<string>>;
  userLogin: string;
}

const UserDetails: FC<IUserDetails> = ({ userLogin, setSelectedUserLogin }) => {
  const [popularRepos, setPopularRepos] = useState<Array<IRepoModel>>([]);

  const { data: userDetails, isFetching: isFetchingDetails } =
    useUserDetails(userLogin);
  const { data: userRepos, isFetching: isFetchingRepos } =
    useUserRepos(userLogin);

  useEffect(() => {
    if (userRepos) setPopularRepos(getTop5Repos(userRepos));
  }, [userRepos]);

  const handleNavigateToRepo = (url: string) => window.open(url, "_blank");

  return (
    <div className="user-details__container">
      <FontAwesomeIcon
        onClick={() => setSelectedUserLogin("")}
        icon={faTimes}
        className="exit-button"
      />
      <div className="user-info">
        {isFetchingDetails && <Loader size="2x" />}
        {!isFetchingDetails && userDetails && (
          <>
            <div className="user-info__name">
              <img alt={userDetails.name} src={userDetails.avatar_url} />
              <span>
                {userDetails.name ? userDetails.name : userDetails.login}
              </span>
            </div>

            <div className="user-info__about">
              <span className="label">About</span>
              <span className="muted-text">
                {userDetails.bio ? userDetails.bio : "This user has no bio"}
              </span>
              <TopRepositories
                isFetching={isFetchingRepos}
                topRepos={popularRepos}
                handleNavigateToRepo={handleNavigateToRepo}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
