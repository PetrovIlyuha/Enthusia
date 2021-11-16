import {
  Breadcrumbs,
  CourseList,
  Hero,
  EthCurrentPrices,
  MainFrontShell,
  WalletInfo,
  OrderCard,
} from '@components/index';

export default function Home() {
  return (
    <MainFrontShell>
      <div className='fit-page-shell'>
        <div className='relative bg-white overflow-hidden'>
          <div className='relative max-w-7xl mx-auto px-4'>
            <div className='fit'>
              <Hero />
              <Breadcrumbs />
              <WalletInfo />
              <EthCurrentPrices />
              <OrderCard />
              <CourseList />
            </div>
          </div>
        </div>
      </div>
    </MainFrontShell>
  );
}
