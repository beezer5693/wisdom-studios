type ContainerProps = {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`max-w-[1800px] w-full border mx-auto ${className}`}>{children}</div>
}

export default Container
