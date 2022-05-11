/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta } from '@storybook/react';
import Input, { inputProps } from '../../../../components/atoms/input';

export default {
  title: 'components/atoms/input',
  component: Input,
} as Meta;

const Template = (args: inputProps) => {
  return <Input {...args} />
};

export const Default = Template.bind({});
Default.args = {
  label: 'Nama Lengkap',
  type: 'checkbox',
}
