type ContainerProps = {
    children: React.ReactNode
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={`max-w-[1060px] relative w-full mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default Container
