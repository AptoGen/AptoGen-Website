import React from 'react';

import H5 from '../Typography/H5';
import P from '../Typography/Paragraph';

import { COLORS } from '../../lib/styles';

const Profile = (data) => {
  return (
    <div>
      <H5>{data.name}</H5>
      <span>{data.title}</span>
      <P style={{ color: COLORS.texts.primary }} >
        {data.description}
      </P>
      <span>Links</span>
    </div>
  );
}

export default Profile;
