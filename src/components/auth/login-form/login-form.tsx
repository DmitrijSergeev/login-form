type LoginFormProps = {
  onSubmit: (data: { email: string; password: string; rememberMe: boolean }) => void
}
export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  return (
    <div>
      <form></form>
    </div>
  )
}
