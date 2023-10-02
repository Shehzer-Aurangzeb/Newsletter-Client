/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useCallback, useContext, useEffect } from "react";
import { useNewsfeed } from "../state/newsfeed/hooks";
import { useLoading } from "../state/loading/hooks";
import { useError } from "../state/error/hooks";
import { api } from "../config/api";
import { useLocation } from "react-router-dom";
import { SOURCE } from "../constants";

const AppContext = createContext({});

function AppProvider({ children }) {
  const {
    setNewsfeeds,
    setSelectedNewsfeed,
    setFetchedNewsfeeds,
    fetchedNewsfeeds,
    updateNewsfeeds,
    setUnpreviewedNewsfeed,
  } = useNewsfeed();
  const { setIsLoading, isLoading } = useLoading();
  const { setError } = useError();
  const { pathname } = useLocation();

  const isPreviewPage = useCallback(() => {
    return pathname.includes("preview");
  }, [pathname]);
  const isNewsfeedFetched = useCallback(
    (id) => {
      return fetchedNewsfeeds.find(({ _id }) => _id === id);
    },
    [fetchedNewsfeeds]
  );

  const getLiveNewsfeed = useCallback(
    async (id) => {
      try {
        setError(undefined);
        if (!isLoading) setIsLoading(true);
        const newsfeed = isNewsfeedFetched(id);
        if (newsfeed) {
          setSelectedNewsfeed(newsfeed);
          return;
        }
        const { data } = await api.get(`get-news-letter/${id}`);
        if (data) {
          setSelectedNewsfeed(data);
          setFetchedNewsfeeds(data);
          return;
        }
        setError("Oops! The document you're searching for does not exist");
      } catch (error) {
        // console.log("error :>> ", error);
      } finally {
        setIsLoading(false);
      }
    },
    [
      setIsLoading,
      setSelectedNewsfeed,
      isLoading,
      setFetchedNewsfeeds,
      setError,
      isNewsfeedFetched,
    ]
  );

  const getPendingNewsfeed = useCallback(
    async (id) => {
      try {
        setError(undefined);
        if (!isLoading) setIsLoading(true);
        const { data } = await api.get(`get-news-letter/pending/${id}`);

        if (data) {
          setUnpreviewedNewsfeed(data);
          return;
        }
        setError(
          "Oops! The document you're searching for is not currently available for preview."
        );
      } catch (error) {
        // console.log("error :>> ", error);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, setUnpreviewedNewsfeed, isLoading, setError]
  );

  const _getAllNewsfeed = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get("get-news-letters");
      setNewsfeeds(data);
    } catch (error) {
      //   console.log("error :>> ", error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setNewsfeeds]);

  const createNewsfeed = useCallback(
    async (payload) => {
      try {
        //because the whole page shows loader. and we want loader on button only
        if (!isPreviewPage()) setIsLoading(true);
        //after preview the submit only the document id is sent and backend handles the rest of the case
        const { data } = await api.post(
          `create-news-letter?source=${
            isPreviewPage() ? SOURCE.LIVE : SOURCE.PENDING
          }`,
          isPreviewPage()
            ? {
                id: pathname.split("/")[2],
              }
            : payload
        );
        if (isPreviewPage()) {
          updateNewsfeeds(data.id);
        }
        return data;
      } catch (error) {
        // console.log("error :>> ", error);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, updateNewsfeeds, isPreviewPage, pathname]
  );
  const editNewsfeed = useCallback(
    async (payload) => {
      try {
        setIsLoading(true);
        const { data } = await api.patch(
          `edit-news-letter/${payload._id}`,
          payload
        );
        return data;
      } catch (error) {
        // console.log("error :>> ", error);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading]
  );

  const initApp = useCallback(() => {
    _getAllNewsfeed();
  }, [_getAllNewsfeed]);

  useEffect(() => {
    initApp();
  }, []);

  return (
    <AppContext.Provider
      value={{
        createNewsfeed,
        getLiveNewsfeed,
        initApp,
        isPreviewPage,
        getPendingNewsfeed,
        editNewsfeed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useApp = () => useContext(AppContext);

export default AppProvider;
