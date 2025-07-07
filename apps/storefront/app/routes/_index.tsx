import { ActionList } from "@app/components/common/actions-list/ActionList";
import { Container } from "@app/components/common/container";
import { Image } from "@app/components/common/images/Image";
import { GridCTA } from "@app/components/sections/GridCTA";
import Hero from "@app/components/sections/Hero";
import { ListItems } from "@app/components/sections/ListItems";
import ProductList from "@app/components/sections/ProductList";
import { SideBySide } from "@app/components/sections/SideBySide";
import { getMergedPageMeta } from "@libs/util/page";
import type { LoaderFunctionArgs, MetaFunction } from "react-router";

export const loader = async (args: LoaderFunctionArgs) => {
  return {};
};

export const meta: MetaFunction<typeof loader> = getMergedPageMeta;

export default function IndexRoute() {
  return (
    <>
      <link rel="preload" href="/assets/images/barrio-banner.png" as="image" />
      {/* 
      <Hero
      className="h-[500px] !max-w-full -mt-[calc(var(--mkt-header-height)+3rem)] md:-mt-[calc(var(--mkt-header-height-desktop)+2rem)] pt-[var(--mkt-header-height)] md:pt-[var(--mkt-header-height-desktop)]"
      content={
        <div className="text-center w-full space-y-9">
          <h4 className="font-italiana text-2xl">ORIGINAL & AUTHENTIC</h4>
          <h1 className="text-8xl font-aboreto">OCTANE STORE</h1>
          <p className="max-w-prose mx-auto text-lg">
            Discover original, human-made designs crafted with passion and creativity. Every product at Octane Store is a unique piece, made by real people for those who value authenticity and artistry.
          </p>
        </div>
      }
      actions={[
        {
          label: 'Explore Our Designs',
          url: '/categories/wearables',
        },
      ]}
      image={{
        url: '/assets/images/',
        alt: 'Barrio background',
      }}
    /> */}

      <Container className="p-14 md:pt-1 lg:pt-24 relative flex flex-col-reverse items-center lg:flex-row">
        <div className="md:w-full flex flex-col justify-center max-md:items-center">
          <p className="font-italiana text-6xl lg:text-7xl xl:text-8xl mt-6 lg:mt-8 xl:mt-10 max-sm:text-center">
            Experience Authentic Design. Made by Humans.
          </p>
        </div>
      </Container>
      <ProductList
        className="!pb-[100px]"
        heading="Featured Originals"
        actions={[
          {
            label: "Explore All Products",
            url: "/categories/wearables",
          },
        ]}
      />

      <ListItems
        itemsClassName="mb-2"
        title="Why Choose Octane Store?"
        items={[
          {
            title: "Authentic Designs",
            description:
              "Every item is envisioned and crafted by real people—no AI or mass production. Expect originality in every piece.",
            image: {
              src: "/assets/images/benefit-1.png",
              alt: "Endless Possibilities",
              width: 60,
              height: 60,
            },
          },
          {
            title: "Premium Quality",
            description:
              "We use the best materials and careful craftsmanship to ensure every Octane Store product stands out and lasts.",
            image: {
              src: "/assets/images/benefit-2.png",
              alt: "Premium Quality",
              width: 60,
              height: 60,
            },
          },
          {
            title: "Human Touch",
            description:
              "Our team pours passion and creativity into every product. You get something truly special, made by hand and heart.",
            image: {
              src: "/assets/images/benefit-3.png",
              alt: "Made for You",
              width: 60,
              height: 60,
            },
          },
        ]}
      />
      <Hero
        className="pb-10 min-h-[734px] !max-w-full"
        content={
          <div className="text-center w-full space-y-9 pt-9">
            <h4 className="font-italiana text-2xl">JOIN THE MOVEMENT</h4>
            <h1 className="text-4xl lg:text-7xl font-italiana">
              Celebrate Human Creativity
            </h1>

            <ListItems
              className="text-left w-full text-black justify-between p-0"
              itemsClassName="rounded-3xl bg-highlight-900 p-10 text-sm"
              useFillTitle
              items={[
                {
                  title: "Discover Unique Designs",
                  description:
                    "Browse our curated collection of original works. Each item tells a story and is made by real artists and creators.",
                },
                {
                  title: "Support Human Talent",
                  description:
                    "Every purchase supports independent creators and helps keep authentic design alive.",
                },
                {
                  title: "Enjoy the Difference",
                  description:
                    "Feel the quality and soul in every Octane Store product. No mass production—just genuine, human-made art.",
                },
              ]}
            />
          </div>
        }
        actions={[
          {
            label: "Start Creating",
            url: "/products",
          },
        ]}
        image={{
          url: "/assets/images/barrio-banner.png",
          alt: "Barrio background",
        }}
      />

      <GridCTA
        className="p-14 md:pt-28 lg:pt-24 lg:px-24"
        images={[
          {
            src: "/assets/images/grid-cta-1.png",
            alt: "Barrio background",
          },
          {
            src: "/assets/images/grid-cta-2.png",
            alt: "Barrio background",
          },
        ]}
        content={
          <div className="space-y-8 flex flex-col justify-center items-center">
            <h4 className="text-xl font-italiana">EXPLORE THE POSSIBILITIES</h4>
            <h3 className="text-7xl  font-aboreto">OCTANE STORE</h3>
            <p className="text-xl">
              Connect, Create, and Share Your Custom-Made Products
            </p>
            <ActionList
              actions={[
                {
                  label: "Join Our Community",
                  url: "#",
                },
              ]}
            />
          </div>
        }
      />
    </>
  );
}
