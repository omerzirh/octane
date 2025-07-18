import { Image } from '@app/components/common/images/Image';
import { useSiteDetails } from '@app/hooks/useSiteDetails';
import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router';

const LogoHeader: FC<PropsWithChildren & { primary: boolean | undefined; className: string }> = ({
  primary,
  className,
  ...rest
}) => (primary ? <h1 className={clsx('logo-header', className)} {...rest} /> : <h2 className={className} {...rest} />);

export const LogoStoreName: FC<{ primary?: boolean; className?: string }> = ({ primary, className }) => {
  const { store, logo, settings } = useSiteDetails();

  if (!store || !settings) return null;

  return (
    <Link
      viewTransition
      to="/"
      prefetch="viewport"
      className={clsx('logo-header flex flex-nowrap items-center justify-center gap-x-2 gap-y-2 sm:gap-x-4', className)}
    >
      <LogoHeader primary={primary} className="xs:text-2xl whitespace-nowrap text-lg font-bold font-aboreto">
        <Image src={logo} alt={store?.name} className="w-24 h-24" />
      </LogoHeader>
    </Link>
  );
};
