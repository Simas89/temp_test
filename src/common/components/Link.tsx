import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLinkOriginal from '@mui/material/Link';
import { styled as materialStyled } from '@mui/material/styles';
import styled, { css } from 'styled-components';

const MuiLink = styled(MuiLinkOriginal)<{ disabled: boolean }>`
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      touch-action: none;
    `}
`;

// Add support for the sx prop for consistency with the other branches.
const Anchor = materialStyled('a')({});

export const NextLinkComposed = React.forwardRef(function NextLinkComposed(
  props,
  ref
) {
  const {
    to,
    linkAs,
    href,
    replace,
    scroll,
    shallow,
    prefetch,
    locale,
    ...other
  }: any = props;

  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
      locale={locale}
    >
      <Anchor ref={ref} {...other} />
    </NextLink>
  );
});
interface LinkProps {
  href: string;
  children: React.ReactNode;
  noLinkStyle?: boolean;
  activeClassName?: string;
}
const Link = React.forwardRef(function Link(props: LinkProps, ref) {
  const {
    activeClassName = 'active',
    as: linkAs,
    className: classNameProps,
    href,
    noLinkStyle = true,
    role,
    ...other
  }: any = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  const isExternal =
    typeof href === 'string' &&
    (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);

  if (isExternal) {
    if (noLinkStyle) {
      return <Anchor className={className} href={href} ref={ref} {...other} />;
    }

    return <MuiLink className={className} href={href} ref={ref} {...other} />;
  }

  if (noLinkStyle) {
    return (
      <NextLinkComposed className={className} ref={ref} to={href} {...other} />
    );
  }

  return (
    <MuiLink
      component={NextLinkComposed}
      linkAs={linkAs}
      className={className}
      ref={ref}
      to={href}
      {...other}
    />
  );
});

export default Link;
