import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import SectionSix from "../components/SectionSix";
import Footer from "../../../components/Footer";
import Error from "../../../components/Error";
import DataLoaderOverlay from "../../../components/DataLoaderOverlay";
import { useLoading } from "../../../state/loading/hooks";
import { useNewsfeed } from "../../../state/newsfeed/hooks";
import { useApp } from "../../../context/AppProvider";
import { useError } from "../../../state/error/hooks";

function Newsfeed() {
  const { id } = useParams();
  const { isLoading } = useLoading();
  const { error } = useError();
  const { unpreviewedNewsfeed, newsfeeds } = useNewsfeed();
  const { getPendingNewsfeed, isPreviewPage } = useApp();
  useEffect(() => {
    getPendingNewsfeed(id);
  }, [id]);

  return (
    <DataLoaderOverlay
      isLoading={isLoading || (!unpreviewedNewsfeed && !error)}
    >
      {unpreviewedNewsfeed && (
        <>
          <main className="w-full h-full mx-auto max-w-[800px]">
            <SectionOne
              image={unpreviewedNewsfeed.sectionOneImage}
              title={unpreviewedNewsfeed.sectionOneTitle}
              volume={unpreviewedNewsfeed.volume}
              date={unpreviewedNewsfeed.date}
            />
            <SectionTwo
              title={unpreviewedNewsfeed.sectionTwoTitle}
              image={unpreviewedNewsfeed.sectionTwoImage}
              qnA={unpreviewedNewsfeed.sectionTwoQAndA ?? []}
            />
            <SectionThree
              title={unpreviewedNewsfeed.sectionThreeTitle}
              description={unpreviewedNewsfeed.sectionThreeDescription}
              posts={unpreviewedNewsfeed.sectionThreePosts ?? []}
            />
            <SectionFour
              title={unpreviewedNewsfeed.sectionFourTitle}
              description={unpreviewedNewsfeed.sectionFourDescription}
              posts={unpreviewedNewsfeed.sectionFourPosts ?? []}
            />
            <SectionTwo
              title={unpreviewedNewsfeed.sectionFiveTitle}
              image={unpreviewedNewsfeed.sectionFiveImage}
              qnA={unpreviewedNewsfeed.sectionFiveQAndA ?? []}
            />
            <SectionSix
              image={unpreviewedNewsfeed.sectionSixImage}
              figures={unpreviewedNewsfeed.sectionSixFigures ?? []}
            />
            <SectionFour
              title={unpreviewedNewsfeed.sectionSevenTitle}
              description={unpreviewedNewsfeed.sectionSevenDescription}
              posts={unpreviewedNewsfeed.sectionSevenPosts ?? []}
            />
          </main>
          <Footer
            newsfeedsIds={newsfeeds}
            selectedNewsfeedId={unpreviewedNewsfeed._id}
            isPreviewMode={isPreviewPage()}
          />
        </>
      )}
      {error && <Error error={error} />}
    </DataLoaderOverlay>
  );
}

export default Newsfeed;
