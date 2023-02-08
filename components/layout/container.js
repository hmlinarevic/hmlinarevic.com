import clsx from 'clsx'

export default function Container({ className, children }) {
    return (
        <div className={clsx('h-full mx-auto p-4 md:p-0', className)}>
            {children}
        </div>
    )
}
