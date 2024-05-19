import styled from 'styled-components';

import theme from '~/styles/theme';

const Button = styled.button``;

const PinkButtonWithShadow = ({
  label,
  styles = {},
  onClick = () => {},
  ...rest
}) => {
  return (
    <Button
      onClick={onClick}
      style={{
        cursor: 'pointer',
        fontFamily: theme.fontFamilies.rubik,
        backgroundColor: '#f859f8',
        padding: '12px 20px',
        borderRadius: '12px',
        color: '#000',
        fontWeight: 'bold',
        '-webkit-box-shadow': '0px 8px 1px 1px rgba(0,0,0,0.75)',
        '-moz-box-shadow': '0px 8px 1px 1px rgba(0,0,0,0.75)',
        boxShadow: '0px 8px 1px 1px rgba(0,0,0,0.75)',
        ...styles,
      }}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default PinkButtonWithShadow;
