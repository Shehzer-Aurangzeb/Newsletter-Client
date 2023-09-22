import React, { useEffect } from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionSix from "./components/SectionSix";
import Footer from "../../components/Footer";
import DataLoaderOverlay from "../../components/DataLoaderOverlay";
import { useLoading } from "../../state/loading/hooks";
import { useNewsfeed } from "../../state/newsfeed/hooks";
import { useApp } from "../../context/AppProvider";
import { useParams } from "react-router-dom";

function Newsfeed() {
  const { id } = useParams();
  const { isLoading } = useLoading();
  const { selectedNewsfeed, newsfeeds } = useNewsfeed();
  const { getNewsfeed } = useApp();
  useEffect(() => {
    getNewsfeed(id);
  }, [id]);
  return (
    <DataLoaderOverlay isLoading={isLoading || !selectedNewsfeed}>
      {selectedNewsfeed && (
        <>
          <main className="w-full h-full mx-auto">
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
          />
        </>
      )}
    </DataLoaderOverlay>
  );
}

export default Newsfeed;
