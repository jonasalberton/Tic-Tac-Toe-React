import { styled } from "../../stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

});

export const Card = styled('div', {
  backgroundColor: '$card',
  borderRadius: '$md',
  boxShadow: '$md',
  padding: '$md',
  color: '$neutral',
  textAlign: 'center',
  marginTop: '1rem',
  width: '100%',
  boxSizing: 'border-box'
});

export const Row = styled('div', {
  display: 'flex',
  flexDirection: 'row'
});

export const MarkSwitcher = styled('div', {
  backgroundColor: '$background',
  borderRadius: '$md',
  padding: '.5rem'
});

export const Button = styled('button', {
  cursor: 'pointer',
  backgroundColor: '$neutral',
  border: 'none',
  outline: 'none',
  color: '$background',
  fontSize: '3rem',
  borderRadius: '$md',
  fontWeight: 'bold',
  width: '50%',
  userSelect: 'none',
  variants: {
    selected: {
      true: {
        backgroundColor: '$background',
        color: '$neutral'
      }
    }
  }
});


export const PlayButton = styled('button', {
  cursor: 'pointer',
  outline: 'none',
  borderRadius: '$md',
  fontWeight: 'bold',
  userSelect: 'none',
  fontSize: '1.5rem',
  width: '100%',
  marginTop: '2rem',
  color: '$background',
  border: '1px solid black',
  '&:hover': {
    opacity: '.8'
  },
  variants: {
    color: {
      xPlayer: {
        backgroundColor: '$xPlayer',
        boxShadow: '$xPlayer'
      },
      oPlayer: {
        backgroundColor: '$oPlayer',
        boxShadow: '$oPlayer'
      }
    }
  }
});


