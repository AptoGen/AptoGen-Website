import React from 'react';

import H5 from '../Typography/H5';
import H6 from '../Typography/H6';
import P from '../Typography/Paragraph';

import { COLORS } from '../../lib/styles';

const Profile = (data) => {
  return (
    <div>
      <H5>{data.name}</H5>
      <H6 style={{ 'font-style': 'italic' }}>{data.title}</H6>
      <P style={{ color: COLORS.texts.primary }} >
        {data.description}
      </P>
      <span>Links</span>
    </div>
  );
}

export default Profile;
