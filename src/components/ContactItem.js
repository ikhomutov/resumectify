import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Telegram } from '@mdi/svg/svg/telegram.svg';
import { ReactComponent as Github } from '@mdi/svg/svg/github.svg';
import { ReactComponent as Email } from '@mdi/svg/svg/email.svg';
import { ReactComponent as Phone } from '@mdi/svg/svg/phone.svg';
import { ReactComponent as Linkedin } from '@mdi/svg/svg/linkedin.svg';
import { ReactComponent as Twitter } from '@mdi/svg/svg/twitter.svg';
import { ReactComponent as Skype } from '@mdi/svg/svg/skype.svg';
import { ReactComponent as MapMarker } from '@mdi/svg/svg/map-marker.svg';
import { ReactComponent as Web } from '@mdi/svg/svg/web.svg';

import useStyles from './ContactItem.styles';


export const contactItemMapping = {
  website: {
    icon: Web,
    linkText: text => `https://${text}`,
  },
  telegram: {
    icon: Telegram,
    linkText: (text) => `https://t.me/${text}`
  },
  email: {
    icon: Email,
    linkText: (text) => `mailto:${text}`
  },
  github: {
    icon: Github,
    linkText: (text) => `https://github.com/${text}`
  },
  phone: {
    icon: Phone,
    linkText: (text) => `tel:${text}`
  },
  linkedin: {
    icon: Linkedin,
    linkText: (text) => `https://linkedin.com/in/${text}`
  },
  twitter: {
    icon: Twitter,
    linkText: (text) => `https://twitter.com/${text}`
  },
  skype: {
    icon: Skype,
    linkText: (text) => `skype:${text}?chat`
  },
  address: {
    icon: MapMarker,
    linkText: (text) => `https://maps.google.com/?q=${text}`
  },
}

export default function ContactItem({ type, text, className }) {
  const item = contactItemMapping[type];
  const classes = useStyles();

  if (item) {
    return (
      <Link href={item.linkText(text)} className={ classes.item } color='inherit' underline='none'>
        <SvgIcon component={item.icon} color='primary' fontSize='inherit'/>
        <Box component='span' mx={0.5} />
        {text}
      </Link>
    )
  }
  return null
}
