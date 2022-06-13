import { styled } from "../../stitches.config";

export const Container = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const Card = styled('div', {
  width: '100%',
  padding: '$md',
  boxShadow: '$md',
  color: '$neutral',
  marginTop: '1rem',
  textAlign: 'center',
  borderRadius: '$md',
  backgroundColor: '$card',
  boxSizing: 'border-box',
});

export const Row = styled('div', {
  display: 'flex',
  flexDirection: 'row'
});

export const MarkSwitcher = styled('div', {
  margin: '$md 0',
  padding: '.5rem',
  borderRadius: '$md',
  backgroundColor: '$background',
});

export const Button = styled('button', {
  width: '50%',
  border: 'none',
  outline: 'none',
  fontSize: '3rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  userSelect: 'none',
  borderRadius: '$md',
  color: '$background',
  backgroundColor: '$neutral',
  variants: {
    selected: {
      true: {
        color: '$neutral',
        backgroundColor: '$background'
      }
    }
  }
});


export const PlayButton = styled( 'button', {
  width: '100%',
  outline: 'none',
  cursor: 'pointer',
  marginTop: '2rem',
  fontWeight: 'bold',
  userSelect: 'none',
  fontSize: '1.2rem',
  borderRadius: '$md',
  color: '$background',
  transition: 'all .3s',
  border: '1px solid black',
  '&:hover': {
    opacity: '.9',
    boxShadow: 'none',
    transform: 'translateY(10px)'
  },
  variants: {
    color: {
      xPlayer: {
        boxShadow: '$xPlayer',
        backgroundColor: '$xPlayer'
      },
      oPlayer: {
        boxShadow: '$oPlayer',
        backgroundColor: '$oPlayer'
      }
    }
  }
});
