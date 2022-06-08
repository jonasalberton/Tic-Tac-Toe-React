import { styled } from '../../stitches.config';

export const Typograph = styled('span', {
  variants: {
    color: {
      xPlayer: {
        color: '$xPlayer'
      },
      oPlayer: {
        color: '$oPlayer'
      }
    },
    size: {
      md: {
        fontSize: '2rem'
      },
      lg: {
        fontSize: '4rem'
      }
    },
    bold: {
      true: {
        fontWeight: 'bold'
      }
    }
  }
})