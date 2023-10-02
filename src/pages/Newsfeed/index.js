/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionSix from "./components/SectionSix";
import Footer from "../../components/Footer";
import Error from "../../components/Error";
import DataLoaderOverlay from "../../components/DataLoaderOverlay";
import { useLoading } from "../../state/loading/hooks";
import { useNewsfeed } from "../../state/newsfeed/hooks";
import { useApp } from "../../context/AppProvider";
import { useParams } from "react-router-dom";
import { useError } from "../../state/error/hooks";

function Newsfeed() {
  const { id } = useParams();
  const { isLoading } = useLoading();
  const { error } = useError();

  const { selectedNewsfeed, newsfeeds } = useNewsfeed();
  const { getLiveNewsfeed, isPreviewPage } = useApp();
  useEffect(() => {
    getLiveNewsfeed(id);
  }, [id]);

  return (
    <DataLoaderOverlay isLoading={isLoading || (!selectedNewsfeed && !error)}>
      {selectedNewsfeed && (
        <>
          <main className="w-full h-full mx-auto max-w-[800px]">
            <SectionOne
              image={selectedNewsfeed.sectionOneImage}
              title={selectedNewsfeed.sectionOneTitle}
              volume={selectedNewsfeed.volume}
              date={selectedNewsfeed.date}
            />
            <SectionTwo
              title={selectedNewsfeed.sectionTwoTitle}
              image={selectedNewsfeed.sectionTwoImage}
              qnA={selectedNewsfeed.sectionTwoQAndA ?? []}
            />
            <SectionThree
              title={selectedNewsfeed.sectionThreeTitle}
              description={selectedNewsfeed.sectionThreeDescription}
              posts={selectedNewsfeed.sectionThreePosts ?? []}
            />
            <SectionFour
              title={selectedNewsfeed.sectionFourTitle}
              description={selectedNewsfeed.sectionFourDescription}
              posts={selectedNewsfeed.sectionFourPosts ?? []}
            />
            <SectionTwo
              title={selectedNewsfeed.sectionFiveTitle}
              image={selectedNewsfeed.sectionFiveImage}
              qnA={selectedNewsfeed.sectionFiveQAndA ?? []}
            />
            <SectionSix
              image={selectedNewsfeed.sectionSixImage}
              figures={selectedNewsfeed.sectionSixFigures ?? []}
            />
            <SectionFour
              title={selectedNewsfeed.sectionSevenTitle}
              description={selectedNewsfeed.sectionSevenDescription}
              posts={selectedNewsfeed.sectionSevenPosts ?? []}
            />
          </main>
          <Footer
            newsfeedsIds={newsfeeds}
            selectedNewsfeedId={selectedNewsfeed._id}
            isPreviewMode={isPreviewPage()}
          />
        </>
      )}
      {error && <Error error={error} />}
    </DataLoaderOverlay>
  );
}

export default Newsfeed;
