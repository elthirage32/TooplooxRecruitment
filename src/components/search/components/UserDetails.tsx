import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { faTimes, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserDetails, useUserRepos } from "~components/search/queries";
import Loader from "~components/loader";
import { RepoModel } from "~components/search/types";
import List from "~components/list";
import { getTop5Repos } from "~api/services/UserService";

interface IUserDetails {
  setSelectedUserLogin: Dispatch<SetStateAction<string>>;
  userLogin: string;
}

const UserDetails: FC<IUserDetails> = ({ userLogin, setSelectedUserLogin }) => {
  const [popularRepos, setPopularRepos] = useState<Array<RepoModel>>([]);

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
      <div className="details_container__user-info">
        {isFetchingDetails && <Loader loaderSize="2x" />}
        {!isFetchingDetails && (
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
              <span className="label">Top repositories</span>
              {isFetchingRepos ? (
                <Loader loaderSize="2x" />
              ) : (
                <List
                  customIcon={faExternalLinkAlt}
                  listOfItems={popularRepos}
                  emptyListComponent="This user has no public repositories"
                  trackKeyBy="id"
                  trackArgumentBy="html_url"
                  trackNameBy="name"
                  action={handleNavigateToRepo}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
