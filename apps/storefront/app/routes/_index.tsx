import { ActionList } from '@app/components/common/actions-list/ActionList';
import { Container } from '@app/components/common/container';
import { Image } from '@app/components/common/images/Image';
import { GridCTA } from '@app/components/sections/GridCTA';
import Hero from '@app/components/sections/Hero';
import { ListItems } from '@app/components/sections/ListItems';
import ProductList from '@app/components/sections/ProductList';
import { SideBySide } from '@app/components/sections/SideBySide';
import { getMergedPageMeta } from '@libs/util/page';
import type { LoaderFunctionArgs, MetaFunction } from 'react-router';

export const loader = async (args: LoaderFunctionArgs) => {
  return {};
};

export const meta: MetaFunction<typeof loader> = getMergedPageMeta;

export default function IndexRoute() {
  return (
    <>
      <link rel="preload" href="/assets/images/barrio-banner.png" as="image" />

      <Hero
      className="h-[500px] !max-w-full -mt-[calc(var(--mkt-header-height)+3rem)] md:-mt-[calc(var(--mkt-header-height-desktop)+2rem)] pt-[var(--mkt-header-height)] md:pt-[var(--mkt-header-height-desktop)]"
      content={
        <div className="text-center w-full space-y-9">
          <h4 className="font-italiana text-2xl">COFFEE & COMMUNITY</h4>
          <h1 className="text-8xl font-aboreto">BARRIO</h1>
          <p className="max-w-prose mx-auto text-lg">
            Discover our artisan-roasted coffee, crafted with care and delivered to your door. At Barrio, we’re more
            than a coffee roastery—we’re&nbsp;a&nbsp;neighborhood.
          </p>
        </div>
      }
      actions={[
        {
          label: 'Discover Our Blends',
          url: '/categories/blends',
        },
      ]}
      image={{
        url: '/assets/images/barrio-banner.png',
        alt: 'Barrio background',
      }}
    />



      <ProductList
        className="!pb-[100px]"
        heading="Our Blends"
        actions={[
          {
            label: 'View all',
            url: '/products',
          },
        ]}
      />
      <Container className="p-14 md:pt-1 lg:pt-24 relative flex flex-col-reverse items-center lg:flex-row">

      <div className="md:w-full flex flex-col justify-center max-md:items-center">
        <p className="font-italiana text-6xl lg:text-7xl xl:text-8xl mt-6 lg:mt-8 xl:mt-10 max-sm:text-center">
        Building Community one cup at a time
        </p>
      </div>
    </Container>

      <ListItems
        itemsClassName="mb-2"
        title="About our products"
        items={[
          {
            title: 'Responsibly Sourced',
            description:
              'We believe good coffee happens when great people come together to build longterm relationships.',
            image: {
              src: '/assets/images/benefit-1.png',
              alt: 'Responsibly Sourced',
              width: 60,
              height: 60,
            },
          },
          {
            title: 'Meticulously Roasted',
            description:
              'Our custom roast profiles are designed to elevate the natural beauty of our coffees - from sparkling acidity to brown sugar sweetness.',
            image: {
              src: '/assets/images/benefit-2.png',
              alt: 'Meticulously Roasted',
              width: 60,
              height: 60,
            },
          },
          {
            title: 'Giving Back',
            description:
              'Every time you buy a bag of our coffee, we donate a portion of our proceeds to our non-profit partners.',
            image: {
              src: '/assets/images/benefit-3.png',
              alt: 'Giving Back',
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
            <h4 className="font-italiana text-2xl">SUBSCRIBE & SAVE</h4>
            <h1 className="text-4xl lg:text-7xl font-italiana">
              Sit back, let us take care&nbsp;of&nbsp;your&nbsp;coffee
            </h1>

            <ListItems
              className="text-left w-full text-black justify-between p-0"
              itemsClassName="rounded-3xl bg-highlight-900 p-10 text-sm"
              useFillTitle
              items={[
                {
                  title: 'Choose your coffee',
                  description:
                    'From single origin to our house blend, or even surprise offerings for the more adventurous, we have the coffee tofit your taste.',
                },
                {
                  title: 'Choose a frequency',
                  description:
                    'Receive 12 oz of our whole bean coffee weekly, every 2 weeks, every 3 weeks, or monthly—whatever frequency meets your needs.',
                },
                {
                  title: 'enjoy :)',
                  description:
                    'You’ve chosen your coffee and how often you want it delivered—all that’s left to do is sit back and relax while we do all the work.',
                },
              ]}
            />
          </div>
        }
        actions={[
          {
            label: 'Get your coffee',
            url: '/products',
          },
        ]}
        image={{
          url: '/assets/images/barrio-banner.png',
          alt: 'Barrio background',
        }}
      />

    
     
      <GridCTA
        className="p-14 md:pt-28 lg:pt-24 lg:px-24"
        images={[
          {
            src: '/assets/images/grid-cta-1.png',
            alt: 'Barrio background',
          },
          {
            src: '/assets/images/grid-cta-2.png',
            alt: 'Barrio background',
          },
        ]}
        content={
          <div className="space-y-8 flex flex-col justify-center items-center">
            <h4 className="text-xl font-italiana">FIND YOUR COMMUNITY</h4>
            <h3 className="text-7xl  font-aboreto">BARRIO</h3>
            <p className="text-xl">Ship, Share & Connect Over Coffee</p>
            <ActionList
              actions={[
                {
                  label: 'Subscribe for Events',
                  url: '#',
                },
              ]}
            />
          </div>
        }
      />
    </>
  );
}
