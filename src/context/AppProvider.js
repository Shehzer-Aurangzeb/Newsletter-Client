import { createContext, useCallback, useContext, useEffect } from "react";
import { useNewsfeed } from "../state/newsfeed/hooks";
import { useLoading } from "../state/loading/hooks";
import { api } from "../config/api";

const AppContext = createContext({});

function AppProvider({ children }) {
  const {
    setNewsfeeds,
    setSelectedNewsfeed,
    setFetchedNewsfeeds,
    fetchedNewsfeeds,
    updateNewsfeeds,
  } = useNewsfeed();
  const { setIsLoading, isLoading } = useLoading();

  const isNewsfeedFetched = useCallback(
    (id) => {
      return fetchedNewsfeeds.find(({ _id }) => _id === id);
    },
    [fetchedNewsfeeds]
  );

  const getNewsfeed = useCallback(
    async (id) => {
      try {
        if (!isLoading) setIsLoading(true);
        const newsfeed = isNewsfeedFetched(id);
        if (newsfeed) {
          setSelectedNewsfeed(newsfeed);
        } else {
          const { data } = await api.get(`get-news-letter/${id}`);
          setSelectedNewsfeed(data);
          setFetchedNewsfeeds(data);
        }
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
      isNewsfeedFetched,
    ]
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
        setIsLoading(true);
        const { data } = await api.post("create-news-letter", payload);
        updateNewsfeeds(data.id);
        return data;
      } catch (error) {
        console.log("error :>> ", error);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, updateNewsfeeds]
  );

  const initApp = useCallback(() => {
    _getAllNewsfeed();
  }, [_getAllNewsfeed]);

  useEffect(() => {
    console.log("running :>> ");
    initApp();
  }, []);

  return (
    <AppContext.Provider value={{ createNewsfeed, getNewsfeed, initApp }}>
      {children}
    </AppContext.Provider>
  );
}
export const useApp = () => useContext(AppContext);

export default AppProvider;
