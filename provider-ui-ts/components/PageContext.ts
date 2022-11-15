export function createPageContext() {
    return {

    }
}

let pageContext: {}

export default function getPageContext() {
    if (!typeof window) {
        return createPageContext()
    }

    if (!pageContext) {
        pageContext = createPageContext()
    }

    return pageContext
}