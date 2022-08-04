/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta } from '@storybook/react';
import GameItem, { GameItemProps } from '../../../../components/molecules/gameItem';

export default {
  title: 'components/molecules/gameItem',
  component: GameItem,
} as Meta;

const Template = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Super Mechs',
  category: 'Desktop',
  thumbnail: '/img/Thumbnail-1.png',
}
