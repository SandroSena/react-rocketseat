import { ButtoVariant, ButtonContainer } from './Button.styles'

interface ButtonProps {
  variant?: ButtoVariant
}

export const Button = ({ variant = 'primary' }: ButtonProps) => {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
