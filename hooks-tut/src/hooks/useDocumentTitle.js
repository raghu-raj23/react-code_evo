import { useEffect } from 'react'

function useDocumentTitle(count) {
    useEffect(() => {
        console.log('updating document title')

        document.title = `You clicked ${count} times`
    }, [count])
    return (
        <div>
            
        </div>
    )
}

export default useDocumentTitle

//  This is a  custom hook. For a linter to be able to find it, it must start from use.....